<script setup lang="ts">
import type { PropType } from 'vue'
import type { Project } from '@/composables/projects'
import smallImage from '@/assets/images/work/0-BPVelpNoord.png'

defineEmits(['click'])

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
      <v-card v-bind="props" class="project-card" @click="$emit('click')">
        <v-card-item>
          <v-img :src="smallImage"></v-img>
        </v-card-item>
        <v-card-title>
          {{ project?.title || 'some title' }}
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
