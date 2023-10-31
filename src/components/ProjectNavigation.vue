<script setup lang="ts">
import triangleLeftMiddle from '@/assets/images/triangle-left-middle.svg'
</script>

<template>
  <div class="my-5 d-flex justify-space-between project-nav">
    <div class="d-flex">
      <v-img width="22px" :src="triangleLeftMiddle" class="mr-2" />Vorige project
    </div>
    <div>Volgende project<v-icon icon="mdi-arrow-right" class="ml-2" /></div>
  </div>
</template>
