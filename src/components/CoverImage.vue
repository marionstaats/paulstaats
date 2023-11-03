<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  images: { type: Array as PropType<any[]>, required: true }
})
</script>

<template>
  <div style="height: 600px" class="mb-8">
    <v-carousel interval="6999" cycle hide-delimiters :show-arrows="false">
      <v-carousel-item v-for="(item, i) in images" :key="i" :src="item" cover></v-carousel-item>
    </v-carousel>
  </div>
</template>
