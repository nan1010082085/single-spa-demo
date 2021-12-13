import { defineConfig, UserConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import packageJson from './package.json';
const name = packageJson.name;

const config: UserConfig = {
  server: {
    base: 'http://localhost:3001',
    port: 3001
  },
  build: {
    outDir: `../dist/template`,
    lib: {
      name: `${name}-[name]`,
      entry: path.resolve(__dirname, 'src/main.ts'),
      formats: ['system', 'amd', 'umd'],
    },
    // rollupOptions: {
    //   external: ['vue'],
    //   output: {
    //     globals: {
    //       vue: 'Vue'
    //     }
    //   }
    // }
  },
  plugins: [
    vue({
      // template: {
      //   transformAssetUrls: {
      //     base: '/src'
      //   }
      // }
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
