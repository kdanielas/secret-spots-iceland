import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

const SIZES = { xl: 'var(--type-display-lg)', lg: 'var(--type-display-md)', md: 'var(--type-display-sm)' };

/** Eyebrow + Prata headline + optional lead paragraph, the standard section opener. */
export function SectionHeading({ eyebrow, title, lead, align = 'left', size = 'lg', onDark = false, maxWidth, children, style }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align,
      maxWidth, marginLeft: align === 'center' ? 'auto' : undefined, marginRight: align === 'center' ? 'auto' : undefined,
      ...style,
    }}>
      {eyebrow ? <Eyebrow tone={onDark ? 'amber' : 'accent'}>{eyebrow}</Eyebrow> : null}
      <h2 style={{ font: SIZES[size], color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)', margin: 0 }}>{title}</h2>
      {lead ? <p style={{ font: 'var(--type-lead)', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)', margin: 0, maxWidth: 620 }}>{lead}</p> : null}
      {children}
    </div>
  );
}
