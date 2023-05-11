<script setup lang="ts">
defineProps({
  title: { type: String, default: 'Paul Staats' }
})
</script>

<template>
  <v-container fluid>
    <h1 class="mb-5">{{ title }}</h1>
    <slot></slot>
  </v-container>
</template>
<script setup lang="ts"></script>
