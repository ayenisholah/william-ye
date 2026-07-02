type PlaceholderProps = {
  label: string;
  ratio?: "portrait" | "wide" | "feature";
  className?: string;
};

const ratios = {
  portrait: "aspect-[4/5]",
  wide: "aspect-video",
  feature: "aspect-[16/10]"
};

export function Placeholder({ label, ratio = "wide", className = "" }: PlaceholderProps) {
  return (
    <div
      aria-label={label}
      role="img"
      className={`relative grid overflow-hidden rounded-[18px] border border-white/[0.08] bg-surface ${ratios[ratio]} ${className}`}
    >
      <div className="absolute inset-0 opacity-70 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,.08)_0,rgba(255,255,255,.08)_1px,transparent_1px,transparent_16px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(184,242,78,.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,.04),transparent)]" />
      <div className="relative m-auto rounded-[8px] border border-white/[0.15] bg-bg/70 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">
        {label}
      </div>
    </div>
  );
}
