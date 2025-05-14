import { createRouter, createWebHistory } from 'vue-router';
//import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import One from '@/views/One.vue';
import Two from '@/views/Two.vue';
import Three from '@/views/Three.vue';
import Four from '@/views/Four.vue';

const routes = [
  { path: '/', name: 'about', component: AboutView },
  { path: '/one', name: 'one', component: One },
  { path: '/two', name: 'two', component: Two },
  { path: '/three', name: 'three', component: Three },
  { path: '/four', name: 'four', component: Four },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
