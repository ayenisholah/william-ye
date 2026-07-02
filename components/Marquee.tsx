import { marqueeTokens } from "@/lib/content";

export function Marquee() {
  const text = marqueeTokens.join(" / ");

  return (
    <div className="overflow-hidden border-y border-white/[0.08] bg-bg2 py-4">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.22em] text-dim">
        <span>{text}</span>
        <span aria-hidden="true">{text}</span>
        <span aria-hidden="true">{text}</span>
        <span aria-hidden="true">{text}</span>
      </div>
    </div>
  );
}
