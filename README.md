# William Ye Portfolio

A production Next.js portfolio for William Ye, Senior AI Engineer. The site reproduces the approved dark, technical, data-rich handoff in `deliverables/William-Ye-Portfolio.html` as a maintainable App Router codebase.

## Stack

- Next.js 14 App Router
- React 18 and TypeScript
- Tailwind CSS design tokens
- Framer Motion for reveals, count-ups, and transitions
- `next/font/google` for self-hosted Space Grotesk and JetBrains Mono
- Vercel-ready metadata and generated Open Graph image

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev      # local development
npm run lint     # Next.js lint checks
npm run build    # production build
npm run start    # serve the production build
```

## Project Structure

```text
app/
  layout.tsx            # fonts, metadata, skip link
  page.tsx              # section composition
  globals.css           # Tailwind, base styles, motion/accessibility globals
  opengraph-image.tsx   # generated social card
components/
  Nav.tsx               # fixed responsive nav and active section state
  Hero.tsx              # hero copy, CTAs, stats, animated background
  NeuralCanvas.tsx      # animated constellation canvas
  CursorGlow.tsx        # pointer-following hero glow
  Marquee.tsx           # technology ticker
  About.tsx             # profile summary and facts
  Impact.tsx            # metric cards with count-up values
  Experience.tsx        # timeline cards
  Work.tsx              # featured and secondary project cards
  Skills.tsx            # capability cards
  Contact.tsx           # closing CTA and contact links
  Footer.tsx            # footer links
  ui/                   # reusable reveal/count/chip/typewriter/placeholder pieces
lib/
  content.ts            # single source of truth for portfolio copy/data
  useReducedMotion.ts   # reduced-motion wrapper
public/
  William-Ye-Resume.pdf # downloadable resume asset
```

## Editing Content

All public copy and structured data lives in `lib/content.ts`. Update profile details, metrics, experience bullets, projects, skills, and marquee tokens there.

Launch notes from the handoff:

- Contact details were OCR-derived and should be confirmed before final public launch.
- Projects are representative placeholders until real case studies and screenshots are available.
- Replace placeholder image slots with real headshot and project images when assets are delivered.

## Design System

Tailwind tokens are defined in `tailwind.config.ts`.

- Canvas: `#0A0B0D`
- Secondary canvas: `#0E1013`
- Surfaces: `#121519`, `#171B20`
- Text: `#ECEEF1`
- Dim text: `#9BA1A9`
- Accent: `#B8F24E`
- Content max width: `1180px`
- Fonts: Space Grotesk for body/display, JetBrains Mono for labels and technical UI

The UI intentionally uses a single lime accent with neutral dark surfaces, fluid `clamp()` type, alpha borders, and responsive CSS grids.

## Accessibility and Motion

- Semantic landmarks are used for nav, header, main, sections, and footer.
- A skip link is the first focusable element.
- Focus-visible outlines use the accent color.
- Resume links include `download` and accessible labels.
- `prefers-reduced-motion` disables or short-circuits canvas animation, cursor glow, marquee, reveals, typewriter, and counters.
- Mobile navigation exposes `aria-expanded`, closes on `Esc`, and restores focus to the menu button.

## Deployment

Deploy on Vercel with the default Next.js settings.

Recommended pre-deploy checks:

```bash
npm run lint
npm run build
```

After deployment, run Lighthouse against the production URL and confirm Performance, Best Practices, SEO, and Accessibility are all at or above 95.
