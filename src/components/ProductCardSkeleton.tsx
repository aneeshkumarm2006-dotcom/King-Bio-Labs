import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type ProductCardSkeletonProps = {
  className?: string;
};

/**
 * Loading placeholder that mirrors the layout of <ProductCard /> so the
 * shop and product grids don't shift when real cards stream in.
 */
export function ProductCardSkeleton({ className }: ProductCardSkeletonProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex flex-col rounded-none border border-border bg-white",
        className
      )}
    >
      {/* Plate */}
      <div className="aspect-square border-b border-border bg-surface-2 p-6">
        <Skeleton className="h-full w-full rounded-none" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2.5 p-4">
        {/* Category */}
        <Skeleton className="h-2.5 w-24 rounded-none" />
        {/* Name */}
        <Skeleton className="h-4 w-3/4 rounded-none" />
        {/* Rating */}
        <Skeleton className="h-3 w-28 rounded-none" />
        {/* Price + points */}
        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <Skeleton className="h-5 w-16 rounded-none" />
          <Skeleton className="h-2.5 w-20 rounded-none" />
        </div>
      </div>

      {/* CTA bar */}
      <div className="flex items-center justify-between border-t border-border px-4 py-3">
        <Skeleton className="h-3 w-24 rounded-none" />
        <Skeleton className="h-3 w-3 rounded-none" />
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
