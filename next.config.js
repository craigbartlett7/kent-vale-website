/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost', 'vercel.app'],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      // Non-www → www (fixes duplicate content / canonical issues)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'kentandvale.com' }],
        destination: 'https://www.kentandvale.com/:path*',
        permanent: true,
      },
      // Forever Form → Atelier Commissions
      {
        source: '/forever-form',
        destination: '/atelier-commissions',
        permanent: true,
      },
      // Blog → Journal
      {
        source: '/blog',
        destination: '/journal',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/journal/:slug',
        permanent: true,
      },
      // Enquiry → Contact
      {
        source: '/enquiry',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
