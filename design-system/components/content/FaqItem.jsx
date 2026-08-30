import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** One hairline-carded accordion row. Plus when closed, minus when open. */
export function FaqItem({ question, answer, defaultOpen = false, style }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{
      background: 'var(--surface-raised)', borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)', padding: 'var(--space-5) var(--space-6)', ...style,
    }}>
      <button onClick={() => setOpen(!open)} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-5)',
        width: '100%', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left',
      }}>
        <span style={{ font: 'var(--type-body)', fontWeight: 'var(--weight-bold)', color: 'var(--text-heading)' }}>{question}</span>
        <span style={{
          width: 26, height: 26, flex: '0 0 auto', borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--border-subtle)', display: 'inline-flex', alignItems: 'center',
          justifyContent: 'center', color: 'var(--ink-900)',
        }}><Icon name={open ? 'minus' : 'plus'} size={13} /></span>
      </button>
      {open ? <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: 'var(--space-4) 0 0', paddingRight: 40 }}>{answer}</p> : null}
    </div>
  );
}
