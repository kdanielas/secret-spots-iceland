import React from 'react';
import { Field } from './Field.jsx';
import { Button } from '../core/Button.jsx';

/** The enquiry panel: 2x2 name/contact grid, tour select, free-text, amber CTA, fine print. */
export function InquiryForm({
  tours = ['Secret Reykjanes (7h)'],
  cta = 'Check Availability',
  note = "This form is a design mock-up — connect it to your real inbox / CRM before publishing.",
  onSubmit, style,
}) {
  const [sent, setSent] = React.useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); onSubmit && onSubmit(); }}
      style={{
        display: 'flex', flexDirection: 'column', gap: 'var(--space-6)',
        background: 'var(--surface-dark-panel)', borderRadius: 'var(--radius-panel)',
        padding: 'var(--panel-pad)', ...style,
      }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
        <Field label="First name" placeholder="Jane" />
        <Field label="Last name" placeholder="Doe" />
        <Field label="Email" type="email" placeholder="jane@email.com" />
        <Field label="Travel dates" placeholder="e.g. 12–18 June 2027" />
      </div>
      <Field label="Which tour interests you?" type="select" options={tours} />
      <Field label="Tell us about your trip" type="textarea" rows={4} placeholder="Group size, interests, anything special you'd like to see..." />
      <Button variant="primary" fullWidth as="button" type="submit">{sent ? 'Thanks — Luke will reply within 24 hours' : cta}</Button>
      <p style={{ font: 'var(--type-body-xs)', color: 'var(--text-on-dark-muted)', margin: 0, textAlign: 'center' }}>{note}</p>
    </form>
  );
}
