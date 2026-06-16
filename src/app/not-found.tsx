import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-1 items-center bg-brand-light px-6 py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center text-center lg:px-10">
        <SectionLabel>Error 404</SectionLabel>

        {/* Oversized index numeral */}
        <span
          aria-hidden="true"
          className="mt-8 font-display text-[8rem] font-extrabold leading-none tracking-tight tabular-nums text-brand-navy/12 sm:text-[12rem] lg:text-[16rem]"
        >
          404
        </span>

        <h1 className="-mt-2 font-display text-4xl font-bold leading-[1.02] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
          Page not found
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          The page you&rsquo;re after either doesn&rsquo;t exist or has been
          relocated. Our full catalog of compounds is still right here —
          let&rsquo;s point you back to it.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-none bg-brand-navy px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-blue"
          >
            <ArrowLeft className="size-4" />
            Return home
          </Link>
          <Link
            href="/shop"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-none border border-brand-navy bg-transparent px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
          >
            <Search className="size-4" />
            Explore the catalog
          </Link>
        </div>
      </div>
    </main>
  );
}
