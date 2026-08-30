/** Text, email, select or textarea control with an uppercase label. */
export interface FieldProps {
  /** Uppercase label text, e.g. "FIRST NAME", "WHICH TOUR INTERESTS YOU?". */
  label?: string;
  type?: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  /** Written as a real example, not an instruction: "e.g. 12–18 June 2027". */
  placeholder?: string;
  /** Options for type="select". */
  options?: string[];
  rows?: number;
  /** Defaults true — the brand's only form sits on the navy contact panel. */
  onDark?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  style?: React.CSSProperties;
}
export function Field(props: FieldProps): JSX.Element;
