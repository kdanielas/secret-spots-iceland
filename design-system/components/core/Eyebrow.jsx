import React from 'react';

/** Uppercase tracked overline that opens nearly every section. */
export function Eyebrow({ children, tone = 'accent', align, style }) {
  const colors = { accent: 'var(--text-eyebrow)', amber: 'var(--amber-400)', muted: 'var(--text-muted)', onDark: 'var(--amber-400)' };
  return (
    <div style={{
      font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
      color: colors[tone], textAlign: align, ...style,
    }}>{children}</div>
  );
}
