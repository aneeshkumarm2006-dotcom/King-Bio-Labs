import type { Metadata } from "next";
import { ShieldCheck, FlaskConical, Fingerprint } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Wick Peptides exists for serious researchers who refuse to compromise. Every compound is independently tested, every COA published, every batch traceable from synthesis to bench.",
};

const PARAGRAPHS = [
  "We built Wick Peptides because we refuse to operate beneath the standard the research-compounds industry has tolerated for far too long. Most suppliers make claims they can’t back up. We back up everything we ship.",
  "Wick Peptides was built to work differently. Every compound we carry is independently tested, every COA is published, and every batch is traceable from synthesis straight to your bench.",
  "We’re not a supplement brand, and we’re not a wellness company. We exist for serious researchers who won’t compromise on what enters their lab.",
];

const CARDS = [
  {
    icon: ShieldCheck,
    title: "Verified Purity",
    text: "Every compound tested to 99%+ purity. No exceptions. No estimates.",
  },
  {
    icon: FlaskConical,
    title: "Independent Testing",
    text: "ISO-accredited third-party labs verify every batch we release.",
  },
  {
    icon: Fingerprint,
    title: "Full Traceability",
    text: "Batch numbers tie every vial to its specific COA - verifiable on receipt.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Dossier hero — asymmetric editorial column, left-aligned */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
          {/* Dossier strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 font-mono text-[11px] uppercase tracking-[0.22em]">
            <SectionLabel>About</SectionLabel>
            <span className="hidden text-brand-navy/45 sm:inline">
              Wick Peptides / Research-Grade Compounds
            </span>
          </div>

          <div className="grid gap-x-10 gap-y-10 py-20 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-7">
              <h1 className="font-display text-[2.75rem] font-extrabold leading-[0.98] tracking-tight text-brand-navy sm:text-6xl lg:text-[4.25rem]">
                The Standard.
                <br />
                <span className="text-brand-blue">Set Higher.</span>
              </h1>
            </div>

            <div className="flex flex-col gap-5 self-end lg:col-span-5">
              {PARAGRAPHS.map((text, i) => (
                <div
                  key={text}
                  className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-t border-border pt-5"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-navy/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standards ledger — hairline grid, mono indices 01–03 */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <SectionLabel index="01">The Standards We Hold</SectionLabel>
            <span className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-navy">
              ISO-17025 verified
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
            {CARDS.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="flex flex-col gap-4 bg-white p-6 lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-navy/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    className="size-5 shrink-0 text-brand-blue"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="font-display text-lg font-bold text-brand-navy">
                  {title}
                </h2>
                <p className="border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
