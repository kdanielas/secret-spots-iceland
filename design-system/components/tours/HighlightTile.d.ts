/** Place tile: photo, place name in Prata, one-or-two-sentence blurb. */
export interface HighlightTileProps {
  image: string;
  /** Real Icelandic place name, spelled with its diacritics (e.g. "Valahnúkamöl Sea Cliffs"). */
  title: string;
  description: string;
  /** Defaults true — the highlights grid sits on the dark navy section. */
  onDark?: boolean;
  style?: React.CSSProperties;
}
export function HighlightTile(props: HighlightTileProps): JSX.Element;
