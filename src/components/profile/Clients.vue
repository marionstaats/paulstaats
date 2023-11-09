<script setup lang="ts">
import { clients } from '@/composables/clients'
</script>

<template>
  <v-container fluid>
    <v-row v-for="{ location, description } in clients" :key="location">
      <v-col xs="1" sm="3" class="font-weight-bold">{{ location }}</v-col
      ><v-col>{{ description }}</v-col>
    </v-row>
  </v-container>
</template>
