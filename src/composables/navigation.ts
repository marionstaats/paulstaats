import { Routes } from '@/router/routes'

type Navigation = {
  title: string
  to: Routes
}

export const projectsNav: Navigation[] = [
  {
    title: 'Projects',
    to: Routes.Home
  },
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
  }
]
