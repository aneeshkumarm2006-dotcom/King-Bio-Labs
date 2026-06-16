import type { Metadata } from "next";
import Link from "next/link";
import { DollarSign, Users, BarChart3, BadgeCheck } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { SectionLabel } from "@/components/SectionLabel";

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
      {/* Hero — full-width stacked headline with the lede pinned beneath */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <SectionLabel index="01">Affiliates</SectionLabel>
          <h1 className="mt-8 font-display text-5xl font-bold leading-[0.97] tracking-tight text-brand-navy sm:text-6xl lg:text-[5.5rem]">
            Affiliate
            <br />
            Program
          </h1>
          <p className="mt-8 max-w-2xl border-t border-border pt-8 text-lg leading-relaxed text-muted-foreground">
            Send qualified researchers to Wick Peptides and earn 15% on every
            order. The program is designed for scientists, clinicians, and
            professionals who rely on the standard we set.
          </p>
        </div>
      </section>

      {/* Benefits — horizontal numbered ledger rows, label on a left rail */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-x-10 gap-y-10 lg:grid-cols-[16rem_1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <SectionLabel index="02">Program Benefits</SectionLabel>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-brand-navy sm:text-4xl">
                Why partner
                <br />
                with us
              </h2>
            </div>
            <ol className="border-t border-border">
              {BENEFITS.map(({ icon: Icon, title, description }, i) => (
                <li
                  key={title}
                  className="grid items-start gap-x-6 gap-y-3 border-b border-border py-7 sm:grid-cols-[3.5rem_auto_minmax(0,1fr)]"
                >
                  <span className="font-display text-3xl font-extrabold tabular-nums leading-none text-brand-navy/20">
                    0{i + 1}
                  </span>
                  <span className="flex size-11 items-center justify-center border border-border bg-surface text-brand-blue">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-brand-navy">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* How it works — numbered ledger */}
      <section className="border-t border-border bg-brand-light">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeader
            align="center"
            index="03"
            label="How It Works"
            title="Earning in four steps"
          />
          <ol className="mt-14 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ number, title, description }) => (
              <li
                key={number}
                className="flex flex-col gap-4 bg-brand-light p-7 lg:p-8"
              >
                <span className="font-display text-6xl font-extrabold tabular-nums leading-none text-brand-navy/15">
                  {number}
                </span>
                <h3 className="mt-2 border-t border-border pt-4 font-display text-lg font-semibold text-brand-navy">
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
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 text-center lg:px-10 lg:py-28">
          <span className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
            <span aria-hidden="true" className="size-1.5 shrink-0 bg-white/70" />
            §04
          </span>
          <h2 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-bold leading-[1.04] tracking-tight text-white text-balance sm:text-5xl">
            Ready to team up with us?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/70">
            Email us to begin your application. Include your name, your
            institution or platform, and a short description of your audience.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:affiliates@wickpeptides.com"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-none bg-white px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-navy transition-colors hover:bg-brand-blue hover:text-white sm:w-auto"
            >
              Apply via Email
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-none border border-white/40 bg-transparent px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-brand-navy sm:w-auto"
            >
              Contact Us Instead
            </Link>
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-white/50">
            Applications reviewed in 2 business days ·{" "}
            <Link
              href="/legal/terms"
              className="text-white underline-offset-4 hover:underline"
            >
              Program Terms Apply
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
