/** Tour-fact strip (duration / group / from / pickup / season) on a cream card overlapping the hero. */
export interface FactBarItem { label: string; value: string }
export interface FactBarProps {
  /** 3-5 items. Labels are uppercase one-worders; values are Prata. */
  items: FactBarItem[];
  /** Pull the card up over the hero image (default true). */
  overlap?: boolean;
  style?: React.CSSProperties;
}
export function FactBar(props: FactBarProps): JSX.Element;
