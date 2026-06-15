"use client";

import { useEffect, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { CATEGORIES } from "@/lib/data/products";

type ShopSidebarProps = {
  selectedCategories: string[];
  onApply: (categories: string[]) => void;
  onClear: () => void;
};

export function ShopSidebar({
  selectedCategories,
  onApply,
  onClear,
}: ShopSidebarProps) {
  // Draft selection — committed to the grid only when "Apply" is clicked.
  const [draft, setDraft] = useState<string[]>(selectedCategories);

  // Keep the draft in sync when the applied filter is reset elsewhere.
  useEffect(() => {
    setDraft(selectedCategories);
  }, [selectedCategories]);

  const toggle = (slug: string, checked: boolean) => {
    setDraft((prev) =>
      checked ? [...prev, slug] : prev.filter((s) => s !== slug)
    );
  };

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      <div>
        <h2 className="text-eyebrow mb-3">Category</h2>

        <div className="space-y-2.5">
          {CATEGORIES.map((c) => {
            const checked = draft.includes(c.slug);
            return (
              <label
                key={c.slug}
                className="flex cursor-pointer items-start gap-2.5 text-sm"
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={(value) => toggle(c.slug, Boolean(value))}
                  className="mt-0.5 border-primary shadow"
                />
                <span className="leading-tight text-muted-foreground">
                  {c.name}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            setDraft([]);
            onClear();
          }}
          className="inline-flex h-8 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Clear all
        </button>
        <button
          type="button"
          onClick={() => onApply(draft)}
          className="inline-flex h-8 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Apply
        </button>
      </div>
    </aside>
  );
}

export default ShopSidebar;
