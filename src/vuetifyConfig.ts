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

          logo: '#ffcc04',

          background: colors.grey.lighten5,
          backgroundNav: colors.grey.lighten4
        }
      }
    }
  }
}
