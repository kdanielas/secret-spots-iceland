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
  /** Teaser for the blog index cards. */
  excerpt: string;
  /**
   * A one-or-two-line answer to the title, used as the post's hero subtitle so
   * the first text after the <h1> answers the headline. Kept separate from
   * `excerpt`, which sells the click rather than answering the question.
   */
  answer: string;
  href: string;
}

export const POSTS: BlogPost[] = [
  {
    image: accessibleImg,
    datePublished: '2026-09-23',
    title: 'Planning an Accessible Trip to Iceland: 10 Questions You Should Ask Any Operator',
    excerpt: 'Before you book an accessible trip to Iceland, here are the questions we think you should ask any operator — from vehicles and cancellation policies to what happens when the plan has to change.',
    answer: "The questions worth asking are the specific ones: who will actually guide you, which vehicle you'll travel in, what the alternative is when a place can't be reached, and what happens when a plan has to change mid-trip.",
    href: '/blog/accessible-iceland-trip-questions',
  },
  {
    image: photoGuideImg,
    datePublished: '2026-09-01',
    title: 'Best Time to Photograph Iceland: A Month-by-Month Guide',
    excerpt: 'From winter aurora to endless summer light — what to expect and where to point your camera, month by month.',
    answer: 'Late September to March for northern lights and ice caves; June to mid-July for the midnight sun and the highlands. If you can only come once, late September or early March gives you workable daylight and real darkness in the same trip.',
    href: '/blog/best-time-to-photograph-iceland',
  },
  {
    image: wheelchair12DayImg,
    datePublished: '2026-07-17',
    title: 'How We Made Iceland Accessible: A 12-Day Wheelchair Tour',
    excerpt: 'The story behind one of our most ambitious private tours — 12 days across Iceland, built around one traveller in a wheelchair.',
    answer: 'Twelve days, a pace set by the guest rather than a schedule, and two helicopter flights to reach the glacier views and remote coastline no road leads to.',
    href: '/blog/wheelchair-accessible-iceland-12-day-tour',
  },
  {
    image: photoTipsImg,
    datePublished: '2026-06-24',
    title: 'Iceland Photography Tips',
    excerpt: "Simple, practical tips from a working photographer for getting Iceland's landscapes and light right, whatever camera you're carrying.",
    answer: "Good photographs in Iceland come down to three things: timing, light and the right gear. Here's when to visit for the shots you're after, what to pack, and the mistakes most first-timers make.",
    href: '/blog/iceland-photography-tips',
  },
  {
    image: southCoast1DayImg,
    datePublished: '2025-07-15',
    title: 'Iceland in 3 Days or Just 1? The South Coast of Iceland',
    excerpt: "Waterfalls, black sand beaches and glacier lagoons — how much of the South Coast you can really see, depending on how much time you have.",
    answer: "One day is enough for the South Coast's headline sights — Seljalandsfoss, Skógafoss, Sólheimajökull and Reynisfjara — plus a few stops off the usual route. Three days, or six, simply let you go slower and further.",
    href: '/blog/iceland-3-days-or-1-south-coast',
  },
  {
    image: sixDaysImg,
    datePublished: '2025-07-15',
    title: '6 Days in Iceland – What to See and Experience?',
    excerpt: 'A full loop of Iceland shaped around your pace — what a six-day private itinerary can actually cover.',
    answer: 'Six days is enough for a loop that never doubles back: the Reykjanes and Snæfellsnes peninsulas, the Golden Circle, two full days on the South Coast, and the Highlands to finish.',
    href: '/blog/6-days-in-iceland',
  },
  {
    image: stongImg,
    datePublished: '2025-06-16',
    title: 'Þjóðveldisbærinn Stöng - The Commonwealth Farm',
    excerpt: 'A reconstructed Viking-age farmstead buried by a 1104 eruption — one of the Highlands’ quieter historical stops.',
    answer: 'A faithful reconstruction of the Viking-age farm at Stöng, which the eruption of Mount Hekla buried in 1104 — and one you can walk into, dress for and play Viking-era games in.',
    href: '/blog/thjodveldisbaerinn-stong-commonwealth-farm',
  },
  {
    image: threeDaysImg,
    datePublished: '2025-06-16',
    title: '3 Days in South Iceland – What Can You See?',
    excerpt: 'A three-day private itinerary along the South Coast, built around the light, the weather and what you actually want to see.',
    answer: "Three days based in Vík, just under 200 km from Reykjavík, covers four of the South Coast's best waterfalls, the black sand of Reynisfjara and Diamond Beach, and Jökulsárlón glacier lagoon.",
    href: '/blog/3-days-in-south-iceland',
  },
  {
    image: reykjanesSecretsImg,
    datePublished: '2019-03-11',
    title: 'What Secrets Does the Reykjanes Peninsula Hide?',
    excerpt: 'Just a short trip outside Reykjavík lies a peninsula of hidden lava fields, geothermal areas and coastlines most visitors never see.',
    answer: "A short drive from Reykjavík: Reykjanesviti, Iceland's oldest lighthouse, the steaming Gunnuhver and Krýsuvík geothermal fields, the Brimketill lava pool and Lake Kleifarvatn — places most visitors pass without knowing they are there.",
    href: '/blog/reykjanes-peninsula-secrets',
  },
  {
    image: goldenCircleImg,
    datePublished: '2019-03-11',
    title: 'What Is the Golden Circle in Iceland and Why Is It Worth Visiting?',
    excerpt: "Where the name comes from, what the route includes, and why it's still one of the best ways to see Iceland in a day.",
    answer: "The Golden Circle (Gullni hringurinn) is a fully drivable route in southwest Iceland linking Þingvellir National Park, the geysers of Haukadalur and Gullfoss waterfall — three of the country's top sights in a single day from Reykjavík.",
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
