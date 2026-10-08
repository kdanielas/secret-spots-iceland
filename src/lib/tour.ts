import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import { absoluteUrl, canonicalUrl, touristTripNode } from './schema';

interface TourPageInput {
  name: string;
  description: string;
  heroImage: ImageMetadata;
  /** As shown in the info bar, e.g. "7 hours" or "3 Days / 2 Nights". */
  duration?: string;
  /** Stops on the itinerary, in the order they appear on the page. */
  highlights?: string[];
}

/** The TouristTrip markup for a single tour page. */
export async function tourPageSchema(pathname: string, input: TourPageInput) {
  return [
    touristTripNode({
      pageUrl: canonicalUrl(pathname),
      name: input.name,
      description: input.description,
      imageUrl: absoluteUrl(
        (await getImage({ src: input.heroImage, width: 1200, quality: 80 })).src,
      ),
      duration: input.duration,
      highlights: input.highlights,
    }),
  ];
}
