/** Canonical origin for the site — used for absolute URLs in structured data. */
export const SITE_URL = 'https://secretspotsoficeland.com';

/** Single source of truth for the business details used in JSON-LD and the footer. */
export const BUSINESS = {
  name: 'Secret Spots of Iceland',
  shortName: 'Secret Spots Iceland',
  description:
    'Private, photography-led Iceland tours with local guide Luke — hidden landscapes, flexible itineraries, no crowds.',
  telephone: '+354 845 4057',
  /** Same number as `telephone`, without spaces — the `tel:` href wants no separators. */
  telephoneHref: 'tel:+3548454057',
  email: 'hello@secretspotsiceland.com',
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

/** X handle, for the twitter:site attribution on the social cards. */
export const TWITTER_HANDLE = '@LukeInIceland';

/**
 * The verified profiles. Also the source of the Organization `sameAs` in
 * schema.ts, which is why each href is the bare canonical profile URL: no
 * `#REVIEWS` fragment and no share-link tracking params, since Google and the
 * AI assistants match `sameAs` against the profile's own canonical address.
 */
export const SOCIALS = [
  { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/secretspotsiceland/' },
  { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/SecretspotsofIceland' },
  { icon: 'x-logo', label: 'X', href: 'https://x.com/LukeInIceland' },
  {
    icon: 'tripadvisor',
    label: 'Tripadvisor',
    href: 'https://www.tripadvisor.com/Attraction_Review-g189970-d23560580-Reviews-Secretspotsiceland-Reykjavik_Capital_Region.html',
  },
  { icon: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@secretspotsiceland' },
  { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@lukeem477' },
] as const;

/**
 * Where the public ratings live, for the rating chips on the home page. These
 * are the business-level listings — the aggregate each chip shows is the score
 * of the whole operator, so a chip must not land on a single tour's listing.
 * The reviews page links the individual tour product listing instead.
 */
export const REVIEW_PROFILES = {
  trustpilot: 'https://www.trustpilot.com/review/secretspotsoficeland.com',
  google:
    'https://www.google.com/maps/place/Secret+Spots+Of+Iceland/@64.1338111,-21.8213431,17z/data=!3m1!4b1!4m6!3m5!1s0x48d675481deb0d47:0x3e7adf7b877b8953!8m2!3d64.1338111!4d-21.8213431!16s%2Fg%2F11pv6bm7q3',
  tripadvisor:
    'https://www.tripadvisor.com/Attraction_Review-g189970-d23560580-Reviews-Secretspotsiceland-Reykjavik_Capital_Region.html',
} as const;
