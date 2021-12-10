/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,

  basePath: process.env.BASE_URL ?? '',
  assetPrefix: process.env.BASE_URL ?? '',

  images: {
    loader: 'akamai',
    path: '',
  },
}
