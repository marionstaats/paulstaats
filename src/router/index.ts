import { createRouter, createWebHistory } from 'vue-router'
import { Routes } from '@/router/routes'
import Urbanism from '@/pages/Urbanism.vue'
import Planning from '@/pages/Planning.vue'
import Outside from '@/pages/Outside.vue'
import Other from '@/pages/Other.vue'
import Home from '@/pages/Home.vue'

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
      component: () => import('@/pages/Profile.vue')
    },
    {
      path: '/cv',
      name: Routes.CV,
      component: () => import('@/pages/CV.vue')
    },
    {
      path: '/clients',
      name: Routes.Clients,
      component: () => import('@/pages/Clients.vue')
    },
    {
      path: '/inspiration',
      name: Routes.Inspiration,
      component: () => import('@/pages/Inspiration.vue')
    },
    {
      path: '/contact',
      name: Routes.Contact,
      component: () => import('@/pages/Contact.vue')
    }
  ]
})

export default router
