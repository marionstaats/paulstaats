import { defineStore } from 'pinia'
import type { ThemeInstance } from 'vuetify'

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      dark: false
    }
  },
  actions: {
    switch(theme: ThemeInstance) {
      this.dark = !this.dark
      theme.global.name.value = this.dark ? 'dark' : 'light'
    }
  },
  persist: true
})
