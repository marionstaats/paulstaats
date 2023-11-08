<script setup lang="ts">
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { workNav } from '@/composables/navigation'
import router from '@/router'
import { Routes } from '@/router/routes'

const tab = ref(1)
</script>

<template>
  <v-container>
    <v-tabs slider-color="primary" v-model="tab" align-tabs="center">
      <v-tab v-for="({ title }, i) in workNav" :key="i + 1" :value="i + 1">{{ title }}</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="n in 5" :key="n" :value="n">
        <v-container fluid>
          <v-row>
            <v-col v-for="i in 12" :key="i" cols="12" md="3">
              <ProjectCard
                @click="
                  () =>
                    router.push({ name: Routes.Project, params: { projectName: 'Some project' } })
                "
              />
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-container>
</template>
