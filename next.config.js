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
  staticPageGenerationTimeout: 600000,
};

module.exports = nextConfig;
