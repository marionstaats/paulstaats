<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import { projectsNav } from '@/composables/navigation'
import { useRoute } from 'vue-router'
import { Routes } from '@/router/routes'

const route = useRoute()
console.log(route)
</script>

<template>
  <div class="navigation d-flex justify-space-between">
    <Logo />
    <div class="d-flex align-center px-4">
      <v-tabs slider-color="primary" :hide-slider="route.name === Routes.Home" align-tabs="end">
        <v-tab v-for="({ title, to }, i) in projectsNav" :key="i" :to="{ name: to }">{{
          title
        }}</v-tab>
      </v-tabs>
      <ThemeSwitch />
    </div>
  </div>
</template>
