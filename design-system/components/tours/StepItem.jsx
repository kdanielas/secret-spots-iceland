import React from 'react';

/** Numbered process step: oversized Prata blue numeral, bold title, short copy. */
export function StepItem({ number, title, description, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', ...style }}>
      <span style={{ font: 'var(--type-numeral)', color: 'var(--blue-500)' }}>{number}</span>
      <span style={{ font: 'var(--type-lead)', fontWeight: 'var(--weight-bold)', color: 'var(--text-heading)' }}>{title}</span>
      <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: 0 }}>{description}</p>
    </div>
  );
}
