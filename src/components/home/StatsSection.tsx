import {
  Beaker,
  ClipboardCheck,
  Microscope,
  FileText,
  Package,
  Truck,
} from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/utils";

const METRICS = [
  { value: "99.7%", label: "Average Purity", sub: "Last 12 months, all batches" },
  { value: "2,400+", label: "Batches Tested", sub: "Independent third-party COAs" },
  { value: "4", label: "Labs Verified", sub: "ISO-17025 accredited partners" },
  { value: "94%", label: "Reorder Rate", sub: "Within 90 days of first order" },
];

const PURITY_COMPARISON = [
  { name: "Wick Peptides", value: 99.7, highlight: true },
  { name: "Supplier A", value: 96.2 },
  { name: "Supplier B", value: 94.8 },
  { name: "Supplier C", value: 92.1 },
  { name: "Industry Average", value: 89.4 },
];

const TREND = [
  { label: "Q1 2023", value: 99.1 },
  { label: "Q2", value: 99.2 },
  { label: "Q3", value: 99.3 },
  { label: "Q4", value: 99.2 },
  { label: "Q1 2024", value: 99.4 },
  { label: "Q2", value: 99.5 },
  { label: "Q3", value: 99.4 },
  { label: "Q4", value: 99.6 },
  { label: "Q1 2025", value: 99.5 },
  { label: "Apr", value: 99.6 },
  { label: "May", value: 99.7 },
  { label: "Jun", value: 99.7 },
];

const STEPS = [
  {
    icon: Beaker,
    n: "01",
    title: "Synthesis",
    text: "Compound is produced at a cGMP-aligned facility under documented standard operating procedures.",
  },
  {
    icon: ClipboardCheck,
    n: "02",
    title: "In-House QC",
    text: "Identity and concentration confirmed by HPLC-UV and mass spectrometry before any batch leaves the synthesis floor.",
  },
  {
    icon: Microscope,
    n: "03",
    title: "Third-Party Assay",
    text: "Sealed samples shipped blind to an ISO-17025 accredited lab. Purity, residual solvents, and endotoxin screened.",
  },
  {
    icon: FileText,
    n: "04",
    title: "COA Published",
    text: "Lot-specific Certificate of Analysis attached to the product page and matched to the lot number on your vial.",
  },
  {
    icon: Package,
    n: "05",
    title: "Cold-Chain Pack",
    text: "Tamper-evident, climate-aware packaging assembled and sealed under camera before handoff.",
  },
  {
    icon: Truck,
    n: "06",
    title: "Same-Day Ship",
    text: "Orders before 5PM PST leave the warehouse same day with tracked, signature-required delivery.",
  },
];

const INSTITUTIONS = ["Stanford", "Johns Hopkins", "Naval Health", "ETH Zürich", "NUS"];

function PurityTrendChart() {
  const width = 600;
  const height = 220;
  const padX = 40;
  const padY = 30;
  const min = 98.9;
  const max = 99.9;

  const points = TREND.map((d, i) => {
    const x = padX + (i / (TREND.length - 1)) * (width - padX * 2);
    const y =
      height - padY - ((d.value - min) / (max - min)) * (height - padY * 2);
    return { ...d, x, y };
  });

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");

  const areaPath =
    `M ${points[0].x.toFixed(1)} ${(height - padY).toFixed(1)} ` +
    points.map((p) => `L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ") +
    ` L ${points[points.length - 1].x.toFixed(1)} ${(height - padY).toFixed(1)} Z`;

  const xLabels = ["Q1 2024", "Q2", "Q3", "Q4", "Q1 2025", "Q2"];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      role="img"
      aria-label="Purity trend over 24 months, rising from 99.1% to 99.7%"
    >
      {[99.0, 99.3, 99.6, 99.9].map((g) => {
        const y =
          height - padY - ((g - min) / (max - min)) * (height - padY * 2);
        return (
          <g key={g}>
            <line x1={padX} x2={width - padX} y1={y} y2={y} stroke="#e5e7eb" strokeWidth={1} />
            <text x={4} y={y + 4} fontSize={10} fill="#9ca3af" className="font-mono">
              {g.toFixed(1)}
            </text>
          </g>
        );
      })}
      <path d={areaPath} fill="#1e3a8a" fillOpacity={0.08} />
      <path
        d={linePath}
        fill="none"
        stroke="#0d1b4d"
        strokeWidth={2.5}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {points.map((p) => (
        <circle key={p.label + p.x} cx={p.x} cy={p.y} r={3} fill="#0d1b4d" />
      ))}
      {xLabels.map((label, i) => {
        const x = padX + (i / (xLabels.length - 1)) * (width - padX * 2);
        return (
          <text
            key={label + i}
            x={x}
            y={height - 8}
            fontSize={10}
            fill="#9ca3af"
            textAnchor="middle"
            className="font-mono"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}

export function StatsSection() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeader
          index="04"
          label="The Numbers Back It Up"
          title="The Benchmark For Researchers Who Won't Settle."
          lede="Independent labs, performance clinicians, and applied research teams across four continents ask for Wick Peptides by name. Here is what sets us apart."
        />

        {/* Metric ledger */}
        <div className="mt-12 grid grid-cols-2 gap-px border border-border bg-border lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col gap-1 bg-white p-6 lg:p-8">
              <span className="font-display text-4xl font-bold tabular-nums text-brand-navy lg:text-5xl">
                {m.value}
              </span>
              <span className="mt-2 text-sm font-semibold text-brand-navy">
                {m.label}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {m.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Comparison + trend */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Comparison */}
          <div className="flex flex-col border border-border bg-white">
            <div className="flex items-center justify-between gap-3 border-b border-border px-6 py-4">
              <div>
                <h3 className="font-display text-lg font-bold text-brand-navy">
                  Purity Comparison
                </h3>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  HPLC-verified across 6 competing suppliers
                </p>
              </div>
              <span className="shrink-0 border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-navy">
                Latest Batch
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              {PURITY_COMPARISON.map((row) => (
                <div key={row.name} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className={row.highlight ? "font-semibold text-brand-navy" : "text-muted-foreground"}>
                      {row.name}
                    </span>
                    <span className={cn("font-mono tabular-nums", row.highlight ? "font-semibold text-brand-navy" : "text-muted-foreground")}>
                      {row.value.toFixed(1)}%
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden bg-surface-2">
                    <div
                      className={row.highlight ? "h-full bg-brand-navy" : "h-full bg-brand-blue/40"}
                      style={{ width: `${row.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="border-t border-border px-6 py-4 text-xs leading-relaxed text-muted-foreground">
              Source: Eurofins Scientific (ISO-17025), blind assay April 2025.
              Method: HPLC-UV @ 214 nm, triplicate injection. Hover any row for
              lot detail.
            </p>
          </div>

          {/* Trend */}
          <div className="flex flex-col border border-border bg-white">
            <div className="flex items-center justify-between gap-3 border-b border-border px-6 py-4">
              <div>
                <h3 className="font-display text-lg font-bold text-brand-navy">
                  Purity Trend - 24 Months
                </h3>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Rolling average of all tested batches
                </p>
              </div>
              <span className="shrink-0 bg-green-100 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-green-700">
                +0.4% YoY
              </span>
            </div>
            <div className="flex-1 p-6">
              <PurityTrendChart />
            </div>
            <p className="border-t border-border px-6 py-4 text-xs leading-relaxed text-muted-foreground">
              Source: Internal batch ledger reconciled against 2,400+
              third-party COAs (Eurofins, SGS, Intertek, Alex Stewart). Hover any
              point for the quarter value.
            </p>
          </div>
        </div>

        {/* Testing process — checklist ledger */}
        <div className="mt-20 lg:mt-28">
          <div className="border-t border-border pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <SectionLabel>How We Test</SectionLabel>
              <span className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-navy">
                ISO-17025 verified
              </span>
            </div>
            <h3 className="mt-6 max-w-3xl font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
              Six checkpoints between synthesis and your bench.
            </h3>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Every lot follows the same documented chain. Miss a single
              checkpoint and the lot stays put — no exceptions, no expedites.
            </p>
          </div>

          <ol className="mt-10 border-t border-border">
            {STEPS.map(({ icon: Icon, n, title, text }) => (
              <li
                key={n}
                className="grid items-start gap-x-6 gap-y-2 border-b border-border py-6 sm:grid-cols-[3.5rem_minmax(0,1fr)] lg:grid-cols-[4rem_18rem_minmax(0,1fr)]"
              >
                <span className="font-mono text-2xl font-bold tabular-nums text-brand-navy/25">
                  {n}
                </span>
                <h4 className="flex items-center gap-3 font-display text-lg font-semibold text-brand-navy">
                  <Icon className="size-5 shrink-0 text-brand-blue" aria-hidden="true" />
                  {title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Institutions */}
        <div className="mt-16 flex flex-col items-start gap-6 border-t border-border pt-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            As Specified By
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {INSTITUTIONS.map((name) => (
              <span
                key={name}
                className="font-display text-sm font-bold uppercase tracking-wider text-brand-navy/45"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
