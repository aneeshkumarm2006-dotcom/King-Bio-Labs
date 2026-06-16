import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BundleCTA() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="relative overflow-hidden border border-brand-navy bg-white">
          <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
            <div className="lg:col-span-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue">
                Bundle &amp; Save
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-brand-navy sm:text-5xl">
                Build Your Bundle
              </h2>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">
                Choose Any 5 Peptides. Save 10% Automatically.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/bundle"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-none bg-brand-navy px-8 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-blue"
                >
                  Build Your Bundle
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Always 10% off. No code needed.
                </span>
              </div>
            </div>
            <div className="hidden items-center justify-end lg:col-span-4 lg:flex">
              <span
                aria-hidden="true"
                className="font-display text-[8rem] font-extrabold leading-none tracking-tighter text-brand-navy/10"
              >
                10%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BundleCTA;
