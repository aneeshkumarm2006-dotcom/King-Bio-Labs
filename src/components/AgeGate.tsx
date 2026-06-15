"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

/** Persisted once the visitor confirms — gate stays dismissed across visits. */
const STORAGE_KEY = "kbl_age_verified";

/** Where under-21 visitors are sent when they decline. */
const EXIT_URL = "https://www.google.com";

/**
 * Age / qualified-researcher gate. Shows a blocking modal on the first visit
 * and remembers the choice in localStorage so it never reappears for a
 * returning, verified visitor.
 */
export function AgeGate() {
  // `null` = undecided this render; until hydration we render nothing to
  // avoid an SSR flash and a hydration mismatch.
  const [verified, setVerified] = useState<boolean | null>(null);

  useEffect(() => {
    let ok = false;
    try {
      ok = window.localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      // Storage disabled — treat as unverified and show the gate.
    }
    setVerified(ok);
  }, []);

  // Lock body scroll while the gate is visible.
  useEffect(() => {
    if (verified === false) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [verified]);

  function confirm() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Non-fatal — the gate simply reappears next time.
    }
    setVerified(true);
  }

  function exit() {
    window.location.href = EXIT_URL;
  }

  // Not yet hydrated, or already verified — render nothing.
  if (verified !== false) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
    >
      <div className="w-full max-w-lg rounded-2xl bg-brand-light p-8 text-center shadow-2xl ring-1 ring-brand-border sm:p-10">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-navy/5 ring-1 ring-brand-navy/10">
          <ShieldCheck className="size-7 text-brand-navy" aria-hidden="true" />
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-blue">
          King Bio Labs
        </p>

        <h2
          id="age-gate-title"
          className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl"
        >
          For Qualified Researchers Only
        </h2>

        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
          This site contains research-grade compounds intended strictly for
          laboratory use. By entering, you confirm that you are{" "}
          <strong className="font-semibold text-brand-navy">
            21 years of age or older
          </strong>{" "}
          and a{" "}
          <strong className="font-semibold text-brand-navy">
            qualified researcher
          </strong>{" "}
          accessing these materials for non-human, in-vitro research only.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={exit}
            className="flex h-12 flex-1 items-center justify-center rounded-xl border border-brand-border bg-white px-5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-light"
          >
            I am under 21 - Exit
          </button>
          <button
            type="button"
            onClick={confirm}
            className="flex h-12 flex-1 items-center justify-center rounded-xl bg-brand-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
          >
            I am 21+ and a Researcher
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgeGate;
