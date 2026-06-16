"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Counts down to the next 5PM PST (UTC-8) same-day-shipping cutoff.
 * 17:00 PST === 01:00 UTC, so the daily cutoff is 01:00 UTC.
 *
 * The remaining time is computed only after mount (inside `useEffect`) so the
 * server-rendered HTML and the first client render both show the stable
 * placeholder — avoiding a hydration mismatch.
 */
function getMsUntilCutoff(now: Date): number {
  const target = new Date(now);
  target.setUTCHours(1, 0, 0, 0);
  if (target.getTime() <= now.getTime()) {
    target.setUTCDate(target.getUTCDate() + 1);
  }
  return target.getTime() - now.getTime();
}

function format(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hh = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const mm = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const ss = String(totalSeconds % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

export function CountdownTimer({ className }: { className?: string }) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(getMsUntilCutoff(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const display = remaining === null ? "--:--:--" : format(remaining);

  return (
    <div
      className={cn(
        "flex items-stretch border border-border bg-surface",
        className
      )}
    >
      <span className="flex items-center gap-2 border-r border-border bg-white px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <Clock className="size-4 shrink-0 text-brand-blue" aria-hidden="true" />
        Ship Cutoff
      </span>
      <span className="flex flex-1 flex-wrap items-center justify-between gap-x-3 gap-y-1 px-4 py-3 text-sm text-brand-navy">
        Place your order within{" "}
        <span className="font-mono text-lg font-semibold tabular-nums text-brand-navy">
          {display}
        </span>{" "}
        to ship today
      </span>
    </div>
  );
}

export default CountdownTimer;
