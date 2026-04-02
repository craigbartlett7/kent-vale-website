'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../process/info-pages.module.css';

export default function Pricing() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Investment & Pricing</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.05rem', color: '#666' }}>
          We don't compete on cost. We compete on permanence. Here's what you're investing in.
        </p>

        <div style={{ marginBottom: '4rem' }}>
          {[
            {
              name: 'Entry Bespoke',
              range: '£800–£2,500',
              desc: 'Small memory pieces, decorative objects, simpler game boards, gift-scale commissions.',
              includes: [
                'Full consultation process',
                'Custom design (1–2 iterations)',
                'Professional materials',
                'Finished to museum standards',
                'Lifetime care guarantee',
              ],
              example: 'Wedding flower keepsake, small side table, chess set',
            },
            {
              name: 'Mid-Premium Signature',
              range: '£2,500 – £12,000',
              desc: 'Dining tables, desks, larger memorial pieces, statement game boards, collaborative collections.',
              includes: [
                'Extended consultation & design process',
                'Custom design (unlimited iterations)',
                'Premium sourced materials (named estate timber)',
                'Many hours of handcraft per piece',
                'Bespoke finishing & detailing',
                'Lifetime structural guarantee',
                '1 year of free care & maintenance',
              ],
              example: 'Bespoke dining table, legacy furniture piece, collector\'s game board',
            },
            {
              name: 'Luxury Statement',
              range: '£12,000 – £60,000+',
              desc: 'Large-scale statement tables, art installations, corporate commissions, bespoke collections.',
              includes: [
                'Intensive consultation & co-creation',
                'Unlimited iterations & revisions',
                'Rare & heritage materials',
                'Many hours of bespoke craftwork',
                'Architectural-grade finishing',
                'On-site installation support',
                'Lifetime guarantee + annual care visit',
              ],
              example: 'Feature table for grand space, art installation, corporate showpiece',
            },
          ].map((tier, idx) => (
            <div key={idx} className={styles.pricingTier}>
              <h3>{tier.name}</h3>
              <p className={styles.range}>{tier.range}</p>
              <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1rem' }}>{tier.desc}</p>
              <ul>
                {tier.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p><strong>Example:</strong> {tier.example}</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(194, 168, 120, 0.05)', padding: '3rem 2rem', border: '1px solid rgba(194, 168, 120, 0.2)', marginBottom: '4rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>What Drives Cost</h3>
          <div className={styles.infoGrid}>
            <div>
              <p><strong>Time:</strong> Many hours of skilled handcraft per piece</p>
            </div>
            <div>
              <p><strong>Materials:</strong> Named-source timber, professional epoxy, bespoke finishing</p>
            </div>
            <div>
              <p><strong>Iteration:</strong> Custom design refined until perfect</p>
            </div>
            <div>
              <p><strong>Guarantee:</strong> Lifetime structural guarantee (we back it forever)</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Your Commission, Your Budget</h3>
          <p style={{ marginBottom: '2rem', color: '#666' }}>
            These tiers are starting points. Your specific piece will be quoted individually. 
            That's why the consultation exists—not to sell you something, but to understand what you want and price it fairly.
          </p>
          <Link href="/enquiry" className="button primary">
            Start a Consultation
          </Link>
        </div>

        <div className={styles.faqSection}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Payment & Logistics</h2>
          <div className={styles.faqGrid}>
            <div>
              <h4>50% Deposit</h4>
              <p>Secures your slot and covers material sourcing. Due when design is approved.</p>
            </div>
            <div>
              <h4>50% Balance</h4>
              <p>Due on delivery. We're flexible on payment timing if needed—just ask.</p>
            </div>
            <div>
              <h4>No Surprises</h4>
              <p>Your quote is fixed. Price doesn't change unless you request changes.</p>
            </div>
            <div>
              <h4>Shipping & Insurance</h4>
              <p>Calculated based on destination. We insure all shipments in transit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
