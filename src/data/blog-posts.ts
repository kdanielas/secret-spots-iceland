import type { ImageMetadata } from 'astro';
import accessibleImg from '../assets/images/Web images/blog/compressed/wheelchair-glacier-lagoon-portrait-iceland.webp';
import photoGuideImg from '../assets/images/south-coast-vestrahorn-photographer.webp';
import wheelchair12DayImg from '../assets/images/Web images/blog/compressed/godafoss-waterfall-wheelchair-tour-iceland.webp';
import photoTipsImg from '../assets/images/luke-portrait.jpg';
import southCoast1DayImg from '../assets/images/south-coast-vestrahorn-tour.webp';
import sixDaysImg from '../assets/images/glacier-lagoon-south-coast-drone.webp';
import stongImg from '../assets/images/landmannalaugar-iceland-highlands.webp';
import threeDaysImg from '../assets/images/katla-glacier-hike-south-coast.webp';
import reykjanesSecretsImg from '../assets/images/reykjanes-eruption-night.webp';
import goldenCircleImg from '../assets/images/kerid-crater-golden-circle.webp';

export interface BlogPost {
  image: ImageMetadata;
  /** ISO 8601 publication date — the machine-readable source for <time> and JSON-LD. */
  datePublished: string;
  title: string;
  excerpt: string;
  href: string;
}

export const POSTS: BlogPost[] = [
  {
    image: accessibleImg,
    datePublished: '2026-09-23',
    title: 'Planning an Accessible Trip to Iceland: 10 Questions You Should Ask Any Operator',
    excerpt: 'Before you book an accessible trip to Iceland, here are the questions we think you should ask any operator — from vehicles and cancellation policies to what happens when the plan has to change.',
    href: '/blog/accessible-iceland-trip-questions',
  },
  {
    image: photoGuideImg,
    datePublished: '2026-09-01',
    title: 'Best Time to Photograph Iceland: A Month-by-Month Guide',
    excerpt: 'From winter aurora to endless summer light — what to expect and where to point your camera, month by month.',
    href: '/blog/best-time-to-photograph-iceland',
  },
  {
    image: wheelchair12DayImg,
    datePublished: '2026-07-17',
    title: 'How We Made Iceland Accessible: A 12-Day Wheelchair Tour',
    excerpt: 'The story behind one of our most ambitious private tours — 12 days across Iceland, built around one traveller in a wheelchair.',
    href: '/blog/wheelchair-accessible-iceland-12-day-tour',
  },
  {
    image: photoTipsImg,
    datePublished: '2026-06-24',
    title: 'Iceland Photography Tips',
    excerpt: "Simple, practical tips from a working photographer for getting Iceland's landscapes and light right, whatever camera you're carrying.",
    href: '/blog/iceland-photography-tips',
  },
  {
    image: southCoast1DayImg,
    datePublished: '2025-07-15',
    title: 'Iceland in 3 Days or Just 1? The South Coast of Iceland',
    excerpt: "Waterfalls, black sand beaches and glacier lagoons — how much of the South Coast you can really see, depending on how much time you have.",
    href: '/blog/iceland-3-days-or-1-south-coast',
  },
  {
    image: sixDaysImg,
    datePublished: '2025-07-15',
    title: '6 Days in Iceland – What to See and Experience?',
    excerpt: 'A full loop of Iceland shaped around your pace — what a six-day private itinerary can actually cover.',
    href: '/blog/6-days-in-iceland',
  },
  {
    image: stongImg,
    datePublished: '2025-06-16',
    title: 'Þjóðveldisbærinn Stöng - The Commonwealth Farm',
    excerpt: 'A reconstructed Viking-age farmstead buried by a 1104 eruption — one of the Highlands’ quieter historical stops.',
    href: '/blog/thjodveldisbaerinn-stong-commonwealth-farm',
  },
  {
    image: threeDaysImg,
    datePublished: '2025-06-16',
    title: '3 Days in South Iceland – What Can You See?',
    excerpt: 'A three-day private itinerary along the South Coast, built around the light, the weather and what you actually want to see.',
    href: '/blog/3-days-in-south-iceland',
  },
  {
    image: reykjanesSecretsImg,
    datePublished: '2019-03-11',
    title: 'What Secrets Does the Reykjanes Peninsula Hide?',
    excerpt: 'Just a short trip outside Reykjavík lies a peninsula of hidden lava fields, geothermal areas and coastlines most visitors never see.',
    href: '/blog/reykjanes-peninsula-secrets',
  },
  {
    image: goldenCircleImg,
    datePublished: '2019-03-11',
    title: 'What Is the Golden Circle in Iceland and Why Is It Worth Visiting?',
    excerpt: "Where the name comes from, what the route includes, and why it's still one of the best ways to see Iceland in a day.",
    href: '/blog/what-is-the-golden-circle-in-iceland',
  },
];

/** Display form of a publication date. Formatted in UTC so the build machine's timezone can't shift it a day. */
export function formatPostDate(iso: string, month: 'short' | 'long' = 'short') {
  return new Date(iso).toLocaleDateString('en-US', { timeZone: 'UTC', month, day: 'numeric', year: 'numeric' });
}

/** The post behind a /blog/... path. Throws at build time if a post page has no entry here. */
export function getPost(pathname: string): BlogPost {
  const href = pathname !== '/' ? pathname.replace(/\/+$/, '') : pathname;
  const post = POSTS.find((p) => p.href === href);
  if (!post) throw new Error(`No entry in POSTS for ${href} — add one so the page gets its date and Article markup.`);
  return post;
}
