import React from 'react';

/** Four proof stats sitting at the foot of the home hero, over the image. */
export function StatBar({ items = [], onDark = true, style }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 'var(--grid-gap)', ...style }}>
      {items.map((it) => (
        <div key={it.label} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <span style={{ font: 'var(--type-display-md)', color: onDark ? 'var(--cream-50)' : 'var(--text-heading)' }}>{it.value}</span>
          <span style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)' }}>{it.label}</span>
        </div>
      ))}
    </div>
  );
}
