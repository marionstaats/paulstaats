import { Routes } from '@/router/routes'

type Navigation = {
  title: string
  to: Routes
}

export const projectsNav: Navigation[] = [
  {
    title: 'STEDEBOUW',
    to: Routes.Urbanism
  },
  {
    title: 'Planologie',
    to: Routes.Planning
  },
  {
    title: 'Buitenruimte',
    to: Routes.Outside
  },
  {
    title: 'Evengoed',
    to: Routes.Other
  }
]

export const profileNav: Navigation[] = [
  {
    title: 'Profielschets',
    to: Routes.Profile
  },
  {
    title: 'Curriculum Vitae',
    to: Routes.CV
  },
  {
    title: 'Opdrachtgevers',
    to: Routes.Clients
  },
  {
    title: 'Inspiratie',
    to: Routes.Inspiration
  }
]
