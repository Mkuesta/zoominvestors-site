import type { NextConfig } from 'next';

const SITEMAP_SLUG = process.env.SITEMAP_SLUG || 'sm-fallback.xml';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cms.drlogist.com' },
      { protocol: 'https', hostname: '*.directus.app' },
    ],
  },
  async rewrites() {
    return [
      { source: `/${SITEMAP_SLUG}`, destination: '/api/sitemap' },
    ];
  },
};

export default nextConfig;
