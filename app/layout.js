'use client';

import React from 'react';
import Link from 'next/link';
import '../styles/globals.css';
import styles from './layout.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kent & Vale - Bespoke Objects of Permanence. Handmade resin and wood furniture, heirlooms, and game boards." />
        <title>Kent & Vale — Bespoke Objects of Permanence</title>
        
        {/* Google Fonts with fallback font stack */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Navigation */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navBrand}>
            KENT <span style={{fontFamily: "'Didot', 'Georgia', serif", fontWeight: 400, color: 'var(--brass)'}}>&</span> VALE
          </Link>
          <ul className={styles.navLinks}>
            <li><Link href="/forever-form">Forever Form</Link></li>
            <li><Link href="/the-games-room">The Games Room</Link></li>
            <li><Link href="/inspiration-gallery">Gallery</Link></li>
            <li><Link href="/process">Process</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>

        {/* Main content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className="container">
            <p className={styles.footerMark}>KENT <span style={{fontFamily: "'Didot', 'Georgia', serif", fontWeight: 400}}>& </span>VALE</p>
            <div className={styles.footerLine}></div>
            
            <div className={styles.footerGrid}>
              <div>
                <p className={styles.footerLabel}>Navigation</p>
                <p className={styles.footerLinks}>
                  <Link href="/">Home</Link> • <Link href="/forever-form">Forever Form</Link> • <Link href="/the-games-room">The Games Room</Link> • <Link href="/inspiration-gallery">Gallery</Link> • <Link href="/process">Process</Link> • <Link href="/pricing">Pricing</Link> • <Link href="/about">About</Link> • <Link href="/blog">Blog</Link>
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
              <p>© 2026 Kent & Vale. All rights reserved. | <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Service</Link></p>
              <p>Made in Kent, England.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
