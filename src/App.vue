<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
import { onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { useThemeStore } from '@/stores/themeStore'

onMounted(() => {
  const themeStore = useThemeStore()
  const theme = useTheme()
  theme.global.name.value = themeStore.dark ? 'dark' : 'light'
})
</script>

<template>
  <v-app>
    <v-main class="bg-background">
      <Navigation />
      <RouterView />
    </v-main>
  </v-app>
</template>
