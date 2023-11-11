<script setup lang="ts">
import type { PropType } from 'vue'
import type { Project } from '@/composables/projects'
import { getImageUrl } from '@/composables/getImage'

defineEmits(['click'])

defineProps({
  modelValue: { type: Boolean, default: false },
  project: { type: Object as PropType<Project>, required: true }
})
</script>

<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card v-bind="props" class="project-card" @click="$emit('click')">
        <v-card-item>
          <v-img :src="getImageUrl(project.image)"></v-img>
        </v-card-item>
        <v-card-title>
          {{ project.title }}
        </v-card-title>
        <v-overlay
          :modelValue="isHovering"
          contained
          scrim="transparent"
          class="align-center justify-center"
        >
        </v-overlay>
      </v-card>
    </template>
  </v-hover>
</template>
