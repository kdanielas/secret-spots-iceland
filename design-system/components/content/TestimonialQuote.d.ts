/** Hero testimonial: amber stars, Prata quote, attribution, hairline circular arrows. */
export interface TestimonialQuoteProps {
  /** Keep the traveller's own words, including exclamation marks. Wrap in straight double quotes. */
  quote: string;
  /** e.g. "Deborah F" or "Luke, Founder of Secret Spots of Iceland". */
  author: string;
  /** Source line, e.g. "United States · Tripadvisor Review". */
  meta?: string;
  rating?: number;
  align?: 'center' | 'left';
  showNav?: boolean;
  style?: React.CSSProperties;
}
export function TestimonialQuote(props: TestimonialQuoteProps): JSX.Element;
