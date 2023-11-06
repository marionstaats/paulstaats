import { Routes } from '@/router/routes'
import type { Component } from 'vue'
import Profile from '@/components/profile/Profile.vue'
import CV from '@/components/profile/CV.vue'
import Clients from '@/components/profile/Clients.vue'
import Inspiration from '@/components/profile/Inspiration.vue'

export type Navigation = {
  title: string | workTypes
  to?: Routes
  component?: Component
}

export enum workTypes {
  ALL = 'ALLES',
  URBANISM = 'STEDEBOUW',
  PLANNING = 'PLANOLOGIE',
  OUTSIDE = 'BUITENRUIMTE',
  SAME = 'EVENGOED'
}

export const mainNav: Navigation[] = [
  {
    title: 'WERK',
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
    title: workTypes.ALL
  },
  {
    title: workTypes.URBANISM
  },
  {
    title: workTypes.PLANNING
  },
  {
    title: workTypes.OUTSIDE
  },
  {
    title: workTypes.SAME
  }
]

export const profileNav: Navigation[] = [
  {
    title: 'PROFIEL',
    component: Profile
  },
  {
    title: 'CURRICULUM VITAE',
    component: CV
  },
  {
    title: 'PARTNERS',
    component: Clients
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
