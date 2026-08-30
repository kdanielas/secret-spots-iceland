import React from 'react';
import { Button } from '../core/Button.jsx';
import { Chip } from '../core/Chip.jsx';

/** The tour product card: photo with duration badge, Prata title, level, blurb, price row, dark CTA. */
export function TourCard({
  image, duration, title, level = 'All levels', description,
  kicker = 'Private tour', priceLabel = 'from', price, cta = 'Check Availability',
  layout = 'vertical', onClick, style,
}) {
  const [hover, setHover] = React.useState(false);
  const wide = layout === 'wide';
  return (
    <article
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: wide ? 'column' : 'column',
        background: 'var(--surface-card)', borderRadius: 'var(--radius-card)', overflow: 'hidden',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        boxShadow: hover ? 'var(--shadow-card)' : 'none',
        transform: hover ? 'translateY(-2px)' : 'none',
        ...style,
      }}>
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: wide ? '16 / 6.2' : '4 / 3' }}>
        <img src={image} alt={title} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transition: 'var(--transition-image)', transform: hover ? 'var(--image-zoom-hover)' : 'none',
        }} />
        {duration ? <div style={{ position: 'absolute', top: 12, left: 12 }}><Chip tone="onImage">{duration}</Chip></div> : null}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--card-pad)', flex: 1 }}>
        <h3 style={{ font: 'var(--type-display-sm)', color: 'var(--text-heading)', margin: 0 }}>{title}</h3>
        {level ? <div style={{ font: 'var(--type-label)', color: 'var(--ink-900)' }}>{level}</div> : null}
        <p style={{ font: 'var(--type-body)', color: 'var(--text-body)', margin: 0, flex: 1 }}>{description}</p>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-5)', marginTop: 'var(--space-4)' }}>
          <span style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--ink-900)' }}>{kicker}</span>
          <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)' }}>{priceLabel}</span>
            <span style={{ font: 'var(--type-price)', color: 'var(--text-heading)' }}>{price}</span>
          </span>
        </div>
        <Button variant="dark" fullWidth onClick={onClick} style={{ marginTop: 'var(--space-3)' }}>{cta}</Button>
      </div>
    </article>
  );
}
