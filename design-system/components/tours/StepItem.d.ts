/** One step of the "how it works" row. */
export interface StepItemProps {
  /** Zero-padded two-digit string: "01", "02", … */
  number: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
}
export function StepItem(props: StepItemProps): JSX.Element;
