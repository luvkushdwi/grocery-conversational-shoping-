const GENERIC_GROCERY_IMAGES = [
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1498837167922-ddd27525b405?auto=format&fit=crop&w=600&q=80",
];

const KEYWORD_IMAGES: Array<{ keywords: string[]; urls: string[] }> = [
  {
    keywords: ["spaghetti", "pasta", "carbonara", "penne", "macaroni", "noodle"],
    urls: [
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1473093295048-4d7495ee37b7?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["egg", "eggs"],
    urls: [
      "https://images.unsplash.com/photo-1582722877985-07b1af3cceaa?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518569656558-1f25e69d93df?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582169294852-c2f4b2c4d0b2?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["parmesan", "cheese", "paneer", "mozzarella", "cheddar"],
    urls: [
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1626957341929-7e704c2618ce?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["bacon", "pancetta", "ham", "sausage"],
    urls: [
      "https://images.unsplash.com/photo-1528607929212-2626d3c66eca?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1603048588665-791ca8aea7c3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1602473818070-2e3b3e3e3e3b?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["pepper", "chili", "chilli", "spice", "turmeric", "cumin", "masala"],
    urls: [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596040028123-a8a9cacdaf1d?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["oat", "oats", "cereal", "muesli", "granola"],
    urls: [
      "https://images.unsplash.com/photo-1517673400267-025144b7085e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1533089860892-a7c6f2a3c238?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["bread", "bagel", "toast", "loaf"],
    urls: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["peanut butter", "almond butter", "nut butter"],
    urls: [
      "https://images.unsplash.com/photo-1471194400239-708f452ee3e4?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1599599810769-bcde5a160d2c?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["banana", "bananas"],
    urls: [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11e08c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["coconut milk", "coconut water", "coconut"],
    urls: [
      "https://images.unsplash.com/photo-1587135054591-83d19f78676c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1580915411954-282cb1b0fc70?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["samosa"],
    urls: [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1626132647523-66f548bf4b8a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["potato", "potatoes"],
    urls: [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518797078112-632f444af37c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1536084868930-7a84d9b88e96?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["garlic", "onion", "shallot"],
    urls: [
      "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518977956812-cd3dbadae1ef?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["butter", "ghee"],
    urls: [
      "https://images.unsplash.com/photo-1589985270553-4fcf6f7a6be2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1589985270553-4fcf6f7a6be2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["milk", "dairy", "yogurt", "curd"],
    urls: [
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1550583724-b2692b85b78f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["chickpea", "chana", "lentil", "dal", "bean", "pea"],
    urls: [
      "https://images.unsplash.com/photo-1515543900109-199b5eda6f9c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["rice", "basmati", "biryani"],
    urls: [
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["tomato", "tomatoes"],
    urls: [
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1592924351178-8fd577581f9a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["carrot", "carrots"],
    urls: [
      "https://images.unsplash.com/photo-1598170845058-32b9d6afe5fd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1447175008436-170170753d52?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598170845058-32b9d6afe5fd?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["cucumber", "lettuce", "salad", "spinach", "greens"],
    urls: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["apple", "fruit", "orange", "mango", "berry", "grape"],
    urls: [
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464965911861-746a04a4c36e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1528821120024-f4806a092d5b?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["chicken", "meat", "mutton", "beef", "pork"],
    urls: [
      "https://images.unsplash.com/photo-1604503468506-a8da13d47f3f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1603048588665-791ca8aea7c3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["fish", "salmon", "prawn", "shrimp", "seafood"],
    urls: [
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["flour", "wheat", "atta"],
    urls: [
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["oil", "olive", "mustard oil"],
    urls: [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1609501676725-7186f3e6f237?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["tea", "coffee", "beverage", "juice", "drink"],
    urls: [
      "https://images.unsplash.com/photo-1495474472287-4d57bc08f9ad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["honey", "sugar", "jaggery", "sweetener"],
    urls: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["soup", "broth"],
    urls: [
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    keywords: ["mayonnaise", "mayo", "sauce", "ketchup"],
    urls: [
      "https://images.unsplash.com/photo-1625944525533-473f1a3d54e6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    ],
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

function findImagePool(name: string, category?: string): string[] | null {
  const haystack = `${name} ${category ?? ""}`.toLowerCase();

  const sorted = [...KEYWORD_IMAGES].sort(
    (a, b) =>
      Math.max(...b.keywords.map((k) => k.length)) -
      Math.max(...a.keywords.map((k) => k.length))
  );

  for (const entry of sorted) {
    if (entry.keywords.some((keyword) => haystack.includes(keyword))) {
      return entry.urls;
    }
  }

  return null;
}

function pickUniqueImage(
  pool: string[],
  productIndex: number,
  usedImages?: Set<string>
): string {
  for (let offset = 0; offset < pool.length; offset += 1) {
    const candidate = pool[(productIndex + offset) % pool.length];
    if (!usedImages?.has(candidate)) {
      usedImages?.add(candidate);
      return candidate;
    }
  }

  const fallback = pool[productIndex % pool.length];
  usedImages?.add(fallback);
  return fallback;
}

export function getDummyProductImage(
  name: string,
  category?: string,
  productIndex = 0,
  usedImages?: Set<string>
): string {
  const pool = findImagePool(name, category) ?? GENERIC_GROCERY_IMAGES;
  return pickUniqueImage(pool, productIndex, usedImages);
}

export function resolveProductImage(
  name: string,
  imageUrl?: string,
  category?: string,
  productIndex = 0,
  usedImages?: Set<string>
): string {
  if (isValidImageUrl(imageUrl)) {
    const resolved = imageUrl!.trim();
    usedImages?.add(resolved);
    return resolved;
  }

  return getDummyProductImage(name, category, productIndex, usedImages);
}

export function assignProductImages<T extends { name: string; imageUrl?: string; category?: string }>(
  products: T[]
): Array<T & { displayImageUrl: string; usingDummyImage: boolean }> {
  const usedImages = new Set<string>();

  return products.map((product, index) => ({
    ...product,
    displayImageUrl: resolveProductImage(
      product.name,
      product.imageUrl,
      product.category,
      index,
      usedImages
    ),
    usingDummyImage: !isValidImageUrl(product.imageUrl),
  }));
}

export { GENERIC_GROCERY_IMAGES as GENERIC_GROCERY_IMAGE };
