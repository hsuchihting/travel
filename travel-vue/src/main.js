import { createApp } from 'vue'
import App from './App.vue'
import "./style/index.css"; 
import router from "./router/routers.js" 

createApp(App).use(router).mount('#app')
