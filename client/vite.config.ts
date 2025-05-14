import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const serverURL = env.VITE_SERVER_URL!;
  const apiPath = env.VITE_SERVER_API_PATH!;

  return {
    define: { __API_PATH__: JSON.stringify(apiPath) },
    plugins: [vue(), tailwindcss()],
    resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
    server: {
      port: 5173,
      proxy: { [apiPath]: serverURL },
    },
  };
});
