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
      {/* Product detail */}
      <div className="mx-auto w-full max-w-[1320px] px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left column — framed figure plate */}
          <div className="lg:col-span-6">
            <figure className="flex flex-col border border-border bg-white">
              <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {product.category}
                </span>
                {product.bestSelling && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-blue">
                    ★ Best Selling
                  </span>
                )}
              </div>
              <div className="relative aspect-square bg-white">
                <Image
                  src={product.image ?? "/vial-product.svg"}
                  alt={product.name}
                  fill
                  preload
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-contain p-10"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-4 border-t border-border px-5 py-4">
                <span className="font-display text-2xl font-bold leading-none text-brand-navy">
                  99%+
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  HPLC confirmed purity
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Right column — purchase panel */}
          <div className="lg:col-span-6">
            <ProductPurchasePanel product={product} />
          </div>
        </div>
      </div>

      {/* Reviews anchor target */}
      <section id="reviews" className="scroll-mt-24 border-t border-border bg-surface">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="border-t border-border pt-6">
            <SectionLabel index="01">Verified Reviews</SectionLabel>
          </div>
          <div className="mt-8 grid items-center gap-8 border border-border bg-white lg:grid-cols-12">
            <div className="flex items-center gap-6 p-8 lg:col-span-5 lg:border-r lg:border-border">
              <span className="font-display text-6xl font-bold tabular-nums text-brand-navy">
                {product.rating.toFixed(1)}
              </span>
              <div className="flex flex-col gap-2">
                <StarRating rating={product.rating} size={20} />
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Based on {product.reviewCount} verified reviews
                </p>
              </div>
            </div>
            <p className="px-8 pb-8 text-sm leading-relaxed text-muted-foreground lg:col-span-7 lg:py-8">
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
            <div className="mt-12 grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} className="border-0" />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
