// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone", // 🔹 necessário para gerar .next/standalone
};

export default nextConfig;
