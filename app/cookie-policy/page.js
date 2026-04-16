import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | Kent & Vale',
  description: 'How Kent & Vale uses cookies on its website.',
};

export default function CookiePolicy() {
  return (
    <section style={{ padding: '6rem 2rem', marginTop: '64px', background: 'white' }}>
      <div className="container" style={{ maxWidth: '760px' }}>

        <h1 style={{ marginBottom: '0.5rem' }}>Cookie Policy</h1>
        <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '3rem' }}>
          Last updated: April 2026
        </p>

        <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
          This policy explains how Kent &amp; Vale uses cookies on <strong>kentandvale.com</strong>.
          We keep our use of cookies to the minimum necessary for the site to function.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          What are cookies?
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          Cookies are small text files placed on your device when you visit a website.
          They are widely used to make websites work, or to remember your preferences.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          What cookies do we use?
        </h2>
        <p style={{ marginBottom: '1rem', lineHeight: 1.8, color: '#444' }}>
          We only use <strong>strictly necessary cookies</strong>. These are essential for
          the website to function correctly and cannot be switched off.
        </p>

        <div style={{
          border: '1px solid rgba(184, 181, 174, 0.4)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '2rem',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: '#f9f8f6' }}>
                <th style={{ padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 500, borderBottom: '1px solid rgba(184,181,174,0.3)', color: '#333' }}>Cookie</th>
                <th style={{ padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 500, borderBottom: '1px solid rgba(184,181,174,0.3)', color: '#333' }}>Purpose</th>
                <th style={{ padding: '0.875rem 1rem', textAlign: 'left', fontWeight: 500, borderBottom: '1px solid rgba(184,181,174,0.3)', color: '#333' }}>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid rgba(184,181,174,0.2)', color: '#444', fontFamily: 'monospace' }}>kv_cookie_consent</td>
                <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid rgba(184,181,174,0.2)', color: '#444' }}>Stores your cookie preference so the banner does not reappear</td>
                <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid rgba(184,181,174,0.2)', color: '#444' }}>Until you clear your browser data</td>
              </tr>
              <tr>
                <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid rgba(184,181,174,0.2)', color: '#444', fontFamily: 'monospace' }}>sb-* (Supabase)</td>
                <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid rgba(184,181,174,0.2)', color: '#444' }}>Admin session authentication. Only set when logging into the site admin area</td>
                <td style={{ padding: '0.875rem 1rem', borderBottom: '1px solid rgba(184,181,174,0.2)', color: '#444' }}>Session</td>
              </tr>
              <tr>
                <td style={{ padding: '0.875rem 1rem', color: '#444', fontFamily: 'monospace' }}>__vercel_*</td>
                <td style={{ padding: '0.875rem 1rem', color: '#444' }}>Used by Vercel (our hosting provider) for deployment and routing</td>
                <td style={{ padding: '0.875rem 1rem', color: '#444' }}>Session</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          What we don't use
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          We do not use advertising cookies, analytics cookies, or any third-party tracking.
          We do not share any information gathered through cookies with third parties for marketing purposes.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          Managing cookies
        </h2>
        <p style={{ marginBottom: '1rem', lineHeight: 1.8, color: '#444' }}>
          You can control and delete cookies through your browser settings. Please note
          that disabling strictly necessary cookies may affect how the site functions.
        </p>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          Most browsers allow you to refuse cookies or delete them at any time. For guidance,
          visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brass)' }}>aboutcookies.org</a>.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          Changes to this policy
        </h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.8, color: '#444' }}>
          We may update this policy from time to time. Any changes will be posted on this page
          with an updated date.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          Contact
        </h2>
        <p style={{ marginBottom: '3rem', lineHeight: 1.8, color: '#444' }}>
          If you have any questions about our use of cookies, please contact us at{' '}
          <a href="mailto:hello@kentandvale.com" style={{ color: 'var(--brass)' }}>hello@kentandvale.com</a>.
        </p>

        <div style={{ borderTop: '1px solid rgba(184,181,174,0.3)', paddingTop: '2rem' }}>
          <Link href="/" style={{ fontSize: '0.85rem', color: 'var(--stone)', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
}
