import type { NextConfig } from "next";

// Note: Add minimal typing extension to allow turbopack custom config without TS errors
const nextConfig: NextConfig & { turbopack?: { root?: string } } = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure Turbopack selects this project as the root when multiple lockfiles exist on the machine
  // See: https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
