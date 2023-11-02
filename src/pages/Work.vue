<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { workNav } from '@/composables/navigation'

const tab = ref(0)
</script>

<template>
  <div style="margin: 0 150px">
    <v-tabs slider-color="primary" v-model="tab" align-tabs="center">
      <v-tab v-for="({ title }, i) in workNav" :key="i" :value="i">{{ title }}</v-tab>
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
