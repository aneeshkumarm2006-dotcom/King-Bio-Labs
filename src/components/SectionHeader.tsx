import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/SectionLabel";

type SectionHeaderProps = {
  /** Section index, e.g. "02" — rendered as an oversized numeral on the left. */
  index?: string;
  /** Short mono eyebrow label. */
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  /** Optional element (badge, link) rendered under the heading. */
  action?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Restructured section intro: an oversized display index numeral anchors the
 * left rail with the mono label beneath it, and the heading + lede stack in a
 * wide right column — replacing the old hairline-topped, heading-beside-lede row.
 */
export function SectionHeader({
  index,
  label,
  title,
  lede,
  action,
  align = "left",
  tone = "light",
  className,
}: SectionHeaderProps) {
  const dark = tone === "dark";
  const centered = align === "center";

  if (centered) {
    return (
      <div className={cn("flex flex-col items-center text-center", className)}>
        <SectionLabel
          index={index}
          className={cn(dark && "text-white/70 [&>span:first-child]:bg-white/70")}
        >
          {label}
        </SectionLabel>
        <h2
          className={cn(
            "mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[2.7rem]",
            dark ? "text-white" : "text-brand-navy"
          )}
        >
          {title}
        </h2>
        {lede && (
          <div
            className={cn(
              "mt-5 max-w-2xl text-base leading-relaxed",
              dark ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {lede}
          </div>
        )}
        {action && <div className="mt-6">{action}</div>}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-x-10 gap-y-6 lg:grid-cols-12",
        className
      )}
    >
      {/* Left rail — oversized index numeral + mono label */}
      <div className="flex items-start gap-4 lg:col-span-4 lg:flex-col lg:gap-5">
        {index && (
          <span
            aria-hidden="true"
            className={cn(
              "font-display text-5xl font-extrabold leading-none tracking-tight tabular-nums sm:text-6xl lg:text-7xl",
              dark ? "text-white/15" : "text-brand-navy/12"
            )}
          >
            {index}
          </span>
        )}
        <SectionLabel
          className={cn(
            "pt-2 lg:pt-0",
            dark && "text-white/70 [&>span:first-child]:bg-white/70"
          )}
        >
          {label}
        </SectionLabel>
      </div>

      {/* Right column — heading + lede stacked */}
      <div className="lg:col-span-8">
        <h2
          className={cn(
            "font-display text-3xl font-bold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[2.7rem]",
            dark ? "text-white" : "text-brand-navy"
          )}
        >
          {title}
        </h2>
        {lede && (
          <div
            className={cn(
              "mt-5 max-w-2xl text-base leading-relaxed",
              dark ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {lede}
          </div>
        )}
        {action && <div className="mt-6">{action}</div>}
      </div>
    </div>
  );
}

export default SectionHeader;
