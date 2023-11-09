import type { WorkTypes as WorkTypesType } from '@/composables/navigation'
import { WorkTypes } from '@/composables/navigation'
import locatie from '@/assets/images/contact/locatie.jpeg'
import image from '@/assets/images/work/0-BPVelpNoord.png'

export type Project = {
  type: WorkTypesType[]
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
    type: [WorkTypes.PLANNING, WorkTypes.OUTSIDE],
    title: 'Dorpszicht Terwolde1',
    subTitle: 'Oh wat een mooi dorpszicht',
    text:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown\n" +
      '      printer took a galley of type and scrambled it to make a type specimen book. It has survived\n' +
      '      not only five centuries, but also the leap into electronic typesetting, remaining essentially\n' +
      '      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n' +
      '      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker\n' +
      '      including versions of Lorem Ip',
    link: '',
    linkText: '',
    coverImage: locatie,
    image: image,
    flipbookImages: [],
    video: '',
    music: ''
  },
  {
    type: [WorkTypes.PLANNING, WorkTypes.SAME],
    title: 'Dorpszicht Terwolde2',
    subTitle: 'Oh wat een mooi dorpszicht',
    text:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown\n" +
      '      printer took a galley of type and scrambled it to make a type specimen book. It has survived\n' +
      '      not only five centuries, but also the leap into electronic typesetting, remaining essentially\n' +
      '      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n' +
      '      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker\n' +
      '      including versions of Lorem Ip',
    link: '',
    linkText: '',
    coverImage: locatie,
    image: image,
    flipbookImages: [],
    video: '',
    music: ''
  },
  {
    type: [WorkTypes.PLANNING, WorkTypes.SAME],
    title: 'Dorpszicht Terwolde3',
    subTitle: 'Oh wat een mooi dorpszicht',
    text:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown\n" +
      '      printer took a galley of type and scrambled it to make a type specimen book. It has survived\n' +
      '      not only five centuries, but also the leap into electronic typesetting, remaining essentially\n' +
      '      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\n' +
      '      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker\n' +
      '      including versions of Lorem Ip',
    link: '',
    linkText: '',
    coverImage: locatie,
    image: image,
    flipbookImages: [],
    video: '',
    music: ''
  }
]
