import { Routes } from '@/router/routes'

type Navigation = {
  title: string
  to: Routes
}

export const projectsNav: Navigation[] = [
  {
    title: 'Werk',
    to: Routes.Work
  },
  {
    title: 'Profiel',
    to: Routes.Profile
  },
  {
    title: 'CONTACT',
    to: Routes.Contact
  }
]
