import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '../single-spa-config';
import App from './App';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'app1',
      path: '/app1/*',
      component: () => import('./components/main')
    }
  ]
});

createApp(App).use(router).mount('#app');
