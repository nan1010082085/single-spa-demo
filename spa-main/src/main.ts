import '../single-spa-config';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App';
import apps from '../public/apps.json';
const routes = apps.map((app) => {
  return {
    name: app.name,
    path: `/${app.name}`,
    component: () => import('./components/micro-container')
  };
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('./components/home')
    },
    ...routes
  ]
});

createApp(App).use(router).mount('#app');
