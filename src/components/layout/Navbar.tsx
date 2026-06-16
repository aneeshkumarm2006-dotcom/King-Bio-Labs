"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, User, X } from "lucide-react";

import { CartButton } from "@/components/cart/CartButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/coas", label: "COAs" },
  { href: "/contact", label: "Contact" },
];

const TICKER = [
  "Research Use Only",
  "COA With Every Batch",
  "99%+ Verified Purity",
  "Same-Day Dispatch Before 5PM PST",
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility ticker */}
      <div className="hidden border-b border-white/10 bg-brand-navy text-white sm:block">
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-5 overflow-hidden py-2">
            {TICKER.map((t, i) => (
              <span
                key={t}
                className={cn(
                  "flex items-center gap-5 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-white/55",
                  i > 2 && "hidden lg:flex"
                )}
              >
                {i > 0 && (
                  <span aria-hidden="true" className="text-white/25">
                    /
                  </span>
                )}
                {t}
              </span>
            ))}
          </div>
          <Link
            href="/affiliates"
            className="whitespace-nowrap py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-white"
          >
            Affiliate Program →
          </Link>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b transition-colors duration-300",
          scrolled || mobileOpen
            ? "border-border bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80"
            : "border-border/60 bg-white"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1320px] items-center justify-between px-6 lg:h-20 lg:px-10">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Wick Peptides home"
          >
            <span
              aria-hidden="true"
              className="flex size-7 items-center justify-center bg-brand-navy font-mono text-[11px] font-bold text-white"
            >
              W
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight text-brand-navy sm:text-xl">
              Wick Peptides
            </span>
          </Link>

          {/* Desktop nav — right aligned, mono, top tick on active/hover */}
          <nav className="hidden items-stretch self-stretch lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-status={active ? "active" : undefined}
                  className="group relative flex items-center px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-brand-navy data-[status=active]:text-brand-navy"
                >
                  <span className="absolute inset-x-4 top-0 h-0.5 origin-left scale-x-0 bg-brand-navy transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <Link
              href="/auth"
              aria-label="Account"
              className="hidden size-10 items-center justify-center text-brand-navy transition-colors hover:bg-brand-light sm:inline-flex"
            >
              <User className="size-4" aria-hidden="true" />
            </Link>
            <CartButton />
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex size-10 items-center justify-center text-brand-navy transition-colors hover:bg-brand-light lg:hidden"
            >
              {mobileOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-b border-border bg-white lg:hidden">
          <div className="mx-auto flex w-full max-w-[1320px] flex-col px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "border-b border-border py-4 font-mono text-xs uppercase tracking-[0.2em] last:border-b-0",
                  isActive(link.href)
                    ? "text-brand-navy"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
