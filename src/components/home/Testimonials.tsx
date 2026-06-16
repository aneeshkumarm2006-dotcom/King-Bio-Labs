"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { StarRating } from "@/components/StarRating";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Dr. Jane Doe, PhD",
    title: "Principal Investigator · Example Research Lab",
    orders: 41,
    portrait: "/portrait-32.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Dr. John Smith",
    title: "Research Fellow · Sample Medical Institute",
    orders: 18,
    portrait: "/portrait-44.jpg",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Dr. Richard Roe, MD",
    title: "Research Director · Placeholder Longevity Center",
    orders: 27,
    portrait: "/portrait-76.jpg",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint occaecat.",
  },
  {
    name: "Dr. Mary Major, PharmD",
    title: "Lead Scientist · Demo Research Pharmacy",
    orders: 33,
    portrait: "/portrait-68.jpg",
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Dr. John Public",
    title: "Biochemistry Department · Example Affiliated Lab",
    orders: 22,
    portrait: "/portrait-52.jpg",
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
  },
  {
    name: "Dr. Alex Sample, PhD",
    title: "Senior Research Scientist · Sample Research Group",
    orders: 56,
    portrait: "/portrait-85.jpg",
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
];

/**
 * Testimonials carousel: three cards visible at a time on desktop with
 * prev/next arrow controls that page through the rest via scroll-snap.
 */
export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeader
          index="05"
          label="Verified Clients"
          title="Trusted by clinicians and researchers worldwide."
          lede="Each reviewer below is a confirmed buyer. We check every name, title, and order count against our customer ledger before it goes live."
        />

        {/* Controls */}
        <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {TESTIMONIALS.length} verified reviews
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              disabled={!canPrev}
              aria-label="Previous testimonials"
              className={cn(
                "inline-flex size-11 items-center justify-center border border-border text-brand-navy transition-colors",
                canPrev
                  ? "hover:bg-brand-navy hover:text-white"
                  : "cursor-not-allowed opacity-35"
              )}
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              disabled={!canNext}
              aria-label="Next testimonials"
              className={cn(
                "inline-flex size-11 items-center justify-center border border-border text-brand-navy transition-colors",
                canNext
                  ? "hover:bg-brand-navy hover:text-white"
                  : "cursor-not-allowed opacity-35"
              )}
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Track — three cards visible at a time on desktop */}
        <div
          ref={trackRef}
          className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex shrink-0 basis-full snap-start flex-col gap-4 border border-border bg-white p-6 sm:basis-[calc(50%-0.625rem)] lg:basis-[calc(33.333%-0.834rem)] lg:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <StarRating rating={5} size={15} />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-blue">
                  Verified — {t.orders} orders
                </span>
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed text-brand-navy/80">
                “{t.quote}”
              </blockquote>

              <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                <Image
                  src={t.portrait}
                  alt={`Portrait of ${t.name}`}
                  width={44}
                  height={44}
                  className="size-11 rounded-full border border-border object-cover"
                />
                <div className="flex flex-col">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-navy">
                    {t.name}
                    <BadgeCheck className="size-4 text-brand-blue" />
                  </span>
                  <span className="text-xs text-muted-foreground">{t.title}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row">
          <span>All reviews verified against order ledger</span>
          <span className="text-brand-navy">
            4.9 / 5 average across 12,000+ orders
          </span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
