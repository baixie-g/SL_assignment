import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/assets/styles/index.scss'; // global css
import '@/assets/styles/style.scss';
import axios from 'axios';

// Set the base URL for Axios
axios.defaults.baseURL = 'http://localhost:8080';

// Create the Vue app instance
const app = createApp(App);

// Use Element Plus for UI components
app.use(ElementPlus);

// Use Pinia for state management
app.use(createPinia());

// Use Vue Router for navigation
app.use(router);

// Mount the app to the element with id 'app'
app.mount('#app');
