import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { height: 'var(--control-h-sm)', padding: '0 var(--control-px-sm)', fontSize: '.8125rem' },
  md: { height: 'var(--control-h-md)', padding: '0 var(--control-px-md)', fontSize: '.9375rem' },
  lg: { height: 'var(--control-h-lg)', padding: '0 var(--control-px-lg)', fontSize: '.9375rem' },
};

const VARIANTS = {
  primary: { background: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)', border: '1px solid transparent' },
  dark: { background: 'var(--action-dark-bg)', color: 'var(--action-dark-fg)', border: '1px solid transparent' },
  outline: { background: 'transparent', color: 'var(--action-outline-fg)', border: '1px solid var(--action-outline-border)' },
  outlineLight: { background: 'rgba(23,32,40,.18)', color: 'var(--cream-50)', border: '1px solid var(--border-on-dark)' },
  link: { background: 'transparent', color: 'var(--ink-900)', border: '1px solid transparent', padding: 0, height: 'auto' },
};

const HOVER = {
  primary: { background: 'var(--action-primary-bg-hover)' },
  dark: { background: 'var(--action-dark-bg-hover)' },
  outline: { background: 'rgba(29,45,68,.05)', borderColor: 'var(--ink-900)' },
  outlineLight: { background: 'rgba(251,246,240,.16)', borderColor: 'var(--cream-50)' },
  link: { color: 'var(--blue-500)' },
};

/** The brand's action. Amber pill = the one commercial CTA per view; everything else is quieter. */
export function Button({
  children, variant = 'primary', size = 'md', icon, iconAfter, fullWidth = false,
  disabled = false, href, as, onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = as || (href ? 'a' : 'button');
  const isLink = variant === 'link';
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: isLink ? 8 : 10, width: fullWidth ? '100%' : 'auto',
    font: 'var(--type-button)', fontSize: SIZES[size].fontSize,
    letterSpacing: isLink ? 'var(--tracking-eyebrow)' : '0',
    textTransform: isLink ? 'uppercase' : 'none',
    borderRadius: 'var(--radius-pill)', cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none', whiteSpace: 'nowrap',
    transition: 'var(--transition-control)',
    opacity: disabled ? 0.45 : 1,
    transform: press && !disabled ? 'var(--press-scale)' : 'none',
    ...SIZES[size], ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style,
  };
  return (
    <Tag
      href={href} onClick={disabled ? undefined : onClick} disabled={Tag === 'button' ? disabled : undefined}
      style={base}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      {...rest}
    >
      {icon ? <Icon name={icon} size={size === 'sm' ? 14 : 16} /> : null}
      {children}
      {iconAfter ? <Icon name={iconAfter} size={size === 'sm' ? 14 : 16} /> : null}
    </Tag>
  );
}
