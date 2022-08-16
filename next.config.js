/** @type {import("next").NextConfig} */
const intercept = require("intercept-stdout");

// safely ignore recoil warning messages in dev (triggered by HMR)
const interceptStdout = (text) => {
  if (text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}

if (process.env.NODE_ENV === "development") {
  intercept(interceptStdout);
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 10000,
  async redirects() {
    return [
      {
        source: '/review',
        destination: '/',
        permanent: false,
      },
      {
        source: '/quiz',
        destination: '/',
        permanent: false,
      },
    ]
  },
};

module.exports = nextConfig;
