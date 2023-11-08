import type { WorkTypes } from '@/composables/navigation'

export type Project = {
  type: WorkTypes[]
  title: string
  subTitle?: string
  text: string
  link?: string
  linkText?: string
  coverImage: string
  image?: string
  flipbookImages?: string[]
  video?: string
  music?: string
}

export const projects: Project[] = [
  {
    type: [],
    title: '',
    subTitle: '',
    text: '',
    link: '',
    linkText: '',
    coverImage: '',
    image: '',
    flipbookImages: ['', '', ''],
    video: '',
    music: ''
  },
  {
    type: [],
    title: '',
    subTitle: '',
    text: '',
    link: '',
    linkText: '',
    coverImage: '',
    image: '',
    flipbookImages: ['', '', ''],
    video: '',
    music: ''
  }
]
