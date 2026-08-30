/** Third-party review card (Tripadvisor / Google style) for the marquee row. */
export interface ReviewCardProps {
  name: string;
  /** Month + year, e.g. "August 2026". Rendered in amber. */
  date: string;
  avatar?: string;
  /** Fallback monogram when no avatar is available. */
  initial?: string;
  rating?: number;
  /** Truncate mid-sentence — these are real, clipped platform reviews. */
  quote: string;
  readMore?: string;
  tone?: 'sand' | 'light';
  style?: React.CSSProperties;
}
export function ReviewCard(props: ReviewCardProps): JSX.Element;
