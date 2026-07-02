# Reproduction Prompt — William Ye Portfolio (Next.js)

> Paste everything below the line into your coding agent (Claude Code, Cursor, v0, etc.), or use it as a build brief. It reproduces the approved HTML design (`William Ye Portfolio.dc.html`) 1:1 in a production Next.js app. Design reference, tokens, and content are all self-contained here.

---

## 0. Objective

Build a single-page, dark, "technical / data-rich" personal portfolio for **William Ye — Senior AI Engineer**. The aesthetic is terminal-inspired: near-black canvas, one lime accent, monospace labels, big confident display type, and rich-but-tasteful motion (animated neural-network hero, count-up metrics, scroll reveals, typewriter, cursor glow). It must feel fast, credible to recruiters/hiring managers, fully responsive, and accessible.

Match the reference pixel-for-pixel in spirit: same tokens, type scale, spacing, section order, copy, and motion behavior described below.

## 1. Tech stack (required)

- **Next.js 14+** (App Router, `/app`) + **React 18** + **TypeScript**
- **Tailwind CSS** for all styling (tokens live in `tailwind.config.ts`)
- **Framer Motion** for scroll reveals, count-ups, and transitions
- **next/font/google** for fonts (self-hosted, no layout shift)
- No component library required — the design is custom. (shadcn/ui is fine if you want primitives later, but don't pull it in for this.)
- Deploy target: Vercel. Lighthouse ≥ 95 on Performance/Best-Practices/SEO/Accessibility.

## 2. Project structure

```
app/
  layout.tsx            # fonts, metadata, <html lang>, skip link
  page.tsx              # composes all sections in order
  globals.css           # @tailwind + base resets, ::selection, reduced-motion
components/
  Nav.tsx               # fixed nav + mobile menu overlay + scroll state + active link
  Hero.tsx              # eyebrow, name, typewriter subhead, stat chips, CTAs, scroll hint
  NeuralCanvas.tsx      # 'use client' animated constellation background
  CursorGlow.tsx        # 'use client' radial glow following pointer within hero
  Marquee.tsx           # infinite mono tech ticker
  About.tsx             # portrait slot, facts card, summary prose, 4 focus cards
  Impact.tsx            # 3 big metrics + 6 secondary metrics (count-up)
  Experience.tsx        # 4 timeline entries
  Work.tsx              # 1 featured project + 3 project cards
  Skills.tsx            # 6 category cards of chips
  Contact.tsx           # closing CTA, email, buttons, contact meta
  Footer.tsx
  ui/
    Reveal.tsx          # scroll-in wrapper (opacity+translateY, staggered)
    CountUp.tsx         # animated number, triggers in-view
    Typewriter.tsx      # rotating typed word
    Chip.tsx            # mono tag pill
    Placeholder.tsx     # striped image slot w/ mono caption (until real assets land)
lib/
  content.ts            # ALL copy/data (below) — single source of truth
  useReducedMotion.ts   # wraps framer-motion's + prop override
public/
  William-Ye-Resume.pdf
  og.png  favicon.ico
  images/ (headshot, project shots — see Assets)
```

## 3. Design tokens → `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:        "#0A0B0D",
        bg2:       "#0E1013",
        surface:   "#121519",
        surface2:  "#171B20",
        text:      "#ECEEF1",
        dim:       "#9BA1A9",
        faint:     "#565C64",
        accent:    "#B8F24E", // single lime accent — metrics, labels, CTAs, canvas
      },
      // borders use white alpha, not solid colors:
      // border  = rgba(255,255,255,.08)  -> border-white/[0.08]
      // border2 = rgba(255,255,255,.15)  -> border-white/[0.15]
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { content: "1180px" },
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
    },
  },
  plugins: [],
} satisfies Config;
```

**Type scale** (keep the fluid `clamp()` values — use Tailwind arbitrary sizes like `text-[clamp(2rem,5vw,3.4rem)]`, or map to a plugin):

| Role | size | weight | letter-spacing | line-height |
|---|---|---|---|---|
| Hero name (h1) | `clamp(3.1rem, 11vw, 8.4rem)` | 600 | -0.045em | 0.9 |
| Contact headline | `clamp(2.4rem, 7.5vw, 5.2rem)` | 600 | -0.04em | 0.98 |
| Section title (h2) | `clamp(2rem, 5vw, 3.4rem)` | 600 | -0.03em | 1.02 |
| Featured project (h3) | `clamp(1.7rem, 3vw, 2.5rem)` | 600 | -0.03em | 1.05 |
| Card title (h3) | 1.35rem | 600 | -0.02em | 1.2 |
| Lead paragraph | `clamp(1.35rem, 2.6vw, 2rem)` | 500 | -0.02em | 1.32 |
| Body | `clamp(1rem, 1.3vw, 1.12rem)` | 400 | 0 | 1.6–1.65 |
| Bullet | `clamp(.95rem, 1.1vw, 1.02rem)` | 400 | 0 | 1.55 |
| Big metric | `clamp(3rem, 7vw, 5rem)` | 600 | -0.04em | 0.86 |
| Secondary metric | `clamp(1.8rem, 3vw, 2.3rem)` | 600 | -0.03em | 1 |
| Mono label | 11–13px | 400–500 | 0.06em–0.22em, UPPERCASE | — |

**Radii:** chips 7–8px · small cards 13–14px · cards 18–20px · featured 24px · pills/dots 999px.
**Spacing:** section padding `clamp(80px,12vh,150px)` block / `clamp(18px,5vw,40px)` inline (contact uses `clamp(90px,14vh,170px)` block). Content centered at `max-w-content` (1180px). Prefer flex/grid + `gap`; use `clamp()` for fluid gaps.

## 4. Fonts — `app/layout.tsx`

```tsx
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
const sans = Space_Grotesk({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-space-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400","500","600"], variable: "--font-jetbrains-mono" });
// <html className={`${sans.variable} ${mono.variable}`}> ... apply font-sans on body
```

`globals.css` base:
```css
@tailwind base; @tailwind components; @tailwind utilities;
html { scroll-behavior: smooth; }
body { background:#0A0B0D; color:#ECEEF1; -webkit-font-smoothing:antialiased; }
::selection { background:#B8F24E; color:#0A0B0D; }
@media (prefers-reduced-motion: reduce) { * { animation:none !important; transition:none !important; } }
section { scroll-margin-top: 80px; }
```

## 5. Content — `lib/content.ts` (verbatim source of truth)

> **Contact details flagged for confirmation** before launch: email `williamyeny@gmail.com`, LinkedIn `linkedin.com/in/will-ye-`, phone `+1 929 548 7774`. These were OCR'd from the résumé — verify.

```ts
export const profile = {
  name: "William Ye",
  role: "Senior AI Engineer",
  location: "San Francisco, CA",
  email: "williamyeny@gmail.com",
  phone: "+1 929 548 7774",
  linkedin: "https://www.linkedin.com/in/will-ye-",
  resume: "/William-Ye-Resume.pdf",
  available: "Available for work",
  education: "B.S. Computer Science · Duke",
  heroWords: ["AI pipelines","NLP systems","MLOps platforms","real-time inference","data infrastructure"],
  summaryLead: "Senior AI & full-stack engineer with 6 years shipping scalable AI, NLP, and software systems across fintech, cloud, and startup environments.",
  summaryBody: "I've improved operational efficiency by up to 35%, cut processing time by 25%, and handled 1M+ requests/month through AI pipelines, automation, and robust architecture — while leading cross-functional teams and mentoring engineers to build production-ready systems that optimize performance and reliability.",
  summaryTail: "Proficient across cloud-native architecture, AI/ML integration, and the full software development lifecycle.",
};

export const heroStats = [
  { value: 6,  suffix: "+",  label: "years exp" },
  { value: 1,  suffix: "M+", label: "requests / mo" },
  { value: 35, suffix: "%",  label: "efficiency ↑" },
  { value: 4,  suffix: "",   label: "companies" },
];

export const metricsBig = [
  { value: 35, suffix: "%",  desc: "boost in operational efficiency via AI automation", tag: "@ RAMP" },
  { value: 1,  suffix: "M+", desc: "requests / month served by AI-driven pipelines",   tag: "@ RAMP" },
  { value: 30, suffix: "%",  desc: "higher semantic search accuracy on NLP models",    tag: "@ COHERE" },
];
export const metricsSmall = [
  { value: 25,  suffix: "%",  label: "faster analytics" },
  { value: 40,  suffix: "%",  label: "faster training" },
  { value: 20,  suffix: "%",  label: "lower latency" },
  { value: 500, suffix: "k+", label: "req/mo @ Cohere" },
  { value: 50,  suffix: "%",  label: "more data coverage" },
  { value: 5,   suffix: "",   label: "engineers mentored" },
];

export const experience = [
  {
    monogram: "R", company: "Ramp", role: "Senior AI Engineer",
    dates: "05/2023 — 02/2026", meta: "San Francisco · 2 yrs 9 mos",
    tags: ["Python","PyTorch","TensorFlow","MLOps","Observability"],
    bullets: [
      "Boosted operational efficiency by **35%** by implementing AI-powered automation across workflows.",
      "Reduced financial analytics processing time by **25%** through integrated ML models.",
      "Designed and deployed scalable AI pipelines with Python, TensorFlow, and PyTorch for real-time decision-making.",
      "Scaled workflow throughput to **1M+** requests/month using AI-driven solutions.",
      "Accelerated model training by **40%** by revamping data pipelines and feature-engineering strategies.",
      "Strengthened reliability and compliance with monitoring & observability, reducing incidents by **15%**.",
      "Mentored **5** junior engineers, boosting team productivity and knowledge sharing.",
    ],
  },
  {
    monogram: "Co", company: "Cohere", role: "AI Engineer",
    dates: "05/2021 — 05/2023", meta: "Remote · 2 yrs",
    tags: ["NLP","Transformers","Fine-tuning","Vector DBs"],
    bullets: [
      "Increased semantic search accuracy by **30%** through development and fine-tuning of NLP models.",
      "Delivered end-to-end AI pipelines for text classification and generation, handling **500k+** requests/month.",
      "Cut inference latency by **20%** on cloud infrastructure via model optimization.",
      "Deployed AI features impacting **millions** of users through cross-functional collaboration.",
      "Expanded training-dataset coverage by **50%** with preprocessing and augmentation pipelines.",
      "Ran evaluation and fine-tuning to maintain **95%** prediction quality.",
      "Led AI coding standards and best practices, mentoring engineers for consistent model deployment.",
    ],
  },
  {
    monogram: "aws", company: "AWS", role: "Software Development Engineer",
    dates: "05/2020 — 05/2021", meta: "1 yr",
    tags: ["Python","Node.js","REST APIs","Automation"],
    bullets: [
      "Reduced manual cloud-provisioning workload by **40%** with automated internal tools.",
      "Built backend services in Python and Node.js, improving reliability and maintainability.",
      "Developed scalable APIs supporting **10** cross-team workflows and integrations.",
      "Revamped data pipelines, increasing throughput by **30%** and reducing latency.",
      "Collaborated across teams to deliver robust solutions, improving release speed by **20%**.",
    ],
  },
  {
    monogram: "C1", company: "Capital One", role: "Software Engineer Intern",
    dates: "06/2019 — 08/2019", meta: "Summer · 3 mos",
    tags: ["Java","Python","QA"],
    bullets: [
      "Redesigned web-based financial software modules using Java and Python, improving usability.",
      "Streamlined data processing, cutting average backend task duration by **20%**.",
      "Improved software quality via thorough code reviews and QA testing.",
      "Modernized cross-team workflows with backend automation improvements.",
    ],
  },
];

// NOTE: projects are REPRESENTATIVE placeholders approved by the client —
// swap in real case studies + screenshots before launch.
export const projects = {
  featured: {
    n: "01", kicker: "FEATURED", cat: "FINTECH / ML",
    title: "Atlas — Real-time risk engine",
    desc: "Streaming ML pipeline that scores 1M+ transactions/day for fraud and spend anomalies, with sub-40ms inference and a human-in-the-loop review console.",
    metrics: ["<40ms p99", "1M+ / day", "99.9% uptime"],
    tags: ["Python","PyTorch","Kafka","Redis","Kubernetes"],
    href: "#",
  },
  cards: [
    { n:"02", cat:"NLP / RAG", title:"Semaphore", desc:"Semantic search & RAG platform with fine-tuned embeddings powering enterprise document retrieval.", metric:"+30% retrieval accuracy", tags:["Transformers","Vector DBs","FastAPI"] },
    { n:"03", cat:"MLOPS",     title:"Forge",     desc:"Internal MLOps platform for model CI/CD — training, versioning, canary rollout, and live observability.", metric:"40% faster training cycles", tags:["Terraform","Docker","MLflow"] },
    { n:"04", cat:"LLM / DOCS",title:"Ledger IQ", desc:"LLM pipeline extracting structured data from invoices and statements at scale for finance teams.", metric:"25% less manual review", tags:["NLP","Node.js","PostgreSQL"] },
  ],
};

export const skills = [
  { n:"01", title:"AI/ML & Data Science", items:["Machine Learning","Deep Learning","NLP","Transformers","Model Deployment","MLOps","Data Engineering","AI Pipelines"] },
  { n:"02", title:"Backend",              items:["Java","Python","Node.js","REST APIs","Microservices","Serverless","Spring Boot","Event-Driven"] },
  { n:"03", title:"Cloud & DevOps",       items:["AWS","Kubernetes","Docker","Terraform","CI/CD","IaC"] },
  { n:"04", title:"Databases",            items:["PostgreSQL","MySQL","MongoDB","Redis","DynamoDB","Vector DBs"] },
  { n:"05", title:"Frontend",             items:["React","Angular","TypeScript","Redux","HTML5","CSS3","Responsive"] },
  { n:"06", title:"Testing & Automation", items:["Unit Testing","Integration","SonarQube","Observability","Load Testing"] },
];

export const marqueeTokens = ["PYTHON","PYTORCH","TENSORFLOW","NLP","TRANSFORMERS","MLOPS","KUBERNETES","DOCKER","TERRAFORM","AWS","VECTOR DBS","FASTAPI","REACT","TYPESCRIPT","OBSERVABILITY"];
```

> Bullets embed `**metric**` markers — render the bold spans in `text-accent font-semibold`. Write a tiny helper that splits on `**…**` and wraps matches, or store bullets as arrays of `{text, bold?}` segments.

## 6. Section-by-section spec (order = page order)

1. **Nav** (`fixed top-0 z-50`) — Left: `WY` monogram (bordered rounded square, accent mono) + "William Ye". Center: mono links `About · Impact · Experience · Work · Skills` (hidden `< md`, shown as full-screen overlay via hamburger). Right: "Résumé ↓" outline button (downloads PDF) + hamburger (`< md` only). On scroll past 34px: nav gains `bg = bg/78% + backdrop-blur-[14px] + border-b border-white/[0.08]` (transparent at top). Active section link brightens `dim → text` via IntersectionObserver (`rootMargin:"-24% 0px -60% 0px"`).

2. **Hero** (`min-h-screen`, flex centered, `overflow-hidden`) — `<NeuralCanvas>` (abs, `opacity-55`) + `<CursorGlow>` behind content. Content: availability pill (pulsing accent dot + ring, "Available for work · San Francisco, CA") → mono eyebrow "SENIOR AI ENGINEER" (accent, `.24em`) → h1 "William Ye" → subhead "I design and ship production-grade `<Typewriter/>` — measured by the numbers they move." (typed word in accent + blinking caret) → 4 stat chips (bordered, count-up) → CTAs: "View work →" (accent solid) + "Get in touch" (outline). Bottom-center animated "SCROLL" hint.

3. **Marquee** — full-bleed strip bordered top/bottom on `bg2`; infinite mono ticker of `marqueeTokens` joined by ` / `, `translateX 0 → -50%` over 38s (duplicate content for seamless loop). Pause on reduced-motion.

4. **About** (`#about`) — header block `02 / ABOUT`. 2-col (auto-fit `minmax(300px,1fr)`): **left** = portrait placeholder (4:5, striped, "drop headshot") + facts card (Location / Education / Focus / Email rows, mono labels right-aligned values). **right** = lead paragraph (large) + body + tail + 4 mini "focus" cards (01–04: Fintech & cloud scale / NLP & LLM systems / MLOps & reliability / Team leadership).

5. **Impact** (`#impact`, on `bg2`, bordered top/bottom) — header `03 / IMPACT`, h2 "Outcomes, in numbers." → 3 big metric cards (`metricsBig`, count-up, huge number + desc + accent company tag, hover brightens border toward accent) → 6 secondary metric cards (`metricsSmall`, auto-fit `minmax(150px,1fr)`). All numbers count up when scrolled into view.

6. **Experience** (`#experience`) — header `04 / EXPERIENCE`, h2 "Where I've shipped." → 4 entries. Each entry = bordered card, `flex flex-wrap`: **meta column** (`flex 1 1 220px`) = accent mono date, monogram box + company + role, mono sub-meta, tag chips; **bullets column** (`flex 3 1 360px`) = each bullet a row with a 45°-rotated accent square marker; bold metrics in accent. Card hover: border + bg lift to `surface2`.

7. **Work** (`#work`, on `bg2`, bordered) — header `05 / SELECTED WORK` + mono note "representative projects — swap in real case studies & screenshots". **Featured** (`projects.featured`): 2-col, 16:10 shot placeholder + details (kicker row, big title, desc, accent metric chips, tags, "Read case study →"). **Grid** of 3 cards (auto-fit `minmax(290px,1fr)`): 16:9 shot placeholder on top, then cat, title, desc, accent metric, small tags. Card hover: border + drop shadow lift (no transform — see motion note).

8. **Skills** (`#skills`) — header `06 / STACK`, h2 "The toolbox." → 6 category cards (auto-fit `minmax(280px,1fr)`): title + mono index, then wrapped mono chips. Chip hover → border+text brighten, bg `accent/10%`.

9. **Contact** (`#contact`) — centered, giant faint "WY" watermark behind. header `07 / CONTACT` → h2 "Let's build something that ships." → availability pill → huge `mailto:` email link (accent, underlined) → buttons "Email me →" (accent) / "LinkedIn →" / "Résumé ↓" → mono meta row (phone · location · linkedin).

10. **Footer** — on `bg2`, bordered top. Left: WY monogram + "William Ye — Senior AI Engineer" + mono `$ whoami → will-ye · built with intent`. Right: mono quick links + "↑ Top". Bottom rule: `© 2026 William Ye · Portfolio design & handoff`.

## 7. Motion implementation

- **Reveal** (`components/ui/Reveal.tsx`): wrap in `motion.div`, `initial={{opacity:0,y:24}}`, `whileInView={{opacity:1,y:0}}`, `viewport={{once:true, margin:"0px 0px -8% 0px", amount:0.12}}`, `transition={{duration:0.75, ease:[0.22,0.7,0.2,1], delay}}`. Accept a `delay` prop (0/0.06/0.08/0.12/0.16/0.2s) for stagger. Under reduced motion, render children with no transform.
- **CountUp**: `useInView` (once, amount 0.5) → animate `0 → value` over 1.5s with `easeOutCubic`; format with thousands separators; append `suffix`; prepend `prefix`. Reduced motion → render final immediately.
- **Typewriter**: type 82ms/char, hold 1500ms at full word, delete 42ms/char, cycle `heroWords`. Standalone blinking caret (1s step-end) beside it. Reduced motion → static first word.
- **NeuralCanvas** (`'use client'`): 22–66 nodes (scale by area: `clamp(22, area/16000, 66)`), velocity `±0.12 * dpr`, wall-bounce, link any two nodes `< 150px` with `rgba(accent, (1-d/150)*0.3)`, draw nodes as `r=1.5*dpr` accent dots at `0.72` alpha. Cap `dpr` at 2. `requestAnimationFrame` loop; rebuild on resize; cancel on unmount. Reads accent so a theme change recolors it. Skip entirely under reduced motion.
- **CursorGlow** (`'use client'`): a `560px` radial `accent/15% → transparent` circle, `translate` to pointer within hero on `mousemove`, `opacity 0` on leave, `transition-opacity`. Pointer-events none.
- **Nav scroll + active link**: `scroll` listener (passive) toggles the scrolled style; IntersectionObserver on sections drives the active link.
- **Marquee**: pure CSS keyframes (`translateX(0) → -50%`), duplicated content.

## 8. Responsive behavior

Mobile-first; the reference is fluid via `clamp()` + `auto-fit` grids (few hard breakpoints). Targets:
- **< md (768px):** single column everywhere; nav links collapse to hamburger + full-screen overlay menu; hero type at small end of clamps; stat chips + CTAs wrap; timeline meta stacks above bullets.
- **md–lg:** About becomes 2-col; metrics 3-up (big) / 3-up (small); projects 2–3-up; skills 2-up.
- **≥ xl:** content caps at `1180px`, centered; grids at full column counts (metrics 3/6, projects 3, skills 3, about 2).
- Keep `clamp()` for all display type and section padding so scaling is continuous, not steppy. No horizontal scroll at any width (the marquee lives in `overflow-hidden`).

## 9. Accessibility (must pass)

- Semantic landmarks: `<nav>`, `<header>` (hero), `<main>`, `<section aria-labelledby>` per section, `<footer>`. One `<h1>` (name); sections use `<h2>`.
- **Skip-to-content** link as first focusable.
- **Focus-visible**: 2px `accent` outline + 2px offset on every link/button/menu control. Never remove outlines without a replacement.
- **prefers-reduced-motion**: disable canvas, typewriter, glow, marquee; reveals + counters render final state instantly (already wired via `useReducedMotion`). Also expose the design's `reduceMotion` toggle if you keep the tweak.
- Hamburger: `aria-expanded`, `aria-controls`; overlay traps focus + closes on `Esc`; restore focus to the button.
- Contrast (all AA+): text `#ECEEF1`/bg ≈ 15:1, dim `#9BA1A9`/bg ≈ 7:1, accent `#B8F24E`/bg ≈ 13:1, accent-bg + `#0A0B0D` text ≈ 12:1. **`faint #565C64` (~3.5:1) is decorative only** — never body copy. Never encode meaning in color alone (metrics always carry text labels).
- Images: real `alt` on headshot ("Portrait of William Ye") and project shots; placeholders get descriptive `aria-label`. Résumé link: `download` + visible ↓ + `aria-label="Download résumé (PDF)"`.
- Targets ≥ 44px; respects keyboard order; `mailto:`/`tel:` where relevant.

## 10. Assets

Ship to `/public`:
- `William-Ye-Resume.pdf` (provided — already in this repo/handoff).
- Headshot **4:5**, ~960×1200, `.webp` (+jpg fallback) → About portrait slot.
- Featured project shot **16:10**, ~1280×800.
- 3 project shots **16:9**, ~1200×675.
- `og.png` **1200×630** (name + role on dark), `favicon.ico`, apple-touch-icon.
- Fonts: none to ship — `next/font` self-hosts Space Grotesk + JetBrains Mono.
- Optional real company logos (Ramp, Cohere, AWS, Capital One) to replace monogram fallbacks — keep monospace monogram if unavailable.
Until real images exist, ship the `Placeholder` component (diagonal-striped, mono caption) so slots read intentionally.

## 11. Definition of done

- [ ] All 10 sections present, in order, with the exact copy from `content.ts`.
- [ ] Tokens match §3; only the single lime accent + neutral scale used.
- [ ] Neural canvas, typewriter, count-ups, scroll reveals, cursor glow, marquee, nav scroll-state + active link all working — and all correctly disabled/short-circuited under `prefers-reduced-motion`.
- [ ] Fully responsive 320 → 1920px, no horizontal scroll, nav collapses `< md`.
- [ ] Lighthouse ≥ 95 across the board; a11y audit clean (axe).
- [ ] Résumé downloads; `mailto:`/LinkedIn links work; contact details **confirmed with client**.
- [ ] Metadata + OG tags set; `lang="en"`; title "William Ye — Senior AI Engineer".
