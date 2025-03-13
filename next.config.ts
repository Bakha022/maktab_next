import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true, // Static saytlar uchun yaxshi
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
};

export default nextConfig;
