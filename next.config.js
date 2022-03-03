/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.google.com.eg'],
  },
}

module.exports = nextConfig

// module.exports = {
//   env: {
//     API_KEY: 'your API KEY ',
//     CONTEXT_KEY: 'your CONTEXT KEY '
//   },
// }

//  search.js 
// :
// const API_KEY  = process.env.API_KEY
// const CONTEXT_KEY = process.env.CONTEXT_KEY