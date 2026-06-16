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
      <section className="border-b border-border bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 font-mono text-[11px] uppercase tracking-[0.22em]">
            <span className="flex items-center gap-2.5 text-brand-blue">
              <span aria-hidden="true" className="size-1.5 bg-brand-navy" />
              Account Access
            </span>
            <span className="hidden text-brand-navy/45 sm:inline">
              Wick Peptides / Secure Terminal
            </span>
          </div>
        </div>
      </section>

      <section className="bg-brand-light">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Dossier intro */}
            <div className="flex flex-col gap-6 lg:col-span-6">
              <SectionLabel index="01">Account Access</SectionLabel>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-navy sm:text-5xl">
                Wick Peptides
              </h1>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                Log in to handle orders, pull down COAs, and follow your
                research history.
              </p>

              <p className="mt-2 max-w-md border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
                This platform is for qualified researchers only. All products
                are for in-vitro laboratory research use only.{" "}
                <a
                  href="/legal/research-disclaimer"
                  className="text-brand-blue underline-offset-4 hover:underline"
                >
                  Learn more
                </a>
                .
              </p>
            </div>

            {/* Auth forms (client — tabs for login / register) */}
            <div className="lg:col-span-6 lg:col-start-8">
              <AuthForms />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
