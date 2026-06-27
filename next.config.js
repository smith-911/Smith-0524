/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  swcMinify: true,
  optimizeFonts: true,
};

module.exports = nextConfig;
