import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
// import './style.css'
import App from './App.vue'
import MenSection from './components/MenSection.vue'
import WomenSection from './components/WomenSection.vue'
import NotAvailable from './components/NotAvailable.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/product/men' },
      { path: '/product/men', component: MenSection },
      { path: '/product/women', component: WomenSection },
      { path: '/product/404', component: NotAvailable }
    ]
  });

  const app = createApp(App);
  app.use(router);
  app.mount('#app');
