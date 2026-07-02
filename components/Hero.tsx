import { CursorGlow } from "@/components/CursorGlow";
import { NeuralCanvas } from "@/components/NeuralCanvas";
import { CountUp } from "@/components/ui/CountUp";
import { Typewriter } from "@/components/ui/Typewriter";
import { heroStats, profile } from "@/lib/content";

export function Hero() {
  return (
    <header id="top" className="relative flex min-h-screen items-center overflow-hidden px-[clamp(18px,5vw,40px)] py-28">
      <NeuralCanvas />
      <CursorGlow />
      <div className="relative z-10 mx-auto flex max-w-content flex-col items-start">
        <div className="mb-7 inline-flex min-h-10 items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 font-mono text-xs uppercase tracking-[0.12em] text-dim">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-45" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          {profile.available} · {profile.location}
        </div>
        <p className="mono-label mb-4 text-accent">{profile.role}</p>
        <h1 className="max-w-[12ch] text-[clamp(3.1rem,11vw,8.4rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-text">
          {profile.name}
        </h1>
        <p className="mt-8 max-w-3xl text-[clamp(1.35rem,2.6vw,2rem)] font-medium leading-[1.32] tracking-[-0.02em] text-dim">
          I design and ship production-grade <Typewriter words={profile.heroWords} /> - measured by the numbers they move.
        </p>
        <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="rounded-[14px] border border-white/[0.08] bg-surface/70 p-4">
              <div className="font-mono text-2xl font-semibold tracking-[-0.03em] text-text">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-dim">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#work" className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-mono text-xs uppercase tracking-[0.14em] text-bg transition hover:bg-text">
            View work →
          </a>
          <a href="#contact" className="inline-flex min-h-12 items-center rounded-full border border-white/[0.15] px-6 font-mono text-xs uppercase tracking-[0.14em] text-text transition hover:border-accent/60 hover:text-accent">
            Get in touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 font-mono text-[0.65rem] uppercase tracking-[0.28em] text-dim">
        SCROLL
      </div>
    </header>
  );
}
