import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import MyWork from '@/views/MyWork.vue';
import Planning from '@/views/Planning.vue';
import Login from '@/views/Login.vue';

const routes = [
  { path: '/', name: 'dashboard', component: Dashboard },
  { path: '/mywork', name: 'mywork', component: MyWork },
  { path: '/planning', name: 'planning', component: Planning },
  { path: '/login', name: 'login', component: Login },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
