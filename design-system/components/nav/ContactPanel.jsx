import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';
import { IconChip } from '../core/IconChip.jsx';
import { Button } from '../core/Button.jsx';
import { InquiryForm } from '../forms/InquiryForm.jsx';

const ROWS = [
  { icon: 'phone', label: 'Call or WhatsApp', value: '+354 845 4057' },
  { icon: 'map-pin', label: 'Based in', value: 'Tangabryggja 18, 110 Reykjavík, Iceland' },
  { icon: 'clock', label: 'Response time', value: 'Usually within 24 hours, personally from Luke.' },
];

/** The navy closing section: pitch + contact rows on the left, enquiry form on the right. */
export function ContactPanel({
  eyebrow = 'Get in touch',
  title = "Let's plan your Iceland tour",
  lead = "Tell us what you'd like to experience and we'll create a personalized Iceland itinerary designed around your interests, pace and travel dates.",
  rows = ROWS, tours, style,
}) {
  return (
    <section style={{ background: 'var(--surface-dark)', padding: 'var(--section-py-tight) var(--space-9)', ...style }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-13)', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <Eyebrow tone="amber">{eyebrow}</Eyebrow>
          <h2 style={{ font: 'var(--type-display-md)', color: 'var(--text-on-dark)', margin: 0 }}>{title}</h2>
          <p style={{ font: 'var(--type-body)', color: 'var(--text-on-dark-muted)', margin: 0, maxWidth: 460 }}>{lead}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', marginTop: 'var(--space-4)' }}>
            {rows.map((r) => (
              <div key={r.label} style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
                <IconChip name={r.icon} size={32} onDark />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ font: 'var(--type-body-xs)', color: 'var(--text-on-dark-muted)' }}>{r.label}</span>
                  <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-on-dark)' }}>{r.value}</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="primary" icon="message-circle" style={{ alignSelf: 'flex-start', marginTop: 'var(--space-4)' }}>Message on WhatsApp</Button>
        </div>
        <InquiryForm tours={tours} />
      </div>
    </section>
  );
}
