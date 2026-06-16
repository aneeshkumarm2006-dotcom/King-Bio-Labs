"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, ChevronRight, Download, Minus, Plus } from "lucide-react";

import { StarRating } from "@/components/StarRating";
import { CountdownTimer } from "@/components/product/CountdownTimer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { getProductDescription, type Product } from "@/lib/data/products";

const MAX_QUANTITY = 10;
const BUNDLE_OPTIONS = [1, 2, 3, 4, 5];

export function ProductPurchasePanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const dosages = product.dosages ?? [];
  const dosageItems = dosages.map((d) => ({
    value: d.label,
    label: `${d.label} · $${d.price.toFixed(2)}`,
  }));

  const [selectedDosage, setSelectedDosage] = useState(dosages[0]?.label ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const id = window.setTimeout(() => setAdded(false), 2000);
    return () => window.clearTimeout(id);
  }, [added]);

  const unitPrice =
    dosages.find((d) => d.label === selectedDosage)?.price ?? product.price;
  const total = unitPrice * quantity;
  const points = Math.round(total);

  return (
    <div className="flex flex-col">
      {/* Top ledger row — breadcrumb left, rating right */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          <Link href="/" className="hover:text-brand-blue">
            Home
          </Link>
          <ChevronRight className="size-3 text-brand-navy/40" aria-hidden="true" />
          <Link href="/shop" className="hover:text-brand-blue">
            Shop
          </Link>
          <ChevronRight className="size-3 text-brand-navy/40" aria-hidden="true" />
          <span className="text-brand-navy">{product.category}</span>
        </nav>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <StarRating rating={product.rating} showValue size={16} />
          <span aria-hidden="true" className="h-3 w-px bg-border" />
          <a
            href="#reviews"
            className="text-brand-navy underline-offset-4 transition-colors hover:text-brand-blue hover:underline"
          >
            {product.reviewCount} reviews
          </a>
        </div>
      </div>

      {/* Title */}
      <h1 className="mt-6 font-display text-3xl font-bold leading-[1.05] tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
        {product.name}
      </h1>

      {/* Price ledger — split price / points cells */}
      <div className="mt-6 grid grid-cols-1 border border-border sm:grid-cols-[1fr_auto]">
        <div className="flex flex-col gap-1 border-b border-border px-5 py-5 sm:border-b-0 sm:border-r">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Order total
          </span>
          <p className="font-display text-5xl font-bold tabular-nums text-brand-navy">
            ${total.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col justify-center gap-1 px-5 py-5 sm:text-right">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Rewards
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-navy">
            Collect {points} points
          </p>
        </div>
      </div>

      {/* Dosage selector — only when the product has variants */}
      {dosageItems.length > 0 && (
        <div className="mt-6 flex flex-col gap-2">
          <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-navy">
            Dosage
          </label>
          <Select
            items={dosageItems}
            value={selectedDosage}
            onValueChange={(value) => {
              if (typeof value === "string") setSelectedDosage(value);
            }}
          >
            <SelectTrigger className="w-full justify-between rounded-none border-brand-border text-brand-navy data-[size=default]:h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {dosageItems.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Bundle quantity pills */}
      <div className="mt-6 flex flex-col gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-navy">
          Quantity
        </span>
        <div className="flex flex-wrap gap-px border border-border bg-border">
          {BUNDLE_OPTIONS.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setQuantity(n)}
              aria-pressed={quantity === n}
              className={cn(
                "flex-1 rounded-none px-3.5 py-2.5 text-sm font-medium transition-colors",
                quantity === n
                  ? "bg-brand-navy text-white"
                  : "bg-white text-brand-navy hover:text-brand-blue"
              )}
            >
              {n} {n === 1 ? "Vial" : "Vials"}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity stepper */}
      <div className="mt-4 inline-flex w-fit items-center border border-brand-border">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
          className="flex size-11 items-center justify-center rounded-none border-r border-brand-border text-brand-navy transition-colors hover:bg-surface-2 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Minus className="size-4" />
        </button>
        <span className="w-14 text-center font-mono text-sm font-semibold tabular-nums text-brand-navy">
          {quantity}
        </span>
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))}
          disabled={quantity >= MAX_QUANTITY}
          aria-label="Increase quantity"
          className="flex size-11 items-center justify-center rounded-none border-l border-brand-border text-brand-navy transition-colors hover:bg-surface-2 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Plus className="size-4" />
        </button>
      </div>

      {/* Add to Cart */}
      <button
        type="button"
        onClick={() => {
          addItem({
            slug: product.slug,
            name: product.name,
            dosageLabel: dosages.length > 0 ? selectedDosage : undefined,
            unitPrice,
            image: product.image,
            quantity,
          });
          setAdded(true);
        }}
        className={cn(
          "mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-none px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors",
          added ? "bg-emerald-600" : "bg-brand-navy hover:bg-brand-blue"
        )}
      >
        {added ? (
          <>
            <Check className="size-4" />
            Added to Cart
          </>
        ) : (
          <>
            <span>Add {quantity} to Cart</span>
            <span aria-hidden="true">·</span>
            <span>${total.toFixed(2)}</span>
          </>
        )}
      </button>

      {/* Download COA */}
      <Link
        href="/coas"
        className="mt-4 inline-flex w-fit items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-brand-navy transition-colors hover:text-brand-blue"
      >
        <Download className="size-4" />
        Download COA
      </Link>

      {/* Description */}
      <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
        {getProductDescription(product)}
      </p>

      {/* Same-day shipping countdown */}
      <CountdownTimer className="mt-6" />

      {/* Research Use Only disclaimer */}
      <div className="mt-4 flex items-stretch border border-border bg-white">
        <span aria-hidden="true" className="w-1 shrink-0 bg-brand-navy" />
        <p className="p-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-navy">
            Research Use Only.
          </span>{" "}
          This product is intended strictly for in-vitro laboratory research and
          is not for human or animal consumption, diagnostic, or therapeutic use.
          By purchasing, you confirm you are a qualified researcher.
        </p>
      </div>
    </div>
  );
}

export default ProductPurchasePanel;
