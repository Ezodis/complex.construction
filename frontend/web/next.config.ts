// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,

  // Increase body size limit for file uploads (default is 1MB)
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb', // Allow up to 50MB for chat backup uploads
    },
  },

  // Redirects for short links
  async redirects() {
    return [
      {
        source: '/cancer',
        destination: 'https://luchandoporviviryservir.org',
        permanent: false,
      },
      {
        source: '/luchando',
        destination: 'https://luchandoporviviryservir.org',
        permanent: false,
      },
      {
        source: '/oldbook',
        destination: 'https://oldbook.ai',
        permanent: false,
      },
      {
        source: '/elitecar',
        destination: 'https://elitecar.app',
        permanent: false,
      },
      {
        source: '/Desde_Entonces',
        destination: 'https://onerpm.link/242020586244',
        permanent: false,
      },
    ];
  },

  // Rewrites for API routing - proxies to backend
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_PUBLIC_API_URL
          ? `${process.env.NEXT_PUBLIC_API_URL}/:path*`
          : 'http://localhost/api/:path*',
      },
    ];
  },

  // Headers for API routes to allow larger payloads
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
