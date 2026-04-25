import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import { meta } from "vite-plugin-meta-tags";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [
      react(),
      meta({
        title: "Leonardo Farias — Desenvolvedor de Software",
        description:
          "Desenvolvedor React, Java, Python e Go. AWS Cloud Practitioner. 2º lugar Hackathon BNDES Microcrédito. Builder de soluções serverless e IA.",
        url: "https://leofarias.me",
        img: "/og-image.png",
        color: "#f97316",
      }),
    ],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
