export async function GET() {
  const key = 'd5c30afc29a8496e9cb1d1dbf0ae4aaa';
  const host = 'www.kentandvale.com';

  const urlList = [
    `https://${host}/`,
    `https://${host}/christmas-collection`,
    `https://${host}/coastal-edit`,
    `https://${host}/coastal-edit/stemless-wine-glass`,
    `https://${host}/coastal-edit/stemmed-wine-glass`,
    `https://${host}/coastal-edit/whisky-glass`,
    `https://${host}/coastal-edit/beer-glass`,
    `https://${host}/coastal-edit/glass-bundle-6`,
    `https://${host}/memories`,
    `https://${host}/bespoke-chess`,
    `https://${host}/bespoke-furniture`,
    `https://${host}/pricing`,
    `https://${host}/about`,
    `https://${host}/inspiration-gallery`,
    `https://${host}/london-marathon-2026`,
    `https://${host}/london-marathon-2026/order`,
  ];

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host,
        key,
        keyLocation: `https://${host}/${key}.txt`,
        urlList,
      }),
    });

    return Response.json({
      status: response.status,
      submitted: urlList.length,
      urls: urlList,
    });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
