import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Favourite Places Preserved in Resin | Kent & Vale',
  description: 'Shells from a beach, wood from your first home's garden, sand from a honeymoon — we preserve the places that shaped you in hand-poured resin. Made to order in Kent.',
};

const brass = 'var(--brass)';
const charcoal = '#1a1a18';
const ivory = 'var(--ivory)';

const eyebrow = {
  fontFamily: 'var(--sans)',
  fontSize: '0.7rem',
  letterSpacing: '0.35em',
  textTransform: 'uppercase',
  color: brass,
  marginBottom: '1.25rem',
};

const sectionHeading = {
  fontFamily: 'var(--serif)',
  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
  fontWeight: 400,
  lineHeight: 1.2,
  marginBottom: '1.5rem',
};

const bodyText = {
  fontFamily: 'var(--sans)',
  fontSize: '1rem',
  lineHeight: 1.85,
  color: 'var(--stone)',
  maxWidth: '560px',
  marginBottom: '1.5rem',
};

const brassCTA = {
  display: 'inline-block',
  padding: '0.9rem 2.2rem',
  background: brass,
  color: charcoal,
  fontFamily: 'var(--sans)',
  fontSize: '0.8rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  textDecoration: 'none',
};

const ghostCTA = {
  display: 'inline-block',
  padding: '0.9rem 2.2rem',
  border: `1px solid rgba(184,181,174,0.4)`,
  color: ivory,
  fontFamily: 'var(--sans)',
  fontSize: '0.8rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  textDecoration: 'none',
};

const places = [
  {
    title: 'Shells from the Beach',
    body: 'The beach you walked on your honeymoon. The cove where you proposed. The shoreline from a childhood summer. Shells, pebbles and sand — set in resin so that place lives somewhere in your home.',
  },
  {
    title: 'Wood from the Garden',
    body: "A branch from the oak in your first home's garden. A piece of decking from the house your children grew up in. Timber carries memory. We set it in resin and turn it into something permanent.",
  },
  {
    title: 'Soil from a Significant Place',
    body: 'A handful of soil from a field you ran through, a garden you tended, a piece of ground that shaped you. Mixed into the resin or contained within it — an object that carries a landscape.',
  },
  {
    title: 'Coffee Beans from a Honeymoon',
    body: 'We made a piece from coffee beans the customer brought back from the plantation next to their honeymoon hotel. Small things from significant places. They are exactly what we are here for.',
  },
  {
    title: 'Water from a Special Place',
    body: 'Sea water, river water, rain water from a particular day. Embedded in resin, the liquid is preserved — visible, suspended, permanent. A place captured in its own substance.',
  },
  {
    title: 'Anything That Carries a Place',
    body: "A pressed leaf. A stone from a path. A fragment of tile from a demolished building. If it comes from somewhere that matters, we will find a way to preserve it. There is no catalogue — only possibility.",
  },
];

export default function FavouritePlacesPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: charcoal, minHeight: '70vh', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <p style={eyebrow}>Memories — Favourite Places</p>
          <h1 style={{ ...sectionHeading, color: ivory }}>
            The places<br />that shaped you.
          </h1>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)', maxWidth: '480px' }}>
            Shells from a beach. Wood from the garden of a first home. Sand from a honeymoon. We preserve what a place felt like — set in resin, built into an object, given a permanent address in your home.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" style={brassCTA}>Begin a Commission →</Link>
            <Link href="/memories" style={ghostCTA}>All Memories</Link>
          </div>
        </div>
        <div style={{ overflow: 'hidden', minHeight: '400px' }}>
          <img
            src="/images/resin-flowers-3.jpg"
            alt="Round resin table with pressed wildflowers, lavender and botanicals — capturing a garden or landscape in permanent form"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* What we preserve */}
      <section style={{ background: ivory, padding: 'clamp(4rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ ...eyebrow, color: brass }}>What we can preserve</p>
          <h2 style={{ ...sectionHeading, color: charcoal, maxWidth: '520px' }}>
            If it came from somewhere<br />that matters, we can keep it.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem 3rem', marginTop: '3rem' }}>
            {places.map(({ title, body }) => (
              <div key={title} style={{ borderTop: '1px solid rgba(26,26,24,0.1)', paddingTop: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 400, color: charcoal, marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ ...bodyText, marginBottom: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The form a place can take */}
      <section style={{ background: charcoal, minHeight: '50vh', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div style={{ padding: 'clamp(3rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={eyebrow}>The form it takes</p>
          <h2 style={{ ...sectionHeading, color: ivory, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            A table surface.<br />A block. A hanging piece.
          </h2>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)' }}>
            A favourite-places commission can take almost any form. A side table where the shells from that beach sit suspended in clear resin below the surface. A block on your desk with a curl of bark from a felled tree. A wall piece containing pressed leaves and river pebbles from a walk you will never stop remembering.
          </p>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)' }}>
            We talk through what you have, what form feels right, and build the piece around the story of the place.
          </p>
        </div>
        <div style={{ overflow: 'hidden', minHeight: '360px' }}>
          <img
            src="/images/heart-ornament-1.jpg"
            alt="Heart-shaped resin ornament with pink roses and pressed botanicals — a keepsake from a place that mattered"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--forest)', padding: 'clamp(4rem, 8vw, 6rem) clamp(2rem, 6vw, 5rem)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ ...eyebrow, color: brass }}>Begin here</p>
          <h2 style={{ ...sectionHeading, color: ivory }}>Tell us about the place.</h2>
          <p style={{ ...bodyText, color: 'rgba(240,236,228,0.75)', margin: '0 auto 1.5rem' }}>
            Every commission starts with a conversation. You tell us where it's from and what it means. We take it from there. Lead time is typically four to six weeks. We handle everything — from the design conversation to delivery.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/contact" style={brassCTA}>Start the Conversation →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
