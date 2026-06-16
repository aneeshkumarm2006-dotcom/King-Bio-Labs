import Link from "next/link";
import { ShieldCheck, Truck, FlaskConical, Clock } from "lucide-react";

import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "99% Purity Verified",
    text: "Every compound tested to 99%+ purity before it ships.",
  },
  {
    icon: Truck,
    title: "Same Day Shipping",
    text: "All orders ship same day before 5PM PST.",
  },
  {
    icon: FlaskConical,
    title: "Third-Party Tested",
    text: "Independent lab verification on every product we carry.",
  },
  {
    icon: Clock,
    title: "Fast Support",
    text: "We respond within 24 hours, 7 days a week.",
    href: "mailto:support@wickpeptides.com",
  },
];

export function Features() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, text, href }, i) => {
            const inner = (
              <div
                className={cn(
                  "flex h-full flex-col gap-4 bg-white p-6 lg:p-7",
                  href && "transition-colors group-hover:bg-brand-light"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
                    0{i + 1}
                  </span>
                  <Icon className="size-5 text-brand-navy" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-navy">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            );

            return href ? (
              <Link key={title} href={href} className="group block">
                {inner}
              </Link>
            ) : (
              <div key={title}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
