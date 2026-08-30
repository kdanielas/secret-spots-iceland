/**
 * Closing navy contact section, present on every page.
 * @startingPoint section="Screens" subtitle="Navy closing contact section" viewport="700x420"
 */
export interface ContactRow { icon: string; label: string; value: string }
export interface ContactPanelProps {
  eyebrow?: string;
  title?: string;
  lead?: string;
  /** Defaults to phone / address / response-time rows from the real site. */
  rows?: ContactRow[];
  tours?: string[];
  style?: React.CSSProperties;
}
export function ContactPanel(props: ContactPanelProps): JSX.Element;
