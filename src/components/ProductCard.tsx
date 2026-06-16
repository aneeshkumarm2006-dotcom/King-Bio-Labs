import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data/products";

type ProductCardProps = {
  product: Product;
  className?: string;
  /** Condensed tile — image, name and price only (used by the home compact grid). */
  compact?: boolean;
};

/**
 * Dossier catalog tile, vertical layout: a full-width plate image sits on top
 * (with the best-selling flag pinned to its corner), the body stacks category,
 * title, rating and price, and a full-width CTA bar is pinned to the bottom
 * edge. Sharp corners, hairline borders, mono micro-labels throughout. Built to
 * fit cleanly from two up to six columns without truncating its content.
 */
export function ProductCard({ product, className, compact }: ProductCardProps) {
  const {
    slug,
    name,
    category,
    price,
    rating,
    reviewCount,
    bestSelling,
    hasVariants,
    image,
  } = product;

  const points = Math.floor(price);
  const href = `/product/${slug}`;

  return (
    <div
      className={cn(
        "group relative flex flex-col border border-border bg-white transition-colors hover:border-brand-navy",
        className
      )}
    >
      {/* Plate image */}
      <Link
        href={href}
        className="relative block aspect-square overflow-hidden border-b border-border bg-surface-2"
      >
        <Image
          src={image ?? "/vial-product.svg"}
          alt={`Research vial of ${name}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.06]"
        />
        {bestSelling && (
          <span className="absolute left-0 top-0 bg-brand-navy px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white">
            ★ Best Selling
          </span>
        )}
      </Link>

      {/* Condensed body — name + price only */}
      {compact ? (
        <Link
          href={href}
          className="flex flex-1 flex-col gap-1.5 p-4 transition-colors hover:bg-surface"
        >
          <span className="font-display text-sm font-semibold leading-snug text-brand-navy">
            {name}
          </span>
          <span className="mt-auto font-display text-lg font-bold tabular-nums text-brand-navy">
            ${price.toFixed(2)}
          </span>
        </Link>
      ) : (
        <>
      {/* Body */}
      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <span className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {category}
        </span>

        <Link
          href={href}
          className="font-display text-base font-semibold leading-snug text-brand-navy transition-colors hover:text-brand-blue"
        >
          {name}
        </Link>

        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          <span className="text-brand-navy">{rating.toFixed(1)}</span>
          <span aria-hidden="true" className="text-brand-blue">
            ★
          </span>
          <span aria-hidden="true" className="h-3 w-px bg-border" />
          <span>{reviewCount} reviews</span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <span className="font-display text-xl font-bold tabular-nums text-brand-navy">
            ${price.toFixed(2)}
          </span>
          <span className="pb-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Collect {points} pts
          </span>
        </div>
      </div>

      {/* Full-width CTA bar */}
      <Link
        href={href}
        className="flex items-center justify-between gap-2 border-t border-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
      >
        {hasVariants ? "Select Options" : "View Product"}
        <ArrowRight
          className="size-3.5 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
        </>
      )}
    </div>
  );
}

export default ProductCard;
