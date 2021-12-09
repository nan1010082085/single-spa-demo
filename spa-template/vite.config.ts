import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const config: UserConfig = {
  server: {
    base: 'http://localhost:3001',
    port: 3001
  },
  build: {
    outDir: '../dist/main/micro/app1',
    assetsDir: 'src/',
    manifest: true,
    // rollupOptions: {
    //   // input: 'index.html',
    //   output: {
    //     name: './src/main.js',
    //     format: 'umd',
    //   },
    // }
  },
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
  // rollupOptions: {
  //   input: 'src/main.ts',
  //   format: 'system',
  //   preserveEntrySignatures: true
  // },
  ...defineConfig(config)
};
