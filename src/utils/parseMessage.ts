import type { GroceryProduct } from "../types/api";

export interface ParsedAssistantMessage {
  text: string;
  products: GroceryProduct[];
  productSectionTitle?: string;
}

interface DiscoveryProduct {
  name?: string;
  price?: string;
  description?: string;
  image_url?: string;
}

interface ProductDiscoveryBlock {
  contentType?: string;
  discovery_type?: string;
  products?: DiscoveryProduct[];
}

function normalizeNewlines(text: string): string {
  return text.replace(/\\n/g, "\n").trim();
}

function isUnavailable(value?: string): boolean {
  if (!value) return true;
  return /not available/i.test(value.trim());
}

function parsePriceValue(price?: string): { price?: number; priceLabel: string } {
  if (!price || isUnavailable(price)) {
    return { priceLabel: "Price unavailable" };
  }

  const cleaned = price.trim();
  const numeric = cleaned.replace(/[₹,]/g, "").match(/[\d.]+/);
  return {
    price: numeric ? parseFloat(numeric[0]) : undefined,
    priceLabel: cleaned,
  };
}

function mapDiscoveryProduct(product: DiscoveryProduct, index: number): GroceryProduct {
  const { price, priceLabel } = parsePriceValue(product.price);

  return {
    id: `discovery-${product.name ?? index}-${index}`,
    name: product.name ?? "Unknown item",
    description: product.description ?? "",
    price,
    priceLabel,
    imageUrl: isUnavailable(product.image_url) ? undefined : product.image_url,
  };
}

function extractJsonArray(message: string, startIndex: number): string | null {
  let depth = 0;

  for (let i = startIndex; i < message.length; i += 1) {
    const char = message[i];
    if (char === "[") depth += 1;
    if (char === "]") {
      depth -= 1;
      if (depth === 0) {
        return message.slice(startIndex, i + 1);
      }
    }
  }

  return null;
}

function extractProductsFromJson(message: string): {
  cleanText: string;
  products: GroceryProduct[];
  productSectionTitle?: string;
} {
  const marker = message.search(/\[\s*\{/);
  if (marker === -1) {
    return { cleanText: message, products: [] };
  }

  const jsonText = extractJsonArray(message, marker);
  if (!jsonText) {
    return { cleanText: message, products: [] };
  }

  try {
    const parsed = JSON.parse(jsonText) as ProductDiscoveryBlock[];
    if (!Array.isArray(parsed)) {
      return { cleanText: message, products: [] };
    }

    const products: GroceryProduct[] = [];
    let productSectionTitle: string | undefined;

    for (const block of parsed) {
      if (block.contentType !== "product_discovery" || !block.products?.length) {
        continue;
      }

      productSectionTitle = block.discovery_type;
      block.products.forEach((product, index) => {
        products.push(mapDiscoveryProduct(product, index));
      });
    }

    if (!products.length) {
      return { cleanText: message, products: [] };
    }

    const cleanText = normalizeNewlines(
      `${message.slice(0, marker)}${message.slice(marker + jsonText.length)}`
    );

    return { cleanText, products, productSectionTitle };
  } catch {
    return { cleanText: message, products: [] };
  }
}

function extractField(block: string, label: string): string | undefined {
  const match = block.match(new RegExp(`-\\s*\\*\\*${label}:\\*\\*\\s*(.+)`, "i"));
  return match?.[1]?.trim();
}

function extractProductsFromMarkdown(message: string): {
  cleanText: string;
  products: GroceryProduct[];
} {
  const sectionPattern =
    /###\s*\*\*\d+\.\s*([^*]+)\*\*\s*\n([\s\S]*?)(?=\n---\n|###\s*\*\*|$)/g;

  const products: GroceryProduct[] = [];
  let match: RegExpExecArray | null;

  while ((match = sectionPattern.exec(message)) !== null) {
    const name = match[1].trim();
    const block = match[2];
    const variant = extractField(block, "Variant");
    const description =
      extractField(block, "Why it fits") ?? extractField(block, "Usage") ?? "";
    const priceRaw = extractField(block, "Price");
    const { price, priceLabel } = parsePriceValue(priceRaw);

    products.push({
      id: `markdown-${name}-${products.length}`,
      name,
      description,
      variant,
      price,
      priceLabel: priceRaw ? priceLabel : "Price unavailable",
    });
  }

  if (!products.length) {
    return { cleanText: message, products: [] };
  }

  const introEnd = message.search(/###\s*\*\*\d+\./);
  const outroStart = message.search(
    /\n(?:---\n)*\n*(?:Would you like|Let me know|Shall I)/i
  );

  const intro = introEnd > 0 ? message.slice(0, introEnd).trim() : "";
  const outro =
    outroStart > 0 ? message.slice(outroStart).replace(/^---\n*/g, "").trim() : "";

  const cleanText = normalizeNewlines([intro, outro].filter(Boolean).join("\n\n"));

  return { cleanText, products };
}

function mergeProducts(...lists: GroceryProduct[][]): GroceryProduct[] {
  const seen = new Set<string>();
  const merged: GroceryProduct[] = [];

  for (const list of lists) {
    for (const product of list) {
      const key = product.name.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      merged.push(product);
    }
  }

  return merged;
}

export function parseAssistantMessage(rawMessage: string): ParsedAssistantMessage {
  const message = normalizeNewlines(rawMessage);
  const jsonParsed = extractProductsFromJson(message);

  if (jsonParsed.products.length > 0) {
    return {
      text: jsonParsed.cleanText,
      products: jsonParsed.products,
      productSectionTitle: jsonParsed.productSectionTitle,
    };
  }

  const markdownParsed = extractProductsFromMarkdown(message);

  return {
    text: markdownParsed.products.length > 0 ? markdownParsed.cleanText : message,
    products: markdownParsed.products,
    productSectionTitle:
      markdownParsed.products.length > 0 ? "Suggested items" : undefined,
  };
}

export function buildAssistantMessage(
  rawMessage: string,
  kbProducts: GroceryProduct[] = []
): ParsedAssistantMessage {
  const parsed = parseAssistantMessage(rawMessage);

  return {
    ...parsed,
    products: mergeProducts(parsed.products, kbProducts),
  };
}
