import React from 'react';

/** Photo + name + short blurb tile. Used in the "Highlights" grid on dark tour pages. */
export function HighlightTile({ image, title, description, onDark = true, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <figure onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', ...style }}>
      <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-image)', aspectRatio: '3 / 2' }}>
        <img src={image} alt={title} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transition: 'var(--transition-image)', transform: hover ? 'var(--image-zoom-hover)' : 'none' }} />
      </div>
      <figcaption style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        <h4 style={{ font: 'var(--type-display-xs)', color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)', margin: 0 }}>{title}</h4>
        <p style={{ font: 'var(--type-body-sm)', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)', margin: 0 }}>{description}</p>
      </figcaption>
    </figure>
  );
}
