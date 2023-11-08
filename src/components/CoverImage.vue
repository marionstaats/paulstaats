<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'

defineProps({
  images: { type: Array as PropType<any[]>, required: true },
  title: { type: String }
})

const height = computed(() => (window.innerHeight * 2) / 3)
</script>

<template>
  <div style="height: calc(100vh * 2 / 3)" class="cover-image">
    <v-carousel interval="6999" cycle hide-delimiters :show-arrows="false" :height="height">
      <v-carousel-item v-for="(item, i) in images" :key="i" :src="item" eager cover
        ><h1
          v-if="title"
          style="color: white; font-size: 60px; font-weight: 600; text-transform: uppercase"
        >
          {{ title }}
        </h1></v-carousel-item
      >
    </v-carousel>
  </div>
</template>
