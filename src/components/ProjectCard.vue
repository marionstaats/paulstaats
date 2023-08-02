<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'
import ProjectDialog from '@/components/ProjectDialog.vue'
import type { Project } from '@/composables/projects'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  project: { type: Object as PropType<Project> } //, required: true
})

const isDialogOpen = ref(false)
</script>

<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card v-bind="props">
        <v-card-item>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>
        </v-card-item>
        <v-card-title>
          <h2 class="text-h6 text-primary">{{ project?.title || 'some title' }}</h2>
          {{ project?.subTitle || 'some subtitle' }}
        </v-card-title>
        <v-overlay
          :modelValue="isHovering"
          contained
          scrim="#036358"
          class="align-center justify-center"
        >
          <v-btn color="primary" @click="isDialogOpen = true">Open Dialog</v-btn>
        </v-overlay>
      </v-card>
    </template>
  </v-hover>
  <ProjectDialog
    :modelValue="isDialogOpen"
    :project="project"
    @update:modelValue="(value: boolean) => (isDialogOpen = value)"
  />
</template>
