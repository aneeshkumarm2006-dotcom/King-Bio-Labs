// Site-wide footer. Rendered once in the root layout so every page shares it.
import Link from "next/link";

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
    <footer className="border-t border-white/10 bg-brand-navy text-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        {/* Brand + link columns */}
        <div className="grid gap-10 border-b border-white/10 py-14 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-5">
            <span className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Wick Peptides
            </span>
            <p className="mt-4 max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-white/55">
              Confirmed Purity. Built For Serious Researchers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
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
        </div>

        {/* Payments, copyright, disclaimer */}
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
