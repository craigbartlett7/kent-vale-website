export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/admin',
      },
    ],
    sitemap: 'https://kentandvale.com/sitemap.xml',
    host: 'https://kentandvale.com',
  };
}
