<script setup lang="ts">
import { ref } from 'vue'
import ProjectDialog from '@/components/ProjectDialog.vue'

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
          <h2 class="text-h6 text-primary">Magento Forests</h2>
          Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
        </v-card-title>
        <v-overlay
          :model-value="isHovering"
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
    @update:modelValue="(value: boolean) => (isDialogOpen = value)"
  />
</template>
