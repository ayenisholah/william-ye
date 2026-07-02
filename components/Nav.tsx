"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 34);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-24% 0px -60% 0px", threshold: [0, 0.2, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const linkClass = (href: string) =>
    `font-mono text-[0.72rem] uppercase tracking-[0.16em] transition hover:text-text ${
      active === href.slice(1) ? "text-text" : "text-dim"
    }`;

  return (
    <nav
      aria-label="Primary"
      className={`fixed left-0 right-0 top-0 z-50 transition ${
        scrolled ? "border-b border-white/[0.08] bg-bg/80 backdrop-blur-[14px]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-content items-center justify-between gap-4 px-[clamp(18px,5vw,40px)]">
        <a href="#top" className="flex min-h-11 items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-[10px] border border-white/[0.15] font-mono text-sm font-semibold text-accent">
            WY
          </span>
          <span className="hidden text-sm font-medium text-text sm:block">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            download
            aria-label="Download resume (PDF)"
            className="hidden min-h-11 items-center rounded-full border border-white/[0.15] px-4 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-text transition hover:border-accent/60 hover:text-accent sm:inline-flex"
          >
            Resume ↓
          </a>
          <button
            ref={buttonRef}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.15] text-text md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="relative h-3.5 w-5">
              <span className={`absolute left-0 top-0 h-px w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-px w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="fixed inset-0 top-20 z-40 border-t border-white/[0.08] bg-bg/95 px-6 py-8 backdrop-blur-[14px] md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-white/[0.08] pb-4 font-mono text-xl uppercase tracking-[0.14em] text-text"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download
              aria-label="Download resume (PDF)"
              className="mt-3 inline-flex min-h-12 w-fit items-center rounded-full bg-accent px-5 font-mono text-xs uppercase tracking-[0.14em] text-bg"
              onClick={() => setOpen(false)}
            >
              Resume ↓
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
