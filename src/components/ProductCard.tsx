import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data/products";

type ProductCardProps = {
  product: Product;
  className?: string;
};

/**
 * Dossier catalog tile, restructured: a horizontal title/meta band sits above a
 * side-by-side body (square plate image on the left, rating + points on the
 * right), with a full-width price/CTA bar pinned to the bottom edge. Sharp
 * corners, hairline borders, mono micro-labels throughout.
 */
export function ProductCard({ product, className }: ProductCardProps) {
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
      {/* Title band */}
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <Link
          href={href}
          className="truncate font-display text-base font-semibold leading-snug text-brand-navy transition-colors hover:text-brand-blue"
        >
          {name}
        </Link>
        {bestSelling && (
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-blue">
            ★ Best Selling
          </span>
        )}
      </div>

      {/* Body — plate image beside the spec rail */}
      <div className="flex flex-1 items-stretch">
        <Link
          href={href}
          className="relative block aspect-square w-2/5 shrink-0 overflow-hidden border-r border-border bg-surface-2"
        >
          <Image
            src={image ?? "/vial-product.svg"}
            alt={`Research vial of ${name}`}
            fill
            sizes="(max-width: 768px) 25vw, 160px"
            className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.06]"
          />
        </Link>

        <div className="flex flex-1 flex-col gap-3 p-4">
          <span className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {category}
          </span>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <span className="text-brand-navy">{rating.toFixed(1)}</span>
            <span aria-hidden="true" className="text-brand-blue">
              ★
            </span>
            <span aria-hidden="true" className="h-3 w-px bg-border" />
            <span>{reviewCount} reviews</span>
          </div>
          <div className="mt-auto flex flex-col">
            <span className="font-display text-xl font-bold tabular-nums text-brand-navy">
              ${price.toFixed(2)}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Collect {points} pts
            </span>
          </div>
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
    </div>
  );
}

export default ProductCard;
