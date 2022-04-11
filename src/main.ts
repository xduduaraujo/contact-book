import Maska from 'maska'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router).use(Maska);

app.mount('#app');
