import type { GroceryProduct } from "../types/api";

interface ProductCardProps {
  product: GroceryProduct;
  inCart: boolean;
  onAdd: (product: GroceryProduct) => void;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function ProductCard({ product, inCart, onAdd }: ProductCardProps) {
  return (
    <article className="group flex w-56 shrink-0 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-brand-200 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150' fill='%23d6d3d1'%3E%3Crect width='200' height='150'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='14' fill='%2378716c'%3ENo image%3C/text%3E%3C/svg%3E";
          }}
        />
        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-stone-600 backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-stone-900">
          {product.name}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-stone-500">
          {product.description}
        </p>
        <p className="mt-1 text-[11px] text-stone-400">{product.variant}</p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <div>
            <p className="text-sm font-bold text-brand-700">
              {formatPrice(product.price)}
            </p>
            <p className="text-[10px] text-stone-400">per {product.unit}</p>
          </div>
          <button
            type="button"
            onClick={() => onAdd(product)}
            disabled={inCart}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
              inCart
                ? "bg-brand-100 text-brand-700"
                : "bg-brand-600 text-white hover:bg-brand-700 active:scale-95"
            }`}
          >
            {inCart ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </article>
  );
}
