import React from 'react';
import { Rating } from '../core/Rating.jsx';

/** Compact platform-review card: avatar, name, date, stars, truncated quote, Read More. */
export function ReviewCard({ name, date, avatar, initial, rating = 5, quote, readMore = 'Read More', tone = 'sand', style }) {
  const tones = {
    sand: { background: 'var(--surface-card)', color: 'var(--text-body)' },
    light: { background: 'var(--surface-card-light)', color: 'var(--text-body)' },
  };
  return (
    <article style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
      borderRadius: 'var(--radius-card)', padding: 'var(--card-pad)', ...tones[tone], ...style,
    }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        {avatar
          ? <img src={avatar} alt={name} style={{ width: 34, height: 34, borderRadius: 'var(--radius-pill)', objectFit: 'cover' }} />
          : <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-pill)', background: '#A32B2B', color: 'var(--cream-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', font: 'var(--type-label)' }}>{initial || name?.[0]}</span>}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ font: 'var(--type-body-sm)', fontWeight: 'var(--weight-bold)', color: 'var(--text-heading)' }}>{name}</span>
          <span style={{ font: 'var(--type-body-xs)', color: 'var(--amber-600)' }}>{date}</span>
        </div>
      </header>
      <Rating value={rating} size={12} />
      <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-body)', margin: 0 }}>
        {quote}{' '}
        <a href="#" style={{ color: 'var(--ink-900)', fontWeight: 'var(--weight-bold)' }}>{readMore}</a>
      </p>
    </article>
  );
}
