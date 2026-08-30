import React from 'react';
import { Icon } from './Icon.jsx';

/** Circular sand chip holding a blue Lucide glyph — the brand's value-prop bullet marker. */
export function IconChip({ name, size = 40, onDark = false, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, flex: '0 0 auto', borderRadius: 'var(--radius-pill)',
      background: onDark ? 'var(--surface-dark-field)' : 'var(--surface-chip)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--blue-500)', ...style,
    }}>
      <Icon name={name} size={Math.round(size * 0.5)} />
    </span>
  );
}
