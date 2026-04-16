import { notFound } from 'next/navigation';
import Link from 'next/link';
import { marked } from 'marked';
import { getBlogPostBySlug } from '@/lib/supabase';
import styles from '../blog.module.css';

// Generates proper <title> and <meta description> in the page <head>
// This is the primary SEO signal for search engines — better than visible content repetition
export async function generateMetadata({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Kent & Vale`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      type: 'article',
      publishedTime: post.published_at,
    },
  };
}

export default async function BlogPost({ params }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Convert markdown to HTML
  let htmlContent = post.content ? marked(post.content) : '';

  // Strip any leading <h1> from the content body — the title is already
  // displayed in the <header> above, and in the <title> tag for SEO
  htmlContent = htmlContent.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');

  // If the first paragraph exactly matches the excerpt, strip it too —
  // the excerpt is already shown in the header as the subtitle
  if (post.excerpt) {
    const escaped = post.excerpt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    htmlContent = htmlContent.replace(new RegExp(`^\\s*<p>\\s*${escaped}\\s*<\\/p>\\s*`, 'i'), '');
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
            className={styles.postBody}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <footer style={{
            marginTop: '4rem',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(184, 181, 174, 0.3)',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.3rem',
              color: 'var(--charcoal)',
              marginBottom: '0.75rem',
            }}>
              Interested in a commission?
            </p>
            <p style={{
              fontSize: '1rem',
              color: '#666',
              marginBottom: '2rem',
              lineHeight: 1.6,
            }}>
              Every piece begins with a conversation. No obligations — just a chat about what you imagine.
            </p>
            <Link href="/contact" className="button primary">
              Get in Touch
            </Link>
          </footer>
        </article>
      </div>
    </section>
  );
}
