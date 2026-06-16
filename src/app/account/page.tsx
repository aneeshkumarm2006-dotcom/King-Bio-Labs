import type { Metadata } from "next";
import Link from "next/link";
import {
  Package,
  FileText,
  Settings,
  ArrowRight,
  LogIn,
} from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "My Account",
  description:
    "Oversee your Wick Peptides account, review your order history, and retrieve Certificates of Analysis.",
};

const ACCOUNT_SECTIONS = [
  {
    icon: Package,
    title: "Order History",
    description: "Browse and follow every one of your past and active orders.",
    href: "#",
  },
  {
    icon: FileText,
    title: "My COAs",
    description: "Retrieve the Certificate of Analysis for each of your purchases.",
    href: "/coas",
  },
  {
    icon: Settings,
    title: "Account Settings",
    description: "Edit your email, password, and shipping address.",
    href: "#",
  },
];

export default function AccountPage() {
  return (
    <main className="flex-1 bg-brand-light">
      {/* Full-bleed navy login band — oversized numeral + sign-in, before any intro */}
      <section className="border-b border-white/10 bg-brand-navy text-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid items-center gap-x-10 gap-y-8 lg:grid-cols-[auto_1fr_auto]">
            <span
              aria-hidden="true"
              className="font-display text-7xl font-extrabold leading-none tracking-tight text-white/15 sm:text-8xl"
            >
              00
            </span>
            <div className="border-l border-white/15 pl-6 lg:pl-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
                Authentication Required
              </p>
              <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Log in to your account
              </h1>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                Signing in is required before you can see your account details.
              </p>
            </div>
            <Link
              href="/auth"
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-none bg-white px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-navy transition-colors hover:bg-brand-blue hover:text-white"
            >
              <LogIn className="size-4" />
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
        {/* Centered dossier intro */}
        <SectionHeader
          align="center"
          index="01"
          label="Account"
          title="My Account"
          lede="Handle your orders, pull down COAs, and keep your account details current."
        />

        {/* Section ledger — oversized numeral rows with hairline separators */}
        <div className="mt-16 border-t border-border">
          {ACCOUNT_SECTIONS.map(({ icon: Icon, title, description, href }, i) => (
            <Link
              key={title}
              href={href}
              className="group grid items-center gap-x-8 gap-y-3 border-b border-border bg-white px-6 py-8 transition-colors hover:bg-surface sm:grid-cols-[5rem_auto_minmax(0,1fr)_auto] lg:px-10"
            >
              <span className="font-display text-4xl font-extrabold tabular-nums leading-none text-brand-navy/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex size-11 items-center justify-center border border-border bg-surface text-brand-blue">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold text-brand-navy">
                  {title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
              <ArrowRight
                className="size-4 shrink-0 justify-self-end text-brand-navy transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
