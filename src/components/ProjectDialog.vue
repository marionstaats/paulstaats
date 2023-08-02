<script setup lang="ts">
import ProjectCarousel from '@/components/ProjectCarousel.vue'
import type { PropType } from 'vue'
import type { Project } from '@/composables/projects'

defineEmits(['update:modelValue'])

defineProps({
  modelValue: { type: Boolean, default: false },
  project: { type: Object as PropType<Project> } //, required: true
})
</script>

<template>
  <v-dialog
    :modelValue="modelValue"
    width="auto"
    @update:modelValue="(value: boolean) => $emit('update:modelValue', value)"
  >
    <v-card>
      <v-card-item>
        <ProjectCarousel :imgSource="project?.imgSource" />
      </v-card-item>
      <v-card-text>
        {{
          project?.text ||
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="$emit('update:modelValue', false)">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
