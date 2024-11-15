import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Resume from './components/Resume.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cv', component: Resume }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
