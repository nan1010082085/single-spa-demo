import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const config: UserConfig = {
  server: {
    port: 3001
  },
  base: 'http://localhost:3001',
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: '/src'
        }
      }
    }),
    vueJsx()
  ]
};
// https://vitejs.dev/config/
export default {
  rollupOptions: {
    input: 'src/main.ts',
    format: 'system',
    preserveEntrySignatures: true
  },
  ...defineConfig(config)
};
