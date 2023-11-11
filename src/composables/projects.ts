import type { WorkTypes as WorkTypesType } from '@/composables/navigation'
import { WorkTypes } from '@/composables/navigation'

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
    type: [WorkTypes.URBANISM, WorkTypes.PLANNING, WorkTypes.OUTSIDE],
    title: 'Bedrijventerrein De Beemd',
    subTitle: 'Gemeente Rheden, Velp 1999-2007',
    text:
      'Vanaf 2000 is de gemeente Rheden actief met de uitgifte van kavels op het bedrijventerrein De Beemd in Velp. Verantwoordelijk voor het stedebouwkundig ontwerp, het bestemmings- en beeldkwaliteitsplan. Tot 2007 ontwerper voor de buitenruimte en supervisor voor de architectuur. Inmiddels is het terrein bijna volledig uitgegeven, op twee kavels na.' +
      '\n\nDe zeer diverse bedrijven vormen compacte bouwblokken en kennen verzorgde gevels aan alle buitenzijden. De open profielen laten het zicht mogelijk op de IJsseldijk en het buitengebied. Tegelijk zijn veel bedrijven goed zichtbaar vanaf de A348. De bomenlaan en de watering geven een sterke samenhang van noord naar zuid.',
    link: '/Beeldkwaliteitsplan-De-Beemd.pdf',
    linkText: 'Link naar Beeldkwaliteitsplan De Beemd.',
    coverImage: 'GrootDeBeemt.jpg',
    image: '1MidDeBeemt.jpg',
    flipbookImages: ['2MidDeBeemt.jpg', '3MidDeBeemt.jpg', '4MidDeBeemt.jpg', '5MidDeBeemt.jpg']
  },
  {
    type: [WorkTypes.URBANISM, WorkTypes.OUTSIDE],
    title: 'Transformatie landgoed Huis te Lathum',
    subTitle: 'Gemeente Zevenaar',
    text:
      'Op het landgoed vormt het Huis te Lathum het ruimtelijke ‘hoofdmonument’. De oude tuin bij het Huis wordt hersteld. Beide liggen op een verhoging in het terrein, die vroeger werd omgeven door een ondiepe gracht. Huis, erf, tuin met prieel en gracht vormen een eigen eenheid op het landgoed. De bijgebouwen liggen aan een andere ruimte, bereikbaar via dezelfde hoofdentree vanaf de Koestraat. De nieuwbouw maakt door de architectuur en materiaalgebruik een samenhangend, agrarisch ensemble.' +
      '\n\nIn het noordelijk deel van het plangebied komen vier aaneengesloten recreatiewoningen, in de vorm van een kapschuur. De naastgelegen schuur wordt als berging bij de woning betrokken. De bestaande schuur van de oude boerderij is recent hersteld met zoveel mogelijk historische referenties. Deze ruimte gaat tevens dienen voor de opslag van bouw- en schildermateriaal, hobbymatige houtbewerking en voor de stalling van kranen en aanhangwagens. Waarschijnlijk zijn beide schuren ooit bewoond geweest door landarbeiders van het landgoed Huis te Lathum.' +
      '\n\nOm de nieuwbouw te realiseren worden er ecologische maatregelen getroffen. In samenhang ontstaat zo een transformatie van het historische landgoed.',
    coverImage: 'GrootHtL.jpg',
    image: 'Mid2HtL.jpg',
    flipbookImages: ['Mid3HtL.jpg', 'Mid4HtL.jpg', 'MidHtL.jpg']
  },
  {
    type: [WorkTypes.OUTSIDE],
    title: 'Snelfietsroute F28',
    subTitle: 'Provincie Utrecht 2017',
    text: 'In opdracht van de Loendersloot-groep is met Merlijn Kamp een inpassingsstudie verricht voor de Snelfietsroute F28, een nieuwe fietsverbinding tussen Amersfoort en Utrecht. De Provincie Utrecht verkent de mogelijkheden voor een nieuw fietspad met als thema ‘De Stijl’. De route van 20 kilometer is verdeeld in 7 trajecten van zeer verschillende aard. De fietser ervaart hoogteverschillen, zowel landelijk als stedelijk gebied en doorkruist de Hollandse Waterlinie. Uitwerking geschiedt per gemeente; aanleg is gepland in 2018.',
    coverImage: 'GrootF28.jpg',
    image: '1MidF28.jpg',
    flipbookImages: ['2MidF28.jpg', '3MidF28.jpg', '1MidF28.jpg']
  },
  {
    type: [WorkTypes.URBANISM, WorkTypes.OUTSIDE],
    title: 'Toekomstvisie Landgoed Deelerwoud',
    subTitle: 'Gemeente Apeldoorn 2018',
    text:
      'In opdracht van de Stichting Huis Deelerwoud is een Toekomstvisie voor het Landgoed Deelerwoud opgesteld. Het plan is in samenwerking met rentmeester Gerrit Jan Liet en het bureau Econsultancy ontwikkeld en wordt besproken met gemeente Apeldoorn en provincie Gelderland. In het plan voor de komende tien jaar staan de besluiten die cruciaal zijn voor het voortbestaan van het landgoed in zijn huidige vorm en met zijn kernkwaliteiten. Het landgoed bevindt zich in Natura 2000 gebied en het Gelders Natuurnetwerk. Het bijzondere karakter met de rust, natuur- en cultuurhistorische waarden is alleen te behouden door een gewijzigd beheer en als er op strategische plekken ingrepen plaatsvinden. Onder strenge voorwaarden worden aan de randen locaties ontwikkeld voor woningbouw.' +
      '\n\nHet plan is vrijgegeven voor inspraak en moet uiteindelijk leiden tot een algehele bestemmingsplanherziening.',
    coverImage: 'GrootTVDW.jpg',
    image: '1MidTVDW.jpg',
    flipbookImages: ['3MidTVDW.jpg', '4MidTVDW.jpg', '2MidTVDW.jpg']
  }
]
