import React from 'react';
import { Rating } from '../core/Rating.jsx';
import { Icon } from '../core/Icon.jsx';

/** Large centred Prata pull-quote with stars, attribution and prev/next arrows. */
export function TestimonialQuote({ quote, author, meta, rating = 5, align = 'center', showNav = true, style }) {
  const arrow = {
    width: 34, height: 34, borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-strong)',
    background: 'transparent', color: 'var(--ink-900)', display: 'inline-flex', alignItems: 'center',
    justifyContent: 'center', cursor: 'pointer', transition: 'var(--transition-control)',
  };
  return (
    <blockquote style={{
      margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-6)',
      alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align, ...style,
    }}>
      <Rating value={rating} size={14} />
      <p style={{ font: 'var(--type-display-xs)', lineHeight: 1.55, color: 'var(--text-heading)', margin: 0, maxWidth: 680 }}>{quote}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: align === 'center' ? 'center' : 'flex-start' }}>
        <span style={{ font: 'var(--type-body-sm)', fontWeight: 'var(--weight-bold)', color: 'var(--text-heading)' }}>{author}</span>
        <span style={{ font: 'var(--type-body-xs)', color: 'var(--text-muted)' }}>{meta}</span>
      </div>
      {showNav ? (
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <button style={arrow} aria-label="Previous review"><Icon name="arrow-left" size={15} /></button>
          <button style={arrow} aria-label="Next review"><Icon name="arrow-right" size={15} /></button>
        </div>
      ) : null}
    </blockquote>
  );
}
