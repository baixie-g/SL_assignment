import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/styles/index.scss' // global css
import axios from "axios";

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8080'

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
