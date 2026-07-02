import { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  className?: string;
};

export function Chip({ children, className = "" }: ChipProps) {
  return (
    <span
      className={`inline-flex min-h-8 items-center rounded-[8px] border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-dim transition hover:border-accent/45 hover:bg-accent/10 hover:text-text ${className}`}
    >
      {children}
    </span>
  );
}
