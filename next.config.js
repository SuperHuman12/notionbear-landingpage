/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/blog',
  assetPrefix: '/blog/',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
