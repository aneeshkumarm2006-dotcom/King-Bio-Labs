"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Check, Plus } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { PRODUCTS } from "@/lib/data/products";

const BUNDLE_SIZE = 5;
const DISCOUNT_RATE = 0.1;

export function BundleBuilder() {
  const { addItem } = useCart();
  const [selected, setSelected] = useState<string[]>([]);
  const [added, setAdded] = useState(false);

  function addBundleToCart() {
    PRODUCTS.filter((p) => selected.includes(p.slug)).forEach((p) => {
      addItem({
        slug: p.slug,
        name: p.name,
        dosageLabel: "Bundle · 10% off",
        unitPrice: p.price * (1 - DISCOUNT_RATE),
        image: p.image,
        quantity: 1,
      });
    });
    setSelected([]);
    setAdded(true);
  }

  useEffect(() => {
    if (!added) return;
    const id = window.setTimeout(() => setAdded(false), 2500);
    return () => window.clearTimeout(id);
  }, [added]);

  function toggle(slug: string) {
    setAdded(false);
    setSelected((current) => {
      if (current.includes(slug)) {
        return current.filter((s) => s !== slug);
      }
      if (current.length >= BUNDLE_SIZE) return current;
      return [...current, slug];
    });
  }

  const selectedCount = selected.length;
  const isComplete = selectedCount === BUNDLE_SIZE;

  const { subtotal, discount, total } = useMemo(() => {
    const sub = PRODUCTS.filter((p) => selected.includes(p.slug)).reduce(
      (sum, p) => sum + p.price,
      0
    );
    const disc = sub * DISCOUNT_RATE;
    return { subtotal: sub, discount: disc, total: sub - disc };
  }, [selected]);

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
      {/* Full-bleed stacked headline band — centered intro */}
      <header className="flex flex-col items-center border-y border-border py-12 text-center lg:py-16">
        <SectionLabel index="01">Bundle &amp; Save · 10% Off</SectionLabel>
        <h1 className="mt-8 font-display text-5xl font-bold leading-[0.98] tracking-tight text-brand-navy sm:text-6xl lg:text-[5rem]">
          Assemble Your
          <br />
          Bundle
        </h1>
        <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
          Pick any 5 peptides and 10% comes off automatically.
        </p>
        <span className="mt-8 border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-navy">
          Standing 10% — no code
        </span>
      </header>

      {/* Flipped split — sticky ledger on the LEFT, selection grid on the right */}
      <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-[360px_1fr]">
        {/* Step 1 — product selection grid */}
        <div className="lg:order-2">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-4xl font-extrabold leading-none tabular-nums text-brand-navy/15">
                01
              </span>
              <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand-blue">
                Choose your compounds
              </h2>
            </div>
            <span
              aria-live="polite"
              className={cn(
                "border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] tabular-nums",
                isComplete
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-border bg-surface text-brand-navy"
              )}
            >
              {selectedCount} of {BUNDLE_SIZE} selected
            </span>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
            {PRODUCTS.map((product) => {
              const isSelected = selected.includes(product.slug);
              const isDisabled = !isSelected && isComplete;

              return (
                <li key={product.slug} className="bg-white">
                  <button
                    type="button"
                    onClick={() => toggle(product.slug)}
                    disabled={isDisabled}
                    aria-pressed={isSelected}
                    className={cn(
                      "group relative flex h-full w-full flex-col rounded-none text-left transition-colors",
                      isSelected
                        ? "bg-brand-navy/[0.03] ring-1 ring-inset ring-brand-navy"
                        : "hover:bg-surface",
                      isDisabled &&
                        "cursor-not-allowed opacity-40 hover:bg-white"
                    )}
                  >
                    {/* Spec header */}
                    <span className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
                      <span className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {product.category}
                      </span>
                      {product.bestSelling && (
                        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-blue">
                          ★ Best Selling
                        </span>
                      )}
                    </span>

                    {/* Plate */}
                    <span className="relative block aspect-square overflow-hidden bg-surface-2">
                      <Image
                        src={product.image ?? "/vial-product.svg"}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, 240px"
                        className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Sharp selection indicator */}
                      <span
                        className={cn(
                          "absolute right-0 top-0 flex size-7 items-center justify-center border-b border-l transition-colors",
                          isSelected
                            ? "border-brand-navy bg-brand-navy text-white"
                            : "border-border bg-white text-brand-navy/70"
                        )}
                        aria-hidden="true"
                      >
                        {isSelected ? (
                          <Check className="size-4" />
                        ) : (
                          <Plus className="size-4" />
                        )}
                      </span>
                    </span>

                    {/* Body */}
                    <span className="flex flex-1 flex-col gap-2 border-t border-border p-3">
                      <span className="font-display text-sm font-semibold leading-snug text-brand-navy">
                        {product.name}
                      </span>
                      <span className="mt-auto font-display text-base font-bold tabular-nums text-brand-navy">
                        ${product.price.toFixed(2)}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Order summary — ruled ledger, sticky on desktop, on the left rail */}
        <aside className="lg:order-1 lg:sticky lg:top-24 lg:self-start">
          <div className="border border-border bg-white">
            {/* Ledger head */}
            <div className="flex items-center justify-between gap-3 border-b border-border px-6 py-4">
              <h2 className="font-display text-lg font-bold text-brand-navy">
                Your Bundle
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
                {selectedCount} / {BUNDLE_SIZE}
              </span>
            </div>

            {/* Selected items list */}
            <div className="px-6 py-5">
              {selectedCount === 0 ? (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Add {BUNDLE_SIZE} peptides to complete your bundle and the 10%
                  discount applies automatically.
                </p>
              ) : (
                <ul className="flex flex-col divide-y divide-border">
                  {PRODUCTS.filter((p) => selected.includes(p.slug)).map((p) => (
                    <li
                      key={p.slug}
                      className="flex items-center justify-between gap-2 py-2.5 text-sm"
                    >
                      <span className="leading-snug text-brand-navy">
                        {p.name}
                      </span>
                      <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                        ${p.price.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Progress slots — sharp segments */}
            <div
              className="flex gap-px border-y border-border bg-border"
              aria-hidden="true"
            >
              {Array.from({ length: BUNDLE_SIZE }).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-2 flex-1",
                    i < selectedCount ? "bg-brand-navy" : "bg-surface-2"
                  )}
                />
              ))}
            </div>

            {/* Pricing — real-time discount */}
            <dl className="flex flex-col gap-2.5 px-6 py-5 text-sm">
              <div className="flex items-center justify-between">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Subtotal
                </dt>
                <dd className="font-mono font-medium text-brand-navy tabular-nums">
                  ${subtotal.toFixed(2)}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-700">
                  Bundle discount (10%)
                </dt>
                <dd className="font-mono font-medium text-emerald-700 tabular-nums">
                  −${discount.toFixed(2)}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <dt className="font-display text-base font-bold text-brand-navy">
                  Total
                </dt>
                <dd className="font-display text-lg font-bold text-brand-navy tabular-nums">
                  ${total.toFixed(2)}
                </dd>
              </div>
            </dl>

            {/* Squared CTA */}
            <div className="border-t border-border p-6">
              <button
                type="button"
                onClick={() => isComplete && addBundleToCart()}
                disabled={!isComplete}
                className={cn(
                  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-none px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors",
                  added
                    ? "bg-emerald-600"
                    : "bg-brand-navy hover:bg-brand-blue disabled:cursor-not-allowed disabled:bg-brand-navy/40 disabled:hover:bg-brand-navy/40"
                )}
              >
                {added ? (
                  <>
                    <Check className="size-4" />
                    Bundle Added to Cart
                  </>
                ) : isComplete ? (
                  "Add Bundle to Cart"
                ) : (
                  `Add ${BUNDLE_SIZE - selectedCount} more`
                )}
              </button>

              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                A standing 10% off — no promo code required.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BundleBuilder;
