import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["i.postimg.cc", "i.ibb.co", "lh3.googleusercontent.com" ,],
  },
};

export default nextConfig;
