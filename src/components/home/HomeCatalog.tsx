"use client";

import { useMemo, useState } from "react";
import { ChevronDown, LayoutGrid, Rows3, Search, X } from "lucide-react";

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

  const gridClass = cn(
    "grid gap-5",
    view === "expanded"
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      : "grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
  );

  const selectClass =
    "flex h-9 w-full cursor-pointer appearance-none items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent py-2 pl-3 pr-9 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-ring";

  return (
    <section className="border-b">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14">
        <div className="mb-8 max-w-2xl">
          <p className="text-eyebrow mb-3">FULL CATALOG</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Precision-Selected For Purity, Consistency And Dependable Handling.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Browse our research compounds by category. Every batch is third-party
            tested with a full COA.
          </p>
        </div>

        {/* Filter bar */}
        <div className="mb-6 rounded-lg border bg-surface/60 p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
            {/* Search */}
            <div className="flex-1">
              <label className="text-eyebrow mb-1.5 block text-muted-foreground">
                Search
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search compounds…"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent py-1 pl-9 pr-3 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                />
              </div>
            </div>

            {/* Category */}
            <div className="lg:w-56">
              <label className="text-eyebrow mb-1.5 block text-muted-foreground">
                Category
              </label>
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
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
              </div>
            </div>

            {/* Sort */}
            <div className="lg:w-44">
              <label className="text-eyebrow mb-1.5 block text-muted-foreground">
                Sort
              </label>
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
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
              </div>
            </div>

            {/* Price */}
            <div className="lg:w-64">
              <label className="text-eyebrow mb-1.5 flex items-center justify-between text-muted-foreground">
                <span>Price</span>
                <span className="text-foreground/80 tabular-nums">
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
              <label className="text-eyebrow mb-1.5 block text-muted-foreground">
                View
              </label>
              <div className="inline-flex rounded-md border bg-background p-0.5">
                <button
                  type="button"
                  onClick={() => setView("expanded")}
                  aria-pressed={view === "expanded"}
                  className={cn(
                    "flex h-8 items-center gap-1.5 rounded px-3 text-xs font-medium transition-colors",
                    view === "expanded"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                  Expanded
                </button>
                <button
                  type="button"
                  onClick={() => setView("compact")}
                  aria-pressed={view === "compact"}
                  className={cn(
                    "flex h-8 items-center gap-1.5 rounded px-3 text-xs font-medium transition-colors",
                    view === "compact"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Rows3 className="h-3.5 w-3.5" />
                  Compact
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* When filtering, show every match in one flat grid; otherwise the
            category accordion. */}
        {hasActiveFilters ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {flatProducts.length}{" "}
                {flatProducts.length === 1 ? "result" : "results"}
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
                Clear filters
              </button>
            </div>

            {flatProducts.length === 0 ? (
              <p className="rounded-lg border bg-surface/40 p-10 text-center text-sm text-muted-foreground">
                No compounds match your filters.
              </p>
            ) : (
              <div className={gridClass}>
                {flatProducts.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {categorySections.map((c) => {
              const isOpen = open === c.slug;
              return (
                <div
                  key={c.slug}
                  className="overflow-hidden rounded-lg border bg-surface/40"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : c.slug)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-eyebrow text-primary/70">{c.id}</span>
                      <h3 className="font-display text-lg font-bold sm:text-xl">
                        {c.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-muted-foreground">
                        {c.products.length} compounds
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-muted-foreground transition-transform",
                          isOpen && "rotate-180"
                        )}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t p-5">
                      {c.products.length === 0 ? (
                        <p className="text-center text-sm text-muted-foreground">
                          No compounds in this category yet.
                        </p>
                      ) : (
                        <div className={gridClass}>
                          {c.products.map((p) => (
                            <ProductCard key={p.slug} product={p} />
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
