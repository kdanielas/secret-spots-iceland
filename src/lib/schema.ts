import { BUSINESS, SITE_URL, SOCIALS } from '../data/site';

type Node = Record<string, unknown>;

/** Absolute URL for a site-relative path — schema.org wants fully qualified URLs. */
export const absoluteUrl = (path: string) => new URL(path, SITE_URL).href;

/**
 * Canonical absolute URL for a page path, with the trailing slash dropped so the
 * @id values match the hrefs used across the site.
 */
export const canonicalUrl = (pathname: string) =>
  absoluteUrl(pathname === '/' ? '/' : pathname.replace(/\/+$/, ''));

/** Stable @id values so nodes can reference each other instead of repeating themselves. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * The business itself. TravelAgency is a subtype of both LocalBusiness and
 * Organization, so this one node covers the organization and the physical
 * business in Reykjavík.
 */
export function organizationNode(logoUrl: string): Node {
  return {
    '@type': 'TravelAgency',
    '@id': ORGANIZATION_ID,
    name: BUSINESS.name,
    alternateName: BUSINESS.shortName,
    description: BUSINESS.description,
    url: absoluteUrl('/'),
    logo: { '@type': 'ImageObject', url: logoUrl },
    image: logoUrl,
    telephone: BUSINESS.telephone,
    priceRange: BUSINESS.priceRange,
    taxID: BUSINESS.taxID,
    vatID: BUSINESS.vatID,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      postalCode: BUSINESS.address.postalCode,
      addressLocality: BUSINESS.address.city,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: { '@type': 'Country', name: BUSINESS.areaServed },
    founder: { '@type': 'Person', name: BUSINESS.founder },
    sameAs: SOCIALS.map((s) => s.href),
  };
}

export function websiteNode(): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: BUSINESS.shortName,
    url: absoluteUrl('/'),
    inLanguage: 'en',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

/** Nodes present on every page. */
export function siteNodes(logoUrl: string): Node[] {
  return [organizationNode(logoUrl), websiteNode()];
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export function faqPageNode(pageUrl: string, items: FaqEntry[]): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export interface BlogPostingInput {
  pageUrl: string;
  headline: string;
  description: string;
  datePublished: string;
  imageUrl: string;
  authorName: string;
}

export function blogPostingNode(input: BlogPostingInput): Node {
  return {
    '@type': 'BlogPosting',
    '@id': `${input.pageUrl}#article`,
    mainEntityOfPage: input.pageUrl,
    url: input.pageUrl,
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    image: input.imageUrl,
    inLanguage: 'en',
    author: { '@type': 'Person', name: input.authorName },
    publisher: { '@id': ORGANIZATION_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export interface TouristTripInput {
  pageUrl: string;
  name: string;
  description: string;
  imageUrl: string;
  /** Human-readable length, e.g. "7 hours" or "3 Days / 2 Nights". */
  duration?: string;
  /** Stops on the itinerary, in order. */
  highlights?: string[];
}

/**
 * Tours are TouristTrip nodes. Prices are deliberately left out: the figures on
 * the tours listing and the tour pages still contradict each other (see #13), and
 * publishing an offer we can't stand behind is worse than publishing none.
 */
export function touristTripNode(input: TouristTripInput): Node {
  const node: Node = {
    '@type': 'TouristTrip',
    '@id': `${input.pageUrl}#tour`,
    mainEntityOfPage: input.pageUrl,
    url: input.pageUrl,
    name: input.name,
    description: input.description,
    image: input.imageUrl,
    inLanguage: 'en',
    provider: { '@id': ORGANIZATION_ID },
    tripOrigin: { '@type': 'Place', name: `${BUSINESS.address.city}, Iceland` },
  };

  if (input.duration) {
    node.additionalProperty = {
      '@type': 'PropertyValue',
      name: 'Duration',
      value: input.duration,
    };
  }

  if (input.highlights?.length) {
    node.itinerary = {
      '@type': 'ItemList',
      itemListElement: input.highlights.map((name, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: { '@type': 'TouristAttraction', name },
      })),
    };
  }

  return node;
}

export interface Crumb {
  label: string;
  /** Site-relative path. The last crumb is the current page and needs no href. */
  href?: string;
}

export function breadcrumbNode(pageUrl: string, trail: Crumb[]): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumbs`,
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: absoluteUrl(crumb.href) } : {}),
    })),
  };
}
