<script setup lang="ts">
import Navigation2 from '@/components/Navigation2.vue'
import { isMobile } from '@/composables/isMobile'
import MobileNavigation from '@/components/MobileNavigation.vue'

defineProps({
  title: { type: String, default: 'Paul Staats' }
})
</script>

<template>
  <MobileNavigation v-if="isMobile" />
  <Navigation2 :modelValue="!isMobile" />
  <v-container fluid>
    <h1 class="mb-5">{{ title }}</h1>
    <slot></slot>
  </v-container>
</template>
