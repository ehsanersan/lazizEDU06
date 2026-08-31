import type { ReactNode } from "react";
import { cn } from "../utils/cn";

/* ---------------------------------- cards ---------------------------------- */

export function GlassCard({
  children,
  className,
  glow,
  ring,
}: {
  children: ReactNode;
  className?: string;
  glow?: "purple" | "yellow" | "green";
  /** thin purple→yellow→green gradient border */
  ring?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass rounded-3xl",
        glow === "purple" && "glow-purple",
        glow === "yellow" && "glow-yellow",
        glow === "green" && "glow-green",
        ring && "gradient-ring",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* --------------------------------- headers --------------------------------- */

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div className="anim inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(124,58,237,0.35)] bg-[rgba(139,92,246,0.1)] px-4 py-1.5 text-[13px] font-semibold text-[#6D28D9]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
      {children}
    </div>
  );
}

export function SlideTitle({
  children,
  className,
  gradient,
}: {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}) {
  return (
    <h2
      className={cn(
        "anim anim-1 w-fit text-[34px] font-extrabold leading-snug tracking-tight",
        gradient ? "title-gradient" : "text-[#23203F]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

/* ---------------------------------- pills ----------------------------------- */

const pillStyles = {
  purple: "border-[rgba(124,58,237,0.4)] bg-[rgba(139,92,246,0.12)] text-[#6D28D9]",
  yellow: "border-[rgba(245,197,24,0.7)] bg-[rgba(245,197,24,0.16)] text-[#946B00]",
  green: "border-[rgba(34,197,94,0.45)] bg-[rgba(34,197,94,0.11)] text-[#15803D]",
  red: "border-[rgba(239,68,68,0.4)] bg-[rgba(254,226,226,0.65)] text-[#B91C1C]",
} as const;

export function Pill({
  children,
  tone = "purple",
  className,
}: {
  children: ReactNode;
  tone?: keyof typeof pillStyles;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[15px] font-bold leading-relaxed backdrop-blur-md",
        pillStyles[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ------------------------------- list items -------------------------------- */

/** Yellow diamond bullet item */
export function DiamondItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[16px] leading-relaxed text-[#23203F]">
      <span className="mt-[9px] inline-block h-2.5 w-2.5 shrink-0 rotate-45 rounded-[2px] bg-[#F5C518]" />
      <span>{children}</span>
    </li>
  );
}

/** Green checkmark item */
export function CheckItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("flex items-start gap-3 text-[16px] leading-relaxed text-[#23203F]", className)}>
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[rgba(34,197,94,0.5)] bg-[rgba(34,197,94,0.12)] text-[13px] font-black text-[#16A34A]">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

/** Numbered item */
export function NumItem({
  n,
  children,
  tone = "purple",
}: {
  n: string;
  children: ReactNode;
  tone?: "purple" | "yellow";
}) {
  return (
    <li className="flex items-start gap-3.5 text-[16px] leading-relaxed text-[#23203F]">
      <span
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-[15px] font-extrabold",
          tone === "purple"
            ? "border-[rgba(124,58,237,0.35)] bg-[rgba(139,92,246,0.1)] text-[#6D28D9]"
            : "border-[rgba(245,197,24,0.65)] bg-[rgba(245,197,24,0.16)] text-[#946B00]",
        )}
      >
        {n}
      </span>
      <span className="pt-0.5">{children}</span>
    </li>
  );
}

/* ------------------------------ misc elements ------------------------------ */

export function IconTile({
  icon,
  title,
  sub,
  className,
}: {
  icon: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass flex items-center gap-4 rounded-2xl px-5 py-4", className)}>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(245,197,24,0.16)] text-[26px]">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[15.5px] font-bold leading-snug text-[#23203F]">{title}</div>
        {sub && <div className="text-muted mt-0.5 text-[13px] leading-relaxed">{sub}</div>}
      </div>
    </div>
  );
}

/** statistic callout bubble with bold number */
export function StatBubble({ children, tone = "yellow" }: { children: ReactNode; tone?: "yellow" | "purple" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-xl border px-3.5 py-1 text-[19px] font-extrabold backdrop-blur-md",
        tone === "yellow"
          ? "border-[rgba(245,197,24,0.7)] bg-[rgba(245,197,24,0.16)] text-[#8A6400]"
          : "border-[rgba(124,58,237,0.4)] bg-[rgba(139,92,246,0.1)] text-[#6D28D9]",
      )}
    >
      {children}
    </span>
  );
}

/** RTL flow arrow (points left = forward in RTL) */
export function FlowArrow() {
  return <span className="shrink-0 text-[22px] font-black text-[#7C3AED]">←</span>;
}

/* ------------------------- backdrop: bokeh + shapes ------------------------- */

function Triangle({ className, size, fill }: { className?: string; size: number; fill: string }) {
  return (
    <svg className={cn("decor", className)} width={size} height={size} viewBox="0 0 100 100">
      <path
        d="M50 14 Q58 10 62 19 L90 76 Q97 90 85 89 L15 89 Q3 90 10 76 L38 19 Q42 10 50 14 Z"
        fill={fill}
      />
    </svg>
  );
}

/** soft purple / yellow / green bokeh orbs + abstract geometric decor */
export function Bokeh({ v = 1 }: { v?: 1 | 2 | 3 }) {
  return (
    <>
      <span className="bokeh h-72 w-72 bg-[rgba(139,92,246,0.2)]" style={{ top: "-6rem", left: "10%" }} />
      <span className="bokeh h-56 w-56 bg-[rgba(34,197,94,0.12)]" style={{ bottom: "-4.5rem", right: "7%" }} />
      <span className="bokeh h-44 w-44 bg-[rgba(245,197,24,0.2)]" style={{ top: "28%", right: "22%" }} />

      {v === 1 && (
        <>
          <span className="decor h-24 w-24 rounded-full border-[3px] border-[rgba(139,92,246,0.28)]" style={{ top: "8%", right: "6%" }} />
          <span
            className="decor blob h-28 w-28"
            style={{ bottom: "6%", left: "5%", background: "linear-gradient(140deg, rgba(34,197,94,0.18), rgba(34,197,94,0.04))" }}
          />
          <Triangle size={82} fill="rgba(245,197,24,0.2)" className="bottom-[14%] right-[38%] rotate-12" />
          <span className="decor h-3 w-3 rounded-full bg-[#8B5CF6]" style={{ top: "18%", left: "18%" }} />
        </>
      )}
      {v === 2 && (
        <>
          <span
            className="decor blob h-32 w-32"
            style={{
              top: "4%",
              left: "6%",
              transform: "rotate(22deg)",
              background: "linear-gradient(140deg, rgba(139,92,246,0.2), rgba(139,92,246,0.05))",
            }}
          />
          <span className="decor h-16 w-16 rounded-2xl border-[3px] border-[rgba(34,197,94,0.3)]" style={{ bottom: "10%", right: "12%", transform: "rotate(18deg)" }} />
          <span className="decor h-20 w-20 rounded-full border-[3px] border-dashed border-[rgba(245,197,24,0.65)]" style={{ top: "46%", left: "14%" }} />
          <span className="decor h-3 w-3 rotate-45 bg-[#F5C518]" style={{ top: "12%", right: "26%" }} />
        </>
      )}
      {v === 3 && (
        <>
          <span
            className="decor blob h-36 w-36"
            style={{
              bottom: "-2rem",
              right: "40%",
              transform: "rotate(-14deg)",
              background: "linear-gradient(140deg, rgba(245,197,24,0.22), rgba(245,197,24,0.05))",
            }}
          />
          <Triangle size={70} fill="rgba(139,92,246,0.18)" className="right-[8%] top-[58%] -rotate-6" />
          <span className="decor h-24 w-24 rounded-[28px] border-[3px] border-[rgba(139,92,246,0.22)]" style={{ top: "6%", left: "34%", transform: "rotate(14deg)" }} />
          <span className="decor h-3.5 w-3.5 rounded-full bg-[#22C55E]" style={{ top: "24%", right: "14%" }} />
        </>
      )}
    </>
  );
}
