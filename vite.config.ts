import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
    })
  ],
  define: {
    IS_STORYBOOK: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/shared/assets/styles/_mixins.scss"; @import "@/shared/assets/styles/_constants.scss";',
      },
    },
  },
});
