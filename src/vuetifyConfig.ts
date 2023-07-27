// @ts-ignore
import colors from 'vuetify/lib/util/colors'
import '@mdi/font/css/materialdesignicons.css'
export default {
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.red.darken1,
          secondary: colors.red.lighten4,

          background: colors.grey.lighten5,
          backgroundNav: colors.grey.lighten4
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: colors.red.darken1,
          secondary: colors.red.lighten4,

          background: colors.grey.darken4,
          backgroundNav: colors.grey.darken3
        }
      }
    }
  }
}
