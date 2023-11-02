<script setup lang="ts">
import { clients } from '@/composables/clients'
</script>

<template>
  <v-container>
    <div class="d-flex mb-2" v-for="{ location, description } in clients" :key="location">
      <div class="font-weight-bold mr-2">{{ location }}</div>
      <div>-</div>
      <div class="ml-2">{{ description }}</div>
    </div>
  </v-container>
</template>
