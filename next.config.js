/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // For GitHub Pages user/organization sites (aminsamir45.github.io), 
  // assetPrefix and basePath should be empty
  assetPrefix: '',
  basePath: '',
}

module.exports = nextConfig 