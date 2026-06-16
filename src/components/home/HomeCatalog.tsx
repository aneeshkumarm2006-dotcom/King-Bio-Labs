"use client";

import { useMemo, useState } from "react";
import { ChevronDown, LayoutGrid, Rows3, Search, X } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { CATEGORIES, PRODUCTS, type Product } from "@/lib/data/products";

type SortKey = "featured" | "price-asc" | "price-desc" | "rating";
type ViewMode = "expanded" | "compact";

const PRICE_MIN = 19;
const PRICE_MAX = 450;

function sortProducts(products: Product[], sort: SortKey): Product[] {
  const copy = [...products];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "rating":
      return copy.sort((a, b) => b.rating - a.rating);
    default:
      return copy.sort(
        (a, b) => Number(b.bestSelling ?? false) - Number(a.bestSelling ?? false)
      );
  }
}

export function HomeCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<SortKey>("featured");
  const [price, setPrice] = useState<[number, number]>([PRICE_MIN, PRICE_MAX]);
  const [view, setView] = useState<ViewMode>("expanded");
  const [open, setOpen] = useState<string | null>(CATEGORIES[0].slug);

  // Products matching the active search / category / price filters.
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      const matchesCategory = category === "all" || p.categorySlug === category;
      const matchesPrice = p.price >= price[0] && p.price <= price[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [search, category, price]);

  // Category accordion data — every category with its matching products.
  const categorySections = useMemo(
    () =>
      CATEGORIES.map((c) => ({
        ...c,
        products: sortProducts(
          filtered.filter((p) => p.categorySlug === c.slug),
          sort
        ),
      })),
    [filtered, sort]
  );

  // Flat list of every matching product, shown when a filter is active.
  const flatProducts = useMemo(
    () => sortProducts(filtered, sort),
    [filtered, sort]
  );

  // Sort and view are display preferences — only search, category and a
  // non-default price range switch the layout from accordion to flat grid.
  const hasActiveFilters =
    search.trim() !== "" ||
    category !== "all" ||
    price[0] !== PRICE_MIN ||
    price[1] !== PRICE_MAX;

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setPrice([PRICE_MIN, PRICE_MAX]);
  };

  // Hairlines are drawn on the cards (bottom/right) plus a top/left frame on the
  // container, so an incomplete last row leaves no empty cells bleeding the
  // gray border colour through.
  const gridClass = cn(
    "grid border-l border-t border-border bg-white [&>*]:border-b [&>*]:border-r [&>*]:border-border",
    view === "expanded"
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
  );

  const fieldLabel =
    "mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground";
  const selectClass =
    "flex h-10 w-full cursor-pointer appearance-none items-center rounded-none border border-brand-border bg-white py-2 pl-3 pr-9 text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-ring";

  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeader
          index="02"
          label="Full Catalog"
          title="Precision-Selected For Purity, Consistency And Dependable Handling."
          lede="Browse our research compounds by category. Every batch is third-party tested with a full COA."
        />

        {/* Filter toolbar */}
        <div className="mt-12 border border-border bg-surface p-4 lg:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
            {/* Search */}
            <div className="flex-1">
              <label className={fieldLabel}>Search</label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search compounds…"
                  className="flex h-10 w-full rounded-none border border-brand-border bg-white py-1 pl-9 pr-3 text-base transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                />
              </div>
            </div>

            {/* Category */}
            <div className="lg:w-56">
              <label className={fieldLabel}>Category</label>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={selectClass}
                  aria-label="Category"
                >
                  <option value="all">All categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 opacity-50" />
              </div>
            </div>

            {/* Sort */}
            <div className="lg:w-44">
              <label className={fieldLabel}>Sort</label>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className={selectClass}
                  aria-label="Sort by"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 opacity-50" />
              </div>
            </div>

            {/* Price */}
            <div className="lg:w-64">
              <label className="mb-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>Price</span>
                <span className="text-brand-navy tabular-nums">
                  ${price[0].toFixed(2)} - ${price[1].toFixed(2)}
                </span>
              </label>
              <Slider
                className="mt-3"
                value={price}
                min={PRICE_MIN}
                max={PRICE_MAX}
                step={1}
                onValueChange={(v) =>
                  setPrice([
                    (v as number[])[0] ?? PRICE_MIN,
                    (v as number[])[1] ?? PRICE_MAX,
                  ])
                }
              />
            </div>

            {/* View */}
            <div>
              <label className={fieldLabel}>View</label>
              <div className="inline-flex rounded-none border border-brand-border bg-white p-0.5">
                <button
                  type="button"
                  onClick={() => setView("expanded")}
                  aria-pressed={view === "expanded"}
                  className={cn(
                    "flex h-8 items-center gap-1.5 rounded-none px-3 text-xs font-medium transition-colors",
                    view === "expanded"
                      ? "bg-brand-navy text-white"
                      : "text-muted-foreground hover:text-brand-navy"
                  )}
                >
                  <LayoutGrid className="size-3.5" />
                  Expanded
                </button>
                <button
                  type="button"
                  onClick={() => setView("compact")}
                  aria-pressed={view === "compact"}
                  className={cn(
                    "flex h-8 items-center gap-1.5 rounded-none px-3 text-xs font-medium transition-colors",
                    view === "compact"
                      ? "bg-brand-navy text-white"
                      : "text-muted-foreground hover:text-brand-navy"
                  )}
                >
                  <Rows3 className="size-3.5" />
                  Compact
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* When filtering, show every match in one flat grid; otherwise the
            category accordion. */}
        {hasActiveFilters ? (
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {flatProducts.length}{" "}
                {flatProducts.length === 1 ? "result" : "results"}
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-brand-navy"
              >
                <X className="size-4" />
                Clear filters
              </button>
            </div>

            {flatProducts.length === 0 ? (
              <p className="border border-border bg-surface p-10 text-center text-sm text-muted-foreground">
                No compounds match your filters.
              </p>
            ) : (
              <div className={gridClass}>
                {flatProducts.map((p) => (
                  <ProductCard
                    key={p.slug}
                    product={p}
                    className="border-0"
                    compact={view === "compact"}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {categorySections.map((c) => {
              const isOpen = open === c.slug;
              return (
                <div key={c.slug} className="border border-border bg-white">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : c.slug)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-semibold tracking-[0.16em] text-brand-blue">
                        {c.id}
                      </span>
                      <h3 className="font-display text-lg font-bold text-brand-navy sm:text-xl">
                        {c.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {c.products.length} compounds
                      </span>
                      <ChevronDown
                        className={cn(
                          "size-4 text-muted-foreground transition-transform",
                          isOpen && "rotate-180"
                        )}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-border p-5">
                      {c.products.length === 0 ? (
                        <p className="text-center text-sm text-muted-foreground">
                          No compounds in this category yet.
                        </p>
                      ) : (
                        <div className={gridClass}>
                          {c.products.map((p) => (
                            <ProductCard
                              key={p.slug}
                              product={p}
                              className="border-0"
                              compact={view === "compact"}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default HomeCatalog;
