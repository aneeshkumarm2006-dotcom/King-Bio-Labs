import type { Metadata } from "next";
import { Clock, Mail } from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Wick Peptides about product questions, order issues, COA requests, and general inquiries. We reply within 24 hours, 7 days a week.",
};

const INFO_CARDS = [
  {
    icon: Mail,
    title: "Email",
    body: (
      <a
        href="mailto:support@wickpeptides.com"
        className="text-foreground underline-offset-4 hover:underline"
      >
        support@wickpeptides.com
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Response Time",
    body: "Inside 24 hours, every day of the week.",
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Dossier hero */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 font-mono text-[11px] uppercase tracking-[0.22em]">
            <span className="flex items-center gap-2.5 text-brand-blue">
              <span aria-hidden="true" className="size-1.5 bg-brand-navy" />
              CONTACT
            </span>
            <span className="hidden text-brand-navy/45 sm:inline">
              Wick Peptides / Research-Grade Compounds
            </span>
          </div>

          <div className="grid items-end gap-x-10 gap-y-6 py-16 lg:grid-cols-12 lg:py-24">
            <h1 className="font-display text-[2.75rem] font-extrabold leading-[0.98] tracking-tight text-brand-navy sm:text-6xl lg:col-span-7 lg:text-[4rem]">
              Get In Touch
            </h1>
            <p className="self-end text-base leading-relaxed text-muted-foreground lg:col-span-5">
              Have a question about a product, an order, or a Certificate of
              Analysis? Our team is ready to help — drop us a message and
              we&apos;ll reply within a day.
            </p>
          </div>
        </div>
      </section>

      {/* Asymmetric split — info ledger + form */}
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-28">
          {/* Left column — info as ruled hairline rows */}
          <div className="lg:col-span-5">
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <span className="inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand-blue">
                <span aria-hidden="true" className="size-1.5 shrink-0 bg-brand-navy" />
                <span className="text-brand-navy/50">§01</span>
                Reach Us
              </span>
            </div>

            <dl className="mt-8 border-t border-border">
              {INFO_CARDS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="grid items-start gap-x-6 gap-y-2 border-b border-border py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)]"
                >
                  <Icon
                    className="size-5 shrink-0 text-brand-blue"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-2">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {title}
                    </dt>
                    <dd className="text-base text-brand-navy">{body}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Right column — contact form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
