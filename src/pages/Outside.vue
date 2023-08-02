<script setup lang="ts">
import Page from '@/components/Page.vue'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <Page title="Buitenruimte">
    <v-row>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <ProjectCard />
      </v-col>
    </v-row>
  </Page>
</template>
