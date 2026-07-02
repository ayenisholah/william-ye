type SectionHeadingProps = {
  n: string;
  label: string;
  title?: string;
  titleId?: string;
  note?: string;
};

export function SectionHeading({ n, label, title, titleId, note }: SectionHeadingProps) {
  return (
    <div className="mb-[clamp(32px,5vw,58px)]">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-xs text-accent">{n}</span>
        <span className="h-px w-10 bg-white/[0.15]" />
        <span className="mono-label text-dim">{label}</span>
      </div>
      {title ? (
        <h2 id={titleId} className="text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-text">
          {title}
        </h2>
      ) : null}
      {note ? <p className="mt-3 max-w-2xl font-mono text-xs uppercase tracking-[0.12em] text-dim">{note}</p> : null}
    </div>
  );
}
