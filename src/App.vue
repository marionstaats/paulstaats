<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { useThemeStore } from '@/stores/themeStore'
import { isMobile } from '@/composables/isMobile'
import logo from '@/assets/images/logo-paul.png'
import Navigation from '@/components/Navigation.vue'
import MobileNavigation from '@/components/MobileNavigation.vue'

onMounted(() => {
  const themeStore = useThemeStore()
  const theme = useTheme()
  theme.global.name.value = themeStore.dark ? 'dark' : 'light'
})
</script>

<template>
  <v-app>
    <v-main class="bg-background">
      <MobileNavigation v-if="isMobile" />
      <Navigation v-else />
      <router-view v-slot="{ Component }">
        <transition name="slider">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    <v-footer v-if="isMobile" :height="50" app> <v-img :src="logo" /></v-footer>
  </v-app>
</template>

<style>
.slider-enter-active {
  transition: transform 1s;
}

.slider-enter-from {
  transform: translateY(-100%);
}

.slider-enter-to {
  transform: translateY(0);
}
</style>
