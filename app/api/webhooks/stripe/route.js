import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendAlertEmail } from '@/lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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

    const isProductOrder = meta.collection && meta.collection !== 'marathon';

    const orderData = {
      stripe_session_id: session.id,
      stripe_payment_intent_id: session.payment_intent,
      status: 'paid',
      customer_name: meta.customer_name,
      customer_email: meta.customer_email || session.customer_email,
      delivery_address: deliveryAddress,
      product: meta.product,
    };

    if (isProductOrder) {
      // Studio or Games Room product order
      orderData.collection = meta.collection;
      orderData.payment_type = meta.payment_type || 'deposit';
      orderData.product_name = meta.product_name;
      orderData.product_slug = meta.product;
      orderData.wood_choice = meta.wood_choice;
      orderData.favourite_colours = meta.favourite_colours;
      orderData.craftsmen_notes = meta.craft_note;
      orderData.total_amount = parseInt(meta.total_amount || 0);
      orderData.deposit_amount = parseInt(meta.deposit_amount || 0);
      orderData.amount_gbp = Math.round(parseInt(meta.deposit_amount || 0) / 100);
      orderData.add_ons = meta.legs_addon === 'yes' ? { legs: true } : {};
    } else {
      // Marathon keepsake order
      orderData.finish_time = meta.finish_time;
      orderData.race_year = meta.race_year;
      orderData.amount_gbp = 500;
      orderData.special_instructions = meta.special_instructions || null;
    }

    const { error } = await supabase.from('orders').insert(orderData);
    if (error) {
      console.error('Supabase order insert error:', error);
    } else {
      const addressLine = [deliveryAddress.line1, deliveryAddress.line2, deliveryAddress.city, deliveryAddress.postcode, deliveryAddress.country]
        .filter(Boolean)
        .join(', ');

      const summaryLines = isProductOrder
        ? [
            `Product: ${orderData.product_name || orderData.product}`,
            `Collection: ${orderData.collection}`,
            `Payment type: ${orderData.payment_type}`,
            `Wood choice: ${orderData.wood_choice || 'Not specified'}`,
            `Amount charged today: £${((orderData.amount_gbp || 0)).toLocaleString()}`,
            `Total order value: £${((orderData.total_amount || 0) / 100).toLocaleString()}`,
          ]
        : [
            `Product: Marathon Keepsake`,
            `Finish time: ${orderData.finish_time || 'Not specified'}`,
            `Race year: ${orderData.race_year || 'Not specified'}`,
            `Amount: £${(orderData.amount_gbp || 0).toLocaleString()}`,
          ];

      // Never let an email hiccup affect the response Stripe receives.
      await sendAlertEmail({
        subject: `New order: ${orderData.product_name || orderData.product || 'Kent & Vale order'}`,
        text: [
          'New order received via the Kent & Vale website',
          '',
          `Customer: ${orderData.customer_name || 'Not specified'} <${orderData.customer_email || 'no email'}>`,
          ...summaryLines,
          `Delivery address: ${addressLine || 'Not specified'}`,
          '',
          `Stripe session: ${session.id}`,
        ].join('\n'),
      });
    }
  }

  return NextResponse.json({ received: true });
}
