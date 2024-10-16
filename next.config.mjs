/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    if (process.env.NODE_ENV === "development") {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }
    return config;
  },
};

export default nextConfig;
