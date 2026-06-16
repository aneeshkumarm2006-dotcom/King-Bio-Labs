import type { Metadata } from "next";
import Link from "next/link";
import { DollarSign, Users, BarChart3, BadgeCheck } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description:
    "Become a Wick Peptides affiliate. Earn commissions when you refer qualified researchers to the most trusted source for research-grade compounds.",
};

const BENEFITS = [
  {
    icon: DollarSign,
    title: "15% Commission",
    description:
      "Collect 15% on each order made through your referral link, paid out monthly.",
  },
  {
    icon: Users,
    title: "90-Day Cookie",
    description:
      "We track referrals for 90 days, so you still earn credit when customers return.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    description:
      "Monitor clicks, conversions, and earnings live from your affiliate dashboard.",
  },
  {
    icon: BadgeCheck,
    title: "Dedicated Support",
    description:
      "A dedicated affiliate manager works with you to grow your earnings from day one.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Apply",
    description:
      "Complete the form below. We review applications within 2 business days.",
  },
  {
    number: "02",
    title: "Get Your Link",
    description:
      "Get a unique referral link along with access to your affiliate dashboard.",
  },
  {
    number: "03",
    title: "Share",
    description:
      "Pass your link along to your network — researchers, clinicians, and lab professionals.",
  },
  {
    number: "04",
    title: "Earn",
    description:
      "Commissions tally automatically and arrive each month by bank transfer.",
  },
];

export default function AffiliatesPage() {
  return (
    <main className="flex-1 bg-brand-light">
      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeader
            index="01"
            label="Affiliates"
            title="Affiliate Program"
            lede="Send qualified researchers to Wick Peptides and earn 15% on every order. The program is designed for scientists, clinicians, and professionals who rely on the standard we set."
          />
        </div>
      </section>

      {/* Benefits — hairline grid with mono indices */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="border-t border-border pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-navy/50">
                §02
              </span>
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
              Program Benefits
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ icon: Icon, title, description }, i) => (
              <div key={title} className="flex flex-col gap-4 bg-white p-6 lg:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-navy/40 tabular-nums">
                    §0{i + 1}
                  </span>
                  <Icon className="size-5 text-brand-blue" aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-semibold text-brand-navy">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — numbered ledger */}
      <section className="border-t border-border bg-brand-light">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeader
            index="03"
            label="How It Works"
            title="Earning in four steps"
          />
          <ol className="mt-12 border-t border-border">
            {STEPS.map(({ number, title, description }) => (
              <li
                key={number}
                className="grid items-start gap-x-8 gap-y-2 border-b border-border py-7 sm:grid-cols-[4rem_16rem_minmax(0,1fr)]"
              >
                <span className="font-display text-3xl font-bold tabular-nums text-brand-navy/25">
                  {number}
                </span>
                <h3 className="font-display text-lg font-semibold text-brand-navy">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Apply CTA — inverted navy ruled band */}
      <section className="border-t border-white/10 bg-brand-navy text-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid items-center gap-x-10 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
                <span aria-hidden="true" className="size-1.5 shrink-0 bg-white/70" />
                §04
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to team up with us?
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-white/70">
                Email us to begin your application. Include your name, your
                institution or platform, and a short description of your audience.
              </p>
            </div>

            <div className="flex flex-col gap-5 border-t border-white/15 pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="mailto:affiliates@wickpeptides.com"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-none bg-white px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-navy transition-colors hover:bg-brand-blue hover:text-white"
                >
                  Apply via Email
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-none border border-white/40 bg-transparent px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-brand-navy"
                >
                  Contact Us Instead
                </Link>
              </div>
              <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-white/50">
                Applications reviewed in 2 business days ·{" "}
                <Link
                  href="/legal/terms"
                  className="text-white underline-offset-4 hover:underline"
                >
                  Program Terms Apply
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
