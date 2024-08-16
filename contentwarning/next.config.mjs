/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
            protocol: 'https',
          hostname: '64.media.tumblr.com',
        },
      ],
    },
  }
export default nextConfig;
