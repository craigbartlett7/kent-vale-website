'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './gallery.module.css';
import { getGalleryItems } from '@/lib/supabase';

export default function InspirationGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(null); // null = closed

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

  // Lightbox navigation
  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const goPrev = useCallback(() => {
    setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  const goNext = useCallback(() => {
    setLightboxIndex(i => (i + 1) % filtered.length);
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goPrev, goNext]);

  const lightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

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
            {filtered.map((item, index) => (
              <div
                key={item.id}
                className={styles.galleryItem}
                onClick={() => openLightbox(index)}
                style={{ cursor: 'pointer' }}
              >
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

      {/* Lightbox */}
      {lightboxItem && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          {/* Close button */}
          <button
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev button */}
          {filtered.length > 1 && (
            <button
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          {/* Image container — click doesn't close */}
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxItem.image_url}
              alt={lightboxItem.image_alt_text || lightboxItem.title}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxCaption}>
              <p className={styles.lightboxTitle}>{lightboxItem.title}</p>
              {lightboxItem.description && (
                <p className={styles.lightboxDesc}>{lightboxItem.description}</p>
              )}
              <p className={styles.lightboxMeta}>
                {collectionLabel(lightboxItem.collection)}
                {filtered.length > 1 && (
                  <span> · {lightboxIndex + 1} / {filtered.length}</span>
                )}
              </p>
            </div>
          </div>

          {/* Next button */}
          {filtered.length > 1 && (
            <button
              className={`${styles.lightboxNav} ${styles.lightboxNext}`}
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>
      )}
    </section>
  );
}
