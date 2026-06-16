import { Mail, Clock } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";

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

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
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
                Response Within 24 Hours
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
        </div>
      </div>
    </section>
  );
}

export default ContactHelp;
