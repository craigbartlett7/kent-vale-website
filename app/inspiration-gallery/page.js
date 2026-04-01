'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './gallery.module.css';

export default function InspirationGallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Placeholder gallery items
  const items = [
    { id: 1, name: 'Wedding Preservation', category: 'forever-form', collection: 'Forever Form' },
    { id: 2, name: 'Pet Memorial', category: 'forever-form', collection: 'Forever Form' },
    { id: 3, name: 'Chess Set', category: 'games-room', collection: 'The Games Room' },
    { id: 4, name: 'Proposal Keepsake', category: 'forever-form', collection: 'Forever Form' },
    { id: 5, name: 'Backgammon Board', category: 'games-room', collection: 'The Games Room' },
    { id: 6, name: 'Dining Table', category: 'forever-form', collection: 'Forever Form' },
  ];

  const filtered = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (
    <section className={styles.section}>
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Inspiration Gallery</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.05rem', color: '#666' }}>
          Browse our commissions. Find what speaks to you. Every piece is one-of-one, never repeated.
        </p>

        {/* Filters */}
        <div className={styles.filters}>
          <button
            className={activeFilter === 'all' ? styles.filterActive : ''}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button
            className={activeFilter === 'forever-form' ? styles.filterActive : ''}
            onClick={() => setActiveFilter('forever-form')}
          >
            Forever Form
          </button>
          <button
            className={activeFilter === 'games-room' ? styles.filterActive : ''}
            onClick={() => setActiveFilter('games-room')}
          >
            The Games Room
          </button>
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {filtered.map(item => (
            <Link key={item.id} href={`/inspiration-gallery/${item.id}`} className={styles.galleryItem}>
              <div className={styles.galleryImage}>
                <p>{item.name}</p>
              </div>
              <div className={styles.galleryInfo}>
                <p className={styles.itemName}>{item.name}</p>
                <p className={styles.itemCollection}>{item.collection}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
