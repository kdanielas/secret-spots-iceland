# Secret Spots Iceland — Design System

Private, photography-led Iceland tours run by **Luke**, a professional photographer and licensed private guide based in Reykjavík. The product is a marketing website whose whole job is to turn "I'm going to Iceland" into a personal enquiry: no fixed itineraries, no tour buses, no online checkout — every tour is quoted and planned by conversation.

Positioning the brand has to communicate at once: **travel, quiet luxury, and customisation.** Luxury here is not gold and marble; it is exclusivity (private only), craft (a photographer's eye), and having a real person rebuild your day around the weather.

Legal entity: Secretspotsiceland EHF · Tangabryggja 18, 110 Reykjavík, Iceland · Kennitala 610823-2030 · VAT 152431 · +354 845 4057.

## Sources this system was built from

Everything here was derived from material the user supplied — there was no codebase, repo or Figma file. If you have access to more, re-derive rather than trusting the extrapolations flagged below.

| Source | Used for |
| --- | --- |
| `uploads/Desktop - 8.jpg` | Home page (hero + stats, why-private, reviews row, meet-your-guide, gallery strip, how-it-works, FAQ, contact, footer) |
| `uploads/Desktop - 9.jpg` | Tours page (day-tour grid, multi-day grid, photography-guide block, featured review) |
| `uploads/reykjanes-landing-page.jpg` | Tour detail page (fact bar, highlights grid on navy, testimonial, "who this is for") |
| `uploads/reykjanes-landing-page-1.jpg` | About / Meet Luke page |
| `uploads/Lato/`, `uploads/Prata/` | The two brand webfonts, shipped as-is (no substitutions were needed) |

Colours, radii, type sizes and spacing were sampled pixel-by-pixel from those JPGs. Because the source is imagery rather than code, values are accurate to ±1px — treat the tokens, not the screenshots, as canonical from now on.

## Index

- `styles.css` — the single entry point consumers link. Imports only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `components/` — the React primitives, grouped `core/`, `tours/`, `content/`, `forms/`, `nav/`. Each has `.jsx`, `.d.ts` and `.prompt.md`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/website/` — click-through recreation of all four supplied screens. See its own `README.md`.
- `assets/logo.png`, `assets/img/*`, `assets/fonts/*`.
- `SKILL.md` — Agent Skills wrapper.
- `HANDOFF.md` — developer handoff: what to port, screen-by-screen specs, interaction table, and everything that must be replaced before launch.
- `thumbnail.html` — homepage tile.

## Components

Grouped by concern; the inventory is exactly what the four mockups define.

**core/** — `Button`, `Icon`, `IconChip`, `Eyebrow`, `SectionHeading`, `Chip`, `Rating`, `Logo`
**tours/** — `TourCard`, `HighlightTile`, `FactBar`, `StatBar`, `IconBullet`, `StepItem`
**content/** — `ReviewCard`, `TestimonialQuote`, `FaqItem`, `ImageStrip`, `FeaturedOnBar`
**forms/** — `Field`, `InquiryForm`
**nav/** — `Navbar`, `Hero`, `ContactPanel`, `Footer`

### Intentional additions

- `Icon` and `IconChip` — the mockups use Lucide glyphs inside sand circles but define no icon component; these two wrap that pattern so it stays consistent.
- `Field` — the mockups show four control types (text, email, select, textarea) as one visual family, so they are one component with a `type` prop rather than four.
- `ImageStrip` — the photo row/grid appears on three of four pages; factored out rather than repeated per screen.

Nothing else was invented. There is **no** Avatar, Toast, Tabs, Tooltip, Breadcrumb, Pagination or Sidebar in this system, because the source has none. Don't add one without a real screen to justify it.

## Content fundamentals

**Voice.** First person plural for the company, first person singular when Luke speaks. Both appear: "Our private tours of Iceland are created for travelers who want flexibility…" and "For nearly 20 years, I've been exploring Iceland's most dramatic landscapes…". The reader is always **you** / **your**: "designed around your pace", "the photos in your hands", "Tell us your dates". Never "the client", never "users".

**Tone.** Calm, factual, quietly proud. The brag is always evidenced and specific — "nearly 20 years", "Iceland's oldest standing lighthouse", "custom-built 4X4" — never superlative marketing air. It sells by contrast with the mass-market alternative, and the contrast is stated flatly, often with an em dash:
- "Hidden locations, not tour-bus stops"
- "The plan changes with the weather and the light — never the other way around."
- "Restaurants, hot springs and viewpoints Luke actually uses — not a sponsored list."
- "No fixed itineraries, no tour buses, no crowds."

**Casing.** Sentence case for headlines, though marketing headings often title-case key phrases as the source does ("Private Iceland Day Tours", "Who This Reykjanes Tour Is For"). Buttons are Title Case ("Check Availability", "See the Gallery"). Eyebrows and small labels are ALL CAPS with 0.14em tracking ("THE LANDSCAPE", "HOW IT WORKS", "PRIVATE TOUR", "DURATION"). Never all-caps a sentence.

**Length.** Headlines 3–9 words. Leads 1–3 sentences. Bullet support lines exactly one sentence. Section copy 2 short paragraphs maximum — when more is tempting, add a photograph instead.

**Vocabulary.** "private", "customized / personalized", "hidden", "secret spots", "the light", "the forecast", "away from the crowds", "photography guidance", "itinerary". Icelandic place names keep their diacritics: Reykjavík, Keflavík, Valahnúkamöl, Krýsuvík, Reykjanesviti. Prices are written "from €149" and "$1,700 / group"; durations "7 hours", "3 days".

**Testimonials** are quoted verbatim, exclamation marks and all, wrapped in straight double quotes, attributed as "Deborah F · United States · Tripadvisor Review". Reviews in the marquee are deliberately truncated mid-sentence with "… Read More" — that clipping reads as authentic and should be preserved.

**Emoji: never.** Not in copy, not in headings, not as icons. The one non-alphabetic character in use is the ☆ next to the 5.0 rating and the · separator in meta lines.

## Visual foundations

**Palette.** A cool Icelandic base of navy and glacier blue on warm cream and sand, with one hot accent: amber. Amber (`--amber-400` #F4B04B) is *only* the commercial action — the booking CTA and the WhatsApp button — plus stars and the eyebrow on dark panels. Navy `--ink-900` #1D2D44 is all heading text; `--ink-800` #23343E is the dark section and footer; `--ink-700` #324856 is the form panel inside it. Body copy is warm grey `--gray-600` #5C6570. Glacier blue `--blue-500` #396280 carries eyebrows, icons and the oversized step numerals. Espresso `--espresso-900` #291F1E is the in-card CTA — used *instead of* amber inside tour cards so the card doesn't compete with the page's primary CTA. Two background colours per page, no more: cream `--cream-100` and sand `--sand-200`, with navy for the closing section.

**Type.** Two families, no exceptions. **Prata** (regular only — it has no other weight) for every display line, card title, price, statistic and step numeral; leading 1.08–1.30; no letterspacing; never bold, never uppercase. **Lato** for everything else: 15.5px body at 1.7 leading, 17px leads, 14px labels, 13px fine print, 12px uppercase eyebrows at 0.14em. Weight is how Lato creates hierarchy (400 / 700 / 900), never colour alone.

**Layout.** 1200px container, 24px gutter, 120px vertical section rhythm (80px for tighter runs). Recurring structures: full-bleed photo hero; a 380–440px photo column paired with a text column at 96px gap, alternating sides down the page; 4-up card grids; a 2-up wide grid for multi-day tours; a two-column FAQ (heading left, accordion right); the navy contact section as a 50/50 split. Nothing is sticky and nothing is fixed in the supplied designs — the header scrolls away.

**Backgrounds.** Flat colour only. No gradients as decoration, no patterns, no textures, no hand-drawn illustration anywhere in this brand. The single gradient in the system is the hero scrim (`--scrim-image`), a vertical dark wash that exists purely to protect cream display type over photography. Sections are separated by colour change, not by rules or dividers.

**Imagery.** Photography *is* the brand's visual language and the only decorative element permitted. It is cool-toned and moody: steam, low cloud, wet basalt, teal geothermal water, muted moss; overcast and blue-hour light, never sunny-saturated postcard grading; no filters, no grain, no duotone. Landscapes are unpeopled or carry a single small human figure for scale (often Luke in the yellow jacket — the one warm accent in the photography, which happens to rhyme with the amber CTA). Travellers appear in the gallery strips and reviews, candid and un-posed. Always `object-fit: cover` at 12px radius; hero images full-bleed; portrait crops 3:4 or 4:5, landscape tiles 3:2, gallery cells 5:4. No text is ever set on a photo except in a hero (which gets the scrim) or in a translucent chip.

**Corner radii.** 999px for every action — buttons and chips are always full pills. 12px for cards and images. 16px for panels (form, fact bar). 10px for FAQ rows. 6px for form fields. Nothing is square; nothing is more rounded than a pill.

**Cards.** Sand fill (`--surface-card` #E9E6DD), 12px radius, 24px padding, **no border and no shadow at rest** — they read as tinted areas, not floating objects. Elevation is reserved: the fact bar that overlaps the hero and the featured review card use `--shadow-bar` / `--shadow-card`; the tour card picks up `--shadow-card` plus a 2px lift on hover only. FAQ rows are the exception that carries a hairline border on cream.

**Shadows.** Soft, large, navy-tinted, never black: `0 8px 24px rgba(29,45,68,.06)`. Used for "this floats above the page", never for general depth. No inner shadows except a barely-there field inset.

**Transparency & blur.** Sparingly and only over photography: the hero scrim, the translucent duration badge (`--scrim-chip` + 8px backdrop blur), and the `outlineLight` button (18% dark fill, 28% cream border). Never blur over flat colour; never a frosted panel on cream.

**Borders.** Hairlines only, always a tint of navy rather than grey: `--border-subtle` 12%, `--border-strong` 28%, `--border-field` 16%; on dark, cream at 14–28%. 1px, always.

**Motion.** Restrained and functional. 220ms with `cubic-bezier(.22,.61,.36,1)` for colour and border changes; 420ms for the 1.035 image zoom on card hover; 140ms for press. Fades and small translations only — no bounce, no spring, no parallax, no scroll-triggered reveals, no autoplaying carousels (the testimonial arrows are manual). If in doubt, don't animate.

**Hover states.** Amber darkens to `--amber-500`; espresso lifts to `--espresso-800`; outline buttons gain a 5% navy wash and a full-strength border; `outlineLight` goes to 16% cream fill and a cream border; text links go navy → glacier blue; images zoom 3.5% inside a fixed frame; cards lift 2px and gain `--shadow-card`. Never a colour *lightening* on hover, never an opacity fade on buttons.

**Press states.** `scale(.985)` plus the hover colour held. No ripple, no colour flash.

**Focus.** `--focus-ring`, a 3px 35%-opacity glacier-blue halo; on the navy panel, fields switch their border to cream instead.

**Disabled.** 45% opacity, no colour change, `not-allowed` cursor.

## Iconography

**Lucide** (2px stroke, 24px grid, round caps) is the icon system — the glyphs in the supplied mockups are Lucide's `user`, `clock`, `briefcase`, `truck`, `heart`, `phone`, `map-pin`, `chevron-down`, `plus`/`minus`, `star`, `arrow-left`/`arrow-right`. The uploads contained no icon assets, so **Lucide is loaded from CDN** (`unpkg.com/lucide-static@0.544.0`) rather than vendored — flagged as a substitution to confirm, though the match to the mockups is exact.

Rules: outline only, never filled (including stars, which are outline stars at 30% opacity when empty). Always `currentColor` — glacier blue on light, cream on dark. 20px is the default; 16px inside buttons; 14px for stars. Icons sit in a 40px sand circle (`IconChip`) in value-prop lists and a 32px translucent circle in the dark contact rows. Never an icon-only button except the footer socials (cream circles, 15px navy glyph) and the testimonial arrows (hairline circles).

There is no icon font and no SVG sprite. Emoji are never used as icons. The only unicode used decoratively is ☆ (in the "5.0 ☆" statistic) and · as a separator.

## Logo

`assets/logo.png` — the "SECRET SPOTS ICELAND" wordmark with its mountain/valley mark, **extracted from the supplied mockup at the highest resolution available (455×204)**. No vector original was provided. On navy it is knocked out to cream via `filter: brightness(0) invert(1)`. It renders at 30px height in the header, 44px on specimen cards. There is no icon-only or stacked lockup in the source; do not create one. **Please supply the original SVG/PNG logo files** — the extracted raster will not scale cleanly above ~45px.

## Known extrapolations

Flagged so they are not mistaken for real brand facts:

1. Only one real tour ("Secret Reykjanes", €149 / $1,700 per group, 7 hours) appears in the sources. The other tours, prices and durations in the UI kit are plausible filler.
2. Two of the four reviews in the UI kit are written in-voice; two are from the mockups.
3. FAQ answers are drafts — the mockup itself says "flag any that need a fact-check against your real policies".
4. Nav destinations Photography Guide, Our Vehicles, Blog, Reviews and How it works exist as links but were never designed; they are not built.
5. No mobile or tablet layouts were supplied. The system is desktop-only at 1440px; breakpoints would be invention.
