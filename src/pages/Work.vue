<script setup lang="ts">
import type { PropType } from 'vue'
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { workNav, WorkTypes } from '@/composables/navigation'
import router from '@/router'
import { Routes } from '@/router/routes'
import type { Project } from '@/composables/projects'
import { projects } from '@/composables/projects'
import { isMobile } from '@/composables/isMobile'

const props = defineProps({
  content: { type: Object as PropType<WorkTypes> }
})

const tab = ref(null)

const activeProjects = (workType: WorkTypes) =>
  props.content
    ? props.content === WorkTypes.ALL
      ? projects
      : projects.filter((project: Project) => project.type.includes(props.content!))
    : workType === WorkTypes.ALL
      ? projects
      : projects.filter((project: Project) => project.type.includes(workType))
</script>

<template>
  <v-container>
    <v-tabs v-if="!isMobile" show-arrows slider-color="primary" v-model="tab" align-tabs="center">
      <v-tab v-for="{ title } in workNav" :key="title" :value="title">{{ title }}</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="{ title } in workNav" :key="title" :value="title">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(project, i) in activeProjects(title as WorkTypes)"
              :key="i"
              cols="12"
              md="3"
            >
              <ProjectCard
                :title="project.title"
                :imageFolder="`work/${project.title}`"
                :image="project.image"
                @click="
                  () =>
                    router.push({
                      name: Routes.Project,
                      params: { projectName: project.title }
                    })
                "
              />
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-container>
</template>
