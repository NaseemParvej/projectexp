const withRoutes = require("nextjs-routes/config")();

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
module.exports = withRoutes(nextConfig);
