/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['d106o9xnm8ohhl.cloudfront.net', 'flagcdn.com']
  }
}

module.exports = nextConfig
