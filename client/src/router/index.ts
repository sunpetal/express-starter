import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import MyWork from '@/views/MyWork.vue';
import Newsfeed from '@/views/Newsfeed.vue';
import Projects from '@/views/Projects.vue';
import Planning from '@/views/Planning.vue';
import Clients from '@/views/Clients.vue';

const routes = [
  { path: '/', name: 'dashboard', component: Dashboard },
  { path: '/mywork', name: 'mywork', component: MyWork },
  { path: '/newsfeed', name: 'newsfeed', component: Newsfeed },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/planning', name: 'planning', component: Planning },
  { path: '/clients', name: 'clients', component: Clients },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
