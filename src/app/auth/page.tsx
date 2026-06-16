import type { Metadata } from "next";

import { SectionLabel } from "@/components/SectionLabel";
import { AuthForms } from "@/components/auth/AuthForms";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Log in or register to manage your Wick Peptides orders, retrieve COAs, and follow your research compound history.",
};

export default function AuthPage() {
  return (
    <main className="flex-1 bg-brand-light">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 lg:grid-cols-2">
        {/* Full-bleed navy intro panel */}
        <section className="relative flex flex-col justify-between gap-16 border-border bg-brand-navy px-6 py-16 lg:border-r lg:px-10 lg:py-24">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-white/60">
            <span className="flex items-center gap-2.5 text-white">
              <span aria-hidden="true" className="size-1.5 bg-white/70" />
              Secure Terminal
            </span>
            <span className="hidden sm:inline">01 / 01</span>
          </div>

          <div className="flex flex-col gap-6">
            <SectionLabel
              index="01"
              className="text-white/70 [&>span:first-child]:bg-white/70"
            >
              Account Access
            </SectionLabel>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Wick
              <br />
              Peptides
            </h1>
            <p className="max-w-md text-base leading-relaxed text-white/70">
              Log in to handle orders, pull down COAs, and follow your
              research history.
            </p>
          </div>

          <p className="max-w-md border-t border-white/15 pt-6 text-xs leading-relaxed text-white/60">
            This platform is for qualified researchers only. All products
            are for in-vitro laboratory research use only.{" "}
            <a
              href="/legal/research-disclaimer"
              className="text-white underline-offset-4 hover:underline"
            >
              Learn more
            </a>
            .
          </p>
        </section>

        {/* Auth forms (client — tabs for login / register) */}
        <section className="flex items-center justify-center px-6 py-16 lg:px-10 lg:py-24">
          <div className="w-full max-w-md">
            <AuthForms />
          </div>
        </section>
      </div>
    </main>
  );
}
