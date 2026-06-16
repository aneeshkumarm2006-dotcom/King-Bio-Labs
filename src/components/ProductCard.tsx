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
 * Dossier catalog tile: a sharp-cornered, hairline-framed plate with a mono
 * spec header, an object-contain "plate" image, and a baseline price + arrow
 * link instead of a filled button.
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
      {/* Spec header */}
      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-2.5">
        <span className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {category}
        </span>
        {bestSelling && (
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-blue">
            ★ Best Selling
          </span>
        )}
      </div>

      {/* Plate */}
      <Link
        href={href}
        className="relative block aspect-[4/3] overflow-hidden bg-surface-2"
      >
        <Image
          src={image ?? "/vial-product.svg"}
          alt={`Research vial of ${name}`}
          fill
          sizes="(max-width: 768px) 50vw, 320px"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
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

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border pt-3">
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tabular-nums text-brand-navy">
              ${price.toFixed(2)}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Collect {points} pts
            </span>
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-navy transition-colors hover:text-brand-blue"
          >
            {hasVariants ? "Select Options" : "View Product"}
            <ArrowRight
              className="size-3.5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
