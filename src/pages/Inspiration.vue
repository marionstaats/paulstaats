<script setup lang="ts">
import Page from '@/components/Page.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { inspirations } from '@/composables/projects'
</script>

<template>
  <Page title="Inspiratie">
    <v-row>
      <v-col v-for="(inspiration, i) in inspirations" :key="i" class="d-flex child-flex" cols="4">
        <ProjectCard :project="inspiration" />
      </v-col>
    </v-row>
  </Page>
</template>
