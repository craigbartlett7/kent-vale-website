// lib/email.js
// Shared helper for sending alert emails (new enquiries, new orders) via
// the SiteGround mailbox that already hosts hello@kentandvale.com.
//
// Required environment variables (set in Vercel, never committed):
//   SMTP_HOST  — e.g. mail.kentandvale.com (from SiteGround Site Tools > Email > Accounts)
//   SMTP_PORT  — 465 (SSL) or 587 (STARTTLS)
//   SMTP_USER  — hello@kentandvale.com
//   SMTP_PASS  — that mailbox's password
//
// Optional:
//   NEXT_PUBLIC_CONTACT_EMAIL — where alerts are sent (defaults to hello@kentandvale.com)

import nodemailer from 'nodemailer';

let cachedTransporter = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  const port = parseInt(SMTP_PORT, 10);

  cachedTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // true for SSL (465), false for STARTTLS (587)
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    // Keep these short so a flaky mail server can't hang a serverless
    // function (and risk Stripe re-delivering the same webhook event).
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 8000,
  });

  return cachedTransporter;
}

/**
 * Sends a plain-text alert email to the shop's contact address.
 * Never throws — logs and returns { success: false } on any problem,
 * so a mail outage can never break enquiry submission or order processing.
 */
export async function sendAlertEmail({ subject, text }) {
  const transporter = getTransporter();
  const to = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@kentandvale.com';

  if (!transporter) {
    console.warn('sendAlertEmail: SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS not fully configured — skipping email.', { subject });
    return { success: false, skipped: true };
  }

  try {
    await transporter.sendMail({
      from: `"Kent & Vale Website" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
    });
    return { success: true };
  } catch (err) {
    console.error('sendAlertEmail error:', err.message);
    return { success: false, error: err.message };
  }
}
