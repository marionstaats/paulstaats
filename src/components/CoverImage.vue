<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import { isMobile } from '@/composables/isMobile'

defineProps({
  images: { type: Array as PropType<any[]>, required: true },
  title: { type: String }
})

const height = computed(() => (isMobile ? window.innerHeight / 5 : (window.innerHeight * 2) / 3))
const titleHeight = computed(() => (isMobile ? '30px' : '60px'))
</script>

<template>
  <div class="cover-image">
    <v-carousel interval="6999" cycle hide-delimiters :show-arrows="false" :height="height">
      <v-carousel-item v-for="(item, i) in images" :key="i" :src="item" eager cover
        ><h1 v-if="title">
          {{ title }}
        </h1></v-carousel-item
      >
    </v-carousel>
  </div>
</template>
<style scoped>
h1 {
  font-size: v-bind('titleHeight');
}
</style>
