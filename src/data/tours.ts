import type { ImageMetadata } from 'astro';

import reykjanesImg from '../assets/images/reykjanes-eruption-night.webp';
import southCoastImg from '../assets/images/vestrahorn-black-sand-dunes.webp';
import goldenCircleImg from '../assets/images/kerid-crater-golden-circle.webp';
import highlandsImg from '../assets/images/south-coast-glacier-snowmobile.webp';
import threeDaysImg from '../assets/images/south-coast-vestrahorn-photographer.webp';
import sixDaysImg from '../assets/images/glacier-lagoon-south-coast-drone.webp';

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
}

/**
 * The tours Luke actually sells, in the order they appear on /tours: day tours
 * first, then the multi-day trips. Single source of truth for the listings, the
 * price shown on each tour page, and the contact form's tour picker — the
 * figures here are the real ones, so they must not be edited page by page.
 */
export const TOURS: Tour[] = [
  {
    slug: 'secret-reykjanes',
    title: 'Secret Reykjanes',
    href: '/tours/reykjanes',
    duration: '7 hours',
    priceUsd: 1500,
    description:
      'Volcanic craters, geothermal fields and dramatic sea cliffs near Reykjavik, with professional photography guidance.',
    image: reykjanesImg,
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
  },
  {
    slug: 'three-days-south-coast',
    title: '3 Days South Coast',
    href: '/tours/3-days-south-coast',
    duration: '3 days',
    priceUsd: 4500,
    description:
      'Three days along the South Coast with two nights in Vík — glaciers, hidden canyons and waterfalls at a relaxed pace.',
    image: threeDaysImg,
  },
  {
    slug: 'ring-road-northern-lights',
    title: '6 Days Ultimate Iceland Adventure',
    href: '/tours/6-days-ultimate-adventure',
    duration: '6 days',
    priceUsd: 8600,
    description:
      'A full loop of Iceland shaped around your pace, with dedicated nights chasing the aurora.',
    image: sixDaysImg,
    featured: true,
  },
];

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
