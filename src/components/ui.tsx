import type { ReactNode } from "react";
import { cn } from "../utils/cn";

/* ---------------------------------- cards ---------------------------------- */

export function GlassCard({
  children,
  className,
  glow,
}: {
  children: ReactNode;
  className?: string;
  glow?: "purple" | "yellow" | "green";
}) {
  return (
    <div
      className={cn(
        "glass rounded-3xl",
        glow === "purple" && "glow-purple",
        glow === "yellow" && "glow-yellow",
        glow === "green" && "glow-green",
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
    <div className="anim inline-flex items-center gap-2 rounded-full border border-[rgba(139,92,246,0.45)] bg-[rgba(139,92,246,0.14)] px-4 py-1.5 text-[13px] font-semibold text-[#c4b5fd]">
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
        "anim anim-1 text-[34px] font-extrabold leading-snug tracking-tight",
        gradient ? "title-gradient" : "text-[#F8F8FF]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

/* ---------------------------------- pills ----------------------------------- */

const pillStyles = {
  purple:
    "border-[rgba(139,92,246,0.5)] bg-[rgba(139,92,246,0.18)] text-[#d6c7ff]",
  yellow:
    "border-[rgba(245,197,24,0.5)] bg-[rgba(245,197,24,0.12)] text-[#F5C518]",
  green:
    "border-[rgba(34,197,94,0.5)] bg-[rgba(34,197,94,0.12)] text-[#4ade80]",
  red: "border-[rgba(239,68,68,0.5)] bg-[rgba(239,68,68,0.12)] text-[#fca5a5]",
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
    <li className="flex items-start gap-3 text-[16px] leading-relaxed text-[#F8F8FF]">
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
    <li className={cn("flex items-start gap-3 text-[16px] leading-relaxed", className)}>
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[rgba(34,197,94,0.5)] bg-[rgba(34,197,94,0.14)] text-[13px] font-black text-[#22C55E]">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

/** Purple numbered item */
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
    <li className="flex items-start gap-3.5 text-[16px] leading-relaxed text-[#F8F8FF]">
      <span
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-[15px] font-extrabold",
          tone === "purple"
            ? "border-[rgba(139,92,246,0.5)] bg-[rgba(139,92,246,0.16)] text-[#c4b5fd]"
            : "border-[rgba(245,197,24,0.45)] bg-[rgba(245,197,24,0.1)] text-[#F5C518]",
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
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(245,197,24,0.1)] text-[26px]">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-[15.5px] font-bold leading-snug text-[#F8F8FF]">{title}</div>
        {sub && <div className="text-muted mt-0.5 text-[13px] leading-relaxed">{sub}</div>}
      </div>
    </div>
  );
}

/** RTL flow arrow (points left = forward in RTL) */
export function FlowArrow() {
  return <span className="shrink-0 text-[22px] font-black text-[#8B5CF6]">←</span>;
}

export function Bokeh() {
  return (
    <>
      <span className="bokeh h-72 w-72 bg-[rgba(139,92,246,0.16)]" style={{ top: "-6rem", left: "12%" }} />
      <span className="bokeh h-56 w-56 bg-[rgba(34,197,94,0.09)]" style={{ bottom: "-4rem", right: "8%" }} />
      <span className="bokeh h-40 w-40 bg-[rgba(245,197,24,0.07)]" style={{ top: "30%", right: "30%" }} />
    </>
  );
}
