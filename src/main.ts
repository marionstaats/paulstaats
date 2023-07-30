import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.scss'

// Pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import vuetifyConfig from '@/vuetifyConfig'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const vuetify = createVuetify(vuetifyConfig)

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
