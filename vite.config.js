import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const pages = [
  "index",
  "sobre",
  "experiencias",
  "escolaridade",
  "skills",
  "projetos",
  "contato",
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Caminhos relativos: funciona tanto na raiz quanto em subpastas de hospedagem.
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  build: {
    rollupOptions: {
      // Gera uma página HTML independente para cada seção do portfólio.
      input: Object.fromEntries(
        pages.map((page) => [page, `${root}${page}.html`])
      ),
    },
  },
});
