<script setup lang="ts">
import { ref } from 'vue'
import { profileNav } from '@/composables/navigation'

const tab = ref(0)
</script>

<template>
  <div style="margin: 0 150px">
    <v-tabs slider-color="primary" v-model="tab" align-tabs="center">
      <v-tab v-for="({ title }, i) in profileNav" :key="i" :value="i">{{ title }}</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="({ component }, i) in profileNav" :key="i" :value="component">
        <Component :is="component" />
      </v-window-item>
    </v-window>
  </div>
</template>
