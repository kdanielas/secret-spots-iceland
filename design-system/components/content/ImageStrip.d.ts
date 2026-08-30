/** Row (or 2x2 grid) of equally sized landscape photos used as a visual pause. */
export interface ImageStripProps {
  images: string[];
  /** Defaults to one column per image. Pass 2 for the 2x2 About-page grid. */
  columns?: number;
  gap?: string;
  /** CSS aspect-ratio for each cell. "5 / 4" for the gallery strip, "3 / 2" for tiles. */
  ratio?: string;
  radius?: string;
  style?: React.CSSProperties;
}
export function ImageStrip(props: ImageStripProps): JSX.Element;
