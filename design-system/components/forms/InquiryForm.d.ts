/**
 * Enquiry form on the navy contact panel — the site's single conversion form.
 * @startingPoint section="Forms" subtitle="Enquiry panel on navy" viewport="700x560"
 */
export interface InquiryFormProps {
  /** Options for the tour select. */
  tours?: string[];
  cta?: string;
  /** Fine print under the CTA. */
  note?: string;
  onSubmit?: () => void;
  style?: React.CSSProperties;
}
export function InquiryForm(props: InquiryFormProps): JSX.Element;
