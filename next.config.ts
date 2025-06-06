import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://careers.noon.studio/**")],
  },
};

export default nextConfig;
