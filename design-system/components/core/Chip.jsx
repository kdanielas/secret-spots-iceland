import React from 'react';
import { Icon } from './Icon.jsx';

/** Small pill label. "onImage" is the translucent duration badge on tour photos. */
export function Chip({ children, tone = 'sand', icon, style }) {
  const tones = {
    sand: { background: 'var(--surface-chip)', color: 'var(--ink-900)', border: '1px solid var(--border-subtle)' },
    onImage: { background: 'var(--scrim-chip)', color: 'var(--cream-50)', border: '1px solid rgba(251,246,240,.18)', backdropFilter: 'var(--blur-chip)' },
    light: { background: 'var(--cream-50)', color: 'var(--ink-900)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)' },
    amber: { background: 'var(--amber-400)', color: 'var(--espresso-900)', border: '1px solid transparent' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, height: 28, padding: '0 12px',
      borderRadius: 'var(--radius-pill)', font: 'var(--type-body-sm)', whiteSpace: 'nowrap',
      ...tones[tone], ...style,
    }}>
      {icon ? <Icon name={icon} size={14} /> : null}{children}
    </span>
  );
}
