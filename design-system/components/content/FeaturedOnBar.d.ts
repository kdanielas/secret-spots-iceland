/** Booking-platform trust bar (Tripadvisor, Airbnb Experiences, GetYourGuide, Viator). */
export interface FeaturedOnPlatform { name: string; rating?: number }
export interface FeaturedOnBarProps {
  label?: string;
  platforms: FeaturedOnPlatform[];
  style?: React.CSSProperties;
}
export function FeaturedOnBar(props: FeaturedOnBarProps): JSX.Element;
