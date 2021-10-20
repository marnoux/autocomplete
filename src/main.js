import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// I used bootstrap to abstract some of the styling in order to save time
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);

app.use(store).use(router).mount('#app');
