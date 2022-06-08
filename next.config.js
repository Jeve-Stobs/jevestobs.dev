const withPreact = require('next-plugin-preact')

module.exports = withPreact({
  generateBuildId: () => 'build',
  distDir: 'build',
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    optimizeImages: true,
    optimizeCss: true,
    scrollRestoration: true
  }
})
