import { SectionHeading } from "@/components/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { focusAreas, profile } from "@/lib/content";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad">
      <div className="mx-auto max-w-content">
        <SectionHeading n="02" label="About" />
        <div className="grid gap-[clamp(28px,5vw,64px)] lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-5">
              <Placeholder label="drop headshot" ratio="portrait" />
              <div className="rounded-[18px] border border-white/[0.08] bg-surface p-5">
                {[
                  ["Location", profile.location],
                  ["Education", profile.education],
                  ["Focus", "AI systems · MLOps · NLP"],
                  ["Email", profile.email]
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-5 border-b border-white/[0.08] py-4 last:border-0">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-dim">{label}</span>
                    <span className="max-w-[16rem] text-right text-sm text-text">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h2 id="about-title" className="text-[clamp(1.35rem,2.6vw,2rem)] font-medium leading-[1.32] tracking-[-0.02em] text-text">
                {profile.summaryLead}
              </h2>
              <p className="mt-6 text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.65] text-dim">{profile.summaryBody}</p>
              <p className="mt-5 text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.65] text-dim">{profile.summaryTail}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {focusAreas.map((item) => (
                  <div key={item.n} className="rounded-[14px] border border-white/[0.08] bg-surface p-5">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <Chip>{item.n}</Chip>
                    </div>
                    <h3 className="text-[1.1rem] font-semibold tracking-[-0.02em] text-text">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-dim">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
