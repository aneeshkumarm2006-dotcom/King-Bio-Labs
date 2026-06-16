import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "A complete directory of every page across the Wick Peptides website — shop, products, legal documents, and account pages.",
};

type SitemapLink = { label: string; href: string; description?: string };
type SitemapSection = { title: string; links: SitemapLink[] };

const SITEMAP: SitemapSection[] = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/", description: "Research-grade compounds with verified purity." },
      { label: "About", href: "/about", description: "The standard we hold and the reasons behind it." },
      { label: "Contact", href: "/contact", description: "Reach out to our team." },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Shop All Compounds", href: "/shop", description: "The complete catalog of 27 research compounds." },
      { label: "Build a Bundle", href: "/bundle", description: "Pick any 5 peptides and take 10% off." },
    ],
  },
  {
    title: "Research & Testing",
    links: [
      {
        label: "COAs & Testing",
        href: "/coas",
        description: "Each batch tested and each result made public.",
      },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign In / Register", href: "/auth", description: "Get into your account." },
      { label: "My Account", href: "/account", description: "Your orders, COAs, and settings." },
      { label: "Affiliate Program", href: "/affiliates", description: "Team up with us and earn 15%." },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Refund & Return Policy", href: "/legal/refunds" },
      { label: "Research Use Disclaimer", href: "/legal/research-disclaimer" },
    ],
  },
];

function LinkRow({ label, href, description }: SitemapLink) {
  return (
    <li>
      <Link
        href={href}
        className="group grid items-baseline gap-x-6 gap-y-1 border-t border-border px-5 py-4 transition-colors first:border-t-0 hover:bg-brand-light sm:grid-cols-[16rem_minmax(0,1fr)_auto]"
      >
        <span className="font-display text-base font-semibold text-brand-navy transition-colors group-hover:text-brand-blue">
          {label}
        </span>
        {description ? (
          <span className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </span>
        ) : (
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70">
            {href}
          </span>
        )}
        <ArrowUpRight
          className="hidden size-4 shrink-0 self-center text-brand-blue transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:block"
          aria-hidden="true"
        />
      </Link>
    </li>
  );
}

export default function SitemapPage() {
  return (
    <main className="flex-1 bg-brand-light">
      <section className="border-b border-border bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 font-mono text-[11px] uppercase tracking-[0.22em]">
            <span className="flex items-center gap-2.5 text-brand-blue">
              <span aria-hidden="true" className="size-1.5 bg-brand-navy" />
              Navigation
            </span>
            <span className="hidden text-brand-navy/45 sm:inline">
              Wick Peptides / Site Index
            </span>
          </div>

          <div className="grid items-end gap-x-10 gap-y-6 py-16 lg:grid-cols-12 lg:py-24">
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-navy sm:text-5xl lg:col-span-7">
              Sitemap
            </h1>
            <p className="self-end leading-relaxed text-muted-foreground lg:col-span-5">
              A full directory of every page across the Wick Peptides website.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col">
            {SITEMAP.map(({ title, links }, i) => (
              <div
                key={title}
                className="border-t border-border pt-8 [&:not(:first-child)]:mt-12"
              >
                <SectionLabel index={String(i + 1).padStart(2, "0")}>
                  {title}
                </SectionLabel>
                <ul className="mt-5 border border-border bg-white">
                  {links.map((link) => (
                    <LinkRow key={link.href} {...link} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
