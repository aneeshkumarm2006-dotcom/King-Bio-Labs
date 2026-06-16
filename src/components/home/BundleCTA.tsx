import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Restructured: a full-bleed navy band split into a copy column and a framed
 * discount tile, replacing the bordered white card with a faint corner numeral.
 */
export function BundleCTA() {
  return (
    <section className="border-b border-border bg-brand-navy text-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              <span aria-hidden="true" className="mr-2.5 inline-block size-1.5 bg-white/70 align-middle" />
              Bundle &amp; Save
            </span>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.0] tracking-tight sm:text-5xl lg:text-6xl">
              Build Your Bundle
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/65">
              Choose Any 5 Peptides. Save 10% Automatically — no code needed.
            </p>
            <Link
              href="/bundle"
              className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-none bg-white px-8 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-navy transition-colors hover:bg-white/90"
            >
              Build Your Bundle
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-col items-center justify-center gap-3 border border-white/20 px-8 py-12 text-center lg:py-16">
              <span className="font-display text-7xl font-extrabold leading-none tracking-tighter lg:text-8xl">
                10%
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                Off Any 5 Peptides
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BundleCTA;
