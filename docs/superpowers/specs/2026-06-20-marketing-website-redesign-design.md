# Marketing Website Visual Redesign — Design Spec
*Date: 2026-06-20 · Scope: ghardhundo-web full-site visual elevation*

## Goal

Full-site visual lift across all 11 sections: Hero, ActivityTicker, DeveloperLogos, HowItWorks, FeaturedProjects, PuneMap, SavingsCalculator, ComparisonTable, Testimonials, FAQ, FooterCTA.

Target: Pune home buyer, ₹50L–₹1.5Cr budget, tech-savvy. Key message: AI matches → advisor negotiates → zero brokerage.

Theme stays: dark (#07070F bg), saffron (#FF6B35), mint (#2ECC8A).

---

## Global Principles

### Typography
- **Display/headings**: Bricolage Grotesque (800 weight) — variable optical-size font with editorial personality at large sizes. Fallback: Helvetica Neue, Arial.
- **Body**: Instrument Sans (400–700) — premium grotesque, clean at small sizes. Fallback: Inter, Helvetica Neue.
- **Mono/data**: JetBrains Mono (400–500) — developer-native, crisp on dark. Fallback: Fira Code, Consolas.
- Headline letter-spacing: −1px to −2px at large sizes. Body line-height: 1.65–1.75.
- `-webkit-font-smoothing: antialiased` on body.

### Background
- Fixed radial glow orbs (saffron top-left, mint top-right, saffron mid-page) — `filter: blur(80px)`, `position: fixed`.
- Fixed dot-grid overlay: 64px grid, `rgba(255,255,255,0.025)`, masked radially so only visible at top.
- Both layers are `z-index: 0`; all content is `z-index: 1`.

### Spacing
- Section vertical padding: `120px top/bottom`.
- Inter-section gap feels generous — no compressed sections.
- Max-width: 1200px centered.

### Animations
- Numbers count up on scroll (savings figures).
- Cards `translateY(-4px)` + subtle border glow on hover.
- Scan line, particles, data flow lines in Hero only.
- Ticker fades in/out at edges via gradient masks.

### Text contrast
- Muted text: `rgba(255,255,255,0.55–0.65)` — never below 0.5 on dark bg.
- Primary text: `#fff` explicit, not inherited.
- Stat labels: `rgba(255,255,255,0.3)` in `JetBrains Mono`, uppercase, 9px.

---

## Section-by-Section Design

### 1. Nav
Sticky, `backdrop-filter: blur(24px)`, `rgba(7,7,15,0.75)` bg. Logo: Bricolage Grotesque 800. Nav links: Instrument Sans 500, 14px, 0.6 opacity. CTA button: saffron pill with `box-shadow: 0 0 24px rgba(255,107,53,0.3)`.

### 2. Hero
Two-column grid (1fr 1fr), 100px top padding.

**Left:**
- Eyebrow pill: mint border, live dot pulse, "AI-powered home buying · Zero brokerage".
- H1: 64px, Bricolage Grotesque 800, −1.5px tracking. "best offer" in saffron with `text-shadow: 0 0 40px rgba(255,107,53,0.4)`.
- Sub: 17px, 0.65 opacity, max-width 440px.
- Primary CTA: saffron pill, `box-shadow: 0 0 40px rgba(255,107,53,0.35), 0 0 80px rgba(255,107,53,0.15)`.
- Trust row below CTA: `✓ 200+ RERA projects  ✓ ₹12L max saving  ✓ Zero brokerage`.

**Right (AI effects):**
- Main glass card: hex-grid SVG background overlay (6% opacity), corner targeting brackets, animated scan line sweeping top→bottom every 2.5s.
- Typing animation: `analyzing_242_rera_projects...` types and resets in JetBrains Mono.
- Data badges: `BUDGET_OK`, `LOCATION_MATCH`, `BHK_2/3` — active ones glow mint.
- Match score ring: saffron stroke, `drop-shadow(0 0 4px rgba(255,107,53,0.6))`.
- 2 mini project cards below (hover: slide left 4px + saffron border).
- Savings banner: `₹12L / buyer` in saffron 28px bold.
- Floating particles (8 dots, saffron/mint, float upward on loop).
- Vertical data-flow lines (6 lines, cascade downward, saffron).

### 3. ActivityTicker
Full-width, `var(--surface)` bg, top+bottom border. Left/right edge fade via `::before`/`::after` gradient masks. Items: avatar initial circle + activity text + timestamp. Scrolls `translateX(-50%)` in 22s. Duplicate set for seamless loop.

### 4. DeveloperLogos
Centered pill tags with mint dot prefix, `rgba(255,255,255,0.6)` text. Hover: saffron border + white text + subtle glow. Label above: "Projects from Pune's top RERA-verified developers".

### 5. HowItWorks
3-column grid. Each card: glass bg, step number circle (saffron border, dashed outer ring), emoji icon, Bricolage Grotesque title, body text, mint tag at bottom. Card hover: `translateY(-4px)` + radial saffron glow from inside bottom-left. Connector line between step circles (saffron → transparent gradient).

### 6. FeaturedProjects
Section head: title left, "View all →" pill button right. Filter tabs: pill buttons, active = saffron glow bg. 3-column project grid.

Each card:
- `TOP MATCH` badge (top-right, mono font) on featured cards.
- Price in saffron 22px bold.
- 2×2 stat grid: Possession, Carpet Area, Units Sold, Available — labels in JetBrains Mono 9px uppercase.
- Demand bar: thin 3px saffron→amber gradient fill with `% booked` text.
- Footer: "Get Best Offer →" (turns saffron on hover) + "MahaRERA ✓".
- Card hover: `translateY(-4px)` + top-right saffron radial overlay.

### 7. PuneMap
Two-panel layout: SVG map left, zone sidebar right.

**SVG map:**
- Pune city boundary: dashed saffron polygon, saffron fill at 4% opacity.
- River lines: mint strokes at 20% opacity.
- Each zone: outer ring (pulse animation), solid inner dot, zone name + project count in mono below.
- Bubble size proportional to project count. Saffron = high count; mint = emerging areas.
- Compass indicator top-right.
- Hex-grid background + radial gradient on panel.

**Sidebar:**
- Zone list ordered by project count (Kharadi 22, Baner 18, Hinjewadi 14...).
- Active zone: saffron glow card. Others: glass cards.
- Each row: zone name + sub-label left, project count right in Bricolage Grotesque 18px.
- Total projects footer: `109+` in white 22px.

### 8. SavingsCalculator
Two-column inside a glass rounded card (border-radius 32px) with saffron radial glow at top-right. Left: heading + paragraph + range slider (saffron thumb + track fill). Right: result card with `₹8L` in Bricolage 64px saffron with text-shadow. Below: vs-row comparing broker vs GharDhundo.

### 9. ComparisonTable
Highlighted GharDhundo column: saffron glow bg, saffron border top/sides/bottom with rounded caps. `✓` in mint, `✗` in red, `~` in amber. Feature rows: table-row bg transparent, subtle bottom border.

### 10. Testimonials
3-column grid. Each card: glass bg, saving badge (mint pill top), large quote mark decorative (saffron 8% opacity, Georgia serif). Quote text: 0.72 opacity, 1.75 line-height. Footer: avatar initial circle + name (white 700) + project + "MahaRERA verified buyer" in mint. Card hover: `translateY(-3px)` + saffron border.

### 11. FAQ
Two-column: sticky left panel (heading + advisor CTA), accordion right. First item expanded (saffron border + bg). Closed items: glass cards with `+` toggle. Answer text: 0.65 opacity, 1.75 line-height.

### 12. FooterCTA
Full-bleed glass card with gradient (saffron top-left, mint bottom-right), inner dot-grid overlay (masked radially), large radial saffron glow behind heading. Live stat pill above heading. H2: Bricolage 56px. Two buttons: primary saffron + secondary glass. Margin: `0 48px 120px`.

---

## What Does NOT Change
- Color palette (dark bg, saffron, mint).
- Section order.
- Copy and messaging (no group-buying language).
- Data source (real RERA projects from `/api/projects/public`).
- Analytics link structure (`LINKS.*` from `lib/analytics.ts`).

---

## Files to Create / Modify

| File | Action |
|------|--------|
| `app/globals.css` | Add CSS variables, grid overlay, glow orbs, animation keyframes |
| `app/layout.tsx` | Swap Google Fonts to Bricolage Grotesque + Instrument Sans + JetBrains Mono |
| `components/Hero.tsx` + `HeroLeft.tsx` + `HeroRight.tsx` | AI effects, scan line, particles, data badges, trust row |
| `components/ActivityTicker.tsx` | Edge fade masks, avatar circles |
| `components/DeveloperLogos.tsx` | Pill style with mint dot |
| `components/HowItWorks.tsx` | Step circles, connector line, card hover glow |
| `components/FeaturedProjects.tsx` | Filter tabs, demand bar, card hover radial |
| `components/ProjectCard.tsx` | TOP MATCH badge, stat grid, demand bar |
| `components/PuneMap.tsx` | New component — SVG map + zone sidebar |
| `components/SavingsCalculator.tsx` | Glass wrapper, result card, vs-row |
| `components/ComparisonTable.tsx` | Highlighted column with rounded border |
| `components/Testimonials.tsx` | Saving badge, quote mark, MahaRERA verified line |
| `components/FAQ.tsx` | Two-column layout, accordion, first item open |
| `components/FooterCTA.tsx` | Dot-grid overlay, live stat pill, two buttons |

---

## Reference
Mockup: `ghardhundo-web/mockup-redesign.html` — approved 2026-06-20.
