// @ts-ignore
import colors from 'vuetify/lib/util/colors'
import '@mdi/font/css/materialdesignicons.css'

export default {
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#ffcc04',
          secondary: colors.red.lighten4,
          text: colors.shades.black,

          background: colors.shades.white,
          backgroundNav: colors.grey.lighten4
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#ffcc04',
          secondary: colors.red.lighten4,
          text: colors.shades.white,

          background: colors.grey.darken4,
          backgroundNav: colors.grey.darken3
        }
      }
    }
  }
}
