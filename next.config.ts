import type { NextConfig } from "next";

// Modelos feitos em Vite: compilados para public/<modelo>/ por scripts/build-modelos.mjs.
const modelosVite = ["dentora"];

const nextConfig: NextConfig = {
  async rewrites() {
    return modelosVite.map((modelo) => ({
      source: `/${modelo}`,
      destination: `/${modelo}/index.html`,
    }));
  },
};

export default nextConfig;
