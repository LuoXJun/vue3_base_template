import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'default-passive-events';
import 'reset.css';
import '@/styles/index.scss';
import engineUI from './engine-ui/dist/engine-ui';
import './engine-ui/assets/widgets.css';
// import './engine-ui/dist/style.css';

const app = createApp(App);

const pinia = createPinia();

pinia.use(({ store }) => {
    if (store.$id === 'menu') {
        // 监听只会在$patch之后触发一次
        store.$subscribe((_, state) => {
            sessionStorage.setItem('state', JSON.stringify(state));
        });
    }
});

app.use(pinia);
app.use(router);
app.use(engineUI);

app.mount('#app');
