'use client';

import React from 'react';
import styles from '../process/info-pages.module.css';

export default function About() {
  const team = [
    {
      name: 'Paul',
      role: 'Lead Craftsman',
      bio: 'Bio coming soon.',
    },
    {
      name: 'Amanda Anderson',
      role: 'Operations',
      bio: 'Bio coming soon.',
    },
    {
      name: 'Craig Bartlett',
      role: 'Brand Ambassador',
      bio: 'Bio coming soon.',
    },
    {
      name: 'Norman Bartlett',
      role: 'Strategy & PR',
      bio: 'Bio coming soon.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>About Kent & Vale</h1>

        {/* Our Story */}
        <div style={{ marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Our Beginning</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555' }}>
            Kent & Vale began with a simple belief: objects deserve to be made with extraordinary care.
            <br />
            <br />
            Not mass-produced. Not rushed. Made by hand, one at a time, with complete attention.
            <br />
            <br />
            We work in a converted studio in Kent, surrounded by the landscape that shaped our aesthetic—chalk cliffs, ancient woodland, English manor houses. That place is part of what we make.
            <br />
            <br />
            We take 4 commissions a month (sometimes 3, sometimes 2). Not because it's good for business. Because anything more would mean rushing. And we don't rush.
            <br />
            <br />
            Every piece is made to last lifetimes. It deserves every hour we can give it.
          </p>
        </div>

        {/* Why Kent */}
        <div style={{ marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem', paddingTop: '2rem', borderTop: '1px solid rgba(184, 181, 174, 0.3)' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Why Kent?</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555' }}>
            Kent is home. It's also our material.
            <br />
            <br />
            The chalk downs and Wealden oak shape our aesthetic. Local craftspeople, makers, and artisans define our network. The Garden of England is quiet enough to think, and close enough to London to reach clients.
            <br />
            <br />
            But mostly: this is where we live. Where the light falls a certain way. Where the materials come from. Where the work happens.
            <br />
            <br />
            We're not remote by choice. We're here because it matters.
          </p>
        </div>

        {/* Philosophy */}
        <div style={{ marginBottom: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(184, 181, 174, 0.3)' }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>How We Work</h2>
          <div className={styles.infoGrid}>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: '1rem' }}>Permanence</h4>
              <p>We make things built to last lifetimes. Every material chosen, every hour invested, every decision made is in service of longevity, not fashion.</p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: '1rem' }}>Provenance</h4>
              <p>Made in Kent, England. That is not a footnote. It's the foundation of everything—our landscape, our craft lineage, our identity in the world.</p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: '1rem' }}>Singularity</h4>
              <p>No two pieces share the same resin flow, wood grain, or light. Each commission is irreproducible. Uniqueness is material fact.</p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: '1rem' }}>Restraint</h4>
              <p>We do less, better. Four commissions a month, not forty. A brand that knows what it is refuses to be everything to everyone.</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(184, 181, 174, 0.3)' }}>
          <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>The Team</h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>
            A small team of makers, designers, and craftspeople. Each brings different skills. All share the same values.
          </p>

          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <div key={idx} className={styles.teamCard}>
                <div className={styles.placeholder}>Team member photo</div>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(184, 181, 174, 0.3)', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>
          <p style={{ marginBottom: '1rem' }}>hello@kentandvale.com</p>
          <p style={{ marginBottom: '2rem' }}>Sittingbourne, Kent</p>
          <p style={{ fontSize: '0.95rem', color: '#666' }}>
            Studio visits by appointment. We love having people visit when possible.
          </p>
        </div>
      </div>
    </section>
  );
}
