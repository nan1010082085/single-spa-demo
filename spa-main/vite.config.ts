import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const config: UserConfig = {
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': 'src'
    }
  },
  plugins: [vue(), vueJsx()]
};

// https://vitejs.dev/config/
export default defineConfig(config);
