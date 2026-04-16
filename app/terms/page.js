import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Kent & Vale',
  description: 'Terms and conditions for commissioning work with Kent & Vale.',
};

export default function Terms() {
  return (
    <section style={{ padding: '6rem 2rem', marginTop: '64px', background: 'white' }}>
      <div className="container" style={{ maxWidth: '760px' }}>

        <h1 style={{ marginBottom: '0.5rem' }}>Terms of Service</h1>
        <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '3rem' }}>
          Last updated: April 2026
        </p>

        <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
          These terms govern your use of the Kent &amp; Vale website at <strong>kentandvale.com</strong> and
          any commission or purchase made with us. By using this website or placing a commission,
          you agree to these terms. They are governed by the laws of England and Wales.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          1. About us
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          Kent &amp; Vale is a bespoke furniture and heirloom commission studio based in
          Sittingbourne, Kent, England. You can contact us at{' '}
          <a href="mailto:hello@kentandvale.com" style={{ color: 'var(--brass)' }}>
            hello@kentandvale.com
          </a>.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          2. Using this website
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          You may use this website for lawful purposes only. You must not use it in any way
          that breaches applicable law, infringes on the rights of others, or is fraudulent
          or harmful. All content on this website — including text, images, and design — is
          owned by or licensed to Kent &amp; Vale and may not be reproduced without our
          written permission.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          3. Commissions and orders
        </h2>
        <p style={{ marginBottom: '1rem', lineHeight: 1.8, color: '#444' }}>
          All commissions are bespoke and made to order. The following terms apply:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 2, color: '#444' }}>
          <li><strong>Enquiries:</strong> Submitting an enquiry does not constitute a binding order. A commission is only confirmed once both parties have agreed on design, price, and timeline in writing, and a deposit has been received.</li>
          <li><strong>Deposit:</strong> A 50% deposit is required before work begins. This covers material sourcing and secures your place in our production schedule.</li>
          <li><strong>Balance:</strong> The remaining 50% is due on completion, prior to delivery or collection.</li>
          <li><strong>Pricing:</strong> All quoted prices are fixed once agreed in writing. Prices may change only if you request design changes after approval.</li>
          <li><strong>Timelines:</strong> Lead times are estimates. While we work to meet agreed timelines, delays can occur due to material sourcing or production complexity. We will communicate any significant changes promptly.</li>
        </ul>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          4. Cancellations and changes
        </h2>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 2, color: '#444' }}>
          <li><strong>Before work begins:</strong> If you cancel after paying a deposit but before production starts, we reserve the right to retain a portion of the deposit to cover design and administration costs incurred.</li>
          <li><strong>After production begins:</strong> Cancellation after production has started may result in forfeiture of the full deposit, depending on work completed.</li>
          <li><strong>Design changes:</strong> Minor changes during the design phase are welcomed. Significant changes after design approval may affect price and timeline.</li>
        </ul>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          5. Delivery
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          Delivery costs are quoted separately and depend on destination and piece dimensions.
          All pieces are insured during transit. Risk in the goods passes to you upon delivery.
          Please inspect your piece upon receipt and notify us within 48 hours of any damage
          occurring in transit.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          6. Bespoke nature of our work
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          All pieces are handmade to your specification. As with all natural materials — particularly
          timber and resin — there will be natural variation in colour, grain, and character.
          These are inherent qualities of the materials and not defects. We will always discuss
          material characteristics with you during the design process.
        </p>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          Because each piece is bespoke and made to order, your statutory right to cancel under
          the Consumer Contracts Regulations 2013 does not apply once production has begun,
          in accordance with the exemption for goods made to a consumer's specification.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          7. Defects and quality
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          We take pride in the quality of our work. If your piece develops a structural defect
          arising from faulty workmanship or materials, please contact us and we will assess
          and address it. This does not affect your statutory rights under the Consumer Rights
          Act 2015.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          8. Intellectual property
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          Design concepts and drawings produced by Kent &amp; Vale remain our intellectual property
          unless otherwise agreed in writing. By commissioning a piece, you receive ownership of
          the physical object, not the underlying design rights.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          9. Limitation of liability
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          To the fullest extent permitted by law, Kent &amp; Vale shall not be liable for any
          indirect, incidental, or consequential losses arising from use of this website or from
          a commission. Our total liability to you shall not exceed the amount paid by you for
          the relevant commission. Nothing in these terms limits our liability for death or
          personal injury caused by negligence, fraud, or any other liability that cannot be
          excluded by law.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          10. Privacy
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          Your use of this website is also governed by our{' '}
          <Link href="/privacy" style={{ color: 'var(--brass)' }}>Privacy Policy</Link>, which
          is incorporated into these terms by reference.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          11. Changes to these terms
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, color: '#444' }}>
          We may update these terms from time to time. Any changes will be posted on this page
          with an updated date. Your continued use of this website following any changes
          constitutes acceptance of the revised terms.
        </p>

        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', marginTop: '2.5rem' }}>
          12. Governing law
        </h2>
        <p style={{ marginBottom: '3rem', lineHeight: 1.8, color: '#444' }}>
          These terms are governed by the laws of England and Wales. Any disputes arising
          from these terms or your use of this website shall be subject to the exclusive
          jurisdiction of the courts of England and Wales.
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
