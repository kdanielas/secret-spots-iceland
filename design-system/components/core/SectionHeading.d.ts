/** Standard section opener: eyebrow, Prata headline, optional lead. */
export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: 'left' | 'center';
  /** xl 44px / lg 36px / md 28px Prata. */
  size?: 'xl' | 'lg' | 'md';
  onDark?: boolean;
  maxWidth?: number | string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
