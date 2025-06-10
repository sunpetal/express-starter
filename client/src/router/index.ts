import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/global/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Assignments from '@/views/Assignments.vue';
import MasterViewLR from '@/views/MasterViewLR.vue';
import MasterViewTB from '@/views/MasterViewTB.vue';
import TeamPulse from '@/views/TeamPulse.vue';
import Metrics from '@/views/Metrics.vue';

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/', name: 'dashboard', component: Dashboard },
  { path: '/assignments', name: 'assignments', component: Assignments },
  { path: '/masterviewlr', name: 'masterviewlr', component: MasterViewLR },
  { path: '/masterviewtb', name: 'masterviewtb', component: MasterViewTB },
  { path: '/teampulse', name: 'teampulse', component: TeamPulse },
  { path: '/metrics', name: 'metrics', component: Metrics },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
