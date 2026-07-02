import { SectionHeading } from "@/components/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-pad">
      <div className="mx-auto max-w-content">
        <SectionHeading n="06" label="Stack" title="The toolbox." titleId="skills-title" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.04}>
              <article className="h-full rounded-[18px] border border-white/[0.08] bg-surface p-6">
                <div className="mb-6 flex items-start justify-between gap-5">
                  <h3 className="text-[1.35rem] font-semibold leading-[1.2] tracking-[-0.02em] text-text">{category.title}</h3>
                  <span className="font-mono text-xs text-accent">{category.n}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
