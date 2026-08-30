/** Secret Spots Iceland wordmark. */
export interface LogoProps {
  /** Rendered height in px. 34 in the site header, 40+ on dark panels. */
  height?: number;
  /** Path to the logo asset, relative to the consuming page. */
  src?: string;
  /** Knock the mark out to cream for dark backgrounds. */
  onDark?: boolean;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
