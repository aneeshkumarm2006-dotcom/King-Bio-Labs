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
        {/* Dossier strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 font-mono text-[11px] uppercase tracking-[0.22em]">
          <span className="flex items-center gap-2.5 text-brand-blue">
            <span aria-hidden="true" className="size-1.5 bg-brand-navy" />
            Issue №01 — The New Benchmark
          </span>
          <span className="hidden text-brand-navy/45 sm:inline">
            Wick Peptides / Research-Grade Compounds
          </span>
        </div>

        {/* Body */}
        <div className="grid items-center gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div className="flex flex-col gap-7 lg:col-span-6">
            <h1 className="font-display text-[2.75rem] font-extrabold leading-[0.98] tracking-tight text-brand-navy sm:text-6xl lg:text-[4.25rem]">
              Confirmed Purity.
              <br />
              <span className="text-brand-blue">Zero Compromise.</span>
            </h1>

            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Laboratory-grade compounds synthesized at certified facilities and
              verified by independent third-party labs. A full COA ships with
              every batch — nothing assumed, nothing cut short.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
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

          {/* Figure */}
          <div className="lg:col-span-6">
            <figure className="relative border border-border bg-surface-2">
              <span className="absolute left-0 top-0 z-10 border-b border-r border-border bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Batch · WP-2406
              </span>
              <Image
                src="/wickpeptides-hero.png"
                alt="Wick Peptides research vial"
                width={1402}
                height={1122}
                preload
                sizes="(max-width: 1024px) 100vw, 640px"
                className="h-auto w-full"
              />
              <figcaption className="absolute bottom-0 right-0 z-10 flex items-baseline gap-2 border-l border-t border-border bg-white px-4 py-3">
                <span className="font-display text-2xl font-bold leading-none text-brand-navy">
                  99.7
                  <span className="align-top text-base">%</span>
                </span>
                <span className="font-mono text-[10px] uppercase leading-tight tracking-[0.16em] text-muted-foreground">
                  HPLC verified
                  <br />
                  purity
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
