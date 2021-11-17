// 一定要放 main.js ，才會載入Bootstrap樣式
import './scss/main.scss';
// 要使用 bootstrap-icons 就要載入樣式
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as bootstrap from 'bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(bootstrap);

app.use(store).use(router).mount('#app');
