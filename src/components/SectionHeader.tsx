import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/SectionLabel";

type SectionHeaderProps = {
  /** Section index, e.g. "02" — rendered as "§02" in the label row. */
  index?: string;
  /** Short mono eyebrow label. */
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  /** Optional right-aligned element (badge, link) on the label row. */
  action?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Standard ruled section intro. Replaces the old centered eyebrow→heading→paragraph
 * cluster with a hairline-topped, asymmetric, left-aligned dossier header.
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

  return (
    <div
      className={cn(
        "border-t pt-6",
        dark ? "border-white/15" : "border-border",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-center gap-4",
          centered ? "justify-center" : "justify-between"
        )}
      >
        <SectionLabel
          index={index}
          className={cn(
            dark && "text-white/70 [&>span:first-child]:bg-white/70"
          )}
        >
          {label}
        </SectionLabel>
        {action && !centered && <div className="shrink-0">{action}</div>}
      </div>

      <div
        className={cn(
          "mt-6 grid gap-x-10 gap-y-4 lg:grid-cols-12",
          centered && "place-items-center text-center"
        )}
      >
        <h2
          className={cn(
            "font-display text-3xl font-bold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[2.7rem]",
            dark ? "text-white" : "text-brand-navy",
            centered ? "max-w-3xl lg:col-span-12" : "lg:col-span-7"
          )}
        >
          {title}
        </h2>
        {lede && (
          <div
            className={cn(
              "self-end text-base leading-relaxed",
              dark ? "text-white/70" : "text-muted-foreground",
              centered ? "max-w-2xl lg:col-span-12" : "lg:col-span-5"
            )}
          >
            {lede}
          </div>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;
