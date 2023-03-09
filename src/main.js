import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes.js';
import store from './store.js';

const app = createApp(App);

app.use(routes);
app.use(store);

store.dispatch('fetchItems');

app.mount('#app');
