import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import vuetifyConfig from '@/vuetifyConfig'

const vuetify = createVuetify(vuetifyConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
