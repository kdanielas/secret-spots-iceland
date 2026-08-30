/**
 * Pill action button in the Secret Spots Iceland kit.
 * @startingPoint section="Core" subtitle="Amber, dark, outline and link actions" viewport="700x180"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /**
   * primary = amber pill, the single booking CTA per view.
   * dark = espresso pill, used inside tour cards.
   * outline = hairline pill on light backgrounds ("Get in touch", "See the Gallery").
   * outlineLight = translucent pill over hero imagery ("Explore Iceland Photography Tours").
   * link = uppercase tracked text link with a trailing arrow ("LEARN HOW IT WORKS →").
   */
  variant?: 'primary' | 'dark' | 'outline' | 'outlineLight' | 'link';
  /** sm 36px / md 44px / lg 52px. Hero pairs use md. */
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name rendered before the label. */
  icon?: string;
  /** Lucide icon name rendered after the label (use "arrow-right" on link variant). */
  iconAfter?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  href?: string;
  as?: keyof JSX.IntrinsicElements;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
