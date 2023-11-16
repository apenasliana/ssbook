/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sscdn.co',
        port: '',
        pathname: '/gcs/studiosol/2022/mobile/**',
      },
    ],
  },
}

module.exports = nextConfig
