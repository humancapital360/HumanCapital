/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
/**  output: 'export', */
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  }
}

export default nextConfig
