import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { StarRating } from "@/components/StarRating";
import { ProductPurchasePanel } from "@/components/product/ProductPurchasePanel";
import {
  PRODUCTS,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: `${product.name}: research-grade ${product.category.toLowerCase()}, independently tested to 99%+ purity with a lot-specific COA accompanying every batch. Rated ${product.rating} from ${product.reviewCount} verified reviews.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(slug, 4);

  return (
    <main className="flex-1 bg-white">
      {/* Product detail — purchase panel leads, figure plate trails (flipped) */}
      <div className="mx-auto w-full max-w-[1320px] px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left column — purchase panel */}
          <div className="lg:col-span-7 lg:order-1">
            <ProductPurchasePanel product={product} />
          </div>

          {/* Right column — framed figure plate, sticky */}
          <div className="lg:col-span-5 lg:order-2">
            <figure className="flex flex-col border border-border bg-white lg:sticky lg:top-24">
              <div className="relative aspect-square bg-white">
                <Image
                  src={product.image ?? "/vial-product.svg"}
                  alt={product.name}
                  fill
                  preload
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-contain p-10"
                />
                {product.bestSelling && (
                  <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-blue">
                    ★ Best Selling
                  </span>
                )}
              </div>
              {/* Spec ledger pinned beneath the plate */}
              <figcaption className="grid grid-cols-2 border-t border-border">
                <div className="flex flex-col gap-1 border-r border-border px-5 py-4">
                  <span className="font-display text-2xl font-bold leading-none text-brand-navy">
                    99%+
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    HPLC confirmed purity
                  </span>
                </div>
                <div className="flex flex-col gap-1 px-5 py-4">
                  <span className="truncate font-display text-2xl font-bold leading-none text-brand-navy">
                    {product.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Research category
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Reviews anchor target — centered oversized rating hero */}
      <section id="reviews" className="scroll-mt-24 border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col items-center border border-border bg-white px-6 py-12 text-center lg:py-16">
            <SectionLabel index="01">Verified Reviews</SectionLabel>
            <span className="mt-8 font-display text-7xl font-bold leading-none tabular-nums text-brand-navy lg:text-8xl">
              {product.rating.toFixed(1)}
            </span>
            <div className="mt-5 flex flex-col items-center gap-2">
              <StarRating rating={product.rating} size={22} />
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Based on {product.reviewCount} verified reviews
              </p>
            </div>
            <p className="mt-8 max-w-xl border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
              Each rating comes from a verified purchase in our order ledger, and
              a lot-matched Certificate of Analysis ships with every order.
            </p>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-border bg-white">
          <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
            <SectionHeader
              index="02"
              label="Related Products"
              title="Related Products"
              lede={<>Explore more in {product.category}.</>}
            />
            {/* Featured-first reflow: lead tile spans wide, rest trail in a column */}
            <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-3">
              {related.map((p, i) => (
                <ProductCard
                  key={p.slug}
                  product={p}
                  className={i === 0 ? "border-0 lg:col-span-2" : "border-0"}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
