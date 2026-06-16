import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-1 items-center bg-brand-light px-6 py-20">
      <div className="mx-auto w-full max-w-[1320px] px-0 lg:px-10">
        <div className="grid items-end gap-x-10 gap-y-10 border-t border-border pt-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel>Error 404</SectionLabel>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-brand-navy sm:text-6xl lg:text-7xl">
              Page not found
            </h1>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-5 lg:pb-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              The page you&rsquo;re after either doesn&rsquo;t exist or has been
              relocated. Our full catalog of compounds is still right here —
              let&rsquo;s point you back to it.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
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
        </div>
      </div>
    </main>
  );
}
