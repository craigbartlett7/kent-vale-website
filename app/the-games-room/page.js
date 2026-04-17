'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../forever-form/collection.module.css';
import { getGalleryItems } from '@/lib/supabase';

export default function TheGamesRoom() {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    getGalleryItems('games-room').then(data => setGalleryItems(data.slice(0, 4)));
  }, []);

  const categories = [
    {
      name: 'Strategy',
      description: 'Chess. Backgammon. Go. Draughts. Reversi. The classics made in resin and wood to proportions that feel right.',
    },
    {
      name: 'Social & Play',
      description: 'Dominoes. Cards. Poker. Mahjong. Dice. Games for gathering, built with confidence they\'ll be played often.',
    },
    {
      name: 'Collector Editions',
      description: 'Sculptural boards. Limited editions. Artist collaborations. Made as art as much as they\'re made for play.',
    },
    {
      name: 'Family Heirlooms',
      description: 'Bespoke games designed for your family. Initials, monograms, family colours. A game board becomes a family story.',
    },
    {
      name: 'Entertaining',
      description: 'Bar games. Terrace pieces. Coffee table sets. Games for the spaces where people gather.',
    },
    {
      name: 'Personalised Commissions',
      description: 'A chess set inspired by your home. A board with colours meaningful to you. Your game, made permanent.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero + ' ' + styles.gamesRoomHero}>
        <div className={styles.heroContent}>
          <p className={styles.label}>The Games Room</p>
          <h1>Bespoke Game Boards Built to Last Lifetimes</h1>
          <p className={styles.subtitle}>
            Chess sets, backgammon boards, leisure pieces made for play, display, and inheritance. The finest game you'll ever own.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
            Every board in The Games Room is made to be played. Some are never touched. All are worth keeping.
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
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Why The Games Room?</h2>

          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <h3>They're Actually Playable</h3>
              <p>Not wall art. Not conversation pieces that sit unwrapped. Games you'll actually use. Pieces calibrated to feel right, weigh right, move right.</p>
            </div>

            <div className={styles.valueCard}>
              <h3>Designed for Permanence</h3>
              <p>Materials chosen for durability and beauty. Pieces your grandchildren will argue over. Built with the assumption of decades, not seasons.</p>
            </div>

            <div className={styles.valueCard}>
              <h3>Investment-Grade Craftsmanship</h3>
              <p>Many hours per piece. Finish details that justify the price. We don't make decorative games. We make games that deserve to be kept forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className={styles.galleryPreview}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>The Games Room in Play</h2>

          {galleryItems.length > 0 ? (
            <div className={styles.galleryGrid}>
              {galleryItems.map(item => (
                <Link
                  key={item.id}
                  href="/inspiration-gallery"
                  className={styles.galleryPlaceholder}
                  style={{ textDecoration: 'none', display: 'block', overflow: 'hidden' }}
                >
                  <img
                    src={item.image_url}
                    alt={item.image_alt_text || item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.galleryGrid}>
              {[1,2,3,4].map(n => (
                <div key={n} className={styles.galleryPlaceholder}>
                  <p>Coming soon</p>
                </div>
              ))}
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/inspiration-gallery" className="button primary">
              Browse Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Commission a Board</h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
            Whether you play seriously or you're a collector, let's talk about the board you imagine.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/enquiry?interest=games-room" className="button primary">
              Start a Commission
            </Link>
            <Link href="/inspiration-gallery" className="button">
              Browse All Boards
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
