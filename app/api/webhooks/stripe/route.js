import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Required: raw body for Stripe signature verification
export const runtime = 'nodejs';

export async function POST(request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Stripe webhook signature error:', err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const meta = session.metadata;

    const deliveryAddress = {
      line1: meta.address_line1,
      line2: meta.address_line2,
      city: meta.city,
      postcode: meta.postcode,
      country: meta.country,
    };

    const { error } = await supabase.from('orders').insert({
      stripe_session_id: session.id,
      stripe_payment_intent_id: session.payment_intent,
      status: 'paid',
      customer_name: meta.customer_name,
      customer_email: meta.customer_email || session.customer_email,
      finish_time: meta.finish_time,
      race_year: meta.race_year,
      product: meta.product,
      amount_gbp: 500,
      delivery_address: deliveryAddress,
      special_instructions: meta.special_instructions || null,
    });

    if (error) {
      console.error('Supabase order insert error:', error);
      // Return 200 so Stripe doesn't retry — log the issue separately
    }
  }

  return NextResponse.json({ received: true });
}
