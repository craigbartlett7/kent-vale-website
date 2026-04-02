'use client';

import React from 'react';
import Link from 'next/link';
import styles from './collection.module.css';

export default function ForeverForm() {
  const categories = [
    {
      name: 'Love & Union',
      description: 'Preserve the symbols of commitment. Wedding flowers, reception blooms, proposal tokens, vow renewals, anniversary recreations.',
    },
    {
      name: 'Family & Childhood',
      description: 'Capture milestones that matter. Baby\'s first shoes, christening keepsakes, school badges, coming-of-age pieces.',
    },
    {
      name: 'Remembrance & Legacy',
      description: 'Hold what cannot be held otherwise. Pet memorials, bereavement pieces with ashes or flowers, celebration-of-life tributes.',
    },
    {
      name: 'Home & Belonging',
      description: 'Mark the places that shaped you. First home memories, farewell pieces, garden fragments, relocation keepsakes.',
    },
    {
      name: 'Milestones & Achievement',
      description: 'Honor growth and accomplishment. Graduation keepsakes, sporting achievements, retirement commemorations, creative achievements.',
    },
    {
      name: 'Personal Story',
      description: 'The commissions that don\'t fit elsewhere. Handwritten recipes, travel memories, concert tickets, family traditions.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero + ' ' + styles.foreverFormHero}>
        <div className={styles.heroContent}>
          <p className={styles.label}>Forever Form</p>
          <h1>Heirloom Commissions for Life's Most Meaningful Moments</h1>
          <p className={styles.subtitle}>
            Preserve what you love in resin. A wedding bouquet. A beloved pet. A milestone moment.
            Made permanent, kept gently, treasured forever.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
            Every Forever Form piece begins with what you want it to hold—a memory, a moment, an emotion, a bond. 
            We make something that can carry that weight for a lifetime.
          </p>

          <div className={styles.categoriesGrid}>
            {categories.map((cat, idx) => (
              <div key={idx} className={styles.categoryCard}>
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className={styles.valueSection}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Forever Form?</h2>
          
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <h3>Emotional Permanence</h3>
              <p>We don't make keepsakes. We make vessels for what matters most. Every commission holds a specific, irreplaceable moment in your life. We understand that this is not shopping. This is preservation.</p>
            </div>

            <div className={styles.valueCard}>
              <h3>Genuine Craftsmanship</h3>
              <p>Many hours per piece. Multiple pours, multiple stages, complete attention. We take 4 commissions a month. Your piece will have our complete focus.</p>
            </div>

            <div className={styles.valueCard}>
              <h3>Provenance & Integrity</h3>
              <p>English walnut. Kent oak. Professional-grade epoxy. Sourced timber from named estates. Materials chosen for longevity. Finished to standards we'd keep in our own homes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className={styles.galleryPreview}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Forever Form in Life</h2>
          
          <div className={styles.galleryGrid}>
            <div className={styles.galleryPlaceholder}>
              <p>Gallery Image 1</p>
            </div>
            <div className={styles.galleryPlaceholder}>
              <p>Gallery Image 2</p>
            </div>
            <div className={styles.galleryPlaceholder}>
              <p>Gallery Image 3</p>
            </div>
            <div className={styles.galleryPlaceholder}>
              <p>Gallery Image 4</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/inspiration-gallery?filter=forever-form" className="button primary">
              Browse Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Start Your Forever Form</h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
            Ready to turn a moment into a memory? Let's talk about what you want this piece to hold.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/enquiry?interest=forever-form" className="button primary">
              Start a Commission
            </Link>
            <Link href="/inspiration-gallery?filter=forever-form" className="button">
              Browse All Pieces
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
