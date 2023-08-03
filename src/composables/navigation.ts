import { Routes } from '@/router/routes'

type Navigation = {
  title: string
  to: Routes
  icon?: string
}

export const projectsNav: Navigation[] = [
  {
    title: 'STEDEBOUW',
    to: Routes.Urbanism
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

export const profileNav: Navigation[] = [
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
