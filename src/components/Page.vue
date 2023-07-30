<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
import { isMobile } from '@/composables/isMobile'
import MobileNavigation from '@/components/MobileNavigation.vue'

defineProps({
  title: { type: String, default: 'Paul Staats' }
})
</script>

<template>
  <MobileNavigation v-if="isMobile" />
  <Navigation :modelValue="!isMobile" />
  <v-container fluid>
    <h1 class="mb-5">{{ title }}</h1>
    <slot></slot>
  </v-container>
</template>
