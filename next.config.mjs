/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        hostname: "mk-portfolio-psi.vercel.app",
      },
    ],
  },
};

export default nextConfig;
