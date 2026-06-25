import type { GroceryProduct } from "../types/api";

interface ProductCardProps {
  product: GroceryProduct;
}

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150' fill='%23f5f5f4'%3E%3Crect width='200' height='150' fill='%23e7e5e4'/%3E%3Cpath d='M72 58h56v34H72z' fill='%23d6d3d1'/%3E%3Ccircle cx='88' cy='48' r='10' fill='%23d6d3d1'/%3E%3Cpath d='M60 92l24-22 18 16 26-28 32 34v12H60z' fill='%23a8a29e'/%3E%3C/svg%3E";

function formatPrice(product: GroceryProduct): string {
  if (product.priceLabel) return product.priceLabel;
  if (product.price != null) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(product.price);
  }
  return "Price unavailable";
}

export function ProductCard({ product }: ProductCardProps) {
  const hasImage = Boolean(product.imageUrl);

  return (
    <article className="group flex w-60 shrink-0 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-brand-200 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <img
          src={product.imageUrl ?? PLACEHOLDER_IMAGE}
          alt={product.name}
          className={`h-full w-full object-cover transition duration-300 ${
            hasImage ? "group-hover:scale-105" : "scale-95 opacity-80"
          }`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = PLACEHOLDER_IMAGE;
          }}
        />
        {product.category && (
          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-stone-600 backdrop-blur-sm">
            {product.category}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-2 text-sm font-semibold text-stone-900">{product.name}</h3>
        {product.description && (
          <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-stone-500">
            {product.description}
          </p>
        )}
        {product.variant && (
          <p className="mt-2 text-[11px] font-medium text-stone-400">{product.variant}</p>
        )}

        <div className="mt-auto pt-3">
          <p className="text-sm font-bold text-brand-700">{formatPrice(product)}</p>
          {product.unit && (
            <p className="text-[10px] text-stone-400">per {product.unit}</p>
          )}
        </div>
      </div>
    </article>
  );
}
