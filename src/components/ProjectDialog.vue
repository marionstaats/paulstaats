<script setup lang="ts">
import ProjectCarousel from '@/components/ProjectCarousel.vue'

defineProps({
  modelValue: { type: Boolean, default: false }
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
        <ProjectCarousel />
      </v-card-item>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="$emit('update:modelValue', false)">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
