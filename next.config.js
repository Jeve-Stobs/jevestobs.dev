module.exports = {
  generateBuildId: () => 'build',
  distDir: 'build',
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    optimizeImages: true,
    optimizeCss: true,
    scrollRestoration: true
  }
}
