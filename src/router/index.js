import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/landing',
    component: HomeView
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
