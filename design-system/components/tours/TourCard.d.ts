/**
 * Tour product card as used on the Tours listing.
 * @startingPoint section="Tours" subtitle="Tour product card with price and CTA" viewport="700x420"
 */
export interface TourCardProps {
  /** Photo URL — always real Iceland landscape photography, never illustration. */
  image: string;
  /** Duration badge over the photo, e.g. "7 hours", "3 days". */
  duration?: string;
  title: string;
  /** Difficulty line under the title. Default "All levels". */
  level?: string;
  description: string;
  /** Uppercase kicker in the price row. Default "Private tour". */
  kicker?: string;
  /** Default "from". */
  priceLabel?: string;
  /** Formatted price including currency, e.g. "€149". */
  price: string;
  cta?: string;
  /** vertical = 4-across day-tour grid. wide = 2-across multi-day grid. */
  layout?: 'vertical' | 'wide';
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function TourCard(props: TourCardProps): JSX.Element;
