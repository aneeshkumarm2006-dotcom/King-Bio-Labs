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
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
        {/* Dossier header */}
        <SectionHeader
          index="01"
          label="Account"
          title="My Account"
          lede="Handle your orders, pull down COAs, and keep your account details current."
        />

        {/* Login prompt — ruled block */}
        <div className="mt-14 border-t border-border pt-6">
          <div className="border border-border bg-white">
            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center border border-border bg-surface text-brand-navy">
                  <LogIn className="size-5" />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-blue">
                    Authentication Required
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold text-brand-navy">
                    Log in to your account
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Signing in is required before you can see your account details.
                  </p>
                </div>
              </div>
              <Link
                href="/auth"
                className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-none bg-brand-navy px-7 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-blue"
              >
                <LogIn className="size-4" />
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* Section ledger rows */}
        <div className="mt-10 border-t border-border">
          {ACCOUNT_SECTIONS.map(({ icon: Icon, title, description, href }, i) => (
            <Link
              key={title}
              href={href}
              className="group grid items-center gap-x-6 gap-y-2 border-b border-border bg-white px-6 py-6 transition-colors hover:bg-surface sm:grid-cols-[3rem_minmax(0,1fr)_auto] lg:px-8"
            >
              <span className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-navy/40">
                <span className="tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="size-5 text-brand-blue" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-base font-semibold text-brand-navy">
                  {title}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
              <ArrowRight
                className="size-4 shrink-0 text-brand-navy transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
