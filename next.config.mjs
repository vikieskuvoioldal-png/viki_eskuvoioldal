// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Ezt meghagyhatjuk, ha esetleg használnád
      },
      {
        protocol: 'https',
        hostname: 'ortpmfnrnxsmszvslxpf.supabase.co', 
      },
    ],
  },
};

export default nextConfig;