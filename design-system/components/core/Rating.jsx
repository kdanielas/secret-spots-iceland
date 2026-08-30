import React from 'react';
import { Icon } from './Icon.jsx';

/** Amber five-star row. Outline stars are the brand default. */
export function Rating({ value = 5, max = 5, size = 14, filled = false, label, style }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--star-gold)', ...style }}>
      {Array.from({ length: max }, (_, i) => (
        <Icon key={i} name={filled && i < Math.round(value) ? 'star' : 'star'} size={size}
          style={{ opacity: i < Math.round(value) ? 1 : 0.3 }} />
      ))}
      {label ? <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', marginLeft: 6 }}>{label}</span> : null}
    </div>
  );
}
