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
      {/* Full-bleed stacked headline band */}
      <section className="border-b border-border bg-brand-navy text-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-32">
          <SectionLabel className="text-white/70 [&>span:first-child]:bg-white/70">
            About / Wick Peptides
          </SectionLabel>
          <h1 className="mt-10 font-display text-[3.25rem] font-extrabold leading-[0.92] tracking-tight sm:text-7xl lg:text-[7.5rem]">
            The Standard.
          </h1>
          <h1 className="font-display text-[3.25rem] font-extrabold leading-[0.92] tracking-tight text-brand-blue sm:text-7xl lg:text-[7.5rem]">
            Set Higher.
          </h1>
          <p className="mt-10 max-w-xl font-mono text-[11px] uppercase leading-relaxed tracking-[0.22em] text-white/55">
            Research-Grade Compounds — independently tested, fully published,
            traceable from synthesis to bench.
          </p>
        </div>
      </section>

      {/* Centered manifesto — numbered horizontal ledger */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel index="00" className="justify-center">
              Why We Exist
            </SectionLabel>
          </div>
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
            {PARAGRAPHS.map((text, i) => (
              <div key={text} className="flex flex-col gap-6 bg-white p-8 lg:p-10">
                <span className="font-display text-5xl font-extrabold leading-none tracking-tight tabular-nums text-brand-navy/12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards — flipped split: stacked rows, label rail right */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
            <div className="lg:order-2 lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <SectionLabel index="01">The Standards We Hold</SectionLabel>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  Three commitments we never negotiate on.
                </p>
                <span className="mt-6 inline-block border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-navy">
                  ISO-17025 verified
                </span>
              </div>
            </div>

            <div className="lg:order-1 lg:col-span-8">
              <div className="border-t border-border">
                {CARDS.map(({ icon: Icon, title, text }, i) => (
                  <div
                    key={title}
                    className="grid grid-cols-[3rem_minmax(0,1fr)_auto] items-start gap-x-6 gap-y-3 border-b border-border py-8"
                  >
                    <span className="font-display text-2xl font-extrabold leading-none tabular-nums text-brand-navy/15">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h2 className="font-display text-xl font-bold text-brand-navy">
                        {title}
                      </h2>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {text}
                      </p>
                    </div>
                    <Icon
                      className="size-6 shrink-0 text-brand-blue"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
