import { Routes } from '@/router/routes'
import type { Component } from 'vue'
import CV from '@/components/profile/CV.vue'
import Clients from '@/components/profile/Clients.vue'
import Inspiration from '@/components/profile/Inspiration.vue'
import Partners from '@/components/profile/Partners.vue'
import ProfileComp from '@/components/profile/ProfileComp.vue'

export type Navigation = {
  title: string | WorkTypes
  to?: Routes
  component?: Component
}

export enum WorkTypes {
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
    title: WorkTypes.ALL
  },
  {
    title: WorkTypes.URBANISM
  },
  {
    title: WorkTypes.PLANNING
  },
  {
    title: WorkTypes.OUTSIDE
  },
  {
    title: WorkTypes.SAME
  }
]

export const profileNav: Navigation[] = [
  {
    title: 'PROFIEL',
    component: ProfileComp
  },
  {
    title: 'CURRICULUM VITAE',
    component: CV
  },
  {
    title: 'PARTNERS',
    component: Partners
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
