// Site-wide footer. Rendered once in the root layout so every page shares it.
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const COLUMNS = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Affiliate Program", href: "/affiliates" },
      { label: "Account", href: "/account" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Shop", href: "/shop" },
      { label: "COAs & Testing", href: "/coas" },
      { label: "Bundles", href: "/bundle" },
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
  {
    title: "Connect",
    links: [
      {
        label: "support@wickpeptides.com",
        href: "mailto:support@wickpeptides.com",
      },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

const PAYMENTS = ["VISA", "MC", "AMEX", "DISC", "BTC", "ETH"];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        {/* Contact band — tagline left, email CTA right */}
        <div className="flex flex-col gap-8 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-20">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
              Confirmed Purity. Built For Serious Researchers.
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl">
              Questions before you order?
            </h2>
          </div>
          <a
            href="mailto:support@wickpeptides.com"
            className="group inline-flex items-center gap-3 border border-white/25 px-6 py-4 font-mono text-[12px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-brand-navy"
          >
            support@wickpeptides.com
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Link columns — divided 4-up row */}
        <div className="grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 sm:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title} className="bg-brand-navy p-6 lg:p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Oversized wordmark */}
        <div className="overflow-hidden border-b border-white/10 py-8">
          <span
            aria-hidden="true"
            className="block font-display text-[15vw] font-extrabold leading-none tracking-tighter text-white/[0.07] lg:text-[10rem]"
          >
            Wick Peptides
          </span>
        </div>

        {/* Legal strip */}
        <div className="flex flex-col gap-6 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {PAYMENTS.map((p) => (
                <span
                  key={p}
                  className="border border-white/15 px-2.5 py-1 font-mono text-[11px] tracking-wider text-white/60"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
              © 2026 Wick Peptides LLC. All rights reserved.
            </p>
          </div>
          <p className="max-w-3xl text-xs leading-relaxed text-white/45">
            Wick Peptides provides research-use-only materials intended for
            laboratory applications. Batch documentation and COAs are provided
            with each product. Not for human consumption. Email:
            support@wickpeptides.com.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
