import { cn } from "@/lib/utils";

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
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col gap-2 px-3 py-8 sm:px-6 lg:px-8 lg:py-10",
                "border-l border-border",
                i % 2 === 0 && "border-l-0",
                "lg:border-l",
                i === 0 && "lg:border-l-0",
                i >= 2 && "border-t border-border lg:border-t-0"
              )}
            >
              <dd className="font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default TrustBar;
