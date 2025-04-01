/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Configure redirects if needed
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

