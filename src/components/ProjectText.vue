<script setup lang="ts">
import { getAudioUrl } from '@/composables/getSrcURL'

defineProps({
  subtitle: { type: String },
  text: { type: String },
  link: { type: String },
  linkText: { type: String },
  music: { type: String }
})
</script>

<template>
  <div>
    <h2 v-if="subtitle" class="mb-6">{{ subtitle }}</h2>
    <div class="project-text mb-6">
      {{ text }}
    </div>
    <a
      v-if="link"
      class="d-flex justify-center font-weight-bold mb-6"
      :href="link"
      target="_blank"
      >{{ linkText }}</a
    >
    <div v-if="music" class="d-flex justify-center">
      <audio controls>
        <source :src="getAudioUrl(music)" type="audio/mpeg" />
        Uw browser ondersteunt het audio element niet.
      </audio>
    </div>
  </div>
</template>
