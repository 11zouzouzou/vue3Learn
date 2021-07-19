import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      //运行时编译
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },

  server: {
    host: true,
  },
});
