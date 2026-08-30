import React from 'react';

/** Edge-to-edge row of equal photos — the brand's rhythm break between text sections. */
export function ImageStrip({ images = [], columns, gap = 'var(--grid-gap)', ratio = '5 / 4', radius = 'var(--radius-image)', style }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns || images.length}, 1fr)`, gap, ...style }}>
      {images.map((src, i) => (
        <div key={i} style={{ overflow: 'hidden', borderRadius: radius, aspectRatio: ratio }}>
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ))}
    </div>
  );
}
