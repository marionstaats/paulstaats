<script setup lang="ts">
import type { PropType } from 'vue'
import type { Project } from '@/composables/projects'
import { Routes } from '@/router/routes'
import router from '@/router'

defineProps({
  modelValue: { type: Boolean, default: false },
  project: { type: Object as PropType<Project> } //, required: true
})

//  <v-img
// :src="
//     `/${project?.imageFolder}/${project?.images[0]}` ||
//   'https://cdn.vuetifyjs.com/images/cards/forest-art.jpg'
// "
// ></v-img>
</script>

<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        class="project-card"
        @click="
          () => router.push({ name: Routes.Project, params: { projectName: 'Some project' } })
        "
      >
        <v-card-item>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>
        </v-card-item>
        <v-card-title>
          <h2 class="text-h6 text-primary">{{ project?.title || 'some title' }}</h2>
          {{ project?.subTitle }}
        </v-card-title>
        <v-overlay
          :modelValue="isHovering"
          contained
          scrim="transparent"
          class="align-center justify-center"
        >
          <h1 style="color: white">hello there</h1>
        </v-overlay>
      </v-card>
    </template>
  </v-hover>
</template>
