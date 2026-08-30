/** Value-prop row: circular icon chip, bold title, muted one-liner. */
export interface IconBulletProps {
  /** Lucide name. The home page uses user, clock, briefcase, truck, heart. */
  icon: string;
  title: string;
  description: string;
  onDark?: boolean;
  style?: React.CSSProperties;
}
export function IconBullet(props: IconBulletProps): JSX.Element;
