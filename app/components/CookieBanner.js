'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no choice has been recorded
    const consent = localStorage.getItem('kv_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kv_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('kv_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'var(--charcoal)',
      borderTop: '1px solid rgba(194, 168, 120, 0.2)',
      padding: '1.25rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2rem',
      zIndex: 999,
      flexWrap: 'wrap',
    }}>
      <p style={{
        fontSize: '0.875rem',
        color: 'var(--stone)',
        lineHeight: 1.6,
        flex: 1,
        minWidth: '200px',
      }}>
        We use essential cookies to keep the site running. We don't use tracking or advertising cookies.{' '}
        <Link
          href="/cookie-policy"
          style={{ color: 'var(--brass)', textDecoration: 'underline', whiteSpace: 'nowrap' }}
        >
          Cookie Policy
        </Link>
      </p>

      <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
        <button
          onClick={handleDecline}
          style={{
            padding: '0.6rem 1.25rem',
            background: 'transparent',
            color: 'var(--stone)',
            border: '1px solid rgba(184, 181, 174, 0.3)',
            fontFamily: 'var(--sans)',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => e.target.style.borderColor = 'var(--stone)'}
          onMouseLeave={e => e.target.style.borderColor = 'rgba(184, 181, 174, 0.3)'}
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          style={{
            padding: '0.6rem 1.25rem',
            background: 'var(--brass)',
            color: 'var(--charcoal)',
            border: '1px solid var(--brass)',
            fontFamily: 'var(--sans)',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--brass-light)'; e.target.style.borderColor = 'var(--brass-light)'; }}
          onMouseLeave={e => { e.target.style.background = 'var(--brass)'; e.target.style.borderColor = 'var(--brass)'; }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
