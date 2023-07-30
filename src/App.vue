<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { useThemeStore } from '@/stores/themeStore'
import { isMobile } from '@/composables/isMobile'
import logo from '@/assets/images/logo-paul.png'

onMounted(() => {
  const themeStore = useThemeStore()
  const theme = useTheme()
  theme.global.name.value = themeStore.dark ? 'dark' : 'light'
})
</script>

<template>
  <v-app>
    <v-main class="bg-background">
      <RouterView />
    </v-main>
    <v-footer v-if="isMobile" :height="50" app> <v-img :src="logo" /></v-footer>
  </v-app>
</template>
