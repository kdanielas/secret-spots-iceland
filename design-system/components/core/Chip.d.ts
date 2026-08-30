/** Small pill label: tour duration badges, "~20 Years in Iceland" photo tags, booking-platform names. */
export interface ChipProps {
  children?: React.ReactNode;
  /** sand = default. onImage = translucent dark badge over photography. light = white floating tag. amber = emphasis. */
  tone?: 'sand' | 'onImage' | 'light' | 'amber';
  icon?: string;
  style?: React.CSSProperties;
}
export function Chip(props: ChipProps): JSX.Element;
