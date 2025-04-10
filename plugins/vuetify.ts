// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { ru} from 'vuetify/locale'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark'
      },
      locale: {
        locale: 'ru',
        messages: {ru}
      }
  })
  app.vueApp.use(vuetify)
})
