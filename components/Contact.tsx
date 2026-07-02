import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact-pad relative overflow-hidden border-t border-white/[0.08] bg-bg2">
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[34vw] font-semibold leading-none tracking-[-0.08em] text-white/[0.025]">
        WY
      </div>
      <Reveal className="relative z-10 mx-auto max-w-content text-center">
        <div className="mx-auto w-fit">
          <SectionHeading n="07" label="Contact" />
        </div>
        <h2 id="contact-title" className="mx-auto max-w-4xl text-[clamp(2.4rem,7.5vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-text">
          Let's build something that ships.
        </h2>
        <div className="mx-auto mt-8 inline-flex min-h-10 items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 font-mono text-xs uppercase tracking-[0.12em] text-dim">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          {profile.available}
        </div>
        <a href={`mailto:${profile.email}`} className="mx-auto mt-8 block w-fit break-all text-[clamp(1.7rem,5vw,4rem)] font-semibold leading-tight tracking-[-0.04em] text-accent underline decoration-accent/35 underline-offset-8">
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-mono text-xs uppercase tracking-[0.14em] text-bg transition hover:bg-text">
            Email me →
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-white/[0.15] px-6 font-mono text-xs uppercase tracking-[0.14em] text-text transition hover:border-accent/60 hover:text-accent">
            LinkedIn →
          </a>
          <a href={profile.resume} download aria-label="Download resume (PDF)" className="inline-flex min-h-12 items-center rounded-full border border-white/[0.15] px-6 font-mono text-xs uppercase tracking-[0.14em] text-text transition hover:border-accent/60 hover:text-accent">
            Resume ↓
          </a>
        </div>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-dim">
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a> · {profile.location} · linkedin.com/in/will-ye-
        </p>
      </Reveal>
    </section>
  );
}
