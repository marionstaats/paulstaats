<script setup lang="ts">
import Page from '@/components/Page.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/composables/projects'
</script>

<template>
  <Page title="STEDEBOUW">
    <v-row>
      <v-col v-for="(project, i) in projects" :key="i" class="d-flex child-flex" cols="4">
        <ProjectCard :project="project" />
      </v-col>
    </v-row>
  </Page>
</template>
