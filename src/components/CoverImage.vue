<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  image: { type: [String, Object, undefined] as PropType<any>, required: true }
})
</script>

<template>
  <div style="height: 600px" class="mb-8">
    <v-img cover :src="image" />
  </div>
</template>
