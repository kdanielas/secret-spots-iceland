/** FAQ accordion row. Only one is typically open at a time. */
export interface FaqItemProps {
  /** Written as the traveller would ask it, sentence case with a question mark. */
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
  style?: React.CSSProperties;
}
export function FaqItem(props: FaqItemProps): JSX.Element;
