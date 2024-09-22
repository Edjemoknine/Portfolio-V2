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
      {
        hostname: "avatar.vercel.sh",
      },
      {
        hostname: "imgs.search.brave.com",
      },
    ],
  },
};

export default nextConfig;
