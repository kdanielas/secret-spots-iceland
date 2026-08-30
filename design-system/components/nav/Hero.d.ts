/**
 * Photographic page hero.
 * @startingPoint section="Screens" subtitle="Full-bleed photo hero with CTA pair" viewport="700x300"
 */
export interface HeroProps {
  /** Full-bleed landscape or environmental portrait photo. */
  image: string;
  /** Prata headline, 2-3 lines. Use "|" or an em dash sparingly, as in "Meet Luke | Private Guide & Photographer". */
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Amber CTA label. Default "Check Availability". */
  primaryCta?: string;
  /** Translucent CTA label. Default "Explore Iceland Photography Tours". */
  secondaryCta?: string;
  height?: number;
  align?: 'center' | 'left';
  /** Rendered under the CTAs — e.g. a StatBar on the home hero. */
  children?: React.ReactNode;
  onPrimary?: () => void;
  onSecondary?: () => void;
  style?: React.CSSProperties;
}
export function Hero(props: HeroProps): JSX.Element;
