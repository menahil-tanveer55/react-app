/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add trusted image hosts here when using remote images, e.g.:
      // { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

export default nextConfig
