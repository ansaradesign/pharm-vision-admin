/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'pharm-vision.vercel.app',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
