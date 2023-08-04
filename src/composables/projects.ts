import { Routes } from '@/router/routes'

export type Project = {
  page: Routes
  title: string
  subTitle: string
  imageFolder: string
  images: string[] // First will be used for main card
  text: string
  link?: string
  linkText?: string
}

export const projects: Project[] = [
  {
    page: Routes.Urbanism,
    title: 'Bedrijventerrein De Beemd',
    subTitle: 'Gemeente Rheden, Velp 1999-2007',
    imageFolder: 'projects/De-Beemd',
    images: ['panorama4c.png', 'brug.jpg', 'laan.jpg', 'panorama1.jpg'],
    text:
      'Vanaf 2000 is de gemeente Rheden actief met de uitgifte van kavels op het bedrijventerrein De Beemd in Velp. Verantwoordelijk voor het stedebouwkundig ontwerp, het bestemmings- en beeldkwaliteitsplan. Tot 2007 ontwerper voor de buitenruimte en supervisor voor de architectuur. Inmiddels is het terrein bijna volledig uitgegeven, op twee kavels na.\n' +
      '\n' +
      'De zeer diverse bedrijven vormen compacte bouwblokken en kennen verzorgde gevels aan alle buitenzijden. De open profielen laten het zicht mogelijk op de IJsseldijk en het buitengebied. Tegelijk zijn veel bedrijven goed zichtbaar vanaf de A348. De bomenlaan en de watering geven een sterke samenhang van noord naar zuid.',
    link: '@/assets/images/De-Beemd/Beeldkwaliteitsplan-De-Beemd.pdf',
    linkText: 'Link naar Beeldkwaliteitsplan De Beemd.'
  }
]
