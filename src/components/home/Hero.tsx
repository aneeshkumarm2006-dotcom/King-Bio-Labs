import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { StarRating } from "@/components/StarRating";

const AVATARS = [
  "/portrait-32.jpg",
  "/portrait-44.jpg",
  "/portrait-76.jpg",
  "/portrait-68.jpg",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        {/* Meta bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border py-3.5 font-mono text-[11px] uppercase tracking-[0.22em]">
          <span className="flex items-center gap-2.5 text-brand-blue">
            <span aria-hidden="true" className="size-1.5 bg-brand-navy" />
            Issue №01 — The New Benchmark
          </span>
          <span className="hidden text-brand-navy/45 sm:inline">
            WP / Research-Grade Compounds · Est. 2026
          </span>
        </div>

        {/* Headline spans wide; image + lede + proof sit in the right rail */}
        <div className="grid gap-x-10 gap-y-10 py-14 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7">
            <h1 className="font-display text-[2.75rem] font-extrabold leading-[0.95] tracking-tight text-brand-navy sm:text-6xl lg:text-[5rem]">
              Confirmed Purity.
              <br />
              <span className="text-brand-blue">Zero Compromise.</span>
            </h1>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/shop"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-none bg-brand-navy px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-blue"
              >
                Shop The Catalog
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/bundle"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-none border border-brand-navy px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
              >
                Build Bundle - 10% Off
              </Link>
            </div>
          </div>

          {/* Right rail: image above the lede, then social proof */}
          <div className="flex flex-col gap-6 border-border lg:col-span-5 lg:border-l lg:pl-10">
            <figure className="relative border border-border bg-surface-2">
              <span className="absolute left-0 top-0 z-10 border-b border-r border-border bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Batch · WP-2406
              </span>
              <span className="absolute right-0 top-0 z-10 flex items-baseline gap-2 border-b border-l border-border bg-white px-3 py-2">
                <span className="font-display text-lg font-bold leading-none text-brand-navy">
                  99.7<span className="align-top text-xs">%</span>
                </span>
                <span className="font-mono text-[9px] uppercase leading-tight tracking-[0.16em] text-muted-foreground">
                  HPLC
                  <br />
                  verified
                </span>
              </span>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/wickpeptides-hero.png"
                  alt="Wick Peptides research vial"
                  fill
                  preload
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-contain p-6"
                />
              </div>
            </figure>

            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Laboratory-grade compounds synthesized at certified facilities and
              verified by independent third-party labs. A full COA ships with
              every batch — nothing assumed, nothing cut short.
            </p>

            <div className="flex items-center gap-4 border-t border-border pt-6">
              <div className="flex -space-x-2">
                {AVATARS.map((src) => (
                  <span
                    key={src}
                    className="relative size-9 overflow-hidden rounded-full border-2 border-white ring-1 ring-border"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <StarRating rating={5} size={15} />
                  <span className="font-mono text-sm font-semibold text-brand-navy">
                    4.9
                  </span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  12,000+ verified orders
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
