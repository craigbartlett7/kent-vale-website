'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './journal.module.css';
import { getBlogPosts } from '@/lib/supabase';

export default function Journal() {
  const [activeStream, setActiveStream] = useState('all');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts().then(data => { setPosts(data); setLoading(false); });
  }, []);

  const filtered = activeStream === 'all' ? posts : posts.filter(p => p.stream === activeStream);

  const streamLabel = (stream) => {
    if (stream === 'forever-form' || stream === 'atelier') return 'Atelier Commissions';
    if (stream === 'games-room') return 'The Games Room';
    if (stream === 'studio') return 'Studio';
    return stream;
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>The Journal</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.05rem', color: '#666' }}>
          Stories about craft, memory, and permanence. From the studio and beyond.
        </p>

        <div className={styles.streamFilters}>
          {[
            { key: 'all', label: 'All' },
            { key: 'studio', label: 'Studio' },
            { key: 'games-room', label: 'The Games Room' },
            { key: 'forever-form', label: 'Atelier Commissions' },
          ].map(({ key, label }) => (
            <button
              key={key}
              className={activeStream === key ? styles.filterActive : ''}
              onClick={() => setActiveStream(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', color: '#666' }}>Loading…</p>
        ) : filtered.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>No posts yet — check back soon.</p>
        ) : (
          <div className={styles.postsList}>
            {filtered.map(post => (
              <Link key={post.id} href={`/journal/${post.slug}`} className={styles.postCard}>
                <div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    {post.stream && <span>{streamLabel(post.stream)}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
