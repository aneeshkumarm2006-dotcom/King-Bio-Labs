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

export function WhyWeLead() {
  return (
    <section className="border-b border-border bg-brand-navy text-white">
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-28">
        <div className="lg:col-span-5">
          <SectionLabel className="text-white/70 [&>span:first-child]:bg-white/70">
            Why We Lead
          </SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.7rem]">
            Trust is earned, not claimed.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-white/70">
            For too long the research-compounds industry has accepted rough
            edges — uneven purity, missing paperwork, suppliers who keep you
            guessing. We built Wick Peptides to operate above that line, and we
            document every step so the promise speaks for itself.
          </p>
          <span className="mt-10 inline-block font-display text-xl font-extrabold tracking-tight text-white/25">
            Wick Peptides
          </span>
        </div>

        <div className="lg:col-span-7">
          <ol className="border-t border-white/15">
            {POINTS.map((point, i) => (
              <li
                key={point.title}
                className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-b border-white/15 py-6"
              >
                <span className="font-mono text-sm text-white/40">
                  0{i + 1}
                </span>
                <h3 className="font-display text-lg font-semibold">
                  {point.title}
                </h3>
                <span aria-hidden="true" />
                <p className="text-sm leading-relaxed text-white/65">
                  {point.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default WhyWeLead;
