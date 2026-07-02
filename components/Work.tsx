import { SectionHeading } from "@/components/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/content";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="section-pad border-y border-white/[0.08] bg-bg2">
      <div className="mx-auto max-w-content">
        <SectionHeading
          n="05"
          label="Selected work"
          title="Systems with measurable output."
          titleId="work-title"
          note="representative projects - swap in real case studies & screenshots"
        />
        <Reveal>
          <article className="grid gap-8 rounded-[24px] border border-white/[0.08] bg-surface p-[clamp(18px,4vw,34px)] lg:grid-cols-[1.08fr_.92fr]">
            <Placeholder label="Atlas project shot" ratio="feature" />
            <div className="flex flex-col justify-center">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs text-accent">{projects.featured.n}</span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-dim">{projects.featured.kicker}</span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-dim">{projects.featured.cat}</span>
              </div>
              <h3 className="text-[clamp(1.7rem,3vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-text">{projects.featured.title}</h3>
              <p className="mt-5 text-[clamp(1rem,1.3vw,1.12rem)] leading-[1.65] text-dim">{projects.featured.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {projects.featured.metrics.map((metric) => (
                  <span key={metric} className="rounded-[8px] bg-accent/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-accent">
                    {metric}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {projects.featured.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
              <a href={projects.featured.href} className="mt-7 inline-flex min-h-11 w-fit items-center rounded-full border border-white/[0.15] px-5 font-mono text-xs uppercase tracking-[0.14em] text-text transition hover:border-accent/60 hover:text-accent">
                Read case study →
              </a>
            </div>
          </article>
        </Reveal>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {projects.cards.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <article className="h-full overflow-hidden rounded-[18px] border border-white/[0.08] bg-surface transition hover:border-accent/40 hover:shadow-[0_26px_70px_-42px_rgba(184,242,78,.55)]">
                <Placeholder label={`${project.title} project shot`} ratio="wide" className="rounded-none border-0 border-b border-white/[0.08]" />
                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="font-mono text-xs text-accent">{project.n}</span>
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-dim">{project.cat}</span>
                  </div>
                  <h3 className="text-[1.35rem] font-semibold leading-[1.2] tracking-[-0.02em] text-text">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-dim">{project.desc}</p>
                  <p className="mt-5 font-mono text-xs uppercase tracking-[0.12em] text-accent">{project.metric}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
