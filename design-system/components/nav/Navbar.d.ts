/** Marketing-site header. Flat cream bar, no shadow, no sticky blur in the supplied designs. */
export interface NavItem { label: string; href?: string }
export interface NavbarProps {
  /** Relative path to assets/logo.png from the consuming page. */
  logoSrc?: string;
  /** Site nav: Home, Tours, About, How it works, Photography Guide, Our Vehicles, Blog, Reviews, FAQ. */
  items: NavItem[];
  /** Label of the current page — rendered bold. */
  active?: string;
  onNavigate?: (label: string) => void;
  style?: React.CSSProperties;
}
export function Navbar(props: NavbarProps): JSX.Element;
