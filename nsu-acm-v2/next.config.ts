import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export", // static export instead of `next export`
  trailingSlash: true, // ensure routes export as /route/index.html for cPanel/Apache
};

export default nextConfig;
