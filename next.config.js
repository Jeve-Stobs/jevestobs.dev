const withPreact = require('next-plugin-preact')

module.exports = withPreact({
  generateBuildId: () => 'build',
  distDir: 'build',
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  }
})
