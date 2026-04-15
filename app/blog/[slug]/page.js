import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug } from '@/lib/supabase';
import styles from '../blog.module.css';

export default async function BlogPost({ params }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  return (
    <section className={styles.section}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <Link
          href="/blog"
          style={{
            display: 'inline-block',
            marginBottom: '2rem',
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--stone)',
            textDecoration: 'none',
          }}
        >
          ← Back to Journal
        </Link>

        <article>
          <header style={{ marginBottom: '3rem' }}>
            <h1
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                lineHeight: 1.2,
                marginBottom: '1rem',
                color: 'var(--charcoal)',
              }}
            >
              {post.title}
            </h1>

            {post.excerpt && (
              <p
                style={{
                  fontSize: '1.1rem',
                  color: '#555',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  fontStyle: 'italic',
                }}
              >
                {post.excerpt}
              </p>
            )}

            <div className={styles.postMeta}>
              {formattedDate && <span>{formattedDate}</span>}
              {post.stream && (
                <>
                  {formattedDate && <span>·</span>}
                  <span style={{ textTransform: 'capitalize' }}>
                    {post.stream === 'forever-form'
                      ? 'Forever Form Stories'
                      : post.stream === 'games-room'
                      ? 'The Games Room Journal'
                      : post.stream === 'studio'
                      ? 'Studio & Process'
                      : post.stream}
                  </span>
                </>
              )}
            </div>

            <hr
              style={{
                border: 'none',
                borderTop: '1px solid rgba(184, 181, 174, 0.3)',
                marginTop: '2rem',
              }}
            />
          </header>

          <div
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--charcoal)',
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </section>
  );
}
