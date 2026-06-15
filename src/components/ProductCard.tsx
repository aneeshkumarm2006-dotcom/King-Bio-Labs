import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data/products";

type ProductCardProps = {
  product: Product;
  className?: string;
};

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

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border bg-surface transition-colors hover:border-primary/40",
        className
      )}
    >
      <Link
        href={`/product/${slug}`}
        className="relative block aspect-square overflow-hidden bg-background"
      >
        <Image
          src={image ?? "/vial-product.svg"}
          alt={`Research vial of ${name}`}
          fill
          sizes="(max-width: 768px) 50vw, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {bestSelling && (
          <div className="absolute right-3 top-3 flex flex-col items-end gap-1.5">
            <div className="inline-flex items-center rounded-md border border-primary/60 bg-background/80 px-2.5 py-0.5 text-xs font-semibold text-primary backdrop-blur">
              Best Selling
            </div>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <div className="text-eyebrow truncate">{category}</div>

        <Link
          href={`/product/${slug}`}
          className="font-display text-base font-semibold leading-tight hover:text-primary"
        >
          {name}
        </Link>

        <div className="flex items-center gap-1.5">
          <div className="flex">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className="h-3 w-3 fill-primary text-primary"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {rating.toFixed(1)} · {reviewCount} reviews
          </span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
        </div>

        <p className="text-xs text-muted-foreground">Earn {points} points</p>

        <div className="mt-auto pt-1">
          <Link
            href={`/product/${slug}`}
            className="inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {hasVariants ? "Select Options" : "View Product"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
