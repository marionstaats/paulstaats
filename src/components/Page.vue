<script setup lang="ts">
import { isMobile } from '@/composables/isMobile'
</script>

<template>
  <v-container :fluid="isMobile">
    <v-row justify="center">
      <v-col cols="11" :sm="3" class="mr-8">
        <slot name="text" />
      </v-col>
      <v-col cols="11" :sm="8"><slot name="image" /></v-col>
    </v-row>
    <slot name="footer" />
  </v-container>
</template>
