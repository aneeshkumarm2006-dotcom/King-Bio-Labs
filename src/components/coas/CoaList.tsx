"use client";

import { useMemo, useState } from "react";
import { Download } from "lucide-react";

import { COAS, formatCOADate } from "@/lib/data/coas";

export function CoaList() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return COAS;
    return COAS.filter(
      (coa) =>
        coa.productName.toLowerCase().includes(query) ||
        coa.productSlug.toLowerCase().includes(query) ||
        coa.batchNumber.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <div>
      {/* Oversized heading band with live count */}
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
          Available COAs
        </h2>
        <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand-navy/45 tabular-nums">
          {String(filtered.length).padStart(2, "0")} on record
        </span>
      </div>

      {/* Full-width search band */}
      <div className="mt-8 border-y border-border py-4">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Look up a product or batch…"
          className="flex h-11 w-full rounded-none border-0 bg-transparent px-0 font-mono text-[13px] uppercase tracking-[0.08em] transition-colors placeholder:normal-case placeholder:tracking-normal placeholder:text-muted-foreground focus-visible:outline-none"
        />
      </div>

      {/* COA ledger */}
      {filtered.length > 0 ? (
        <div className="mt-8 border border-border">
          {/* Ledger header row */}
          <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_8rem_8rem] items-center gap-4 border-b border-border bg-surface px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:grid">
            <span>Product</span>
            <span>Batch No.</span>
            <span>Tested</span>
            <span className="text-right">Certificate</span>
          </div>

          {/* One hairline row per COA */}
          <ul>
            {filtered.map((coa) => (
              <li
                key={coa.id}
                className="grid grid-cols-1 items-center gap-x-4 gap-y-3 border-t border-border px-6 py-5 transition-colors first:border-t-0 hover:bg-surface lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_8rem_8rem] lg:gap-y-0 lg:first:border-t-0"
              >
                <span className="truncate font-mono text-[12px] uppercase tracking-[0.14em] text-brand-navy">
                  {coa.productSlug}
                </span>
                <span className="font-mono text-sm tabular-nums text-brand-navy">
                  {coa.batchNumber}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Tested {formatCOADate(coa.testedDate)}
                </span>
                <a
                  href={coa.downloadUrl ?? "#"}
                  download
                  className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-none border border-brand-navy bg-transparent px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-navy transition-colors hover:bg-brand-navy hover:text-white lg:justify-self-end"
                >
                  <Download className="size-3.5" aria-hidden="true" />
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-8 border border-border bg-surface px-6 py-10 text-center text-muted-foreground">
          No COAs found for “{search}”.
        </p>
      )}
    </div>
  );
}

export default CoaList;
