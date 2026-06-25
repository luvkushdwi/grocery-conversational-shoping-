import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const COGITX_JOBS_PATH =
  "/project/exports/rest-api/6a016bf971e1d54ed336d155/jobs";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss()],
    server: {
      proxy: {
        "/api/jobs": {
          target: "https://cpab.cogitx.ai",
          changeOrigin: true,
          secure: true,
          rewrite: () => COGITX_JOBS_PATH,
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              const clientId = env.CLIENT_ID || env.VITE_CLIENT_ID;
              const clientSecret = env.CLIENT_SECRET || env.VITE_CLIENT_SECRET;

              if (clientId) proxyReq.setHeader("x-client-id", clientId);
              if (clientSecret) proxyReq.setHeader("x-client-secret", clientSecret);
            });
          },
        },
      },
    },
    preview: {
      proxy: {
        "/api/jobs": {
          target: "https://cpab.cogitx.ai",
          changeOrigin: true,
          secure: true,
          rewrite: () => COGITX_JOBS_PATH,
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              const clientId = env.CLIENT_ID || env.VITE_CLIENT_ID;
              const clientSecret = env.CLIENT_SECRET || env.VITE_CLIENT_SECRET;

              if (clientId) proxyReq.setHeader("x-client-id", clientId);
              if (clientSecret) proxyReq.setHeader("x-client-secret", clientSecret);
            });
          },
        },
      },
    },
  };
});
