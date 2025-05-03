module.exports = {
  generateBuildId: () => 'build',
  distDir: 'build',
  reactStrictMode: false,
  compress: true,
  experimental: {
    cssChunking: true,
    inlineCss: true,
    optimizeCss: true,
    useCache: true
  },
}
