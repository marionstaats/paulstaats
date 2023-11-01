<script setup lang="ts">
import triangleLeftMiddle from '@/assets/images/triangle-left-middle.svg'
import triangleRightMiddle from '@/assets/images/triangle-right-middle.svg'
</script>

<template>
  <div class="my-5 d-flex justify-space-between project-nav">
    <div class="d-flex">
      <v-img width="22px" :src="triangleLeftMiddle" class="mr-2" />Vorig project
    </div>
    <div class="d-flex">
      Volgend project<v-img width="22px" :src="triangleRightMiddle" class="ml-2" />
    </div>
  </div>
</template>
