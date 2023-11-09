<script setup lang="ts">
import { ref } from 'vue'
import { profileNav } from '@/composables/navigation'
import coverImage from '@/assets/images/work/0-Dorpszicht Terwolde.png'
import CoverImage from '@/components/CoverImage.vue'

const tab = ref(0)
</script>

<template>
  <div>
    <CoverImage :images="[coverImage]" />
    <v-container>
      <v-tabs style="height: 48px" slider-color="primary" v-model="tab" align-tabs="center">
        <v-tab v-for="({ title }, i) in profileNav" :key="i" :value="i">{{ title }}</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
          v-for="({ component }, i) in profileNav"
          :key="i"
          :value="component"
          :transition="false"
        >
          <Component :is="component" />
        </v-window-item>
      </v-window>
    </v-container>
  </div>
</template>
