import type { ImageMetadata } from 'astro';

// Hero / section photography, grouped by tour so the imports read like the data below.
import reykjanesHeroImg from '../assets/images/DJI_0368.jpg';
import reykjanesExpectImg from '../assets/images/reykjanes-volcano-girl-walking.jpg';
import reykjanesWhoForImg from '../assets/images/DSCF0305.jpg';
import reykjanesNarrativeImg from '../assets/images/reykjanes-piano-volcano-performance.jpg';
import reykjanesPhotoImg from '../assets/images/reykjanes-coastline-couple-shoot.jpg';
import reykjanesHl1 from '../assets/images/reykjanes-coastline.jpg';
import reykjanesHl2 from '../assets/images/reykjanes-reykjanesviti-couple.jpg';
import reykjanesHl3 from '../assets/images/brimketill-reykjanes.jpg';
import reykjanesHl4 from '../assets/images/gunnuhver-hot-springs-reykjanes.jpg';
import reykjanesHl5 from '../assets/images/reykjanes-peninsula-drone.jpg';
import reykjanesHl6 from '../assets/images/reykjanes-gunnuhver-steam.jpg';
import reykjanesHl7 from '../assets/images/reykjanes-lava-field-iceland.jpg';

import southCoastHeroImg from '../assets/images/Web images/south-coast-adventure/DSCF8342.jpg';
import southCoastExpectImg from '../assets/images/Web images/south-coast-adventure/south-coast-skogafoss-winter.jpg';
import southCoastWhoForImg from '../assets/images/Web images/south-coast-adventure/south-coast-horse-skogafoss-tour.jpg';
import southCoastNarrativeImg from '../assets/images/Web images/south-coast-adventure/south-coast-solheimajokull-glacier-outlet.jpg';
import southCoastPhotoImg from '../assets/images/Web images/south-coast-adventure/south-coast-snow-iceland.jpg';
import southCoastHl1 from '../assets/images/Web images/south-coast-adventure/black-sand-beach-iceland-girl-ocean.jpg';
import southCoastHl2 from '../assets/images/Web images/south-coast-adventure/skogafoss-waterfall-rainbow.webp';
import southCoastHl3 from '../assets/images/Web images/south-coast-adventure/south-coast-horse-skogafoss-tour.jpg';
import southCoastHl4 from '../assets/images/Web images/south-coast-adventure/puffin-dyrholaey-iceland.jpg';
import southCoastHl5 from '../assets/images/Web images/south-coast-adventure/vik-village.webp';
import southCoastHl6 from '../assets/images/Web images/south-coast-adventure/skogar-folk-museum-iceland.webp';

import goldenCircleHeroImg from '../assets/images/Web images/golden-circle/reindeer-herd-snow.jpg';
import goldenCircleExpectImg from '../assets/images/Web images/golden-circle/gullfoss-golden-circle-iceland.jpg';
import goldenCirclePhotoImg from '../assets/images/Web images/golden-circle/bruafoss-golden-circle-iceland-friends.jpg';
import goldenCircleHl1 from '../assets/images/Web images/golden-circle/thingvellir-national-park.webp';
import goldenCircleHl2 from '../assets/images/Web images/golden-circle/secret-lagoon.webp';
import goldenCircleHl3 from '../assets/images/Web images/golden-circle/strokkur-geyser.webp';
import goldenCircleHl4 from '../assets/images/Web images/golden-circle/fridheimar-tomato-farm.webp';
import goldenCircleHl5 from '../assets/images/Web images/golden-circle/gullfoss-waterfall-backlit.webp';
import goldenCircleHl6 from '../assets/images/Web images/golden-circle/kerid-crater-golden-circle.webp';

import highlandsHeroImg from '../assets/images/Web images/highlands-adventure/couple-private-tour-iceland.webp';
import highlandsExpectImg from '../assets/images/highlands-couple-iceland.jpg';
import highlandsWhoForImg from '../assets/images/landmannalaugar-guide.jpg';
import highlandsNarrativeImg from '../assets/images/highlands-traveller-waterfall.jpg';
import highlandsPhotoImg from '../assets/images/haifoss-waterfall.jpg';
import highlandsHl1 from '../assets/images/haifoss-highlands-iceland.jpg';
import highlandsHl2 from '../assets/images/highlands-canyon-blue-water.jpg';
import highlandsHl3 from '../assets/images/landmannalaugar-iceland-highlands.jpeg';

import threeDaysHeroImg from '../assets/images/Web images/3-days-south-coast/south-coast-vestrahorn-photographer.jpg';
import threeDaysExpectImg from '../assets/images/Web images/3-days-south-coast/south-coast-skogafoss-tour.jpg';
import threeDaysWhoForImg from '../assets/images/Web images/3-days-south-coast/south-coast-family-tour.jpg';
import threeDaysNarrativeImg from '../assets/images/Web images/3-days-south-coast/highlands-couple-iceland.jpg';
import threeDaysPhotoImg from '../assets/images/Web images/3-days-south-coast/south-coast-horse-skogafoss-tour.jpg';
import threeDaysHl1 from '../assets/images/Web images/3-days-south-coast/south-coast-svartifoss-couple.jpg';
import threeDaysHl2 from '../assets/images/Web images/3-days-south-coast/skogafoss-waterfall-iceland.jpg';
import threeDaysHl3 from '../assets/images/Web images/3-days-south-coast/haifoss-waterfall.jpg';
import threeDaysHl4 from '../assets/images/Web images/3-days-south-coast/black-sand-beach-iceland-girl-ocean.jpg';
import threeDaysHl5 from '../assets/images/Web images/3-days-south-coast/south-coast-glacier-lagoon.jpg';

import sixDaysHeroImg from '../assets/images/highlands-couple-overlook-wide.webp';
import sixDaysExpectImg from '../assets/images/Web images/6-days-ultimate-adventure/reykjanes-post-eruption-landscape.jpg';
import sixDaysWhoForImg from '../assets/images/Web images/6-days-ultimate-adventure/reykjanes-girl-photo.jpg';
import sixDaysNarrativeImg from '../assets/images/Web images/6-days-ultimate-adventure/helicopter-glacier-tour-iceland.jpg';
import sixDaysPhotoImg from '../assets/images/Web images/6-days-ultimate-adventure/landmannalaugar-guide.jpg';
import sixDaysDay1Img from '../assets/images/Web images/6-days-ultimate-adventure/brimketill-reykjanes-natural-pool.jpg';
import sixDaysDay2Img from '../assets/images/bjarnarfoss-snaefellsnes-tour.jpg';
import sixDaysDay3Img from '../assets/images/Web images/6-days-ultimate-adventure/gullfoss-golden-circle-iceland.jpg';
import sixDaysDay4Img from '../assets/images/Web images/6-days-ultimate-adventure/plane-wreck-south-coast.jpg';
import sixDaysDay5Img from '../assets/images/Web images/6-days-ultimate-adventure/south-coast-glacier-snowmobile.jpg';
import sixDaysDay6Img from '../assets/images/Web images/6-days-ultimate-adventure/highlands-canyon-blue-water.jpg';


/** One entry of the pill-shaped bar under the hero title. */
export interface TourStat {
  icon: string;
  label: string;
  sub: string;
}

/**
 * A photo in one of the image + text rows. `ratio` is the desktop aspect ratio
 * the frame was cropped at; it travels in the data because the four rows use
 * three different crops (see --media-ratio in .tour-row-media).
 */
export interface TourImage {
  src: ImageMetadata;
  alt: string;
  ratio: string;
}

export interface TourHighlight {
  image: ImageMetadata;
  title: string;
  description: string;
}

export interface TourReview {
  quote: string;
  name: string;
  type: string;
}

/** One day of a multi-day itinerary. */
export interface TourDay {
  day: number;
  location: string;
  subtitle: string;
  image: ImageMetadata;
  description: string;
  stops: string[];
  /** "Overnight: Reykjavík" and friends — not every day has one. */
  closing: string | null;
}

export interface TourLink {
  label: string;
  href: string;
}

/** "What to expect": an image + checklist row, or a centred checklist when no image is given. */
export interface TourExpect {
  heading: string;
  image?: TourImage;
  items: string[];
}

/**
 * "Who this tour is for". Most tours render a photo beside a plain list;
 * the Golden Circle renders a three-up grid of icons instead.
 */
export type TourWhoFor =
  | { heading: string; image: TourImage; items: string[] }
  | { heading: string; iconItems: { icon: string; text: string }[] };

/** A heading + paragraphs beside a photo, optionally closing on a link. */
export interface TourProse {
  heading: string;
  image: TourImage;
  paragraphs: string[];
  cta?: TourLink;
}

export interface Tour {
  /** Last segment of the URL: /tours/<slug>. */
  slug: string;
  name: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  hero: { image: ImageMetadata; alt: string };
  /** Where "Check Availability" points. */
  availabilityHref: string;
  stats: TourStat[];
  expect: TourExpect;
  highlightsHeading: string;
  highlights: TourHighlight[];
  /** Day-by-day breakdown — only the multi-day tours have one. */
  itinerary?: { heading: string; days: TourDay[] };
  whoFor: TourWhoFor;
  /** The "what this region is like" block. The Golden Circle page doesn't have one. */
  narrative?: TourProse;
  photography: TourProse;
  /** A single review renders a static quote panel; several render the arrows + carousel. */
  reviews: TourReview[];
  cta: { title: string; lead: string; label: string; imageAlt: string };
}

/**
 * Hoisted out of TOURS because the Ultimate Adventure uses it twice: once as the
 * day-by-day itinerary and once, condensed, as the highlights carousel.
 */
const SIX_DAY_ITINERARY: TourDay[] = [
  {
    day: 1,
    location: 'Reykjanes Peninsula',
    subtitle: 'Volcanic Craters & Geothermal Wonders',
    image: sixDaysDay1Img,
    description: 'Step into another world just an hour from Reykjavík. Explore dramatic sea cliffs, ancient volcanic craters, and otherworldly lava fields — all away from tourist hotspots.',
    stops: [
      'Valahnúkamöl Sea Cliffs — Towering basalt cliffs and roaring Atlantic waves',
      "Reykjanesviti Lighthouse — Iceland's oldest lighthouse with sweeping ocean views",
      'Brimketill Lava Rock Pool — A stunning natural pool carved by the sea',
      'Gunnuhver Geothermal Area — Bubbling mud pools and eerie steam vents',
      'Krýsuvík Geothermal Fields — Colorful hot springs and sulfuric landscapes',
      'Lake Kleifarvatn — A secluded volcanic lake surrounded by mystery',
    ],
    closing: 'Overnight: Reykjavík',
  },
  {
    day: 2,
    location: 'Snæfellsnes Peninsula',
    subtitle: 'Iceland in Miniature',
    image: sixDaysDay2Img,
    description: 'Explore the diverse beauty of the Snæfellsnes Peninsula — charming fishing villages, iconic peaks, lava fields, and black sand beaches, all beneath the mystical Snæfellsjökull glacier volcano.',
    stops: [
      "Kirkjufell Mountain & Kirkjufellsfoss — Iceland's most photographed peak",
      'Djúpalónssandur Beach — A rugged beach with sea-polished lava stones',
      'Arnarstapi & Hellnar — Scenic coastal villages and dramatic cliff formations',
      'Snæfellsjökull National Park — Glaciers, lava fields, and folklore',
    ],
    closing: null,
  },
  {
    day: 3,
    location: 'The Golden Circle',
    subtitle: "Iceland's Iconic Trio + Hidden Hot Springs",
    image: sixDaysDay3Img,
    description: "Discover Iceland's most famous route with a private twist — extra stops, insider insights, and a soak in a hidden geothermal pool away from crowds.",
    stops: [
      'Þingvellir National Park — UNESCO site where tectonic plates visibly meet',
      'Strokkur Geyser — Watch boiling water erupt 20 meters into the air',
      'Gullfoss Waterfall — A majestic double-drop waterfall from Langjökull glacier',
      'Kerið Crater Lake — A vibrant red volcanic crater with sapphire blue water',
      "Secret Lagoon — Iceland's oldest geothermal pool, peaceful and authentic",
    ],
    closing: 'Overnight: Reykjavík',
  },
  {
    day: 4,
    location: 'South Coast',
    subtitle: 'Waterfalls, Beaches & Glacial Power',
    image: sixDaysDay4Img,
    description: "Head southeast to Iceland's famous South Coast, where fire meets ice. A day packed with majestic waterfalls, black sand beaches, and jaw-dropping coastlines.",
    stops: [
      'Seljalandsfoss — A waterfall you can walk behind',
      "Skógafoss — One of Iceland's most powerful waterfalls",
      'Kvernufoss — Hidden waterfall in a fairytale gorge',
      'Dyrhólaey Promontory — Panoramic views and puffin colonies (seasonal)',
      'Reynisfjara Black Sand Beach — Basalt columns and crashing waves',
      'Optional: Horseback riding on the beach or through lava fields',
    ],
    closing: 'Overnight: South Coast (Vík area)',
  },
  {
    day: 5,
    location: 'Glaciers',
    subtitle: 'Ice Caves & Highlands Adventure',
    image: sixDaysDay5Img,
    description: "Get closer to Iceland's icy heart. Today's journey includes glacier views, lagoon stops, and optional adrenaline activities in some of Iceland's most dramatic terrain.",
    stops: [
      'Fjaðrárgljúfur Canyon — A winding green canyon straight out of a fantasy',
      'Skaftafell National Park — Glacial landscapes and epic hiking trails',
      'Jökulsárlón Glacier Lagoon — Floating icebergs and the famous Diamond Beach',
      'Optional adventure activities: Ice Cave Tour (seasonal), Glacier Hike with certified guide, Snowmobiling on Vatnajökull, Dog sledding (winter)',
    ],
    closing: 'Overnight: South Coast (Kirkjubæjarklaustur or near Skaftafell)',
  },
  {
    day: 6,
    location: 'Highlands',
    subtitle: 'Hidden Gems + Return to Reykjavík',
    image: sixDaysDay6Img,
    description: 'On the way back, explore the less-visited gems of the Icelandic Highlands — weather and road permitting. Stunning volcanic valleys, canyons, and waterfalls that few visitors ever reach.',
    stops: [
      'Hjálparfoss — Twin waterfalls in a lava field',
      `Þjófafoss — "Thieves' Falls" on Iceland's longest river`,
      'Gjáin — A secret oasis of streams, mini waterfalls, and lava formations',
      'Stöng Viking Settlement — A reconstructed turf longhouse from the Saga Age',
      "Háifoss — One of Iceland's tallest waterfalls at 122 meters",
      'Sigöldugljúfur Canyon — A surreal hidden canyon with vibrant blue water',
    ],
    closing: 'Evening drop-off in Reykjavík',
  },
];

export const TOURS: Tour[] = [
  {
    slug: 'reykjanes',
    name: 'The Hidden Side of Reykjanes',
    intro: `This is a fully private tour — just your group, no strangers, no fixed schedule. Every stop is adapted to your pace, the weather, and the light conditions on the day.`,
    metaTitle: 'Secret Reykjanes Tour | 7-Hour Private Iceland Adventure',
    metaDescription:
      '7-hour private Reykjanes tour. Volcanic craters, geothermal fields, sea cliffs & hidden lava formations just outside Reykjavík. Almost no tourists. Photography included.',
    hero: {
      image: reykjanesHeroImg,
      alt: 'Aerial view of a steaming geothermal vent on the Reykjanes Peninsula',
    },
    availabilityHref: '#',
    stats: [
      { icon: 'clock', label: '7 hours', sub: 'Private tour' },
      { icon: 'map-pin', label: 'Reykjavik', sub: 'Keflavík pickup' },
      { icon: 'briefcase', label: 'From €1,300 / group', sub: 'Year-round' },
    ],
    expect: {
      heading: 'What to Expect on the Reykjanes Tour',
      image: {
        src: reykjanesExpectImg,
        alt: 'Traveler standing near an active lava eruption on the Reykjanes Peninsula',
        ratio: '450/800',
      },
      items: [
        'Explore ancient volcanic craters, geothermal fissures and bubbling mud pools',
        'Walk along dramatic sea cliffs and surreal lava formations',
        'Visit the oldest lighthouse in Iceland — complete with ghost stories',
        'Professional photography guidance throughout — go home with stunning shots',
        'Learn fun facts, Icelandic phrases and unique local insights along the way',
        'Flexible itinerary — adapted daily to weather, light and your interests',
      ],
    },
    highlightsHeading: 'Reykjanes Highlights',
    highlights: [
      { image: reykjanesHl1, title: 'Valahnúkamöl Sea Cliffs', description: 'Towering basalt cliffs and crashing Atlantic waves — one of the most dramatic coastal landscapes in Iceland and almost always crowd-free.' },
      { image: reykjanesHl2, title: 'Reykjanesviti Lighthouse', description: 'The oldest lighthouse in Iceland, perched above the ocean with panoramic views across the peninsula. Rich in local history and folklore.' },
      { image: reykjanesHl3, title: 'Brimketill Lava Rock Pool', description: "A natural lava pool carved by the ocean at the edge of the peninsula — one of Reykjanes' best hidden spots and a favourite photography location." },
      { image: reykjanesHl4, title: 'Gunnuhver Geothermal Area', description: "Steaming vents, vivid colours and eerie local folklore make this one of Iceland's most atmospheric geothermal locations — and one of the least visited." },
      { image: reykjanesHl5, title: 'Lake Kleifarvatn', description: "Iceland's deepest lake, surrounded by hauntingly beautiful volcanic terrain. Mysterious, remote, and almost always empty of other tourists." },
      { image: reykjanesHl6, title: 'Krýsuvík Geothermal Area', description: "Colourful hot springs and active geothermal zones — a photographer's dream and a fascinating glimpse into Iceland's volcanic activity up close." },
      { image: reykjanesHl7, title: 'Hidden Lava Fields & Secret Locations', description: 'Off-the-map locations known only to locals — the kind of hidden Iceland spots that never appear in guidebooks or standard tour itineraries.' },
    ],
    whoFor: {
      heading: 'Who this Reykjanes tour is for',
      image: {
        src: reykjanesWhoForImg,
        alt: 'Traveler standing near the Reykjanesviti lighthouse',
        ratio: '590/886',
      },
      items: [
        'Couples looking for a private Iceland experience away from crowds',
        'Photographers seeking dramatic volcanic landscapes and geothermal locations',
        'Families wanting a flexible, personalised day in Iceland',
        'Travellers arriving or departing via Keflavík Airport looking to make the most of their time',
        'Anyone who wants to experience the real Iceland beyond the standard tourist route',
      ],
    },
    narrative: {
      heading: 'Another planet. One hour from Reykjavík.',
      image: {
        src: reykjanesNarrativeImg,
        alt: 'Musician playing a keyboard on the black sand beach near a Reykjanes sea stack',
        ratio: '450/800',
      },
      paragraphs: [
        "The Reykjanes Peninsula is home to dramatic geothermal activity, steaming mud pools, vast moss-covered lava fields, and rugged volcanic coastlines. It is a region of raw beauty and constant change—a true representation of Iceland's fiery volcanic spirit, often overlooked by major tour buses.",
        'This private custom tour allows us to explore the hidden nooks of Reykjanes at your own pace, with professional photography guidance to capture your memories against the most alien backdrops imaginable.',
      ],
    },
    photography: {
      heading: 'Photographing the Reykjanes Peninsula',
      image: {
        src: reykjanesPhotoImg,
        alt: 'Couple sitting on a Reykjanes coastal cliff overlooking the ocean',
        ratio: '603/903',
      },
      paragraphs: [
        "The Reykjanes Peninsula is one of Iceland's finest photography destinations — dramatic contrasts of black lava, turquoise geothermal pools, ocean spray and volcanic steam create extraordinary images at every stop.",
        "Whether you're joining an Iceland photography tour with a professional camera or capturing memories on your phone, every location on this route is chosen with the best light and composition in mind. Professional photography guidance is included throughout — this is not just a tour, it's an experience designed for travellers who want to come home with images that tell a real story.",
      ],
      cta: { label: 'See our photography tips', href: '/photography-guide' },
    },
    reviews: [
      { quote: 'Our afternoon with Luke was wonderful! He is very patient, accommodating and knowledgeable of the area. He took us to so many beautiful places out of the crowds and took AMAZING photos that captured our memories forever. I highly recommend Luke if you are visiting Reykjavik!', name: 'Deborah F', type: 'United States · Tripadvisor Review' },
    ],
    cta: {
      title: 'Ready to book your Secret Reykjanes Tour?',
      lead: "This is not just a tour — it's a private Iceland experience designed for travellers who crave real connection with nature, culture, and photography. Tell Luke's team your dates and group size and we'll take care of everything else.",
      label: 'Contact us',
      imageAlt: 'Family enjoying a geothermal steam vent on a private Reykjanes tour',
    },
  },
  {
    slug: 'south-coast-adventure',
    name: 'South Coast Private Iceland',
    intro: `This is a fully private tour — just your group, no strangers, no fixed schedule. You'll depart Reykjavík early, drive the scenic Ring Road southeast, and experience the South Coast at a relaxed pace. Optional stops let you customize the day — visit museums, hike a glacier, explore coastal cliffs, or simply find the perfect light for photography.`,
    metaTitle: 'South Coast Iceland Tour | Waterfalls, Glaciers & Black Sand',
    metaDescription:
      '10-hour private South Coast tour. Seljalandsfoss, Skógafoss, Reynisfjara black sand beach & glacier views. Flexible itinerary, professional photography, no tour buses.',
    hero: {
      image: southCoastHeroImg,
      alt: "Couple standing on the moss-covered lava fields of Iceland's South Coast",
    },
    availabilityHref: '/contact',
    stats: [
      { icon: 'clock', label: '10 hours', sub: 'Private tour' },
      { icon: 'map-pin', label: 'Reykjavík', sub: 'Departure' },
      { icon: 'user', label: 'Private — just your group', sub: 'Available year-round' },
    ],
    expect: {
      heading: 'What to Expect on the South Coast Tour',
      image: {
        src: southCoastExpectImg,
        alt: 'Traveler in a maroon winter coat standing on ice in front of the frozen Skógafoss waterfall',
        ratio: '450/800',
      },
      items: [
        "Iceland's most iconic waterfalls — Seljalandsfoss and Skógafoss",
        "Black sand beach drama — Reynisfjara's basalt columns and sea stacks",
        'Glacier views and optional glacier hiking',
        'Dramatic coastal cliffs and seabird viewpoints',
        'Optional glacier hike with certified guides',
        'Professional photography guidance throughout — go home with stunning shots',
        'Flexible itinerary — adapted daily to weather, light and your interests',
        'Craft lunch or dinner in Vík village included',
        'Optional museum or exhibition visits to deepen your experience',
        'Luxury vehicle chosen for your group size and comfort',
      ],
    },
    highlightsHeading: 'South Coast Highlights',
    highlights: [
      { image: southCoastHl1, title: 'Reynisfjara Black Sand Beach', description: "Jet-black sand, towering basalt columns, and the Reynisdrangar sea stacks rising from the ocean — one of Iceland's most iconic landscapes, timed for the best light of the day." },
      { image: southCoastHl2, title: 'Skógafoss Waterfall', description: 'A powerful, wide cascade into a misty canyon. Climb the stairs alongside it for panoramic views, or stand at the base and feel the spray.' },
      { image: southCoastHl3, title: 'Sólheimajökull Glacier (Optional)', description: 'An easily accessible glacier. Optional 1-hour hike with certified guides — walking on ancient ice and exploring crevasses.' },
      { image: southCoastHl4, title: 'Dyrhólaey Nature Reserve', description: 'Rich birdlife, dramatic cliffs, and a massive sea arch carved by the Atlantic — sweeping 360° views from this coastal promontory.' },
      { image: southCoastHl5, title: 'Vík Village', description: "Iceland's southernmost village — craft lunch or dinner overlooking dramatic coastline, and a relaxed pause in the day." },
      { image: southCoastHl6, title: 'Skógar Folk Museum', description: 'Turf houses, traditional boats, and heritage artifacts — a look at rural Icelandic life in past centuries.' },
    ],
    whoFor: {
      heading: 'This tour is perfect for',
      image: {
        src: southCoastWhoForImg,
        alt: 'White Icelandic horse standing in icy water at the base of a frozen South Coast waterfall',
        ratio: '590/886',
      },
      items: [
        'Families wanting to experience the complete Iceland in one epic journey',
        'Couples seeking an unforgettable adventure combining adventure and romance',
        'First-time visitors wanting to see everything Iceland is famous for — plus the hidden side',
        'Photographers pursuing the full range of Icelandic landscapes and light',
        'Groups wanting flexibility — each day can be customized based on interests and energy',
        'Multi-generational groups — from young children to grandparents, Luke adapts every day',
        'Anyone wanting professional photography throughout their entire Iceland adventure',
      ],
    },
    narrative: {
      heading: "Iceland's most iconic landscapes in one unforgettable day",
      image: {
        src: southCoastNarrativeImg,
        alt: "Glacier outlet on Iceland's South Coast",
        ratio: '450/800',
      },
      paragraphs: [
        "The South Coast is where Iceland reveals its raw power — dramatic waterfalls plunging from sheer cliffs, black sand beaches with towering basalt columns, glaciers calving into lagoons, and cliffs carved by centuries of Atlantic waves. It's Iceland's most famous route, which means crowds. But with Luke's local knowledge, flexible timing, and professional photography, you'll experience the South Coast the way it's meant to be experienced — without the tour bus queues.",
        'This full-day private Iceland tour takes you through landscapes carved by ice, fire, and ocean. From Seljalandsfoss and Skógafoss waterfalls to Reynisfjara black sand beach and optional glacier adventures, every stop is adapted to light conditions, weather, and what you want to experience most.',
      ],
    },
    photography: {
      heading: 'Photography Experience on This South Coast Iceland Tour',
      image: {
        src: southCoastPhotoImg,
        alt: 'Woman standing in a snowy South Coast field with mountains and trees in the background',
        ratio: '603/903',
      },
      paragraphs: [
        "The South Coast is one of Earth's most photogenic regions — but only if you know when and where to shoot. Golden hour light hitting Seljalandsfoss, dramatic cloud formations over Reynisfjara, glacial mist at the right moment, seabirds catching light above the cliffs — every location has a perfect window.",
        'Professional photography guidance is included throughout the full 10-hour day. Luke will help you find the best angles, time the light perfectly, suggest compositions, and capture the moments that make the South Coast unforgettable — not just the famous views, but your personal experience of this raw landscape.',
      ],
      cta: { label: 'See Our Photography Guide', href: '/iceland-photography' },
    },
    reviews: [
      { quote: "Luke is awesome both as a person and as a tour guide. On top of that he takes amazing photos. He has great in-depth knowledge about Iceland and knows all the good places to visit. Plus he's always ready to make extra efforts to deliver what guests want. My only regret is we just had him for 1 day!", name: 'Abhishek', type: 'Couple' },
      { quote: 'If you want a customized off-road adventure and photo session making you feel like the luckiest person in the world — go with Luke! He showed us so much, even during the short winter days.', name: 'razner', type: 'Family' },
      { quote: "Luke was a phenomenal tour guide! If you're looking for adventure off the beaten path, he's got you covered. He went above and beyond what we were looking for and suggested amazing spots we hadn't considered.", name: 'Liz B', type: 'Friends' },
      { quote: "We had an amazing time with Luke touring the South Coast. Two jam-packed days of breathtaking scenery, delicious food, and a local's insight. He's responsive, patient, fun, and his photography is the icing on the cake!", name: 'Jennifer Q', type: 'Family' },
      { quote: 'Luke created a flexible, weather-adaptable adventure that combined well-known sites with hidden treasures. His expert photography let us enjoy the moment instead of fumbling with our phones. Highly recommend!', name: 'Mehul P', type: 'Family' },
      { quote: "Luke provided a meaningful, personal, and dynamic tour! His energy was amazing and he kept us engaged during long drives. We sang, laughed, and shared incredible moments. I'm so thankful for the memories he captured!", name: 'Tanja P', type: 'Friends' },
    ],
    cta: {
      title: 'Ready to Experience a South Coast Photography Tour in Iceland?',
      lead: "This is not just a tour — it's a private Iceland experience designed for travellers who want to experience the South Coast the way it's meant to be — without the crowds, with flexible timing, and with professional photography capturing every moment. Tell Luke's team your preferred date and group size and we'll take care of everything else.",
      label: 'Check Availability & Book',
      imageAlt: 'Family enjoying a geothermal steam vent in North Iceland',
    },
  },
  {
    slug: 'golden-circle',
    name: 'Golden Circle',
    intro: `This is a fully private tour — just your group, no strangers, no rushing. Every stop is adapted to your pace, the weather, and the light conditions. You'll start and finish in Reykjavík, with time to relax in Iceland's oldest natural hot spring and enjoy a unique greenhouse lunch at a working tomato farm.`,
    metaTitle: "Golden Circle Private Tour | Iceland's Iconic Route Reimagined",
    metaDescription:
      'Private Golden Circle tour with hidden stops. Þingvellir, Strokkur geyser, Gullfoss waterfall & Secret Lagoon. Skip the crowds, experience Iceland with a local guide.',
    hero: {
      image: goldenCircleHeroImg,
      alt: 'Herd of reindeer running through a snowy Icelandic landscape',
    },
    availabilityHref: '/contact',
    stats: [
      { icon: 'clock', label: '8 hours', sub: 'Private tour' },
      { icon: 'map-pin', label: 'Reykjavík', sub: 'Departure' },
      { icon: 'briefcase', label: 'From $1,500.00 / group', sub: 'Year-round' },
    ],
    // No image: this page renders the checklist centred in a 700px column instead.
    expect: {
      heading: 'What to Expect on the Golden Circle Tour',
      items: [
        'Þingvellir National Park — UNESCO World Heritage site where tectonic plates meet',
        'Strokkur Geyser — watch it erupt 20+ meters high every few minutes',
        "Gullfoss Waterfall — one of Iceland's most iconic waterfalls, fueled by glacial power",
        'Kerið Crater — colorful volcanic crater with red rock and a deep blue lake',
        "Secret Lagoon — soak in Iceland's oldest natural hot spring surrounded by steam vents",
        'Friðheimar Tomato Farm — unique greenhouse lunch in a warm, tomato-scented oasis',
        'Professional photography guidance throughout — go home with stunning shots',
        'Learn fun facts, Icelandic phrases and unique local insights along the way',
        'Flexible itinerary — adapted daily to weather, light and your interests',
        'Local restaurant and accommodation recommendations included',
        'Comfortable luxury vehicle chosen for your group size',
        'Optional add-ons: Snowmobiling on Langjökull glacier or horseback riding (on request)',
      ],
    },
    highlightsHeading: 'Golden Circle Highlights',
    highlights: [
      { image: goldenCircleHl1, title: 'Þingvellir (Thingvellir) National Park', description: 'A UNESCO World Heritage site where the North American and Eurasian tectonic plates visibly meet — you can stand between two continents. Beyond the geology, this is where Icelandic democracy began in 930 AD. Most visitors see the main viewpoint; Luke knows the alternative walks and perspectives that reveal the true drama of this landscape.' },
      { image: goldenCircleHl2, title: 'Secret Lagoon (Hvítárvatn)', description: "Iceland's oldest natural hot spring, where you can soak in warm geothermal water surrounded by steam vents and raw Icelandic wilderness. Unlike the famous Blue Lagoon, this is authentic, peaceful, and genuinely secret. Luke gives you as much time as you want to relax and enjoy." },
      { image: goldenCircleHl3, title: 'Strokkur Geyser', description: "The world's most reliable geyser — it erupts 20+ meters into the air every few minutes, never failing to amaze. Luke knows the best angles for photography and the perfect timing to capture the eruption with the best light and composition." },
      { image: goldenCircleHl4, title: 'Friðheimar Tomato Farm Lunch', description: "A unique experience — lunch inside a working greenhouse where tomatoes grow year-round heated by geothermal energy. Taste fresh tomato soup, salad, and bread while surrounded by the warmth and life of this ingenious operation. It's the kind of authentic Iceland experience most visitors miss." },
      { image: goldenCircleHl5, title: 'Gullfoss Waterfall', description: "One of Iceland's most powerful and iconic waterfalls, created by the melting water of Langjökull glacier. Thundering down a narrow canyon in two dramatic stages, Gullfoss is nature at its most spectacular. Luke guides you to the best vantage points and shares the history and geology that makes it unforgettable." },
      { image: goldenCircleHl6, title: 'Kerið Crater', description: 'A volcanic crater lake surrounded by red rock, moss-covered walls, and impossibly blue water. This colorful landscape is less crowded than the main Golden Circle stops but equally dramatic — perfect for photography and a moment away from the tour buses.' },
    ],
    whoFor: {
      heading: 'This tour is perfect for',
      iconItems: [
        { icon: 'heart', text: 'Couples looking for a romantic day combining natural wonders and a relaxing hot spring soak' },
        { icon: 'user', text: "Families wanting to experience Iceland's most famous landmarks without the tour bus crowds" },
        { icon: 'camera', text: 'Photographers seeking dramatic landscapes with professional guidance' },
        { icon: 'clock', text: 'Groups wanting flexibility — if weather changes or you want more time at a location, Luke adapts' },
        { icon: 'star', text: 'First-time visitors wanting to see the essential Golden Circle with a personal touch' },
        { icon: 'mountain', text: "Anyone wanting to understand the geology, history and culture of Iceland's most significant region" },
      ],
    },
    photography: {
      heading: 'Photographing the Golden Circle',
      image: {
        src: goldenCirclePhotoImg,
        alt: 'Two women posing by the Brúarfoss waterfall on the Golden Circle route',
        ratio: '590/886',
      },
      paragraphs: [
        "The Golden Circle is one of Earth's most photographed routes — but the best images come from timing, perspective, and knowing where to stand. Geysers erupting in golden light, waterfalls with rainbows, tectonic plates framing the landscape, steam vents at sunrise — every location has a perfect moment.",
        "Whether you're shooting with a professional camera or your phone, every stop on this tour is chosen with composition and light in mind. Professional photography guidance is included throughout — this is not just a tour, it's an experience designed for travellers who want to come home with images that tell a real story.",
      ],
      cta: { label: 'See Our Photography Guide', href: '/iceland-photography' },
    },
    reviews: [
      { quote: "Our family had such a wonderful experience with Luke! His warmth and genuine approach made us feel like we were in the best hands. He took us to breathtaking destinations, and we really got to experience the diversity of Iceland's natural beauty. We came away with memories and photos that we'll always cherish.", name: 'Avani A', type: 'Family' },
      { quote: "Luke made sure to show us many cool spots and tailored the trip to our requests very well. He's a friendly, knowledgeable tour guide and takes excellent photos throughout the whole trip. We definitely recommend booking with Luke!", name: 'PH', type: 'Family' },
      { quote: "We had a fantastic day with Luke on the Golden Circle tour. The sights are amazing and he took fantastic photos of us capturing the waterfalls and geysers. Luke's knowledge of the island was impressive and throughout the trip made sure we were always comfortable.", name: 'Peter D', type: 'Family' },
    ],
    cta: {
      title: 'Ready to book your Golden Circle Tour?',
      lead: "This is not just a tour — it's a private Iceland experience designed for travellers who want the famous Golden Circle without the famous crowds. Tell Luke's team your preferred date and group size and we'll take care of everything else.",
      label: 'Book your Tour',
      imageAlt: 'Family enjoying a geothermal steam vent in North Iceland',
    },
  },
  {
    slug: 'highlands-adventure',
    name: 'Highlands Adventure',
    intro: `This is a fully private tour — just your group, no strangers, no fixed schedule. Every stop is adapted to your pace, the weather, and the light conditions. You'll travel in a heavy-duty 4x4 vehicle capable of handling remote F-roads, allowing access to locations completely unreachable by standard cars. Be prepared for an adventure — this tour combines hiking, exploring remote terrain, and witnessing some of Iceland's most dramatic natural phenomena.`,
    metaTitle: 'Highlands Iceland Tour | Remote Waterfalls & Viking History',
    metaDescription:
      "Private Highlands adventure. Iceland's second-tallest waterfall, magical canyons, colorful mountains & Viking ruins. Summer only. 4x4 vehicle, professional photography guide.",
    hero: {
      image: highlandsHeroImg,
      alt: 'Couple sitting on a hillside with misty Icelandic mountains behind them',
    },
    availabilityHref: '/contact',
    stats: [
      { icon: 'clock', label: '10-12 hours', sub: 'Private tour' },
      { icon: 'map-pin', label: 'Reykjavík', sub: 'or Keflavík Airport' },
      { icon: 'truck', label: 'Heavy-duty 4x4', sub: 'Summer only (June–Sept)' },
    ],
    expect: {
      heading: 'What to Expect on the Highlands Tour',
      image: {
        src: highlandsExpectImg,
        alt: 'Couple standing above the deep gorge of Háifoss waterfall in the Icelandic Highlands',
        ratio: '450/800',
      },
      items: [
        "Explore Iceland's second-tallest waterfall — Háifoss at 122 meters",
        'Walk through magical canyons with dozens of cascading waterfalls',
        'Discover Viking history at a reconstructed 1100-year-old turf house',
        'Navigate remote F-roads in a heavy-duty 4x4 vehicle',
        'Experience fairytale valleys with lava rock formations and delicate greenery',
        'Professional photography guidance throughout — go home with stunning shots',
        'Learn fun facts, Icelandic phrases and unique local insights along the way',
        'Flexible itinerary — adapted daily to weather, light and your interests',
        'Local restaurant and accommodation recommendations included',
        'Comfortable luxury vehicle chosen for your group size',
        'Optional: Landmannalaugar colorful mountains and natural hot springs (weather dependent)',
      ],
    },
    highlightsHeading: 'Highlands Adventure Highlights',
    highlights: [
      { image: highlandsHl1, title: 'Háifoss Waterfall', description: "Iceland's second-tallest waterfall at 122 meters, plunging dramatically into a deep gorge carved by glacial rivers. The sheer scale is overwhelming — and most visitors never see it because it requires a private guide with 4x4 access and local knowledge of where to safely view this raw natural power." },
      { image: highlandsHl2, title: 'Sigöldugljúfur Canyon', description: "A magical canyon lined with dozens of cascading waterfalls — each one a masterpiece of erosion and water power. The canyon is a photographer's dream and a hiker's paradise, accessible only to those willing to venture into Iceland's true wilderness." },
      { image: highlandsHl3, title: 'Landmannalaugar (Optional)', description: "Colorful rhyolite mountains — reds, yellows, and greens — and natural hot springs in the heart of the Highlands. Only accessible in summer and only in good weather. When conditions allow, this is Iceland's most surreal and photogenic destination. Optional hiking and geothermal bathing available." },
    ],
    whoFor: {
      heading: 'Who This Highlands Tour Is For',
      image: {
        src: highlandsWhoForImg,
        alt: 'Guide standing at the rim of a colorful geothermal valley in the Icelandic Highlands',
        ratio: '590/886',
      },
      items: [
        "Anyone wanting to understand Iceland's geology, ancient history and Viking heritage",
        'Summer visitors with flexible timing — this tour depends on weather and F-road conditions',
        "Adventure seekers wanting to experience Iceland's most remote and dramatic landscapes",
        'Photographers pursuing truly cinematic and otherworldly imagery',
        "Couples looking for an unforgettable adventure in one of Earth's wildest places",
        'Groups wanting to escape crowds completely — the Highlands are genuinely remote',
        'Solo travellers seeking meaningful connection with nature and local expertise',
      ],
    },
    narrative: {
      heading: "Iceland's most remote and mystical landscapes.",
      image: {
        src: highlandsNarrativeImg,
        alt: 'Travelers lying at the edge of the cliff overlooking Háifoss waterfall in the Highlands',
        ratio: '450/800',
      },
      paragraphs: [
        'The Icelandic Highlands are where nature reveals its rawest power — dramatic waterfalls plunging 122 meters into canyons, colorful rhyolite mountains, Viking ruins buried in time, and lava formations that look like another planet. But the Highlands are only accessible in summer, and only to those with the right vehicle and local knowledge.',
        "This private Iceland tour takes you deep into Iceland's heart — far from tour buses and crowds — to places most visitors never reach. With Luke's expertise navigating F-roads in a rugged 4x4 vehicle, you'll discover the geological drama, ancient history, and surreal beauty that makes the Highlands the ultimate Icelandic adventure.",
      ],
    },
    photography: {
      heading: 'Photographing the Highlands',
      image: {
        src: highlandsPhotoImg,
        alt: 'Couple sitting above Háifoss waterfall with a rainbow rising from the mist',
        ratio: '603/903',
      },
      paragraphs: [
        "The Highlands are where Iceland's most dramatic and cinematic landscapes exist — but only for those who can reach them and know where to look. Waterfalls backlit by rare Highlands sunlight, colorful mountains in impossible hues, lava formations framing sky and water, moody Highlands weather creating theatrical lighting.",
        "Whether you're a professional photographer or capturing memories on your phone, every location on this tour is chosen for its visual drama and photographic potential. Professional photography guidance is included throughout — this is not just a tour, it's an experience designed for travellers who want to come home with images that tell a real story of Iceland's wildest side.",
      ],
      cta: { label: 'See Our Photography Guide', href: '/iceland-photography' },
    },
    reviews: [
      { quote: 'He took us to several locations — climbing over boulders to reach incredible views. Luke made sure I could navigate safely. He was engaging, warm, fun, and knowledgeable and helped to make this one of our favorite days.', name: 'S K', type: 'Friends' },
      { quote: 'He took us to many beautiful places out of the crowds and took AMAZING photos that captured our memories forever. He is very patient, accommodating and knowledgeable of the area.', name: 'Gabriela B', type: 'Couples' },
      { quote: 'Luke planned visits to Sigöldugljúfur, Sigöldufoss, Háifoss — magical places with very little traffic. The Highlands were mystical and the trip was fulfilling. Luke was personable, knowledgeable and more than eager to help make the trip memorable.', name: 'Mark W', type: 'Solo' },
      { quote: 'He took us to spectacular places we would have never found on our own. We got some amazing photos and got to see such varied areas. He helped us avoid the crowds as much as possible. I would not hesitate to use him for a much longer tour.', name: 'Jennifer D', type: 'Family' },
      { quote: 'While we booked a certain route, as we discussed what really interested us, we changed course and did not see a large tour bus the entire journey. The tour exceeded expectations, was personal, and we learned and saw a lot of what makes Iceland so interesting.', name: 'Mark Andrews', type: 'Family' },
    ],
    cta: {
      title: 'Ready to book your Highlands Adventure?',
      lead: "This is not just a tour — it's a private Iceland experience designed for travellers who want to venture into the heart of Iceland's wilderness. The Highlands are only accessible in summer and only with the right vehicle and guide. Tell Luke's team your preferred dates and group size and we'll check conditions and take care of everything else.",
      label: 'Contact us',
      imageAlt: 'Family enjoying a geothermal steam vent in North Iceland',
    },
  },
  {
    slug: '3-days-south-coast',
    name: '3 Days Ultimate South Coast from Reykjavík',
    intro: `This is a fully private tour — just your group, no strangers, no fixed schedule. Every stop is adapted to your pace, the weather, and the light conditions. You'll stay overnight in Vík, a small village at the heart of the South Coast, allowing for a relaxed pace and the best possible light for photography.`,
    metaTitle: '3 Days South Coast | Private Multi-Day Iceland Tour',
    metaDescription:
      '3-day private South Coast tour with 2 nights in Vík. Glaciers, ice caves, waterfalls & hidden canyons. Flexible itinerary, glacier hiking optional, photography included.',
    hero: {
      image: threeDaysHeroImg,
      alt: "Photographer standing before dramatic mountains and a black sand beach on Iceland's South Coast",
    },
    availabilityHref: '/contact',
    stats: [
      { icon: 'clock', label: '3 Days / 2 Nights', sub: 'Private tour' },
      { icon: 'map-pin', label: 'Reykjavík', sub: 'Departure' },
      { icon: 'briefcase', label: 'From $4500 / tour', sub: 'Year-round' },
    ],
    expect: {
      heading: 'What to Expect on the 3-Day South Coast Tour',
      image: {
        src: threeDaysExpectImg,
        alt: "Travelers standing at the base of a powerful waterfall on Iceland's South Coast",
        ratio: '450/800',
      },
      items: [
        "Iceland's most iconic waterfalls — Seljalandsfoss, Skógafoss and hidden alternatives",
        'Black sand beaches and dramatic coastal cliffs away from crowds',
        'Glacier lagoons and ice caves — the magic of glacial Iceland',
        'Professional photography guidance throughout — go home with stunning shots',
        'Learn fun facts, Icelandic phrases and unique local insights along the way',
        'Flexible itinerary — adapted daily to weather, light and your interests',
        'Local restaurant and accommodation recommendations included',
        'Comfortable luxury vehicle chosen for your group size',
        'Overnight stays in Vík with time to explore at your own pace',
      ],
    },
    highlightsHeading: 'Highlights of Your 3-Day Journey',
    highlights: [
      { image: threeDaysHl1, title: 'Vatnajökull National Park', description: "Europe's largest glacier and one of Iceland's most dramatic landscapes. Depending on season and conditions, this area offers waterfalls, glacier views, hiking opportunities and some of Iceland's most otherworldly scenery." },
      { image: threeDaysHl2, title: 'Skógafoss Waterfall', description: "Iceland's most powerful waterfall — dramatic, thundering, and magnificent. Luke's local knowledge includes the best vantage points and timing to avoid the worst of the tour bus crowds." },
      { image: threeDaysHl3, title: 'Hidden Waterfalls & Secret Spots', description: 'Away from the main route, Luke knows the waterfall hikes, hidden canyons, and viewpoints that create the most memorable moments — and the best photography opportunities.' },
      { image: threeDaysHl4, title: 'Reynisfjara Black Sand Beach', description: "Iceland's most famous beach with jet-black sand, towering basalt columns and crashing Atlantic waves. Luke knows how to capture it at the right moment without the postcard crowds." },
      { image: threeDaysHl5, title: 'Glacier Lagoon & Ice Caves', description: 'Jökulsárlón glacier lagoon — icebergs floating in brilliant blue water. For the ultimate experience, explore inside an actual ice cave, surrounded by the ethereal blue glow of ancient glacier ice.' },
    ],
    whoFor: {
      heading: 'Who This 3-Day South Coast Tour Is For',
      image: {
        src: threeDaysWhoForImg,
        alt: 'Family group hiking near a South Coast waterfall in Iceland',
        ratio: '590/886',
      },
      items: [
        "Anyone wanting 3 days immersed in Iceland's most dramatic and magical landscapes",
        'Couples looking for a romantic private Iceland experience away from crowds',
        'Families wanting flexible timing and local insights for all ages',
        'Photographers seeking dramatic landscapes with professional guidance',
        'Milestone trips — birthdays, anniversaries, proposals, special celebrations',
        'First-time visitors wanting to experience the real Iceland beyond the tourist route',
      ],
    },
    narrative: {
      heading: "Iceland's most dramatic landscape. Three unforgettable days.",
      image: {
        src: threeDaysNarrativeImg,
        alt: 'Couple admiring a rainbow at a South Coast waterfall in Iceland',
        ratio: '450/800',
      },
      paragraphs: [
        "The South Coast is Iceland's most iconic region — and its most crowded. But with Luke's local knowledge, you'll discover the hidden waterfalls, secret viewpoints, and dramatic black sand beaches that most visitors miss while waiting in tour bus queues.",
        "This private Iceland tour combines Iceland's most famous sites — Seljalandsfoss, Skógafoss, Reynisfjara, glacier lagoons and ice caves — with the kind of alternative routes, perfect timing and flexible itinerary that turns a good trip into an unforgettable one.",
      ],
    },
    photography: {
      heading: 'Photography Along the 3-Day Journey',
      image: {
        src: threeDaysPhotoImg,
        alt: "Icelandic horse standing before a frozen waterfall on Iceland's South Coast",
        ratio: '603/903',
      },
      paragraphs: [
        "The South Coast is one of Earth's most photogenic regions — but only if you know when and where to shoot. Waterfalls backlit by afternoon sun, black sand beaches during golden hour, glaciers in clear blue light — every location has a perfect moment.",
        "Whether you're a professional photographer or capturing memories on your phone, every stop on this tour is chosen with light, composition and timing in mind. Professional photography guidance is included throughout — this is not just a tour, it's an experience designed for travellers who want to come home with images that tell a real story.",
      ],
      cta: { label: 'See Our Photography Guide', href: '/iceland-photography' },
    },
    reviews: [
      { quote: "The areas Luke took us were definitely off the beaten path. No tour buses or tourists. One particular waterfall was so grand that in all my travels, it was the most beautiful sight I've ever seen!!", name: 'Kathy H', type: 'Couples' },
    ],
    cta: {
      title: 'Ready to book your 3 Days Ultimate South Coast Tour?',
      lead: "This is not just a tour — it's a private Iceland experience designed for travellers who crave real connection with nature, culture, and photography. Tell Luke's team your preferred dates and group size and we'll take care of everything else.",
      label: 'Book this Tour',
      imageAlt: 'Family enjoying a geothermal steam vent in North Iceland',
    },
  },
  {
    slug: '6-days-ultimate-adventure',
    name: 'Ultimate Iceland Adventure',
    intro: `This is a fully private, customizable 6-day journey — just your group, no strangers, no fixed schedule. Each day is adapted to weather, light conditions, and your interests. You'll experience Iceland's most dramatic landscapes, stay in comfortable accommodations, and go home with professional photographs and memories that last a lifetime.`,
    metaTitle: '6 Days Ultimate Iceland | Complete Private Adventure',
    metaDescription:
      '6-day private Iceland tour. Reykjanes, Snæfellsnes, Golden Circle, South Coast & Highlands. Everything Iceland is famous for + hidden gems. Photography & flexibility included.',
    hero: {
      image: sixDaysHeroImg,
      alt: 'Travelers overlooking a river and dramatic mountain peaks in the Icelandic Highlands',
    },
    availabilityHref: '/contact',
    stats: [
      { icon: 'clock', label: '6 days / 5 nights', sub: 'Private tour' },
      { icon: 'map-pin', label: 'Reykjavík', sub: 'Keflavík Airport pickup' },
      { icon: 'briefcase', label: 'From $8600 / group', sub: 'Year-round' },
    ],
    expect: {
      heading: 'What to Expect on the 6-Day Adventure',
      image: {
        src: sixDaysExpectImg,
        alt: 'A volcano erupting with smoke and ash, two people sitting on rocks observing it in Iceland',
        ratio: '450/800',
      },
      items: [
        "Iceland's iconic Golden Circle — but with hidden stops and insider insights",
        'The dramatic South Coast — waterfalls, black sand beaches, glacier views',
        'The Reykjanes Peninsula — volcanic craters, geothermal fields, sea cliffs',
        'Snæfellsnes Peninsula — "Iceland in miniature" with diverse landscapes',
        "Glacier lagoons and ice caves — the raw power of Iceland's glaciers",
        'Icelandic Highlands — remote canyons, waterfalls, and Viking history',
        'Professional photography guidance throughout — go home with stunning shots',
        'Flexible itinerary — adapted daily to weather, light and your interests',
        'Hotel pick-up and drop-off included',
        'Comfortable luxury vehicle chosen for your group size',
        'Optional adventure upgrades: glacier hiking, ice caves, snowmobiling, horseback riding',
      ],
    },
    highlightsHeading: '6-Day Tour Highlights',
    // The carousel is the itinerary in short form, so it is derived rather than retyped.
    highlights: SIX_DAY_ITINERARY.map((d) => ({
      image: d.image,
      title: `Day ${d.day} — ${d.location}`,
      description: d.description,
    })),
    itinerary: { heading: '6-Day Itinerary', days: SIX_DAY_ITINERARY },
    whoFor: {
      heading: 'Who This 6-Day Adventure Is For',
      image: {
        src: sixDaysWhoForImg,
        alt: 'A woman sitting near a geothermal area with steam rising behind her in Iceland',
        ratio: '590/886',
      },
      items: [
        'Travellers with 6 days available wanting to maximize their Iceland experience',
        'Multi-generational groups — from young children to grandparents, Luke adapts every day',
        'Anyone wanting professional photography throughout their entire Iceland adventure',
        'Families wanting to experience the complete Iceland in one epic journey',
        'Couples seeking an unforgettable adventure combining adventure and romance',
        'First-time visitors wanting to see everything Iceland is famous for — plus the hidden side',
        'Photographers pursuing the full range of Icelandic landscapes and light',
        'Groups wanting flexibility — each day can be customized based on interests and energy',
      ],
    },
    narrative: {
      heading: 'The complete Iceland experience in one unforgettable journey',
      image: {
        src: sixDaysNarrativeImg,
        alt: 'A couple standing in front of a red helicopter with snow-capped mountains and glacier in the background',
        ratio: '450/800',
      },
      paragraphs: [
        'In 6 days you can experience the essence of Iceland — from volcanic landscapes and geothermal wonders to thundering waterfalls, otherworldly glaciers, and remote Highlands. But only if you have a guide who knows where to go, when to go, and how to experience it all without the crowds.',
        "This private Iceland tour combines everything Iceland is famous for — the Golden Circle, South Coast waterfalls, glacier lagoons, Viking history — with the hidden gems, flexible timing, and professional photography that transform a famous route into a personal adventure. You'll stay 3 nights based in Reykjavík and 2 nights on the South Coast, giving you the perfect pace to explore without rushing.",
      ],
    },
    photography: {
      heading: 'Photographing 6 Days of Iceland',
      image: {
        src: sixDaysPhotoImg,
        alt: 'Colorful mountains with patches of snow and small lakes in Landmannalaugar, Iceland',
        ratio: '603/903',
      },
      paragraphs: [
        'Six days exploring Iceland means six days of constantly changing light, weather, and landscapes. From golden hour at waterfalls to moody Highlands lighting, from glacier blue to geothermal colors — every moment is a potential masterpiece.',
        'Professional photography guidance is included throughout all 6 days. Luke will help you capture the dramatic moments, find the best angles, time the light perfectly, and go home with images that tell the real story of your Iceland adventure — not just the Instagram version, but the authentic experience you lived.',
      ],
      cta: { label: 'See Our Photography Guide', href: '/iceland-photography' },
    },
    reviews: [
      { quote: 'Our group had varying ages and activity levels and Luke did a great job planning our days. He was organized, responsive, and thoughtfully bought us some local treats. We made an album of our trip and loved the great photos he took!', name: 'Sahsla', type: 'Family · Secret Spots of Iceland Review' },
    ],
    cta: {
      title: 'Ready to book your Ultimate Iceland Adventure?',
      lead: "This is not just a tour — it's a complete private Iceland experience designed for travellers who want to see everything, experience everything, and come home with unforgettable memories and professional photographs. Tell Luke's team your preferred dates and group size and we'll customize every detail of your Icelandic journey.",
      label: 'Contact us',
      imageAlt: 'Family enjoying a geothermal steam vent in North Iceland',
    },
  },
];
