import { SectionLabel } from "@/components/SectionLabel";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function LegalArticle({ title, children }: Props) {
  return (
    <article className="py-16 lg:py-24">
      {/* Full-width stacked headline */}
      <header className="flex flex-col gap-6">
        <SectionLabel>Legal Document</SectionLabel>
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <dl className="flex flex-wrap gap-x-12 gap-y-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <div className="flex flex-col gap-1">
            <dt className="text-brand-navy/45">Last Updated</dt>
            <dd className="text-brand-navy">June 2026</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-brand-navy/45">Status</dt>
            <dd className="text-brand-navy">Active</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-brand-navy/45">Jurisdiction</dt>
            <dd className="text-brand-navy">United States</dd>
          </div>
        </dl>
      </header>

      <div className="prose mt-12 max-w-3xl space-y-4 border-t-2 border-brand-navy pt-12 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:border-l-2 [&_h2]:border-brand-blue [&_h2]:pl-3 [&_h2]:font-mono [&_h2]:text-[13px] [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:tracking-[0.14em] [&_h2]:text-brand-navy [&_strong]:text-foreground">
        {children}
        <p className="text-xs text-muted-foreground">
          Placeholder text. Replace with reviewed legal copy before launch.
        </p>
      </div>
    </article>
  );
}

type SectionProps = {
  heading: string;
  children: React.ReactNode;
};

export function LegalSection({ heading, children }: SectionProps) {
  return (
    <>
      <h2>{heading}</h2>
      {children}
    </>
  );
}

export default LegalArticle;
