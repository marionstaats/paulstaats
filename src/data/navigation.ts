import { Routes } from '@/router/routes'

type Navigation = {
  title: string
  to: Routes
  icon: string
}

export const projects: Navigation[] = [
  {
    title: 'Stedebouw',
    to: Routes.Urbanism,
    icon: 'mdi-city'
  },
  {
    title: 'Planologie',
    to: Routes.Planning,
    icon: 'mdi-city'
  },
  {
    title: 'Buitenruimte',
    to: Routes.Outside,
    icon: 'mdi-tree-outline'
  },
  {
    title: 'Evengoed',
    to: Routes.Other,
    icon: 'mdi-tree-outline'
  }
]

export const profile: Navigation[] = [
  {
    title: 'Profielschets',
    to: Routes.Profile,
    icon: 'mdi-account'
  },
  {
    title: 'Curriculum Vitae',
    to: Routes.CV,
    icon: 'mdi-file-document-outline'
  },
  {
    title: 'Opdrachtgevers',
    to: Routes.Clients,
    icon: 'mdi-file-document-outline'
  },
  {
    title: 'Inspiratie',
    to: Routes.Inspiration,
    icon: 'mdi-lightbulb-on-outline'
  }
]
