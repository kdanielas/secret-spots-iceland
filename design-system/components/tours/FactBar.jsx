import React from 'react';

/** Cream card of tour facts that overlaps the bottom of a tour hero. */
export function FactBar({ items = [], overlap = true, style }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      background: 'var(--surface-raised)', borderRadius: 'var(--radius-panel)',
      boxShadow: 'var(--shadow-bar)', padding: 'var(--space-6) var(--space-8)',
      marginTop: overlap ? -44 : 0, position: 'relative', zIndex: 2, ...style,
    }}>
      {items.map((it, i) => (
        <div key={it.label} style={{
          display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'center', textAlign: 'center',
          borderLeft: i === 0 ? 'none' : '1px solid var(--border-subtle)', padding: '0 var(--space-5)',
        }}>
          <span style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{it.label}</span>
          <span style={{ font: 'var(--type-display-xs)', color: 'var(--text-heading)' }}>{it.value}</span>
        </div>
      ))}
    </div>
  );
}
