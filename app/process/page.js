'use client';

import React from 'react';
import Link from 'next/link';
import styles from './info-pages.module.css';

export default function Process() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>The Commission Process</h1>

        <div className={styles.infoGrid}>
          <div>
            <h2 style={{ marginBottom: '3rem' }}>From Conversation to Your Home</h2>
            <p>
              We believe the process should be as thoughtful as the piece. Here's exactly how it works.
            </p>
          </div>
        </div>

        <div className={styles.stepCards}>
          {[
            {
              num: '01',
              title: 'Conversation',
              time: 'Week 1',
              desc: 'You describe what you want the piece to hold. We ask questions. We listen. We sketch rough directions. If we\'re the right fit, we move forward.',
            },
            {
              num: '02',
              title: 'Design & Approval',
              time: 'Weeks 2–3',
              desc: 'We develop 2–3 design directions based on your vision. You review, give feedback, we iterate. Once approved, a 50% deposit secures your slot.',
            },
            {
              num: '03',
              title: 'Material & Creation',
              time: 'Weeks 4–16',
              desc: 'We source materials. The making begins: 80–120 hours over 8–12 weeks. We send occasional updates on the progress.',
            },
            {
              num: '04',
              title: 'Finishing & Dispatch',
              time: 'Weeks 17–18',
              desc: 'Final polish, detailing, and quality check. Carefully packed and shipped to your address with tracking.',
            },
            {
              num: '05',
              title: 'Delivery & Your Home',
              time: 'Week 18+',
              desc: 'The piece arrives. We\'re here if you have questions about placement or care. Lifetime guarantee applies.',
            },
          ].map((step, idx) => (
            <div key={idx} className={styles.stepCard}>
              <p className={styles.stepNum}>{step.num}</p>
              <h3>{step.title}</h3>
              <p className={styles.stepTime}>{step.time}</p>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.timeline}>
          <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Timeline at a Glance</h3>
          <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <strong>Consultation → Design → Creation → Finishing → Delivery</strong>
            <br />
            1 week | 2–3 weeks | 8–12 weeks | 1–2 weeks | Immediate
          </p>
          <p style={{ textAlign: 'center', color: '#666' }}>
            <strong>Total: 12–18 weeks (3–4.5 months)</strong>
            <br />
            Lead times vary based on current commissions and complexity.
          </p>
        </div>

        <div className={styles.faqSection}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>FAQ</h2>
          <div className={styles.faqGrid}>
            <div>
              <h4>How long does the process actually take?</h4>
              <p>Start to finish is typically 12–18 weeks. Consultation (1 wk) + Design (2–3 wks) + Creation (8–12 wks) + Finishing & Delivery (1–2 wks).</p>
            </div>
            <div>
              <h4>What if I change my mind during the process?</h4>
              <p>During design, changes are expected and encouraged. Once creation begins, major changes extend timeline & cost. That's why design approval matters.</p>
            </div>
            <div>
              <h4>Can you work with my budget?</h4>
              <p>Yes, usually. We have pieces at every tier. Tell us your budget and we'll design within it.</p>
            </div>
            <div>
              <h4>What if something goes wrong?</h4>
              <p>We stand behind our work. Lifetime structural guarantee means if anything fails, we fix it or remake it. We also teach you how to care for the piece.</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/enquiry" className="button primary">
            Start a Commission
          </Link>
        </div>
      </div>
    </section>
  );
}
