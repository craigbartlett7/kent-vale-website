import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      productSlug,
      firstName,
      lastName,
      email,
      woodChoice,
      favouriteColours,
      craftNote,
      legsAddon,
      addressLine1,
      addressLine2,
      city,
      postcode,
      country,
    } = body;

    // Fetch product from Supabase to get authoritative price
    const { data: product, error: pErr } = await supabase
      .from('products')
      .select('*')
      .eq('slug', productSlug)
      .eq('active', true)
      .single();

    if (pErr || !product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const legsAddonAmount = legsAddon && product.allow_legs_addon ? (product.legs_addon_price || 20000) : 0;
    const totalPence = product.base_price + legsAddonAmount;
    const depositPence = Math.round(totalPence / 2);

    const fullName = `${firstName} ${lastName}`.trim();
    const addOns = legsAddon ? [{ name: 'Legs add-on', price: legsAddonAmount }] : [];

    const lineItems = [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: `${product.name} — 50% Deposit`,
            description: `${woodChoice} · Made to order · Balance due prior to delivery`,
            images: product.image_url ? [product.image_url] : [],
          },
          unit_amount: depositPence,
        },
        quantity: 1,
      },
    ];

    if (legsAddonAmount > 0) {
      lineItems.push({
        price_data: {
          currency: 'gbp',
          product_data: { name: 'Legs Add-on — 50% Deposit' },
          unit_amount: Math.round(legsAddonAmount / 2),
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
        collection: product.collection,
        customer_name: fullName,
        customer_email: email,
        wood_choice: woodChoice,
        favourite_colours: favouriteColours || '',
        craft_note: (craftNote || '').substring(0, 490),
        legs_addon: legsAddon ? 'yes' : 'no',
        address_line1: addressLine1 || '',
        address_line2: addressLine2 || '',
        city: city || '',
        postcode: postcode || '',
        country: country || 'GB',
        total_amount: totalPence,
        deposit_amount: depositPence,
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/${product.collection === 'studio' ? 'studio' : 'the-games-room'}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/${product.collection === 'studio' ? 'studio' : 'the-games-room'}/${product.slug}?cancelled=1`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Product checkout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
