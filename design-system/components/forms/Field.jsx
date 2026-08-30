import React from 'react';
import { Icon } from '../core/Icon.jsx';

const labelStyle = (onDark) => ({
  font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
  color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)',
});

const controlStyle = (onDark) => ({
  width: '100%', boxSizing: 'border-box', font: 'var(--type-body)',
  color: onDark ? 'var(--cream-50)' : 'var(--ink-900)',
  background: onDark ? 'transparent' : 'var(--surface-raised)',
  border: `1px solid ${onDark ? 'var(--border-on-dark-field)' : 'var(--border-field)'}`,
  borderRadius: 'var(--radius-sm)', padding: '0 14px', height: 'var(--control-h-md)',
  outline: 'none', transition: 'var(--transition-control)',
});

/** Labelled form control. `onDark` is the default in practice — the enquiry form lives on the navy panel. */
export function Field({ label, type = 'text', placeholder, options, rows = 4, onDark = true, value, onChange, style }) {
  const [focus, setFocus] = React.useState(false);
  const focusRing = focus ? { borderColor: onDark ? 'var(--cream-50)' : 'var(--blue-500)' } : null;
  const common = {
    style: { ...controlStyle(onDark), ...focusRing },
    placeholder, value, onChange,
    onFocus: () => setFocus(true), onBlur: () => setFocus(false),
  };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', ...style }}>
      {label ? <span style={labelStyle(onDark)}>{label}</span> : null}
      {type === 'textarea' ? (
        <textarea {...common} rows={rows} style={{ ...common.style, height: 'auto', padding: '12px 14px', resize: 'vertical', fontFamily: 'var(--font-sans)' }} />
      ) : type === 'select' ? (
        <span style={{ position: 'relative', display: 'block' }}>
          <select {...common} style={{ ...common.style, appearance: 'none', paddingRight: 40, fontFamily: 'var(--font-sans)' }}>
            {(options || []).map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)' }}>
            <Icon name="chevron-down" size={16} />
          </span>
        </span>
      ) : (
        <input {...common} type={type} />
      )}
    </label>
  );
}
