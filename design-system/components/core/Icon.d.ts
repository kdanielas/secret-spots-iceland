/** Lucide glyph rendered via CSS mask so it takes currentColor. */
export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "camera", "map-pin", "arrow-right"). */
  name: string;
  /** Square px size. Brand default 20; 16 inside buttons, 24 in icon chips. */
  size?: number;
  /** Override colour. Defaults to currentColor. */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
