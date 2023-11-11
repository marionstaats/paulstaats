<script setup lang="ts">
import triangleLeftMiddle from '@/assets/images/triangle-left-middle.svg'
import triangleRightMiddle from '@/assets/images/triangle-right-middle.svg'
import router from '@/router'
import { Routes } from '@/router/routes'
</script>

<template>
  <div class="my-5 d-flex justify-space-between project-nav">
    <div class="d-flex cursor">
      <v-img width="22px" :src="triangleLeftMiddle" class="mr-2" />Vorig project
    </div>
    <div class="cursor" @click="() => router.push({ name: Routes.Work })">Alle projecten</div>
    <div class="d-flex cursor">
      Volgend project<v-img width="22px" :src="triangleRightMiddle" class="ml-2" />
    </div>
  </div>
</template>
