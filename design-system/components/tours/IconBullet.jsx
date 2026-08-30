import React from 'react';
import { IconChip } from '../core/IconChip.jsx';

/** Icon chip + bold title + one-line support copy. The "why private" list. */
export function IconBullet({ icon, title, description, onDark = false, style }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'flex-start', ...style }}>
      <IconChip name={icon} size={40} onDark={onDark} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingTop: 2 }}>
        <span style={{ font: 'var(--type-body)', fontWeight: 'var(--weight-bold)', color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)' }}>{title}</span>
        <span style={{ font: 'var(--type-body-sm)', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)' }}>{description}</span>
      </div>
    </div>
  );
}
