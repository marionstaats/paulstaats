<script setup lang="ts">
import CoverImage from '@/components/CoverImage.vue'
import dekkerswald from '@/assets/images/home/dekkerswald.png'
import inrichtingsplan from '@/assets/images/home/inrichtingsplan.png'
import velp from '@/assets/images/home/velp.png'
import terwolde from '@/assets/images/home/terwolde.png'
import snelfietsroute from '@/assets/images/home/snelfietsroute.png'
import { isMobile } from '@/composables/isMobile'
</script>

<template>
  <div>
    <CoverImage
      :images="[dekkerswald, velp, snelfietsroute, terwolde, inrichtingsplan]"
      :class="isMobile ? 'mb-2' : 'mb-8'"
    />
    <v-container
      ><h2 class="font-weight-bold">
        Persoonlijk stedebouwkundig bureau voor opgaves in stad en land, veelzijdig door kennis,
        ervaring en netwerk.
      </h2></v-container
    >
  </div>
</template>
