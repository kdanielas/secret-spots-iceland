import React from 'react';
import { Button } from '../core/Button.jsx';

/** Full-bleed photographic hero with a scrim, centred Prata headline and a two-button CTA pair. */
export function Hero({
  image, title, subtitle, primaryCta = 'Check Availability', secondaryCta = 'Explore Iceland Photography Tours',
  height = 420, align = 'center', children, onPrimary, onSecondary, style,
}) {
  return (
    <section style={{ position: 'relative', minHeight: height, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden', ...style }}>
      <img src={image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-image)' }} />
      <div style={{
        position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)',
        alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align,
        padding: 'var(--space-13) var(--space-9) var(--space-9)', margin: '0 auto',
        maxWidth: 'var(--container-max)', width: '100%',
      }}>
        <h1 style={{ font: 'var(--type-display-xl)', color: 'var(--cream-50)', margin: 0, maxWidth: 720 }}>{title}</h1>
        {subtitle ? <p style={{ font: 'var(--type-body)', color: 'rgba(251,250,248,.88)', margin: 0, maxWidth: 620 }}>{subtitle}</p> : null}
        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
          {primaryCta ? <Button variant="primary" onClick={onPrimary}>{primaryCta}</Button> : null}
          {secondaryCta ? <Button variant="outlineLight" onClick={onSecondary}>{secondaryCta}</Button> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
