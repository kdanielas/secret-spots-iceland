# Handoff — Secret Spots Iceland Design System

## Overview

This bundle is the complete design system for **Secret Spots Iceland**, a Reykjavík-based operator of private, photography-led Iceland tours (Secretspotsiceland EHF, kennitala 610823-2030). The brand sells three things at once: *travel, quiet luxury, customisation*. There is no online checkout — the entire site funnels to a personal enquiry answered by Luke, the founder and guide.

The bundle contains design tokens, 25 React component references, 27 foundation specimen cards, a four-screen click-through recreation of the marketing site, the two brand webfonts, the logo, and 20 photographic assets.

## About the design files

**The HTML and JSX in this bundle are design references, not production code.** They are browser-runnable prototypes that encode the intended look, spacing, states and behaviour precisely — they are deliberately cosmetic, with no data layer, routing, form submission, i18n or accessibility hardening.

Your task is to **recreate these designs inside the target codebase's existing environment** — Next.js, Astro, WordPress, whatever the real site runs on — using its established patterns, component conventions and styling approach. If no codebase exists yet, pick the framework that fits (a marketing site with a handful of static pages and one form: Astro or Next.js static export are both good fits) and build there.

The one file you *should* ship close to verbatim is `styles.css` and everything under `tokens/` — that is the canonical token layer, and it is plain CSS custom properties with no dependencies. Port the components; keep the tokens.

## Fidelity

**High fidelity.** Colours, type sizes, radii, spacing and shadow values were sampled pixel-by-pixel from the four supplied desktop mockups. Recreate pixel-perfectly. Where a value looks unusual (15.5px body, 0.14em eyebrow tracking, 44px control height), it is deliberate — do not snap to a 4/8px grid or to a framework default.

**Desktop only.** All four source mockups are 1440px desktop. No mobile or tablet layouts were supplied, so none were designed. Breakpoints are an open design question, not an implementation detail — do not invent them silently; flag them back.

## What's in the bundle

```
styles.css                  Single entry point. @import lines only.
tokens/                     fonts, colors, typography, spacing, effects, base
components/
  core/                     Button, Icon, IconChip, Eyebrow, SectionHeading, Chip, Rating, Logo
  tours/                    TourCard, HighlightTile, FactBar, StatBar, IconBullet, StepItem
  content/                  ReviewCard, TestimonialQuote, FaqItem, ImageStrip, FeaturedOnBar
  forms/                    Field, InquiryForm
  nav/                      Navbar, Hero, ContactPanel, Footer
guidelines/                 27 specimen cards (Colors, Type, Spacing, Brand)
ui_kits/website/            Four-screen click-through recreation + its own README
assets/fonts/               Lato (5 weights) + Prata, with OFL licences
assets/logo.png             Wordmark (raster — see Assets below)
assets/img/                 20 photographs
readme.md                   Full brand guide: content fundamentals, visual foundations, iconography
SKILL.md                    Agent Skills wrapper — drop this folder into .claude/skills/ and invoke it
```

Every component directory carries three files: `<Name>.jsx` (the reference implementation), `<Name>.d.ts` (the props contract, with prose describing when each variant is correct), and `<Name>.prompt.md` (a one-line "what & when", a usage example, and the rules that aren't expressible in types). **Read the `.d.ts` and `.prompt.md` before porting a component** — they carry the intent; the `.jsx` only carries the pixels.

`readme.md` is the source of truth for everything not in this file: voice and copywriting rules, the full visual-foundations write-up (backgrounds, imagery grading, motion, hover/press/focus/disabled states, borders, transparency, layout rhythm), and the iconography policy. It is self-sufficient — a developer who wasn't in this conversation can work from it.

## Screens

All four live in `ui_kits/website/`. Open `index.html` in a browser; a pill switcher at the bottom moves between screens, and the site nav is live for Home / Tours / About.

| Screen | File | Source mockup | Purpose |
| --- | --- | --- | --- |
| Home | `Home.jsx` | `uploads/Desktop - 8.jpg` | Establish credibility and route to Tours |
| Tours | `Tours.jsx` | `uploads/Desktop - 9.jpg` | Browse day and multi-day tours, trigger an enquiry |
| Tour detail | `TourDetail.jsx` | `uploads/reykjanes-landing-page.jpg` | Sell one tour in depth (Secret Reykjanes) |
| About | `About.jsx` | `uploads/reykjanes-landing-page-1.jpg` | Meet Luke; the trust page |

`Layout.jsx` holds the shared `Page` shell — `Navbar` + page content + `ContactPanel` + `Footer` — and the `Section` wrapper applying the layout rhythm. **`ContactPanel` and `Footer` appear on every page**; the enquiry form is the site's single conversion point and always closes the page.

### Shared layout rhythm

- Container `1200px`, centred, `24px` side gutter.
- Section vertical padding `120px` (`--section-py`), or `80px` for tighter runs.
- Grid gap `24px`.
- Recurring structure: a `380–440px` photo column paired with a text column at `96px` gap, **alternating sides** down the page.
- 4-up grid for day tours and highlights; 2-up wide grid for multi-day tours; two-column FAQ (heading left, accordion right); 50/50 split for the navy contact section.
- **Nothing is sticky or fixed.** The header scrolls away. (The pill switcher in `index.html` is a prototype affordance — do not ship it.)

### Home

Hero (480px, full-bleed photo, scrim, centred Prata headline, amber + translucent CTA pair, four-stat row beneath) → `FeaturedOnBar` (thin sand strip: Tripadvisor ★5, Airbnb Experiences, GetYourGuide, Viator) → why-private (3:4 photo left, `SectionHeading` + five `IconBullet`s right) → four `ReviewCard`s → meet-your-guide (text left, 4:5 portrait right with a floating `~20 Years in Iceland` chip offset `-14px` top/left) → four-image `ImageStrip` at 5:4 → four `StepItem`s (how it works) → two-column FAQ on the sand surface.

### Tours

Hero (460px) → centred `SectionHeading` + 4-up `TourCard` grid (day tours) → same again with `layout="wide"` 2-up (multi-day) → `ImageStrip` + centred photography-guide block with an outline CTA → featured review as a 420px photo beside a large Prata quote on a cream card.

Interactive: clicking a card's **Check Availability** opens a confirmation dialog (`rgba(23,32,40,.6)` scrim, cream panel, 16px radius, `--shadow-float`).

### Tour detail

Hero (420px) → `FactBar` overlapping the hero by `-44px` (five facts: Duration / Group / From / Pickup / Season, on a cream card with `--shadow-bar`) → the-landscape section → what-to-expect section (photo right) → **navy full-width highlights section**: 4-up then 3-up `HighlightTile` grid → photography section → centred `TestimonialQuote` on sand → "Who This Tour Is For" bulleted list.

### About

Hero (440px) → born-from-passion (photo left) → why-"Secret Spots" (text left, 2×2 `ImageStrip` right) → Luke-the-photographer → how-Luke-runs-his-tours (closes with a `link`-variant button) → founder quote on sand, left-aligned beside a 4:5 portrait.

## Interactions & behaviour

| Trigger | Behaviour |
| --- | --- |
| Button hover | Amber → `#E5A038`; espresso → `#3A2D2B`; outline gains 5% navy wash + full-strength border; `outlineLight` → 16% cream fill + cream border. **Never lighten on hover, never fade opacity.** |
| Button press | `scale(.985)`, hover colour held. No ripple, no flash. |
| Tour card hover | Card lifts `translateY(-2px)` and gains `--shadow-card`; its photo zooms `scale(1.035)` inside the fixed frame. |
| Highlight tile hover | Photo zoom only. |
| Text link hover | Navy → glacier blue `#396280`. |
| FAQ row | Click toggles; icon swaps `plus` ↔ `minus`. One open at a time in practice. |
| Focus | `0 0 0 3px rgba(57,98,128,.35)`. On the navy panel, fields switch border to cream instead. |
| Disabled | 45% opacity, no colour change, `not-allowed`. |
| Form submit | Prototype only — swaps the CTA label to a thank-you. **Wire to the real inbox/CRM.** |
| Testimonial arrows | Manual prev/next. **No autoplay carousel anywhere in this brand.** |

**Motion budget:** `220ms cubic-bezier(.22,.61,.36,1)` for colour/border, `420ms` for image zoom, `140ms` for press. Fades and small translations only — no bounce, no spring, no parallax, no scroll-triggered reveals. If in doubt, don't animate.

## State

Trivial and local. Nothing needs a store.

- `App` — current screen (routing in the real build).
- `Tours` — `booked` (string | null) driving the confirmation dialog.
- `FaqItem` — `open` boolean per row.
- `InquiryForm` — field values + a `sent` flag.
- `Button` / `TourCard` / `HighlightTile` — `hover` / `press` booleans (use CSS `:hover` / `:active` in the real build instead; React state here only because these are single-file references).

The only real data requirement is **the tour list** (image, duration, title, level, description, price) and **the review feed**. Reviews are currently hardcoded; if you pull them live from Tripadvisor, keep the deliberate mid-sentence truncation with a "… Read More" link — that clipping reads as authentic and is a brand decision, not an accident.

## Design tokens

Full definitions in `tokens/`. Highlights:

**Colour.** Amber `#F4B04B` (`--action-primary-bg`) is the *only* commercial action colour — the booking CTA and the WhatsApp button — plus stars and the eyebrow on dark panels. Hover `#E5A038`. Espresso `#291F1E` is the in-card CTA, used *instead of* amber inside tour cards so cards don't compete with the page CTA. Navy `#1D2D44` is all heading text; `#23343E` the dark section and footer; `#324856` the form panel inside it. Body copy warm grey `#5C6570`. Glacier blue `#396280` carries eyebrows, icons and step numerals. Surfaces: cream `#FBF6F0` (page), `#FBFAF8` (raised), sand `#F1F0EC` (chip) and `#E9E6DD` (card). **Two background colours per page maximum,** plus navy for the closing section.

**Type.** Two families, no exceptions. **Prata** — regular only, it has no other weight — for every display line, card title, price, statistic and step numeral: 56 / 44 / 36 / 28 / 22px, leading 1.08–1.30, no letterspacing, never bold, never uppercase. **Lato** for everything else: 17px lead, 15.5px body at 1.7 leading, 14px small, 13px fine print, 12px uppercase eyebrow at 0.14em tracking. Hierarchy in Lato comes from weight (400 / 700 / 900), never from colour alone.

**Spacing.** 4px base. Named steps 2–160px; the ones that matter are 24 (grid gap, card padding), 32 (panel padding), 80 and 120 (section rhythm), 96 (paired-column gap).

**Radii.** `999px` every action — buttons and chips are always full pills. `12px` cards and images. `16px` panels. `10px` FAQ rows. `6px` form fields. Nothing square, nothing rounder than a pill.

**Elevation.** Cards are **flat at rest** — sand fill, no border, no shadow; they read as tinted areas, not floating objects. Shadows are reserved for things that genuinely float: `--shadow-bar` on the hero-overlapping fact bar, `--shadow-card` on hover and the featured review, `--shadow-float` on the dialog. All navy-tinted, never black: `0 8px 24px rgba(29,45,68,.06)`.

**Borders.** Hairlines only, always a navy tint rather than grey: 12% / 28% / 16%; on dark, cream at 14–28%. Always 1px.

## Assets

| Asset | Status |
| --- | --- |
| `assets/fonts/` — Lato (300/400/400i/700/900) + Prata 400, with OFL licences | ✅ Originals supplied by the client. Ship as-is; self-host, do not swap to a Google Fonts CDN link. |
| `assets/logo.png` — wordmark, 455×204 | ⚠️ **Raster, extracted from a mockup JPG.** No vector original exists in the sources. It will not scale cleanly above ~45px. **Request the original SVG before launch.** On navy it's knocked out via `filter: brightness(0) invert(1)`. There is no icon-only or stacked lockup in the source — do not create one. |
| `assets/img/` — 20 photographs | ⚠️ **All cropped out of the mockup JPGs — low-resolution stand-ins.** Every one must be replaced from the client's real photo library before launch. Filenames describe the subject so swapping is mechanical. |
| Icons — Lucide, 2px stroke, 24px grid | ⚠️ **Substitution, though an exact visual match.** The uploads contained no icon assets; the mockups' glyphs are unambiguously Lucide (`user`, `clock`, `briefcase`, `truck`, `heart`, `phone`, `map-pin`, `chevron-down`, `plus`/`minus`, `star`, `arrow-left`/`arrow-right`). Currently loaded from `unpkg.com/lucide-static@0.544.0` via CSS mask so glyphs inherit `currentColor`. **In production, install `lucide-react` (or your framework's Lucide package) rather than masking remote SVGs.** Outline only, never filled — including stars, which are outline stars at 30% opacity when empty. |

**Photography direction** (applies to every replacement): cool-toned and moody — steam, low cloud, wet basalt, teal geothermal water, muted moss; overcast and blue-hour light, never sunny-saturated postcard grading; no filters, no grain, no duotone. Landscapes unpeopled or with a single small figure for scale. Always `object-fit: cover` at 12px radius. Text is never set on a photo except in a hero (which gets `--scrim-image`) or inside a translucent chip.

**Emoji: never.** Not in copy, not in headings, not as icons.

## Content you must replace before launch

Flagged so it isn't mistaken for real brand fact — also listed in `readme.md`:

1. Only **one real tour** exists in the sources: *Secret Reykjanes*, 7 hours, €149 / $1,700 per group. Every other tour, price and duration in the UI kit is plausible filler written in the brand voice.
2. Two of the four reviews are from the mockups; **two are written in-voice**.
3. **All FAQ answers are drafts.** Fact-check against real policies.
4. Nav destinations *Photography Guide*, *Our Vehicles*, *Blog*, *Reviews* and *How it works* exist as links but were never designed and are not built.
5. The enquiry form posts nowhere.

## Getting started with Claude Code

Drop this folder into `.claude/skills/secret-spots-iceland-design/` and invoke the skill, or just point Claude Code at `readme.md` first and `ui_kits/website/README.md` second. A reasonable first task:

> Read readme.md and HANDOFF.md. Port tokens/ and styles.css into the app verbatim, then rebuild the Home screen from ui_kits/website/Home.jsx using our existing component conventions. Keep every numeric value exactly as specified. Don't invent mobile breakpoints — list what you'd need designed.
