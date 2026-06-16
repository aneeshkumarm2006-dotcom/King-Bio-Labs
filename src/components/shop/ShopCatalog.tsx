"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { ShopSidebar } from "@/components/shop/ShopSidebar";
import { ShopGrid } from "@/components/shop/ShopGrid";

export function ShopCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
      {/* Full-bleed stacked masthead with inline search ledger */}
      <header className="border border-border bg-white">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-6 py-4 lg:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue">
            01 · Catalog
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            99%+ verified purity · COA per batch
          </span>
        </div>
        <div className="px-6 py-10 lg:px-8 lg:py-12">
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            Browse Every Compound
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Sorted by research category. Each compound is verified at 99%+ purity
            and ships with a COA for every batch.
          </p>
        </div>
        {/* Inline horizontal search row inside the masthead */}
        <div className="relative flex items-center border-t border-border bg-surface focus-within:bg-white">
          <Search
            className="pointer-events-none absolute left-6 top-1/2 size-4 -translate-y-1/2 text-muted-foreground lg:left-8"
            aria-hidden="true"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Find a compound by name, category, or description…"
            className="h-16 w-full rounded-none border-0 bg-transparent pl-14 pr-6 text-sm text-brand-navy placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none lg:pl-16"
          />
        </div>
      </header>

      {/* Flipped layout — grid leads, filters trail on the right */}
      <div className="mt-px grid gap-px border-x border-b border-border bg-border lg:grid-cols-[1fr_260px]">
        <ShopGrid search={search} selectedCategories={selectedCategories} />
        <ShopSidebar
          selectedCategories={selectedCategories}
          onApply={setSelectedCategories}
          onClear={() => setSelectedCategories([])}
        />
      </div>
    </div>
  );
}

export default ShopCatalog;
