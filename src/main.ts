/** @format */

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'default-passive-events';
import 'reset.css';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');
