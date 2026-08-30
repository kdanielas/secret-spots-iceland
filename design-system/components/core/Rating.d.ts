/** Five amber Lucide stars, used on review cards and the "As featured on" bar. */
export interface RatingProps {
  value?: number;
  max?: number;
  size?: number;
  /** Reserved — the brand uses outline stars; set true only if a solid row is requested. */
  filled?: boolean;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Rating(props: RatingProps): JSX.Element;
