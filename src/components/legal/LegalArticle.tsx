import { SectionLabel } from "@/components/SectionLabel";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function LegalArticle({ title, children }: Props) {
  return (
    <article className="max-w-3xl py-16 lg:py-24">
      {/* Ruled dossier header */}
      <div className="border-t border-border pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <SectionLabel>LEGAL</SectionLabel>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Last updated: June 2026
          </span>
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-navy sm:text-5xl">
          {title}
        </h1>
      </div>

      <div className="prose mt-10 max-w-none space-y-4 border-t border-border pt-10 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:border-l-2 [&_h2]:border-brand-blue [&_h2]:pl-3 [&_h2]:font-mono [&_h2]:text-[13px] [&_h2]:font-semibold [&_h2]:uppercase [&_h2]:tracking-[0.14em] [&_h2]:text-brand-navy [&_strong]:text-foreground">
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
