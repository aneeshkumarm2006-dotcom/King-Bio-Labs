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
      <div className="rounded-lg border bg-surface p-12 text-center text-sm text-muted-foreground">
        No compounds match your filters.
      </div>
    );
  }

  return (
    <div className="space-y-14">
      {groups.map((c) => (
        <section key={c.slug} id={c.slug} className="scroll-mt-24">
          <div className="mb-5 flex items-end justify-between gap-4 border-b pb-3">
            <div>
              <p className="text-eyebrow mb-1 text-primary/70">
                {c.id} · CATEGORY
              </p>
              <h2 className="font-display text-xl font-bold sm:text-2xl">
                {c.name}
              </h2>
            </div>
            <p className="hidden text-xs text-muted-foreground sm:block">
              {c.products.length} compounds
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ShopGrid;
