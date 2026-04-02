import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Kent & Vale — Bespoke Objects of Permanence',
  description: 'Handmade resin and wood furniture, heirlooms, and game boards. Bespoke commissions from our Kent studio.',
};

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Objects of Permanence</p>
          <h1 className={styles.heroHeadline}>
            Handmade in<br />Kent, England
          </h1>
          <p className={styles.heroSubheadline}>
            Bespoke resin and wood furniture, heirlooms, and game boards<br />
            created for homes and lives that value the exceptional.
          </p>
          <div className={styles.heroCTA}>
            <Link href="/enquiry" className={styles.ctaPrimary}>
              Start a Commission
            </Link>
            <Link href="/inspiration-gallery" className={styles.ctaSecondary}>
              Browse the Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* COLLECTIONS SHOWCASE */}
      <section className={styles.collectionsSection}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Two Collections
          </h2>
          
          <div className={styles.collectionsGrid}>
            {/* Forever Form */}
            <div className={styles.collectionCard + ' ' + styles.foreverForm}>
              <div className={styles.collectionContent}>
                <p className={styles.collectionLabel}>Forever Form</p>
                <h3 className={styles.collectionName}>Heirloom Commissions</h3>
                <p className={styles.collectionDesc}>
                  Preserve what matters most in resin. Wedding flowers, a beloved pet, a milestone moment — made permanent, held gently, kept forever.
                </p>
                <Link href="/forever-form" className={styles.collectionCTA}>
                  Explore Forever Form →
                </Link>
              </div>
            </div>

            {/* The Games Room */}
            <div className={styles.collectionCard + ' ' + styles.gamesRoom}>
              <div className={styles.collectionContent}>
                <p className={styles.collectionLabel}>The Games Room</p>
                <h3 className={styles.collectionName}>Luxury Game Boards</h3>
                <p className={styles.collectionDesc}>
                  Where craft meets play. Chess sets, backgammon boards, leisure pieces built to be played, displayed, and passed down through generations.
                </p>
                <Link href="/the-games-room" className={styles.collectionCTA}>
                  Explore The Games Room →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS EXPLAINER */}
      <section className={styles.processSection}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>How It Works</h2>
          
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <p className={styles.stepNumber}>01</p>
              <h3>Conversation</h3>
              <p>You tell us what the piece should hold. A memory, a room, a feeling. We listen.</p>
            </div>

            <div className={styles.step}>
              <p className={styles.stepNumber}>02</p>
              <h3>Design</h3>
              <p>We sketch directions, propose approaches, explore with you. You guide the vision.</p>
            </div>

            <div className={styles.step}>
              <p className={styles.stepNumber}>03</p>
              <h3>Materials</h3>
              <p>We source timber, resins, metals — each chosen for permanence and beauty.</p>
            </div>

            <div className={styles.step}>
              <p className={styles.stepNumber}>04</p>
              <h3>Creation</h3>
              <p>Many hours of careful making. The work happens. You see it taking shape.</p>
            </div>

            <div className={styles.step}>
              <p className={styles.stepNumber}>05</p>
              <h3>Delivery</h3>
              <p>The piece arrives. It enters your life. It becomes part of your story.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className={styles.trustSection}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Trusted by Homes & Hearts</h2>
          
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "She returned the wedding flowers in resin and we both cried. They're on our dining table. Every guest asks about them. This is the most meaningful gift we've ever received."
              </p>
              <p className={styles.testimonialAttribution}>
                Emma & Jonathan | Wedding Flower Preservation, 2025
              </p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "I bought a chess set from Craig and didn't expect to become a collector. Three boards later, I understand why people commission heirlooms."
              </p>
              <p className={styles.testimonialAttribution}>
                Michael | Collector, Devon
              </p>
            </div>
          </div>

          <div className={styles.credentials}>
            <p>Handmade in Kent, England • Lifetime care guarantee</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCTA}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Every commission begins with a conversation. No obligations. Just a chat about what you imagine.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/enquiry" className={styles.ctaPrimary}>
              Start a Commission
            </Link>
            <Link href="/inspiration-gallery" className={styles.ctaSecondary}>
              Browse the Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
