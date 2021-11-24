import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import {store, key} from '@/store/index'
import boot from '@/boot'
const app:any = createApp(App)
boot(app)

app.use(router).use(store, key).mount('#app')
