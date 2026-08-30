/** Circular sand chip around a blue Lucide glyph. Used for value-prop bullets and contact rows. */
export interface IconChipProps {
  /** Lucide icon name. */
  name: string;
  /** Chip diameter in px. 40 in feature lists, 32 in contact rows. */
  size?: number;
  /** Invert for dark sections (footer / contact panel). */
  onDark?: boolean;
  style?: React.CSSProperties;
}
export function IconChip(props: IconChipProps): JSX.Element;
