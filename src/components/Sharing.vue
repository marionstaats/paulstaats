<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="py-3 mt-3 project-share">
    Delen:<a
      :href="`mailto:?subject=Website Paul Staats&body=Check deze coole site: https://paulstaats.com${route.fullPath}.`"
    >
      <v-icon icon="mdi-email" class="ml-3" /> </a
    ><v-icon icon="mdi-facebook" class="ml-3" /><v-icon icon="mdi-instagram" class="ml-3" />
  </div>
</template>
