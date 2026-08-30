/** Social-proof numbers row (99% would recommend, 5.0 average rating, …). */
export interface StatBarItem { value: string; label: string }
export interface StatBarProps {
  items: StatBarItem[];
  /** Defaults true — the row sits over hero photography. */
  onDark?: boolean;
  style?: React.CSSProperties;
}
export function StatBar(props: StatBarProps): JSX.Element;
