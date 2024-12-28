import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration options
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/github/:path*",
        destination: "https://github.com/:path*", // Proxy to Backend
      },
      {
        source: "/leetcode/:path*",
        destination: "https://leetcode.com/graphql/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
