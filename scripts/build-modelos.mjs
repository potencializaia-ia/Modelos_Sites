// Compila os modelos feitos em Vite e copia o resultado para public/<modelo>/,
// para que o app Next.js da raiz sirva todos os sites no mesmo domínio.
// Executado automaticamente por `npm run build` (inclusive na Vercel).
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

const modelos = ["dentora"];
const root = path.resolve(import.meta.dirname, "..");

for (const modelo of modelos) {
  const cwd = path.join(root, modelo);
  const run = (cmd) => execSync(cmd, { cwd, stdio: "inherit" });

  console.log(`\n▶ ${modelo}`);
  // --include=dev: a Vercel roda com NODE_ENV=production, que pularia o Vite (devDependency).
  if (!existsSync(path.join(cwd, "node_modules"))) run("npm ci --include=dev");
  run(`npm run build -- --base=/${modelo}/ --outDir=../public/${modelo} --emptyOutDir`);
}
