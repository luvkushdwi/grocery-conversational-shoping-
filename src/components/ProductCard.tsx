import type { GroceryProduct } from "../types/api";
import { GENERIC_GROCERY_IMAGE, resolveProductImage } from "../utils/productImages";

interface ProductCardProps {
  product: GroceryProduct;
}

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
  const imageSrc = resolveProductImage(product.name, product.imageUrl, product.category);
  const usingDummyImage = !product.imageUrl || imageSrc !== product.imageUrl;

  return (
    <article className="group flex w-60 shrink-0 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-brand-200 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <img
          src={imageSrc}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const fallback = resolveProductImage(product.name, undefined, product.category);
            if (e.currentTarget.src !== fallback) {
              e.currentTarget.src = fallback;
              return;
            }
            e.currentTarget.src = GENERIC_GROCERY_IMAGE;
          }}
        />
        {usingDummyImage && (
          <span className="absolute right-2 top-2 rounded-full bg-black/45 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
            Stock image
          </span>
        )}
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
