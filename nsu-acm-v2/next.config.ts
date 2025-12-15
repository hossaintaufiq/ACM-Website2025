import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export
  output: "export",

  // Make Next.js images work without server optimization
  images: {
    unoptimized: true,
  },

  // React compiler setting (keep it if needed)
  reactCompiler: true,
};

export default nextConfig;
