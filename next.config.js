/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.vectorlogo.zone',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig