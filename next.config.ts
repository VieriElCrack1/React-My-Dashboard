import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** CONFIG IMAGES **/
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
