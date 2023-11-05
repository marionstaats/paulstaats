<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'

defineProps({
  images: { type: Array as PropType<any[]>, required: true }
})

const height = computed(() => (window.innerHeight * 2) / 3)
</script>

<template>
  <div style="height: calc(100vh * 2 / 3)" class="cover-image mb-8">
    <v-carousel interval="6999" cycle hide-delimiters :show-arrows="false" :height="height">
      <v-carousel-item v-for="(item, i) in images" :key="i" :src="item" cover></v-carousel-item>
    </v-carousel>
  </div>
</template>
