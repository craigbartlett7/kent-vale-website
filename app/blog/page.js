'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './blog.module.css';
import { getBlogPosts } from '@/lib/supabase';

export default function Blog() {
  const [activeStream, setActiveStream] = useState('all');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getBlogPosts();
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

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
            Studio &amp; Process
          </button>
        </div>

        {/* Blog posts */}
        {loading ? (
          <p style={{ textAlign: 'center', color: '#666' }}>Loading posts...</p>
        ) : filtered.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>No posts yet — check back soon.</p>
        ) : (
          <div className={styles.postsList}>
            {filtered.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`} className={styles.postCard}>
                <div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    {post.stream && (
                      <span style={{ textTransform: 'capitalize' }}>
                        {post.stream === 'forever-form' || post.stream === 'memories' ? 'Memories' : post.stream === 'forever-form'
                          ? 'Forever Form Stories'
                          : post.stream === 'games-room'
                          ? 'The Games Room Journal'
                          : post.stream === 'studio'
                          ? 'Studio & Process'
                          : post.stream}
                      </span>
                    )}
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
