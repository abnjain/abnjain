/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * SEO & security headers.
   * Applied on Vercel / DigitalOcean / Node server deployments.
   * GitHub Pages (static export) does not support custom HTTP headers —
   * configure those at the CDN/proxy level instead.
   */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'X-Frame-Options',          value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection',         value: '1; mode=block' },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
