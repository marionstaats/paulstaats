import { Routes } from '@/router/routes'

export type Project = {
  page: Routes
  title: string
  subTitle?: string
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

export const inspirations: Project[] = [
  {
    page: Routes.Inspiration,
    title: 'Alles voor stad en land',
    imageFolder: 'inspiration',
    images: ['foto-stedebouwers.png'],
    text: 'Plezier in het creëren.'
  },
  {
    page: Routes.Inspiration,
    title: 'Wrekers op de fiets',
    imageFolder: 'inspiration',
    images: ['wrekers.png'],
    text: 'Naar Gert-Jan Theunisse:\n' + '\n' + '“De fiets, de fiets en verder niets.”'
  },
  {
    page: Routes.Inspiration,
    title: 'Kunstwerk !',
    imageFolder: 'inspiration',
    images: ['Kunstwerk!.png'],
    text: 'We ontwerpen de omgeving om te gebruiken.'
  },
  {
    page: Routes.Inspiration,
    title: 'Alles kan op maat gemaakt worden',
    imageFolder: 'inspiration',
    images: ['alles-op-maat.png'],
    text: 'Alles maken we voor mens en natuur. Daarom kan het op maat gemaakt worden. '
  },
  {
    page: Routes.Inspiration,
    title: 'Art Brut',
    imageFolder: 'inspiration',
    images: ['Artbrut-1.png'],
    text: 'Niet altijd een kunstenaar nodig om Kunst te maken. Om iets moois te maken moet het gevoel spreken. Art Brut Biënnale, Hengelo 2012.'
  },
  {
    page: Routes.Inspiration,
    title: 'Broadway Boogie Woogie',
    imageFolder: 'inspiration',
    images: ['Piet_Mondrian,_1942_-_Broadway_Boogie_Woogie.jpg', 'Portret-Mondriaan.jpg'],
    text:
      'Die stijve Mondriaan had alles onder controle. Alle kleuren en vlakken perfect in verhouding.\n' +
      '\n' +
      'Totdat hij de Boogie-Woogie ging dansen. En zelfs die kon hij verbeelden in 1943.'
  }
]
