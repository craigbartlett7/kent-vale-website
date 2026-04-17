'use client';

import React, { useState, useEffect } from 'react';
import styles from './gallery.module.css';
import { getGalleryItems } from '@/lib/supabase';

export default function InspirationGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      const data = await getGalleryItems();
      setItems(data);
      setLoading(false);
    }
    fetchItems();
  }, []);

  const filtered = activeFilter === 'all'
    ? items
    : items.filter(item => item.collection === activeFilter);

  const collectionLabel = (collection) => {
    if (collection === 'forever-form') return 'Forever Form';
    if (collection === 'games-room') return 'The Games Room';
    return collection;
  };

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
        {loading ? (
          <p style={{ textAlign: 'center', color: '#888' }}>Loading gallery...</p>
        ) : filtered.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>No images yet.</p>
        ) : (
          <div className={styles.galleryGrid}>
            {filtered.map(item => (
              <div key={item.id} className={styles.galleryItem}>
                <div className={styles.galleryImage}>
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.image_alt_text || item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <p>{item.title}</p>
                  )}
                </div>
                <div className={styles.galleryInfo}>
                  <p className={styles.itemName}>{item.title}</p>
                  <p className={styles.itemCollection}>{collectionLabel(item.collection)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
