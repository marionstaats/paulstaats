<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
</script>

<template>
  <v-app>
    <v-main class="bg-background">
      <Navigation />
      <RouterView />
    </v-main>
  </v-app>
</template>
