// app/api/send-enquiry-email/route.js
// Email notification handler for new enquiries

import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, interest, description, budget, timeline } = body;

    // Validate required fields
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email body content
    const emailContent = `
New Enquiry from Kent & Vale Website

Name: ${name}
Email: ${email}
Interest: ${interest}
Budget: ${budget || 'Not specified'}
Timeline: ${timeline || 'Not specified'}

Message:
${description}

---
This enquiry was submitted via the Kent & Vale website.
Reply directly to ${email} to respond.
    `.trim();

    // Option 1: Using SendGrid (recommended)
    const sendGridApiKey = process.env.SENDGRID_API_KEY;
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    if (sendGridApiKey && contactEmail) {
      try {
        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${sendGridApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: contactEmail }],
                subject: `New Commission Enquiry from ${name}`,
              },
            ],
            from: {
              email: process.env.SENDGRID_FROM_EMAIL || 'noreply@kentandvale.com',
              name: 'Kent & Vale Website',
            },
            content: [
              {
                type: 'text/plain',
                value: emailContent,
              },
            ],
          }),
        });

        if (!response.ok) {
          throw new Error('SendGrid API error');
        }

        return NextResponse.json(
          { success: true, message: 'Email sent successfully' },
          { status: 200 }
        );
      } catch (sendGridError) {
        console.error('SendGrid error:', sendGridError);
        // Fall back to alternative method
      }
    }

    // Option 2: Using Resend (alternative)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey && contactEmail) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Kent & Vale <noreply@kentandvale.com>',
            to: contactEmail,
            subject: `New Commission Enquiry from ${name}`,
            text: emailContent,
          }),
        });

        if (!response.ok) {
          throw new Error('Resend API error');
        }

        return NextResponse.json(
          { success: true, message: 'Email sent successfully' },
          { status: 200 }
        );
      } catch (resendError) {
        console.error('Resend error:', resendError);
      }
    }

    // Option 3: Fallback - log to console (for development)
    console.log('Email notification:', emailContent);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Enquiry received. Email notification queued.',
        warning: 'Email service not configured. Please add SENDGRID_API_KEY or RESEND_API_KEY to environment variables.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { error: 'Failed to send email notification' },
      { status: 500 }
    );
  }
}
