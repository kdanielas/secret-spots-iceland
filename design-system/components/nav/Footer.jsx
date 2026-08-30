import React from 'react';
import { Icon } from '../core/Icon.jsx';

const SOCIALS = ['instagram', 'facebook', 'youtube', 'linkedin', 'twitter', 'send'];

/** Centred navy footer: underlined link row, legal block, circular social buttons. */
export function Footer({
  links = [{ label: 'secretspotsoficeland' }, { label: 'About Luke' }, { label: 'Our Tours' }, { label: 'Contact' }, { label: 'Follow' }],
  company = 'Secretspotsiceland EHF',
  legal = ['Address: Tangabryggja 18, 110 Reykjavík, Iceland', 'Kennitala: 610823-2030', 'VAT Number: 152431', '+354 8454057'],
  socials = SOCIALS, style,
}) {
  return (
    <footer style={{
      background: 'var(--surface-dark)', borderTop: '1px solid rgba(251,246,240,.10)',
      padding: 'var(--space-10) var(--space-9)', display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: 'var(--space-6)', ...style,
    }}>
      <nav style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap', justifyContent: 'center' }}>
        {links.map((l) => (
          <a key={l.label} href={l.href || '#'} style={{ font: 'var(--type-body-sm)', color: 'var(--text-on-dark)', textDecoration: 'underline', textUnderlineOffset: 3 }}>{l.label}</a>
        ))}
      </nav>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <span style={{ font: 'var(--type-body-sm)', fontWeight: 'var(--weight-bold)', color: 'var(--text-on-dark)' }}>{company}</span>
        {legal.map((l) => (
          <span key={l} style={{ font: 'var(--type-body-xs)', color: 'var(--text-on-dark-muted)' }}>{l}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
        {socials.map((s) => (
          <a key={s} href="#" aria-label={s} style={{
            width: 32, height: 32, borderRadius: 'var(--radius-pill)', background: 'var(--cream-50)',
            color: 'var(--ink-800)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}><Icon name={s} size={15} /></a>
        ))}
      </div>
    </footer>
  );
}
