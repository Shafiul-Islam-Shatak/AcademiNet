import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["i.postimg.cc", "i.ibb.co", "itbook.store", "lh3.googleusercontent.com", "drive.google.com", "images.unsplash.com"]
  },
};

export default nextConfig;
