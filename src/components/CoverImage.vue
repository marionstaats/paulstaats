<script setup lang="ts">
defineProps({
  image: { required: true }
})
</script>

<template>
  <div style="height: 600px" class="mb-8">
    <v-img cover :src="image" />
  </div>
</template>
