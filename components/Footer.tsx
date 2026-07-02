import { navLinks, profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-bg2 px-[clamp(18px,5vw,40px)] py-10">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-[10px] border border-white/[0.15] font-mono text-sm font-semibold text-accent">WY</span>
              <span className="text-sm font-medium text-text">{profile.name} - {profile.role}</span>
            </div>
            <p className="mt-4 font-mono text-xs text-dim">$ whoami → will-ye · built with intent</p>
          </div>
          <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.12em] text-dim">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-accent">
                {link.label}
              </a>
            ))}
            <a href="#top" className="transition hover:text-accent">
              ↑ Top
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/[0.08] pt-5 font-mono text-xs text-dim">© 2026 William Ye · Portfolio design & handoff</div>
      </div>
    </footer>
  );
}
