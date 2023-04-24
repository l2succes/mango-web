const webpack = require('webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com', 'arweave.net'],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/get',
        destination: '/api/download-app',
        permanent: true,
      },
    ]
  },
  webpack: (config, opts) => {
    if (!opts.isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      }
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          BUILD_ID: JSON.stringify(opts.buildId),
        },
      })
    )

    return config
  },
}

module.exports = nextConfig
