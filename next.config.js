/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["images.pexels.com", "firebasestorage.googleapis.com", "drive.google.com", "images.unsplash.com", "cdn.pixabay.com"]
  },
};

module.exports = nextConfig;
