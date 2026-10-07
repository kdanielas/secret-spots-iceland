/** Canonical origin for the site — used for absolute URLs in structured data. */
export const SITE_URL = 'https://secretspotsoficeland.com';

/** Single source of truth for the business details used in JSON-LD and the footer. */
export const BUSINESS = {
  name: 'Secret Spots of Iceland',
  shortName: 'Secret Spots Iceland',
  description:
    'Private, photography-led Iceland tours with local guide Luke — hidden landscapes, flexible itineraries, no crowds.',
  telephone: '+354 845 4057',
  priceRange: '$$$',
  address: {
    street: 'Tangabryggja 18',
    postalCode: '110',
    city: 'Reykjavík',
    country: 'IS',
  },
  /** Kennitala (Icelandic company registry number). */
  taxID: '610823-2030',
  vatID: '152431',
  /** Reykjavík — where the tours are based and from where guests are picked up. */
  geo: { latitude: 64.1466, longitude: -21.9426 },
  areaServed: 'Iceland',
  founder: 'Luke EM',
} as const;

export const SOCIALS = [
  { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/secretspotsiceland/' },
  { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/SecretspotsofIceland' },
  { icon: 'x-logo', label: 'X', href: 'https://x.com/LukeInIceland' },
  {
    icon: 'tripadvisor',
    label: 'Tripadvisor',
    href: 'https://www.tripadvisor.com/Attraction_Review-g189970-d23560580-Reviews-Secretspotsiceland-Reykjavik_Capital_Region.html#REVIEWS',
  },
  { icon: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@secretspotsiceland?_r=1&_t=ZN-95aTyX3mpsc' },
  { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@lukeem477' },
] as const;
