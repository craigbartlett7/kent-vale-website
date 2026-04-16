import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Kent & Vale',
  description: 'How Kent & Vale collects, uses and protects your personal data.',
};

export default function PrivacyPolicy() {
  return (
    <section style={{ padding: '6rem 2rem', marginTop: '64px', background: 'white' }}>
      <div className="container" style={{ maxWidth: '760px' }}>

        <h1 style={{ marginBottom: '0.5rem' }}>Privacy Policy</h1>
        <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '3rem' }}>
          Last updated: April 2026
        </p>

        <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
          Kent &amp; Vale ("we", "us", "our") is committed to protecting your personal data.
          This policy explains what information we collect, how we use it, and your rights under
          the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          1. Who we are
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          Kent &amp; Vale is a bespoke furniture and heirloom commission studio based in
          Sittingbourne, Kent, England. We are the data controller for the personal data
          collected through this website. You can contact us at{' '}
          <a href="mailto:hello@kentandvale.com" style={{ color: 'var(--brass)' }}>
            hello@kentandvale.com
          </a>.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          2. What data we collect
        </h2>
        <p style={{ marginBottom: '1rem', lineHeight: 1.8, color: '#444' }}>
          We collect personal data only when you actively provide it to us. This includes:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 2, color: '#444' }}>
          <li><strong>Contact and enquiry information</strong> — your name, email address, and any details you provide when submitting an enquiry through our contact or commission form (including budget range, timeline, and project description).</li>
          <li><strong>Communications</strong> — any correspondence you send us by email or through the website.</li>
        </ul>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          We do not collect payment card details through this website. We do not collect
          any special category data (such as health or biometric information).
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          3. How we use your data
        </h2>
        <p style={{ marginBottom: '1rem', lineHeight: 1.8, color: '#444' }}>
          We use the information you provide to:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 2, color: '#444' }}>
          <li>Respond to your enquiry and discuss a potential commission</li>
          <li>Manage and fulfil your commission, including communicating updates</li>
          <li>Meet our legal and contractual obligations</li>
        </ul>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          We will only contact you for marketing purposes if you have explicitly asked us to,
          and you can opt out at any time.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          4. Legal basis for processing
        </h2>
        <p style={{ marginBottom: '1rem', lineHeight: 1.8, color: '#444' }}>
          Under UK GDPR, we rely on the following lawful bases:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 2, color: '#444' }}>
          <li><strong>Legitimate interests</strong> — to respond to enquiries and manage client relationships</li>
          <li><strong>Contract</strong> — to fulfil a commission you have placed with us</li>
          <li><strong>Legal obligation</strong> — where we are required to retain records by law</li>
          <li><strong>Consent</strong> — for any optional marketing communications</li>
        </ul>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          5. How we store your data
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          Enquiry data submitted through this website is stored securely using Supabase,
          a cloud database service with servers located within the European Economic Area.
          Access is restricted to authorised personnel only. We retain enquiry data for up to
          3 years from your last contact with us, after which it is securely deleted.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          6. Who we share your data with
        </h2>
        <p style={{ marginBottom: '1rem', lineHeight: 1.8, color: '#444' }}>
          We do not sell or rent your personal data. We may share it with:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 2, color: '#444' }}>
          <li><strong>Supabase</strong> — our database provider, for secure storage of enquiry data</li>
          <li><strong>Vercel</strong> — our hosting provider, for delivery of this website</li>
          <li><strong>Email service providers</strong> — solely to deliver notifications of enquiries to us</li>
        </ul>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          All third-party providers are contractually bound to process your data only
          on our instructions and in accordance with applicable data protection law.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          7. Your rights
        </h2>
        <p style={{ marginBottom: '1rem', lineHeight: 1.8, color: '#444' }}>
          Under UK GDPR you have the right to:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 2, color: '#444' }}>
          <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
          <li><strong>Rectification</strong> — ask us to correct inaccurate or incomplete data</li>
          <li><strong>Erasure</strong> — request that we delete your personal data</li>
          <li><strong>Restriction</strong> — ask us to limit how we use your data</li>
          <li><strong>Portability</strong> — receive your data in a structured, machine-readable format</li>
          <li><strong>Object</strong> — object to processing based on legitimate interests</li>
          <li><strong>Withdraw consent</strong> — where processing is based on consent, withdraw it at any time</li>
        </ul>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          To exercise any of these rights, please contact us at{' '}
          <a href="mailto:hello@kentandvale.com" style={{ color: 'var(--brass)' }}>
            hello@kentandvale.com
          </a>. We will respond within one month.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          8. Cookies
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          We use only strictly necessary cookies. For full details, please see our{' '}
          <Link href="/cookie-policy" style={{ color: 'var(--brass)' }}>Cookie Policy</Link>.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          9. Complaints
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          If you are unhappy with how we handle your personal data, you have the right to
          lodge a complaint with the UK's supervisory authority, the Information Commissioner's
          Office (ICO), at{' '}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brass)' }}>
            ico.org.uk
          </a>{' '}
          or by calling 0303 123 1113. We would, however, appreciate the opportunity to address
          your concerns directly before you approach the ICO.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          10. Changes to this policy
        </h2>
        <p style={{ marginBottom: '3rem', lineHeight: 1.8, color: '#444' }}>
          We may update this policy from time to time. Any changes will be posted on this page
          with an updated date at the top. We encourage you to review it periodically.
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
