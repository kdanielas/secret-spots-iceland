import React from 'react';

/** Lucide (static SVG, 24x24, 2px stroke) rendered as a CSS mask so it inherits currentColor. */
export function Icon({ name, size = 20, color, className, style }) {
  const url = `https://unpkg.com/lucide-static@0.544.0/icons/${name}.svg`;
  return (
    <span
      role="img"
      aria-label={name}
      className={className}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        flex: '0 0 auto',
        background: color || 'currentColor',
        WebkitMaskImage: `url("${url}")`,
        maskImage: `url("${url}")`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        ...style,
      }}
    />
  );
}
