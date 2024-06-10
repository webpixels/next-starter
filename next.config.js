const path = require('path')

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md'],
  reactStrictMode: true,
  optimizeFonts: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [
      'node_modules',
      path.join(__dirname, 'scss')
    ],
  },
  images: {
    domains: [
      'webpixels.s3.eu-central-1.amazonaws.com',
      'wpx-dev.s3.eu-central-1.amazonaws.com',
    ],
  },
}

module.exports = nextConfig
