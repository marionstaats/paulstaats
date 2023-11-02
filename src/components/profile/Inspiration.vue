<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="i in 12" :key="i" cols="12" md="3">
        <ProjectCard />
      </v-col>
    </v-row>
  </v-container>
</template>
