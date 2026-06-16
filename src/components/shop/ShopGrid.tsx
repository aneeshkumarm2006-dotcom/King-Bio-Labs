import { useMemo } from "react";

import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS } from "@/lib/data/products";

type ShopGridProps = {
  search: string;
  selectedCategories: string[];
};

export function ShopGrid({ search, selectedCategories }: ShopGridProps) {
  const groups = useMemo(() => {
    const q = search.trim().toLowerCase();
    return CATEGORIES.filter(
      (c) => selectedCategories.length === 0 || selectedCategories.includes(c.slug)
    )
      .map((c) => ({
        ...c,
        products: PRODUCTS.filter(
          (p) => p.categorySlug === c.slug && (!q || p.name.toLowerCase().includes(q))
        ),
      }))
      .filter((c) => c.products.length > 0);
  }, [search, selectedCategories]);

  if (groups.length === 0) {
    return (
      <div className="flex items-center justify-center bg-white p-12 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        Nothing matches the filters you&rsquo;ve chosen.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-px bg-border">
      {groups.map((c) => (
        <section key={c.slug} id={c.slug} className="scroll-mt-24 bg-white">
          {/* Oversized index numeral header with stacked label + name */}
          <div className="flex items-start gap-5 px-5 py-6 lg:px-8">
            <span
              aria-hidden="true"
              className="font-display text-5xl font-extrabold leading-none tracking-tight tabular-nums text-brand-navy/12 sm:text-6xl"
            >
              {c.id}
            </span>
            <div className="flex flex-1 flex-col gap-1.5 pt-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue">
                Category · {c.products.length} compounds available
              </span>
              <h2 className="font-display text-xl font-bold text-brand-navy sm:text-2xl">
                {c.name}
              </h2>
            </div>
          </div>

          {/* Hairline product grid — borders drawn on the cards so an
              incomplete last row leaves no gray empty cells. */}
          <div className="grid grid-cols-1 border-t border-border bg-white [&>*]:border-b [&>*]:border-r [&>*]:border-border sm:grid-cols-2 lg:grid-cols-3">
            {c.products.map((p) => (
              <ProductCard key={p.slug} product={p} className="border-0" />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ShopGrid;
