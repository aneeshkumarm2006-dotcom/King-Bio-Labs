import Link from "next/link";

import { SectionLabel } from "@/components/SectionLabel";

const LEGAL_NAV = [
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Refund & Return Policy", href: "/legal/refunds" },
  { label: "Research Use Disclaimer", href: "/legal/research-disclaimer" },
];

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 bg-brand-light">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
          {/* Sticky index rail */}
          <aside className="lg:col-span-3 lg:border-r lg:border-border lg:pr-8">
            <div className="lg:sticky lg:top-28 lg:py-16">
              <SectionLabel>Legal Index</SectionLabel>
              <nav className="mt-6 flex flex-col">
                {LEGAL_NAV.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-baseline gap-3 border-t border-border py-4 transition-colors last:border-b hover:bg-white"
                  >
                    <span className="font-mono text-[10px] tabular-nums text-brand-navy/40">
                      0{i + 1}
                    </span>
                    <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-brand-navy transition-colors group-hover:text-brand-blue">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article column */}
          <div className="lg:col-span-9">{children}</div>
        </div>
      </div>
    </main>
  );
}
