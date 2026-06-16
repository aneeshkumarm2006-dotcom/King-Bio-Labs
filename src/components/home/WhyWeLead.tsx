import { SectionLabel } from "@/components/SectionLabel";

const POINTS = [
  {
    title: "Uncompromising Standard",
    text: "We refuse to ship anything we wouldn't run on our own bench. 99%+ purity, every batch, no exceptions.",
  },
  {
    title: "Complete Documentation",
    text: "Independent third-party COA published for every batch. Verifiable by lot number on receipt.",
  },
  {
    title: "Discreet, Secure Fulfillment",
    text: "Tamper-evident packaging, climate-aware shipping, full chain-of-custody from synthesis to bench.",
  },
  {
    title: "Built For Serious Researchers",
    text: "No supplement marketing. No wellness fluff. Just clean compounds for in-vitro research.",
  },
];

/**
 * Restructured: a full-width heading band on top, then the four points laid out
 * as a horizontal 4-up row of numbered columns beneath — replacing the old
 * heading-left / vertical-list-right split.
 */
export function WhyWeLead() {
  return (
    <section className="border-b border-border bg-brand-navy text-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionLabel className="text-white/70 [&>span:first-child]:bg-white/70">
              Why We Lead
            </SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Trust is earned, not claimed.
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-white/70">
            For too long the research-compounds industry has accepted rough
            edges — uneven purity, missing paperwork, suppliers who keep you
            guessing. We built Wick Peptides to operate above that line.
          </p>
        </div>

        <ol className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point, i) => (
            <li
              key={point.title}
              className="flex flex-col gap-4 bg-brand-navy pt-10 lg:gap-6 lg:pr-8 lg:pt-12"
            >
              <span className="font-display text-4xl font-extrabold tabular-nums text-white/25">
                0{i + 1}
              </span>
              <h3 className="font-display text-lg font-semibold leading-snug">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/65">
                {point.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default WhyWeLead;
