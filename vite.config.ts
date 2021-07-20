import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      //运行时编译
      vue: "vue/dist/vue.esm-bundler.js",
       // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
      "@": path.resolve(__dirname, "src")
    },
  },
  base:'./',
  server: {
    host: true,
  },
});
