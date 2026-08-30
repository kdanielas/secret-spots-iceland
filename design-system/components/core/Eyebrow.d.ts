/** Uppercase, wide-tracked Lato overline above a section heading. */
export interface EyebrowProps {
  children?: React.ReactNode;
  /** accent = brand blue (light sections). amber = on dark sections. muted = grey. */
  tone?: 'accent' | 'amber' | 'muted' | 'onDark';
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
