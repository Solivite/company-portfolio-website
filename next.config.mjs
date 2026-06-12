/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/content",
        destination: "/services/marketing",
        permanent: true,
      },
      {
        source: "/services/data-ai",
        destination: "/services/development/custom",
        permanent: true,
      },
      {
        source: "/services/games",
        destination: "/services/development/mobile-apps",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

