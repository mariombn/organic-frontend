// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'user/logoff',
        name: 'Logoff',
        component: () => import('@/views/user/Logoff.vue'),
      },
      {
        path: 'user/settings',
        name: 'Settings',
        component: () => import('@/views/user/Setting.vue'),
      },
      {
        path: 'finance/transaction/create',
        name: 'CreateTransaction',
        component: () => import('@/views/finance/CreateTransaction.vue'),
      },
      {
        path: 'finance/input-output',
        name: 'InputOutput',
        component: () => import('@/views/finance/InputOutput.vue'),
      },
      {
        path: 'finance/resume',
        name: 'Resume',
        component: () => import('@/views/finance/Resume.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
