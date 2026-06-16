import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  /** Optional section index, e.g. "01" — rendered as "§01". */
  index?: string;
};

/**
 * Monospace, ruled section eyebrow for the "Scientific Dossier" language:
 * a small navy tick, an optional §NN index, then the tracked mono label.
 */
export function SectionLabel({ children, className, index }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand-blue",
        className
      )}
    >
      <span aria-hidden="true" className="size-1.5 shrink-0 bg-brand-navy" />
      {index && <span className="text-brand-navy/50">§{index}</span>}
      {children}
    </span>
  );
}

export default SectionLabel;
