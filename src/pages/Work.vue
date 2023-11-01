<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'

const tab = ref(1)
</script>

<template>
  <div class="projects" style="margin: 0 150px">
    <v-tabs v-model="tab" align-tabs="center">
      <v-tab :value="1">ALLES</v-tab>
      <v-tab :value="2">STEDEBOUW</v-tab>
      <v-tab :value="3">PLANOLOGIE</v-tab>
      <v-tab :value="4">BUITENRUIMTE</v-tab>
      <v-tab :value="5">EVENGOED</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="n in 5" :key="n" :value="n">
        <v-container fluid>
          <v-row>
            <v-col v-for="i in 12" :key="i" cols="12" md="3">
              <ProjectCard />
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </div>
</template>
