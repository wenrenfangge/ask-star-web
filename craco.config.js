/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        // pathRewrite: { '^/api': '' },
      },
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
}
