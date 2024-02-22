<script setup lang="ts">
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import { ref } from 'vue'
import NavigationDrawer from '@/components/navigation/NavigationDrawer.vue'

const drawer = ref(false)
</script>

<template>
  <v-app-bar class="bg-background pa-2" density="compact" rounded :elevation="2">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <template v-slot:append>
      <ThemeSwitch />
    </template>
  </v-app-bar>
  <NavigationDrawer
    :modelValue="drawer"
    @update:modelValue="(value: boolean) => (drawer = value)"
  />
</template>
