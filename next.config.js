module.exports = {
  generateBuildId: () => 'build',
  distDir: 'build',
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ]
  }
}
