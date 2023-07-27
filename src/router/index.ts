import { createRouter, createWebHistory } from 'vue-router'
import { Routes } from '@/router/routes'
import Urbanism from '@/views/Urbanism.vue'
import Planning from '@/views/Planning.vue'
import Outside from '@/views/Outside.vue'
import Other from '@/views/Other.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: Routes.Home,
      component: Home
    },
    {
      path: '/urbanism',
      name: Routes.Urbanism,
      component: Urbanism
    },
    {
      path: '/planning',
      name: Routes.Planning,
      component: Planning
    },
    {
      path: '/outside',
      name: Routes.Outside,
      component: Outside
    },
    {
      path: '/other',
      name: Routes.Other,
      component: Other
    },
    {
      path: '/profile',
      name: Routes.Profile,
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/cv',
      name: Routes.CV,
      component: () => import('../views/CV.vue')
    },
    {
      path: '/clients',
      name: Routes.Clients,
      component: () => import('../views/Clients.vue')
    },
    {
      path: '/inspiration',
      name: Routes.Inspiration,
      component: () => import('../views/Inspiration.vue')
    },
    {
      path: '/contact',
      name: Routes.Contact,
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router
