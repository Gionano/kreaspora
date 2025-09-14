/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/kreaspora/public/api/:path*',
        destination: 'http://localhost/kreaspora/public/api/:path*', // Proxy to XAMPP
      },
    ];
  },
}

module.exports = nextConfig