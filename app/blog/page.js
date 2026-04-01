'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './blog.module.css';

export default function Blog() {
  const [activeStream, setActiveStream] = useState('all');

  const posts = [
    {
      id: 1,
      title: 'How to Preserve Wedding Flowers in Resin: A Complete Guide',
      stream: 'forever-form',
      excerpt: 'Learn the complete process of preserving your wedding bouquet in resin.',
      date: 'March 2025',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Memorializing a Beloved Pet: Creating a Lasting Tribute in Resin',
      stream: 'forever-form',
      excerpt: 'How to honour your pet\'s memory with a meaningful resin commission.',
      date: 'February 2025',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'Building a Collector\'s Chess Set: Why Craftsmanship Matters',
      stream: 'games-room',
      excerpt: 'Exploring what makes a chess set worth collecting and keeping forever.',
      date: 'February 2025',
      readTime: '7 min read',
    },
    {
      id: 4,
      title: 'Inside the Studio: How We Source and Finish English Walnut',
      stream: 'studio',
      excerpt: 'The journey from tree to table: materials, sourcing, and finishing.',
      date: 'January 2025',
      readTime: '9 min read',
    },
  ];

  const filtered = activeStream === 'all' 
    ? posts 
    : posts.filter(p => p.stream === activeStream);

  return (
    <section className={styles.section}>
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>The Studio Journal</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.05rem', color: '#666' }}>
          Stories about craft, memory, and permanence. From the studio and beyond.
        </p>

        {/* Stream filters */}
        <div className={styles.streamFilters}>
          <button
            className={activeStream === 'all' ? styles.filterActive : ''}
            onClick={() => setActiveStream('all')}
          >
            All Posts
          </button>
          <button
            className={activeStream === 'forever-form' ? styles.filterActive : ''}
            onClick={() => setActiveStream('forever-form')}
          >
            Forever Form Stories
          </button>
          <button
            className={activeStream === 'games-room' ? styles.filterActive : ''}
            onClick={() => setActiveStream('games-room')}
          >
            The Games Room Journal
          </button>
          <button
            className={activeStream === 'studio' ? styles.filterActive : ''}
            onClick={() => setActiveStream('studio')}
          >
            Studio & Process
          </button>
        </div>

        {/* Blog posts */}
        <div className={styles.postsList}>
          {filtered.map(post => (
            <Link key={post.id} href={`/blog/${post.id}`} className={styles.postCard}>
              <div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postMeta}>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
