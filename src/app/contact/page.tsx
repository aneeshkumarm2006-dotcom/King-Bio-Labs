import type { Metadata } from "next";
import { Clock, Mail } from "lucide-react";

import { SectionLabel } from "@/components/SectionLabel";
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
      {/* Centered full-bleed intro */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <SectionLabel className="justify-center">Contact</SectionLabel>
            <h1 className="mt-8 font-display text-[2.75rem] font-extrabold leading-[0.98] tracking-tight text-brand-navy sm:text-6xl lg:text-[5rem]">
              Get In Touch
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
              Have a question about a product, an order, or a Certificate of
              Analysis? Our team is ready to help — drop us a message and
              we&apos;ll reply within a day.
            </p>
          </div>
        </div>
      </section>

      {/* Form-forward split — form leads, contact rail trails */}
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-28">
          {/* Form takes the wide lead column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Reach-us rail — stacked oversized index rows */}
          <aside className="lg:col-span-5">
            <SectionLabel index="01">Reach Us</SectionLabel>
            <dl className="mt-8">
              {INFO_CARDS.map(({ icon: Icon, title, body }, i) => (
                <div
                  key={title}
                  className="flex items-start gap-5 border-t border-border py-7 last:border-b"
                >
                  <span className="font-display text-3xl font-extrabold leading-none tabular-nums text-brand-navy/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-1 flex-col gap-2">
                    <dt className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      <Icon
                        className="size-4 shrink-0 text-brand-blue"
                        aria-hidden="true"
                      />
                      {title}
                    </dt>
                    <dd className="text-base text-brand-navy">{body}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <p className="mt-8 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-brand-navy/45">
              Wick Peptides / Research-Grade Compounds
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
