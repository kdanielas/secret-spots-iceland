import React from 'react';

/** The Secret Spots Iceland wordmark (extracted from the supplied mockups). */
export function Logo({ height = 34, src = '../../assets/logo.png', onDark = false, style }) {
  return (
    <img src={src} alt="Secret Spots Iceland" style={{
      height, width: 'auto', filter: onDark ? 'brightness(0) invert(1)' : 'none', ...style,
    }} />
  );
}
