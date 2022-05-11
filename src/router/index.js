import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: to => {
      return { path: '/landing' }
    }
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import('../components/landing/Landing.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/landing/Register.vue')
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import('../components/pokemon/Pokemon.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
