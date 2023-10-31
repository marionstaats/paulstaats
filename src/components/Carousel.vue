<script setup lang="ts">
const colors = ['green', 'secondary', 'yellow darken-4', 'red lighten-2', 'orange darken-1']
</script>

<template>
  <v-carousel :continuous="false" show-arrows="hover" hide-delimiter-background height="400">
    <template v-slot:prev="{ props }">
      <v-btn icon="mdi-arrow-left" variant="plain" @click="props.onClick" />
    </template>
    <template v-slot:next="{ props }">
      <v-btn icon="mdi-arrow-right" variant="plain" @click="props.onClick" />
    </template>
    <v-carousel-item v-for="i in colors" :key="i">
      <v-sheet :color="i" height="100%" tile />
    </v-carousel-item>
  </v-carousel>
</template>
