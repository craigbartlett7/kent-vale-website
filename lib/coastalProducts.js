// lib/coastalProducts.js
// Static product catalog for The Coastal Collection.
// These are fixed retail products (not bespoke commissions), so we maintain
// prices here rather than Supabase (whose products table constraint limits
// collection values to 'games-room' and 'studio').
//
// To add a product: add an entry here and it will appear on all pages.

export const COASTAL_PRODUCTS = [
  {
    slug: 'stemless-wine-glass',
    name: 'Stemless Ocean Wine Glass',
    tagline: 'The ocean at the bottom of your glass.',
    description:
      'A wide-bowled stemless wine glass with a real ocean scene set in resin at the base — genuine sea glass, shell fragments and fine sand, suspended and sealed permanently. Every glass is made individually, so each one is slightly different.',
    price: 2000, // pence
    priceDisplay: '£20',
    shipping: { uk: 0, international: 1500 },
    shippingDisplay: { uk: 'Free UK delivery', international: '£15 international shipping' },
    dimensions: '450ml · Glass & resin',
    leadTime: 'Ready to ship',
    image: '/images/coastal-glass-stemless-1.jpg',
    imageAlt: 'Stemless wine glass with ocean resin scene in the base',
    hasColourChoice: false,
    hasPersonalisation: false,
    colourNote: 'The standard colourway is ocean teal and deep navy — but we can make any piece to order in a colour of your choosing. Burgundy, coral, sage green, soft blush, terracotta: if you have a colour in mind, we can pour it. Get in touch to arrange.',
    bundleNote: 'Buying for a set? Order any 6 glasses for £100 — mix stemless and stemmed however you like. Contact us to arrange.',
  },
  {
    slug: 'ocean-wine-glass',
    name: 'Ocean Wine Glass',
    tagline: 'The ocean at the bottom of your glass.',
    description:
      'A classic stemmed wine glass with a real ocean scene set in resin at the base — genuine sea glass, shell fragments and fine sand, suspended and sealed permanently. Every glass is made individually, so each one is slightly different.',
    price: 2200, // pence
    priceDisplay: '£22',
    shipping: { uk: 0, international: 1500 },
    shippingDisplay: { uk: 'Free UK delivery', international: '£15 international shipping' },
    dimensions: '450ml · Glass & resin',
    leadTime: 'Ready to ship',
    image: '/images/coastal-wine-glass-1.jpg',
    imageAlt: 'Stemmed wine glass with ocean resin scene at the base',
    hasColourChoice: false,
    hasPersonalisation: false,
    colourNote: 'The standard colourway is ocean teal and deep navy — but we can make any piece to order in a colour of your choosing. Burgundy, coral, sage green, soft blush, terracotta: if you have a colour in mind, we can pour it. Get in touch to arrange.',
    bundleNote: 'Buying for a set? Order any 6 glasses for £100 — mix stemless and stemmed however you like. Contact us to arrange.',
  },
  {
    slug: 'coastal-tumbler',
    name: 'Coastal Tumbler',
    tagline: 'The whole ocean in your hands.',
    description:
      'A slim insulated stainless steel tumbler with a full-coverage ocean wave resin pour — the sea wrapping the entire surface. Teal, turquoise and deep navy, with real sea glass and shell fragments set into the resin. Keeps drinks cold for 24 hours, hot for 12. Every tumbler is unique.',
    price: 2000, // pence
    priceDisplay: '£20',
    shipping: { uk: 0, international: 1500 },
    shippingDisplay: { uk: 'Free UK delivery', international: '£15 international shipping' },
    dimensions: 'Insulated stainless steel & resin',
    leadTime: 'Ready to ship',
    image: '/images/coastal-tumbler-1.jpg',
    imageAlt: 'Coastal ocean wave resin tumbler — Kent & Vale',
    hasColourChoice: false,
    hasPersonalisation: false,
    colourNote: 'The standard colourway is ocean teal and deep navy — but we can make any piece to order in a colour of your choosing. Burgundy, coral, sage green, soft blush, terracotta: if you have a colour in mind, we can pour it. Get in touch to arrange.',
  },
  {
    slug: 'personalised-wave-board',
    name: 'Personalised Wave Board',
    tagline: 'A piece of the coast, personalised for you.',
    description:
      'A solid acacia serving board with a real wave cast along one edge in resin — genuine sea glass, shell fragments and fine sand. Personalised with names, a date, a place or a short message, laser-engraved into the wood. A gift that holds a memory and a moment.',
    price: 4999, // pence
    priceDisplay: '£49.99',
    shipping: { uk: 0, international: 1500 },
    shippingDisplay: { uk: 'Free UK delivery', international: '£15 international shipping' },
    dimensions: '40 × 20 × 1.5cm · Acacia & resin',
    leadTime: 'Made to order · 1–2 weeks',
    image: '/images/coastal-board-1.jpg',
    imageAlt: 'Personalised acacia wave board with ocean resin edge',
    hasColourChoice: false,
    hasPersonalisation: true,
    personalisationPlaceholder: 'e.g. Emma & Jonathan · 14 June 2025, or "To the coast we always return."',
    personalisationMaxLength: 80,
    colourNote: 'The resin wave is ocean teal as standard — but we can pour it in any colour you prefer. Burgundy, coral, sage green, terracotta, soft blush: just add a note at checkout or drop us a message.',
  },
  {
    slug: 'ocean-tray-table',
    name: 'Ocean Metal Tray Table',
    tagline: 'A real ocean scene, cast into the top of your table.',
    description:
      'A round metal side table with a solid resin top — real sand, shells and sea glass cast into the surface and sealed under a smooth, durable finish. Available in three frame colours. Sturdy enough to use every day, beautiful enough to display always.',
    price: 7000, // pence
    priceDisplay: '£70',
    shipping: { uk: 1000, international: 3000 },
    shippingDisplay: { uk: '£10 UK delivery', international: '£30 international shipping' },
    dimensions: '45cm round top · 53cm height · Metal & resin',
    leadTime: 'Made to order · 2–3 weeks',
    image: '/images/coastal-side-table-1.jpg',
    imageAlt: 'Round metal tray table with ocean resin top',
    hasColourChoice: true,
    colourOptions: ['Black', 'Sage green', 'White'],
    hasPersonalisation: false,
    colourNote: 'The resin top is deep ocean blue as standard — but we can make it in any colour. Burgundy, terracotta, sage, blush, forest green, or a custom blend: just let us know when you order.',
  },
  {
    slug: 'ocean-lap-tray',
    name: 'Ocean Lap Tray',
    tagline: 'Mornings in bed. Evenings on the sofa.',
    description:
      'A bamboo lap tray with a real ocean scene inlaid in resin across the centre — real sand, shells and sea glass captured and sealed. Lightweight, with fold-down legs. The kind of thing you buy for the bedroom and never want to put away.',
    price: 5500, // pence
    priceDisplay: '£55',
    shipping: { uk: 300, international: 1500 },
    shippingDisplay: { uk: '£3 UK delivery', international: '£15 international shipping' },
    dimensions: '40 × 30cm · 19cm leg height · Bamboo, sand & resin',
    leadTime: 'Ready to ship',
    image: '/images/coastal-tray-1.jpg',
    imageAlt: 'Bamboo lap tray with ocean resin inlay',
    hasColourChoice: false,
    hasPersonalisation: false,
    colourNote: 'The standard colourway is ocean teal and deep navy — but we can make any piece to order in a colour of your choosing. Burgundy, coral, sage green, soft blush, terracotta: if you have a colour in mind, we can pour it. Get in touch to arrange.',
  },
];

export function getCoastalProduct(slug) {
  return COASTAL_PRODUCTS.find(p => p.slug === slug) || null;
}
