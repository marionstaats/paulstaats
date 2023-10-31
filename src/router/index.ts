import { createRouter, createWebHistory } from 'vue-router'
import type { Router } from 'vue-router'
import { Routes } from '@/router/routes'
import Home from '@/pages/Home.vue'
import Project from '@/pages/Project.vue'

const router: Router = createRouter({
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
      path: '/project',
      // path: '/project/:projectName',
      name: Routes.Project,
      component: Project
      // props: (route: RouteLocation) => ({
      //   projectName: route.params.projectName
      // })
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
