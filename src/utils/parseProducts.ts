import type { GroceryProduct, WorkflowApiResponse } from "../types/api";

const ROW_PATTERN =
  /\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([\d.]+)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*(https?:\/\/[^\s|]+)/g;

function normalizeUrl(url: string): string {
  return url.replace(/\s+/g, "");
}

function normalizeText(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

export function parseProductsFromKbResult(result: string): GroceryProduct[] {
  const products: GroceryProduct[] = [];
  const seen = new Set<string>();

  let match: RegExpExecArray | null;
  while ((match = ROW_PATTERN.exec(result)) !== null) {
    const [, name, description, variant, priceStr, category, unit, imageUrl] = match;
    const normalizedName = normalizeText(name);

    if (!normalizedName || seen.has(normalizedName)) continue;
    seen.add(normalizedName);

    products.push({
      id: `${normalizedName}-${products.length}`,
      name: normalizedName,
      description: normalizeText(description),
      variant: normalizeText(variant),
      price: parseFloat(priceStr),
      category: normalizeText(category),
      unit: normalizeText(unit),
      imageUrl: normalizeUrl(imageUrl),
    });
  }

  return products;
}

export function extractProductsFromResponse(
  response: WorkflowApiResponse
): GroceryProduct[] {
  const output = response.data?.output;
  if (!output) return [];

  const toolResults: string[] = [];

  for (const node of [output.node_agent, output.node_agent_2]) {
    const executions = node?._metadata?.toolExecutions ?? [];
    for (const exec of executions) {
      if (exec.toolName === "search_knowledge_bases" && exec.result) {
        toolResults.push(exec.result);
      }
    }
  }

  const allProducts: GroceryProduct[] = [];
  const seen = new Set<string>();

  for (const result of toolResults) {
    for (const product of parseProductsFromKbResult(result)) {
      if (!seen.has(product.name)) {
        seen.add(product.name);
        allProducts.push(product);
      }
    }
  }

  return allProducts;
}

export function extractMessageFromResponse(
  response: WorkflowApiResponse
): string {
  const output = response.data?.output;
  if (!output) return "No response received.";

  return (
    output.workflow_response?.content?.message ??
    output.variables?.message ??
    output.variables?.text ??
    output.node_agent_2?.text ??
    "I couldn't generate a response. Please try again."
  );
}

export function extractIntentFromResponse(
  response: WorkflowApiResponse
): string | undefined {
  const intent = response.data?.output?.node_agent?.text;
  return intent && intent !== "recipe_to_cart" ? intent : undefined;
}

export function extractDurationMs(
  response: WorkflowApiResponse
): number | undefined {
  return response.data?.output?.executionSummary?.durationMs;
}
