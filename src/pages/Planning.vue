<script setup lang="ts">
import Page from '@/components/Page.vue'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <Page title="Planologie">
    <v-row>
      <v-col v-for="n in 90" :key="n" class="d-flex child-flex" cols="3">
        <ProjectCard />
      </v-col>
    </v-row>
  </Page>
</template>
