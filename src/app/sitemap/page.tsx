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
      {/* Centered intro on a navy band */}
      <section className="bg-brand-navy">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center px-6 py-20 text-center lg:px-10 lg:py-28">
          <SectionLabel className="text-white/70 [&>span:first-child]:bg-white/70">
            Site Index
          </SectionLabel>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Sitemap
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-white/70">
            A full directory of every page across the Wick Peptides website.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col gap-16">
            {SITEMAP.map(({ title, links }, i) => (
              <div
                key={title}
                className="grid gap-x-10 gap-y-6 lg:grid-cols-12"
              >
                {/* Oversized index numeral rail */}
                <div className="flex items-baseline gap-4 lg:col-span-3 lg:flex-col lg:gap-4">
                  <span
                    aria-hidden="true"
                    className="font-display text-6xl font-extrabold leading-none tracking-tight tabular-nums text-brand-navy/12 lg:text-7xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <SectionLabel>{title}</SectionLabel>
                </div>

                {/* Link ledger */}
                <ul className="border border-border bg-white lg:col-span-9">
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
