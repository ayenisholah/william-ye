import { SectionHeading } from "@/components/SectionHeading";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { metricsBig, metricsSmall } from "@/lib/content";

export function Impact() {
  return (
    <section id="impact" aria-labelledby="impact-title" className="section-pad border-y border-white/[0.08] bg-bg2">
      <div className="mx-auto max-w-content">
        <SectionHeading n="03" label="Impact" title="Outcomes, in numbers." titleId="impact-title" />
        <div className="grid gap-4 lg:grid-cols-3">
          {metricsBig.map((metric, index) => (
            <Reveal key={metric.desc} delay={index * 0.06}>
              <div className="h-full rounded-[20px] border border-white/[0.08] bg-surface p-6 transition hover:border-accent/45 hover:bg-surface2">
                <div className="text-[clamp(3rem,7vw,5rem)] font-semibold leading-[0.86] tracking-[-0.04em] text-accent">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                </div>
                <p className="mt-6 text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.6] text-text">{metric.desc}</p>
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-accent">{metric.tag}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {metricsSmall.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.035}>
              <div className="rounded-[14px] border border-white/[0.08] bg-bg p-4">
                <div className="text-[clamp(1.8rem,3vw,2.3rem)] font-semibold leading-none tracking-[-0.03em] text-text">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                </div>
                <p className="mt-3 font-mono text-[0.67rem] uppercase tracking-[0.12em] text-dim">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
