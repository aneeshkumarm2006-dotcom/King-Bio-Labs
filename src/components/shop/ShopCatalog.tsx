"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { ShopSidebar } from "@/components/shop/ShopSidebar";
import { ShopGrid } from "@/components/shop/ShopGrid";

export function ShopCatalog() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      {/* Page header */}
      <div className="mb-8">
        <p className="text-eyebrow mb-2">CATALOG</p>
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          Shop All Compounds
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Organized by research category. Every compound is 99%+ purity with a
          COA on every batch.
        </p>
      </div>

      {/* Full-width search */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search compounds by name, category, or description…"
          className="flex h-9 w-full rounded-md border border-input bg-transparent py-1 pl-10 pr-3 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
        />
      </div>

      {/* Two-column layout */}
      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <ShopSidebar
          selectedCategories={selectedCategories}
          onApply={setSelectedCategories}
          onClear={() => setSelectedCategories([])}
        />
        <ShopGrid search={search} selectedCategories={selectedCategories} />
      </div>
    </div>
  );
}

export default ShopCatalog;
