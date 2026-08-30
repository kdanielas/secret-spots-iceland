import React from 'react';
import { Rating } from '../core/Rating.jsx';

/** Thin sand bar under the hero listing the booking platforms. */
export function FeaturedOnBar({ label = 'As featured & booked on', platforms = [], style }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-8)',
      background: 'var(--sand-100)', padding: 'var(--space-5) var(--space-8)', ...style,
    }}>
      <span style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        {platforms.map((p) => (
          <span key={p.name} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, height: 32, padding: '0 16px',
            borderRadius: 'var(--radius-pill)', background: 'var(--surface-raised)',
            border: '1px solid var(--border-subtle)', font: 'var(--type-body-sm)', color: 'var(--text-heading)',
          }}>{p.name}{p.rating ? <Rating value={p.rating} size={11} /> : null}</span>
        ))}
      </div>
    </div>
  );
}
