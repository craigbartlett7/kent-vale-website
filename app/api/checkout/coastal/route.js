import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { getCoastalProduct } from '@/lib/coastalProducts';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      productSlug,
      firstName,
      lastName,
      email,
      shippingZone,    // 'uk' | 'international'
      colourChoice,    // for ocean-tray-table
      personalisation, // for personalised-wave-board
      addressLine1,
      addressLine2,
      city,
      postcode,
      country,
    } = body;

    const product = getCoastalProduct(productSlug);
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const zone = shippingZone === 'international' ? 'international' : 'uk';
    const shippingPence = product.shipping[zone];
    const fullName = `${firstName} ${lastName}`.trim();

    const productDescription = [
      product.dimensions,
      colourChoice ? `Colour: ${colourChoice}` : null,
      personalisation ? `Personalisation: "${personalisation}"` : null,
    ].filter(Boolean).join(' · ');

    const lineItems = [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: product.name,
            description: productDescription || product.dimensions,
          },
          unit_amount: product.price,
        },
        quantity: 1,
      },
    ];

    // Add shipping as a separate line item if not free
    if (shippingPence > 0) {
      lineItems.push({
        price_data: {
          currency: 'gbp',
          product_data: {
            name: zone === 'uk' ? 'UK Shipping' : 'International Shipping',
          },
          unit_amount: shippingPence,
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      customer_email: email,
      metadata: {
        product: product.slug,
        product_name: product.name,
        collection: 'coastal-edit',
        payment_type: 'full',
        customer_name: fullName,
        customer_email: email,
        shipping_zone: zone,
        shipping_amount: String(shippingPence),
        colour_choice: colourChoice || '',
        personalisation: (personalisation || '').substring(0, 490),
        address_line1: addressLine1 || '',
        address_line2: addressLine2 || '',
        city: city || '',
        postcode: postcode || '',
        country: country || (zone === 'uk' ? 'GB' : ''),
        total_amount: String(product.price + shippingPence),
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/coastal-edit/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/coastal-edit/${product.slug}?cancelled=1`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Coastal checkout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
