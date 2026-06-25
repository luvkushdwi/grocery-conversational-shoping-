const GENERIC_GROCERY_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80";

const KEYWORD_IMAGES: Array<{ keywords: string[]; url: string }> = [
  {
    keywords: ["spaghetti", "pasta", "carbonara", "penne", "macaroni", "noodle"],
    url: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["egg", "eggs"],
    url: "https://images.unsplash.com/photo-1582722877985-07b1af3cceaa?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["parmesan", "cheese", "paneer", "mozzarella", "cheddar"],
    url: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["bacon", "pancetta", "ham", "sausage"],
    url: "https://images.unsplash.com/photo-1528607929212-2626d3c66eca?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["pepper", "chili", "chilli", "spice", "turmeric", "cumin", "masala"],
    url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["oat", "oats", "cereal", "muesli", "granola"],
    url: "https://images.unsplash.com/photo-1517673400267-025144b7085e?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["bread", "bagel", "toast", "loaf"],
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["peanut butter", "almond butter", "nut butter"],
    url: "https://images.unsplash.com/photo-1471194400239-708f452ee3e4?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["banana", "bananas"],
    url: "https://images.unsplash.com/photo-1571771894821-ce9b6c11e08c?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["coconut milk", "coconut water", "coconut"],
    url: "https://images.unsplash.com/photo-1587135054591-83d19f78676c?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["samosa"],
    url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["potato", "potatoes"],
    url: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["garlic", "onion", "shallot"],
    url: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["butter", "ghee"],
    url: "https://images.unsplash.com/photo-1589985270553-4fcf6f7a6be2?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["milk", "dairy", "yogurt", "curd"],
    url: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["chickpea", "chana", "lentil", "dal", "bean", "pea"],
    url: "https://images.unsplash.com/photo-1515543900109-199b5eda6f9c?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["rice", "basmati", "biryani"],
    url: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["tomato", "tomatoes"],
    url: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["carrot", "carrots"],
    url: "https://images.unsplash.com/photo-1598170845058-32b9d6afe5fd?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["cucumber", "lettuce", "salad", "spinach", "greens"],
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["apple", "fruit", "orange", "mango", "berry", "grape"],
    url: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["chicken", "meat", "mutton", "beef", "pork"],
    url: "https://images.unsplash.com/photo-1604503468506-a8da13d47f3f?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["fish", "salmon", "prawn", "shrimp", "seafood"],
    url: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["flour", "wheat", "atta"],
    url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["oil", "olive", "mustard oil", "ghee"],
    url: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["tea", "coffee", "beverage", "juice", "drink"],
    url: "https://images.unsplash.com/photo-1495474472287-4d57bc08f9ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["honey", "sugar", "jaggery", "sweetener"],
    url: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["soup", "broth"],
    url: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
  },
  {
    keywords: ["mayonnaise", "mayo", "sauce", "ketchup"],
    url: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e6?auto=format&fit=crop&w=600&q=80",
  },
];

function isUnavailable(value?: string): boolean {
  if (!value) return true;
  const trimmed = value.trim();
  return !trimmed || /not available|n\/a|none/i.test(trimmed);
}

function isValidImageUrl(url?: string): boolean {
  if (isUnavailable(url)) return false;
  return /^https?:\/\//i.test(url!.trim());
}

export function getDummyProductImage(name: string, category?: string): string {
  const haystack = `${name} ${category ?? ""}`.toLowerCase();

  const sorted = [...KEYWORD_IMAGES].sort(
    (a, b) =>
      Math.max(...b.keywords.map((k) => k.length)) -
      Math.max(...a.keywords.map((k) => k.length))
  );

  for (const entry of sorted) {
    if (entry.keywords.some((keyword) => haystack.includes(keyword))) {
      return entry.url;
    }
  }

  return GENERIC_GROCERY_IMAGE;
}

export function resolveProductImage(
  name: string,
  imageUrl?: string,
  category?: string
): string {
  if (isValidImageUrl(imageUrl)) {
    return imageUrl!.trim();
  }

  return getDummyProductImage(name, category);
}

export { GENERIC_GROCERY_IMAGE };
