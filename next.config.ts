import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'i.ibb.co',
      'images.unsplash.com',
      'maps.google.com',
    ], // ✅ Allow image loading from imgbb,
  },
};

export default nextConfig;
