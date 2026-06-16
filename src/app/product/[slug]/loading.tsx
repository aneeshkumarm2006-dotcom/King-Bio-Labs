import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoading() {
  return (
    <main className="flex-1 bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left — framed figure plate */}
          <div className="lg:col-span-6">
            <div className="flex flex-col border border-border bg-white">
              <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-2.5">
                <Skeleton className="h-3 w-24 rounded-none" />
                <Skeleton className="h-3 w-20 rounded-none" />
              </div>
              <Skeleton className="aspect-square rounded-none" />
              <div className="flex items-center justify-between gap-4 border-t border-border px-5 py-4">
                <Skeleton className="h-7 w-16 rounded-none" />
                <Skeleton className="h-3 w-32 rounded-none" />
              </div>
            </div>
          </div>

          {/* Right — purchase panel */}
          <div className="flex flex-col lg:col-span-6">
            <Skeleton className="h-3 w-32 rounded-none" />
            <Skeleton className="mt-5 h-10 w-3/4 rounded-none" />
            <Skeleton className="mt-4 h-4 w-40 rounded-none" />

            {/* Price */}
            <div className="mt-6 border-t border-border pt-6">
              <Skeleton className="h-12 w-44 rounded-none" />
            </div>

            {/* Bundle pills */}
            <div className="mt-6 flex flex-wrap gap-px bg-border">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-11 flex-1 rounded-none" />
              ))}
            </div>

            {/* Quantity + add to cart */}
            <Skeleton className="mt-4 h-11 w-36 rounded-none" />
            <Skeleton className="mt-6 h-12 w-full rounded-none" />
            <Skeleton className="mt-4 h-5 w-40 rounded-none" />

            {/* Description */}
            <div className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
              <Skeleton className="h-4 w-full rounded-none" />
              <Skeleton className="h-4 w-full rounded-none" />
              <Skeleton className="h-4 w-2/3 rounded-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="border-t border-border pt-6">
            <Skeleton className="h-3 w-40 rounded-none" />
          </div>
          <Skeleton className="mt-6 h-9 w-56 rounded-none" />
          <div className="mt-12 grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <ProductCardSkeleton key={i} className="border-0" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
