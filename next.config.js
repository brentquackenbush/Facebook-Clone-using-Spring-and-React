/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org',
    "commons.wikimedia.org",
    "platform-lookaside.fbsbx.com",
    "cdn.britannica.com",
    "images.pexels.com"]
  }
}

module.exports = nextConfig
