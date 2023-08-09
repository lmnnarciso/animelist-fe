/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    images: {
      domains: ["cdn.myanimelist.net"],
    },
  }
  
  export default nextConfig
  