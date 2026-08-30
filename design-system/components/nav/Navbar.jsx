import React from 'react';
import { Logo } from '../core/Logo.jsx';

/** Site header: wordmark left, single-row text nav right, on cream. */
export function Navbar({ logoSrc = '../../assets/logo.png', items = [], active, onNavigate, style }) {
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'var(--surface-raised)', padding: '14px var(--space-9)', gap: 'var(--space-8)', ...style,
    }}>
      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(items[0]?.label); }}>
        <Logo height={30} src={logoSrc} />
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-7)' }}>
        {items.map((it) => (
          <a key={it.label} href={it.href || '#'}
            onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(it.label); } }}
            style={{
              font: 'var(--type-nav)',
              fontWeight: active === it.label ? 'var(--weight-bold)' : 'var(--weight-regular)',
              color: 'var(--ink-900)', whiteSpace: 'nowrap',
            }}>{it.label}</a>
        ))}
      </nav>
    </header>
  );
}
