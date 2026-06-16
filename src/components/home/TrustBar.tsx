const STATS = [
  { value: "99%+", label: "Purity floor" },
  { value: "Every batch", label: "COA" },
  { value: "Same day", label: "Dispatch" },
  { value: "24h reply", label: "Support" },
];

export function TrustBar() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
        <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:gap-12 lg:py-12">
          <p className="shrink-0 font-mono text-[11px] uppercase leading-relaxed tracking-[0.22em] text-brand-blue lg:w-44">
            <span aria-hidden="true" className="mr-2.5 inline-block size-1.5 bg-brand-navy align-middle" />
            Every order
            <br className="hidden lg:block" /> ships with
          </p>
          <dl className="grid flex-1 grid-cols-2 gap-y-8 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-baseline gap-3 sm:flex-col sm:gap-2 lg:pl-10 ${
                  i > 0 ? "sm:border-l sm:border-border" : ""
                }`}
              >
                <dd className="font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
                  {stat.value}
                </dd>
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
