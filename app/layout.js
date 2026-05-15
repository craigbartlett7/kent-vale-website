'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/globals.css';
import styles from './layout.module.css';
import CookieBanner from './components/CookieBanner';
import BackToTop from './components/BackToTop';
import { Analytics } from '@vercel/analytics/next';

const NAV_LINKS = [
  { href: '/studio', label: 'Studio' },
  { href: '/the-games-room', label: 'The Games Room' },
  { href: '/atelier-commissions', label: 'Atelier' },
  { href: '/inspiration-gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
  { href: '/london-marathon-2026', label: 'Marathon 2026', brass: true },
];

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kent & Vale - Bespoke Objects of Permanence. Handmade resin and wood furniture, heirlooms, and game boards." />
        <title>Kent & Vale — Bespoke Objects of Permanence</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Navigation */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navBrand} onClick={close}>
            KENT <span style={{ fontFamily: "'Didot', 'Georgia', serif", fontWeight: 400, color: 'var(--brass)' }}>&</span> VALE
          </Link>

          {/* Desktop links */}
          <ul className={styles.navLinks}>
            {NAV_LINKS.map(({ href, label, brass }) => (
              <li key={href}>
                <Link href={href} style={brass ? { color: 'var(--brass)' } : undefined}>{label}</Link>
              </li>
            ))}
          </ul>

          {/* Burger button — mobile only */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineTop : ''}`} />
            <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineMid : ''}`} />
            <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerLineBot : ''}`} />
          </button>
        </nav>

        {/* Mobile menu drawer */}
        {menuOpen && (
          <div className={styles.mobileMenu} onClick={close}>
            <div onClick={e => e.stopPropagation()}>
              {NAV_LINKS.map(({ href, label, brass }) => (
                <Link
                  key={href}
                  href={href}
                  className={styles.mobileLink}
                  style={brass ? { color: 'var(--brass)' } : undefined}
                  onClick={close}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Main content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className="container">
            <p className={styles.footerMark}>KENT <span style={{ fontFamily: "'Didot', 'Georgia', serif", fontWeight: 400 }}>& </span>VALE</p>
            <div className={styles.footerLine}></div>

            <div className={styles.footerGrid}>
              <div>
                <p className={styles.footerLabel}>Navigation</p>
                <p className={styles.footerLinks}>
                  <Link href="/">Home</Link> • <Link href="/studio">Studio</Link> • <Link href="/the-games-room">The Games Room</Link> • <Link href="/atelier-commissions">Atelier Commissions</Link> • <Link href="/inspiration-gallery">Gallery</Link> • <Link href="/about">About</Link> • <Link href="/journal">Journal</Link> • <Link href="/contact">Contact</Link>
                </p>
              </div>

              <div>
                <p className={styles.footerLabel}>Contact</p>
                <p>hello@kentandvale.com</p>
                <p>Sittingbourne, Kent</p>
              </div>

              <div>
                <p className={styles.footerLabel}>Social</p>
                <p className={styles.footerLinks}>
                  <a href="https://instagram.com/kentandvale" target="_blank" rel="noopener noreferrer">Instagram</a> • <a href="https://pinterest.com/kentandvale" target="_blank" rel="noopener noreferrer">Pinterest</a>
                </p>
              </div>
            </div>

            <div className={styles.footerLegal}>
              <p>© 2026 Kent & Vale. All rights reserved. | <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Service</Link> | <Link href="/cookie-policy">Cookie Policy</Link></p>
              <p>Made in Kent, England.</p>
            </div>
          </div>
        </footer>

        <CookieBanner />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
