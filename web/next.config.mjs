/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"export",
  cleanDistDir:true,
  distDir:"dist",
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
