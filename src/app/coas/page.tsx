import type { Metadata } from "next";
import { BadgeCheck, ChartColumn, FlaskConical } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { CoaList } from "@/components/coas/CoaList";

export const metadata: Metadata = {
  title: "COAs & Testing",
  description:
    "Every Wick Peptides batch undergoes independent analysis at ISO-accredited labs via HPLC and mass spectrometry. Explore and retrieve lot-specific Certificates of Analysis.",
};

const METHODS = [
  {
    icon: ChartColumn,
    title: "HPLC Testing",
    text: "High-Performance Liquid Chromatography measures purity and flags any impurities down to trace levels.",
  },
  {
    icon: FlaskConical,
    title: "Mass Spectrometry",
    text: "Verifies precise molecular identity and structural integrity on every batch we release.",
  },
  {
    icon: BadgeCheck,
    title: "Third-Party Accreditation",
    text: "Every test is run by independent ISO-accredited labs. We never grade our own product.",
  },
];

export default function CoasPage() {
  return (
    <main className="flex-1">
      {/* Centered intro */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeader
            align="center"
            label="Transparency"
            title="Every Batch Tested. Every Result Published."
            lede="No compound leaves our facility until an independent accredited laboratory has verified it. A Certificate of Analysis is linked to every batch, so you can confirm any vial you receive by its batch number."
          />
        </div>
      </section>

      {/* Method ledger — horizontal numbered rows */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="border-t border-border">
            {METHODS.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="grid items-start gap-x-8 gap-y-3 border-b border-border py-8 md:grid-cols-[6rem_14rem_minmax(0,1fr)_auto]"
              >
                <span className="font-display text-4xl font-extrabold leading-none tabular-nums text-brand-navy/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-semibold text-brand-navy">
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {text}
                </p>
                <Icon
                  className="size-6 shrink-0 text-brand-blue md:justify-self-end"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Published COAs */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <CoaList />
        </div>
      </section>
    </main>
  );
}
