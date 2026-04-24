import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      finishTime,
      raceYear,
      addressLine1,
      addressLine2,
      city,
      postcode,
      country,
      specialInstructions,
    } = body;

    const fullName = `${firstName} ${lastName}`.trim();
    const addressSummary = [addressLine1, addressLine2, city, postcode, country]
      .filter(Boolean)
      .join(', ');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: 'London Marathon Keepsake — Medal & Certificate Block',
              description: `Made for ${fullName} · Finish time: ${finishTime} · ${raceYear} London Marathon`,
              images: [`${process.env.NEXT_PUBLIC_SITE_URL}/marathon-keepsake-product.jpg`],
            },
            unit_amount: 50000, // £500 in pence
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      metadata: {
        customer_name: fullName,
        customer_email: email,
        finish_time: finishTime,
        race_year: raceYear,
        address_line1: addressLine1 || '',
        address_line2: addressLine2 || '',
        city: city || '',
        postcode: postcode || '',
        country: country || 'GB',
        special_instructions: (specialInstructions || '').substring(0, 490),
        product: 'marathon-keepsake-500',
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/london-marathon-2026/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/london-marathon-2026/order?cancelled=1`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
