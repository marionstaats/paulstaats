<script setup lang="ts">
import CoverImage from '@/components/CoverImage.vue'
</script>

<template>
  <div>
    <CoverImage
      :images="[
        'https://picsum.photos/2000/1000',
        'https://picsum.photos/2000/1001',
        'https://picsum.photos/2000/999'
      ]"
    />
    <v-container> Paul Staats en co - Stedebouwkundige plannen voor al uw tuinhuisjes </v-container>
  </div>
</template>
