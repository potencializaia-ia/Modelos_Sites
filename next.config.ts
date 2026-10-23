import type { NextConfig } from "next";

// Modelos feitos em Vite: compilados para public/<modelo>/ por scripts/build-modelos.mjs.
const modelosVite = ["dentora", "dgustame", "delicias-mamae"];

const nextConfig: NextConfig = {
  // Endereços antigos que já podem ter sido enviados a clientes.
  async redirects() {
    return [{ source: "/clinica-rosa", destination: "/movimenta-fisioterapia", permanent: true }];
  },
  async rewrites() {
    return modelosVite.map((modelo) => ({
      source: `/${modelo}`,
      destination: `/${modelo}/index.html`,
    }));
  },
};

export default nextConfig;
