import type { ImageMetadata } from 'astro';

import reykjanesImg from '../assets/images/reykjanes-eruption-night.webp';
import southCoastImg from '../assets/images/vestrahorn-black-sand-dunes.webp';
import goldenCircleImg from '../assets/images/kerid-crater-golden-circle.webp';
import highlandsImg from '../assets/images/south-coast-glacier-snowmobile.webp';
import threeDaysImg from '../assets/images/south-coast-vestrahorn-photographer.webp';
import sixDaysImg from '../assets/images/glacier-lagoon-south-coast-drone.webp';

/** One bullet in a tour's highlight list on /tours. */
export interface TourHighlight {
  title: string;
  /** Omitted on the closing "Professional photography guidance included" line. */
  description?: string;
}

export interface Tour {
  /** Anchor id on /tours — kept stable, existing links point at these. */
  slug: string;
  title: string;
  href: string;
  /** Short form for the card badge, e.g. "7 hours" or "6 days". */
  duration: string;
  /** Starting price for the whole group, in US dollars. */
  priceUsd: number;
  description: string;
  image: ImageMetadata;
  /** Shown in the two-card row on the homepage. */
  featured?: boolean;
  /** Which block of /tours the tour is listed under. */
  group: 'day' | 'multi-day';
  /** Heading used on the /tours listing when it is longer than `title`. */
  listingTitle?: string;
  /** Who the tour suits — the "Perfect for:" half of the card's meta line. */
  audience: string;
  /** Replaces `duration` in that meta line when the nights matter. */
  durationDetail?: string;
  /** The listing copy — the full pitch, not the one-line card summary. */
  longDescription: string;
  /** Label above the bullets; the 6-day trip lists days instead of highlights. */
  highlightsLabel?: string;
  highlights: TourHighlight[];
  /** Caveat printed after the bullets: season, difficulty, add-ons. */
  note?: string;
}

/**
 * The tours Luke actually sells, in the order they appear on /tours: day tours
 * first, then the multi-day trips. Single source of truth for the listings, the
 * price shown on each tour page, and the contact form's tour picker — the
 * figures here are the real ones, so they must not be edited page by page.
 *
 * The listing copy (`longDescription`, `highlights`, `note`) is the text the old
 * /iceland-photography-tours page ranked with (#14). /tours replaces that URL,
 * so it has to carry the same content; shortening it hands Google a thinner
 * page on a brand-new URL, which is how a migration loses its rankings.
 */
export const TOURS: Tour[] = [
  {
    slug: 'secret-reykjanes',
    title: 'Secret Reykjanes',
    listingTitle: 'Secret Reykjanes Tour',
    href: '/tours/reykjanes',
    duration: '7 hours',
    priceUsd: 1500,
    description:
      'Volcanic craters, geothermal fields and dramatic sea cliffs near Reykjavik, with professional photography guidance.',
    image: reykjanesImg,
    group: 'day',
    audience: 'All levels',
    longDescription:
      "Volcanic craters, geothermal fields and dramatic sea cliffs just one hour from Reykjavík. One of Iceland's most unique private Iceland tour experiences — and almost no tourists. Explore hidden Iceland landscapes away from the crowds: otherworldly lava fields, steaming geothermal zones, and towering sea cliffs with professional photography guidance throughout.",
    highlights: [
      { title: 'Valahnúkamöl Sea Cliffs', description: 'Towering basalt cliffs and roaring Atlantic waves' },
      { title: 'Gunnuhver Geothermal Area', description: 'Bubbling mud pools and eerie steam vents' },
      { title: 'Brimketill Lava Rock Pool', description: 'A stunning natural pool carved by the sea' },
      { title: 'Krýsuvík Geothermal Fields', description: 'Colorful hot springs and sulfuric landscapes' },
      { title: 'Lake Kleifarvatn', description: 'A secluded volcanic lake surrounded by mystery' },
      { title: 'Professional photography guidance included' },
    ],
  },
  {
    slug: 'south-coast-waterfalls',
    title: 'South Coast Adventure',
    href: '/tours/south-coast-adventure',
    duration: '10 hours',
    priceUsd: 1600,
    description:
      'Black sand beaches, glacier views and thundering waterfalls along the Ring Road, timed for the best light.',
    image: southCoastImg,
    group: 'day',
    audience: 'All levels',
    longDescription:
      "Iceland's most dramatic landscape in one unforgettable day. Waterfalls, glaciers, black sand beaches and coastal cliffs carved by centuries of Atlantic waves. From Seljalandsfoss and Skógafoss waterfalls to Reynisfjara's towering basalt columns, experience the South Coast with a private tour of Iceland designed around your pace, avoiding crowded buses and fixed schedules — with flexible timing and professional photography guidance.",
    highlights: [
      { title: 'Seljalandsfoss Waterfall', description: 'Walk behind this 60-meter cascade (conditions permitting)' },
      { title: 'Skógafoss Waterfall', description: "One of Iceland's most powerful waterfalls" },
      { title: 'Reynisfjara Black Sand Beach', description: 'Jet-black sand, basalt columns and sea stacks' },
      { title: 'Dyrhólaey Nature Reserve', description: 'Sea arch, dramatic cliffs and seabird viewpoints' },
      { title: 'Sólheimajökull Glacier', description: 'Optional glacier hiking available' },
      { title: 'Professional photography guidance included' },
    ],
  },
  {
    slug: 'golden-circle-secrets',
    title: 'Golden Circle',
    href: '/tours/golden-circle',
    duration: '8 hours',
    priceUsd: 1500,
    description:
      'The classic route reimagined — geysers, waterfalls and craters, with detours to the spots most visitors skip.',
    image: goldenCircleImg,
    group: 'day',
    audience: 'All levels',
    longDescription:
      "This private Golden Circle tour in Iceland combines famous landmarks with hidden stops and local knowledge. Skip the crowds and enjoy the Golden Circle's most breathtaking natural landmarks with hidden stops, insider insights, and flexible timing. Þingvellir, Strokkur geyser, Gullfoss waterfall, and the Secret Lagoon — all experienced at your pace with professional photography guidance.",
    highlights: [
      { title: 'Þingvellir National Park', description: 'UNESCO World Heritage site where tectonic plates meet' },
      { title: 'Strokkur Geyser', description: 'Watch it erupt 20+ meters high every few minutes' },
      { title: 'Gullfoss Waterfall', description: "One of Iceland's most iconic waterfalls, fueled by glacial power" },
      { title: 'Kerið Crater Lake', description: 'Colorful volcanic crater with a deep blue lake' },
      { title: 'Secret Lagoon', description: "Iceland's oldest natural hot spring, peaceful and authentic" },
      { title: 'Professional photography guidance included' },
    ],
  },
  {
    slug: 'highlands-adventure',
    title: 'Highlands Adventure',
    href: '/tours/highlands-adventure',
    duration: '10-12 hours',
    priceUsd: 1700,
    description:
      'Remote highland routes, hot rivers and volcanic landscapes most tours never reach — summer only.',
    image: highlandsImg,
    featured: true,
    group: 'day',
    audience: 'Adventure seekers',
    longDescription:
      "Discover Iceland's hidden landscapes through an off-the-beaten-path private Iceland tour. Iceland's most remote and mystical landscapes: dramatic waterfalls plunging 122 meters into canyons, colorful rhyolite mountains, Viking ruins buried in time, and lava formations that look like another planet. Only accessible in summer with the right vehicle and local knowledge — both included.",
    highlights: [
      { title: 'Háifoss Waterfall', description: "Iceland's second-tallest waterfall at 122 meters" },
      { title: 'Sigöldugljúfur Canyon', description: 'A magical canyon with dozens of cascading waterfalls' },
      { title: 'Gjáin Valley', description: 'Fairytale ravine with lava fields, moss and charming waterfalls' },
      { title: 'Þjóðveldisbærinn Stöng', description: 'Reconstructed Viking turf house from 1100 years ago' },
      { title: 'Hjálparfoss', description: 'Tranquil double waterfall framed by lava cliffs' },
      { title: 'Professional photography guidance in truly remote landscapes' },
    ],
    note: 'Summer only (June–September), weather dependent. Moderate to challenging hiking.',
  },
  {
    slug: 'three-days-south-coast',
    title: '3 Days South Coast',
    listingTitle: '3 Days Ultimate South Coast from Reykjavik',
    href: '/tours/3-days-south-coast',
    duration: '3 days',
    priceUsd: 4500,
    description:
      'Three days along the South Coast with two nights in Vík — glaciers, hidden canyons and waterfalls at a relaxed pace.',
    image: threeDaysImg,
    group: 'multi-day',
    audience: 'Families & couples',
    durationDetail: '3 days / 2 nights',
    longDescription:
      "A fully customizable private tour of Iceland exploring glaciers, waterfalls, and hidden South Coast locations: glaciers, ice caves, black sand beaches and hidden canyons with overnight stays in Vík. Combine Iceland's most iconic waterfalls with glacier lagoons, optional glacier hikes, and the kind of flexible timing that transforms a famous route into a personal adventure. Three days to experience the complete spectrum of South Coast drama.",
    highlights: [
      { title: 'Seljalandsfoss & Skógafoss', description: "Iceland's most iconic waterfalls" },
      { title: 'Reynisfjara Black Sand Beach', description: 'Dramatic basalt columns and crashing waves' },
      { title: 'Glacier Lagoon & Ice Caves', description: 'Floating icebergs and ancient ice formations' },
      { title: 'Vatnajökull National Park', description: "Europe's largest glacier with waterfalls and hiking" },
      { title: 'Dyrhólaey Promontory', description: 'Panoramic views and puffin colonies (seasonal)' },
      { title: 'Professional photography guidance throughout' },
    ],
  },
  {
    slug: 'ring-road-northern-lights',
    title: '6 Days Ultimate Iceland Adventure',
    listingTitle: '6 Days Ultimate Adventure from Reykjavik',
    href: '/tours/6-days-ultimate-adventure',
    duration: '6 days',
    priceUsd: 8600,
    description:
      'A full loop of Iceland shaped around your pace, with dedicated nights chasing the aurora.',
    image: sixDaysImg,
    featured: true,
    group: 'multi-day',
    audience: 'Complete Iceland experience',
    durationDetail: '6 days / 5 nights',
    longDescription:
      'The complete Iceland experience in one unforgettable journey. From volcanic landscapes and geothermal wonders to thundering waterfalls, otherworldly glaciers, and remote Highlands. Stay 3 nights in Reykjavík and 2 nights on the South Coast, exploring everything Iceland is famous for — plus the hidden gems only a local guide knows.',
    highlightsLabel: 'Day by day',
    highlights: [
      { title: 'Day 1: Reykjanes Peninsula', description: 'Volcanic craters, geothermal fields, sea cliffs, lava lakes and hidden coastal viewpoints' },
      { title: 'Day 2: Snæfellsnes Peninsula', description: 'Kirkjufell mountain, lava fields, black sand beaches and the Snæfellsjökull glacier volcano' },
      { title: 'Day 3: Golden Circle', description: 'Þingvellir, Strokkur geyser, Gullfoss waterfall, Kerið crater and Secret Lagoon' },
      { title: 'Day 4: South Coast', description: 'Seljalandsfoss, Skógafoss, Reynisfjara black sand beach and glacier views' },
      { title: 'Day 5: Glaciers & Highlands', description: 'Glacier lagoon with icebergs, ice caves, Fjaðrárgljúfur canyon and Skaftafell' },
      { title: 'Day 6: Highlands Hidden Gems', description: 'Hjálparfoss, Gjáin valley, Þjófafoss waterfall, Stöng Viking settlement and Háifoss' },
    ],
    note: 'Optional add-ons: glacier hiking, ice cave tour, snowmobiling, horseback riding and dog sledding (winter).',
  },
];

/** The day tours, in listing order — the first block on /tours. */
export const DAY_TOURS = TOURS.filter((t) => t.group === 'day');

/** The multi-day trips — the second block on /tours. */
export const MULTI_DAY_TOURS = TOURS.filter((t) => t.group === 'multi-day');

/** The heading a tour gets on the /tours listing. */
export function listingTitle(tour: Tour): string {
  return tour.listingTitle ?? tour.title;
}

/** "7 hours · Private group only · Perfect for: All levels" */
export function tourMetaLine(tour: Tour): string {
  return [tour.durationDetail ?? tour.duration, 'Private group only', `Perfect for: ${tour.audience}`].join(' · ');
}

/** The two tours in the "Curated Iceland Experiences" row on the homepage. */
export const FEATURED_TOURS = TOURS.filter((t) => t.featured);

/** "$1,500" — prices are whole dollars, so no decimals. */
export function formatPrice(usd: number): string {
  return `$${usd.toLocaleString('en-US')}`;
}

/** The entry for one tour page. Throws at build time if the slug is unknown. */
export function getTour(slug: string): Tour {
  const tour = TOURS.find((t) => t.slug === slug);
  if (!tour) throw new Error(`Unknown tour slug: ${slug}`);
  return tour;
}

/** "From $1,500 / group" — the price line in a tour page's info bar. */
export function priceLabel(slug: string): string {
  return `From ${formatPrice(getTour(slug).priceUsd)} / group`;
}

/**
 * "/contact?tour=secret-reykjanes" — the booking link for one tour. The contact
 * form reads the `tour` parameter to preselect its tour picker, so a traveller
 * who clicks "Check Availability" on a tour lands on the form with that tour
 * already chosen. Going through getTour() means a typo fails the build instead
 * of silently shipping a link the form can't match.
 */
export function contactHref(slug: string): string {
  return `/contact?tour=${getTour(slug).slug}`;
}

/**
 * El enlace de contacto que corresponde a una página: lleva el tour cuando la
 * página es la de un tour, y es el /contact de siempre en cualquier otra. Así
 * el botón «Contact us» de la cabecera también llega al formulario con el tour
 * ya elegido, igual que los CTA de la propia página.
 */
export function contactHrefFromPath(pathname: string): string {
  const path = pathname.replace(/\/+$/, '') || '/';
  const tour = TOURS.find((t) => t.href === path);
  return tour ? contactHref(tour.slug) : '/contact';
}
