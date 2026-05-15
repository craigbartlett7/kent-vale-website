import { notFound } from 'next/navigation';
import Link from 'next/link';
import { marked } from 'marked';
import { getBlogPostBySlug } from '@/lib/supabase';
import styles from '../journal.module.css';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Kent & Vale Journal`,
    description: post.excerpt || post.title,
    openGraph: { title: post.title, description: post.excerpt || '', type: 'article', publishedTime: post.published_at },
  };
}

const streamLabel = (stream) => {
  if (stream === 'forever-form' || stream === 'atelier') return 'Atelier Commissions';
  if (stream === 'games-room') return 'The Games Room';
  if (stream === 'studio') return 'Studio';
  return stream;
};

export default async function JournalPost({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();

  let htmlContent = post.content ? marked(post.content) : '';
  htmlContent = htmlContent.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, '');
  htmlContent = htmlContent.replace(/href="#enquiry"/g, 'href="/contact"');
  htmlContent = htmlContent.replace(/href="\/enquiry"/g, 'href="/contact"');
  htmlContent = htmlContent.replace(/href="\/blog\//g, 'href="/journal/');

  if (post.excerpt) {
    const escaped = post.excerpt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    htmlContent = htmlContent.replace(new RegExp(`^\\s*<p>\\s*${escaped}\\s*<\\/p>\\s*`, 'i'), '');
  }

  return (
    <section className={styles.section}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <Link href="/journal" style={{ display: 'inline-block', marginBottom: '2rem', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', textDecoration: 'none' }}>
          ← Back to Journal
        </Link>
        <article>
          <header style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1rem', color: 'var(--charcoal)' }}>
              {post.title}
            </h1>
            {post.excerpt && (
              <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                {post.excerpt}
              </p>
            )}
            <div className={styles.postMeta}>
              {post.stream && <span>{streamLabel(post.stream)}</span>}
            </div>
            <hr style={{ border: 'none', borderTop: '1px solid rgba(184,181,174,0.3)', marginTop: '2rem' }} />
          </header>
          <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: htmlContent }} />
          <footer style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(184,181,174,0.3)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>
              Interested in a commission?
            </p>
            <p style={{ fontSize: '1rem', color: '#666', marginBottom: '2rem', lineHeight: 1.6 }}>
              Every piece begins with a conversation. No obligations — just a chat about what you imagine.
            </p>
            <Link href="/contact" className="button primary">Get in Touch</Link>
          </footer>
        </article>
      </div>
    </section>
  );
}
