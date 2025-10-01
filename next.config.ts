import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
