import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "landing" */ '../components/landing/Landing.vue')
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import(/* webpackChunkName: "landing" */ '../components/landing/Landing.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../components/landing/Register.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
