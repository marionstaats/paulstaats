import { Routes } from '@/router/routes'
import type { Component } from 'vue'
import Profile from '@/components/profile/Profile.vue'
import CV from '@/components/profile/CV.vue'
import Clients from '@/components/profile/Clients.vue'
import Inspiration from '@/components/profile/Inspiration.vue'

export type Navigation = {
  title: string
  to?: Routes
  component?: Component
}

export const mainNav: Navigation[] = [
  {
    title: 'WORK',
    to: Routes.Work
  },
  {
    title: 'PROFIEL',
    to: Routes.Profile
  },
  {
    title: 'CONTACT',
    to: Routes.Contact
  }
]

export const workNav: Navigation[] = [
  {
    title: 'ALLES'
  },
  {
    title: 'STEDEBOUW'
  },
  {
    title: 'PLANOLOGIE'
  },
  {
    title: 'BUITENRUIMTE'
  },
  {
    title: 'EVENGOED'
  }
]

export const profileNav: Navigation[] = [
  {
    title: 'PROFIELSCHETS',
    component: Profile
  },
  {
    title: 'CV',
    component: CV
  },
  {
    title: 'OPDRACHTGEVERS',
    component: Clients
  },
  {
    title: 'INSPIRATIE',
    component: Inspiration
  }
]
