import { SectionHeading } from "@/components/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/content";

function renderMetricText(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-accent">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-pad">
      <div className="mx-auto max-w-content">
        <SectionHeading n="04" label="Experience" title="Where I've shipped." titleId="experience-title" />
        <div className="space-y-5">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.06}>
              <article className="flex flex-wrap gap-[clamp(24px,4vw,52px)] rounded-[20px] border border-white/[0.08] bg-surface p-[clamp(20px,4vw,34px)] transition hover:border-white/[0.15] hover:bg-surface2">
                <div className="flex-[1_1_220px]">
                  <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-accent">{job.dates}</p>
                  <div className="flex items-start gap-4">
                    <div className="grid h-14 w-14 flex-none place-items-center rounded-[13px] border border-white/[0.15] font-mono text-sm font-semibold uppercase text-accent">
                      {job.monogram}
                    </div>
                    <div>
                      <h3 className="text-[1.35rem] font-semibold leading-tight tracking-[-0.02em] text-text">{job.company}</h3>
                      <p className="mt-1 text-dim">{job.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-dim">{job.meta}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                </div>
                <ul className="flex-[3_1_360px] space-y-3">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-4 text-[clamp(.95rem,1.1vw,1.02rem)] leading-[1.55] text-dim">
                      <span className="mt-2.5 h-2 w-2 flex-none rotate-45 bg-accent" />
                      <span>{renderMetricText(bullet)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
