import Link from "next/link";
import { Mail, Clock, ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";

/**
 * Restructured: a single horizontal support ledger with three inline columns
 * (email · response window · CTA) divided by hairlines, replacing the pair of
 * equal-weight cards.
 */
export function ContactHelp() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeader
          index="06"
          label="Support"
          title="Questions About Your Research?"
          lede="Our team is on hand for product questions, order help, and guidance."
        />

        <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-[1.2fr_1fr_auto]">
          <a
            href="mailto:support@wickpeptides.com"
            className="group flex flex-col gap-3 bg-white p-8 transition-colors hover:bg-brand-light"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
                Email Us
              </span>
              <Mail className="size-5 text-brand-navy" aria-hidden="true" />
            </div>
            <span className="font-display text-xl font-semibold text-brand-navy transition-colors group-hover:text-brand-blue">
              support@wickpeptides.com
            </span>
          </a>

          <div className="flex flex-col gap-3 bg-white p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-blue">
                Response Within 24h
              </span>
              <Clock className="size-5 text-brand-navy" aria-hidden="true" />
            </div>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <span aria-hidden="true" className="size-1.5 bg-brand-blue" />
                Real-time community support
              </li>
              <li className="flex items-center gap-2.5">
                <span aria-hidden="true" className="size-1.5 bg-brand-blue" />
                Guidance on products and orders
              </li>
            </ul>
          </div>

          <Link
            href="/contact"
            className="group flex flex-col justify-between gap-6 bg-brand-navy p-8 text-white transition-colors hover:bg-brand-blue lg:w-64"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
              Contact Form
            </span>
            <span className="flex items-center justify-between gap-3 font-display text-xl font-semibold">
              Send a message
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactHelp;
