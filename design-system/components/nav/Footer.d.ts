/** Site footer — centred, navy, with the real company registration details. */
export interface FooterLink { label: string; href?: string }
export interface FooterProps {
  links?: FooterLink[];
  company?: string;
  /** Address, kennitala, VAT number and phone, one per line. */
  legal?: string[];
  /** Lucide icon names for the circular social buttons. */
  socials?: string[];
  style?: React.CSSProperties;
}
export function Footer(props: FooterProps): JSX.Element;
