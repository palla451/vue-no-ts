import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueAxiosPlugin } from "@/plugins/axiosInterceptor";

createApp(App).use(VueAxiosPlugin).use(store).use(router).mount('#app')
