import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app');

const app = createApp({
  data() {
    return { count: 4 }
  }
})
