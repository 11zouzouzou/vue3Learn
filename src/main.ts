import { createApp } from "vue";
import App from "./App.vue";
import RouterTest from "./RouterTest.vue";
import { router } from './router/index';
import * as VueRouter from 'vue-router';

// createApp(App).mount("#app");
/**
 * 基础路由支持
 * */
// 创建并挂载根实例
const app = createApp({});
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router);

app.mount("#app");
