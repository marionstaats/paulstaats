<script setup lang="ts">
defineProps({
  projectName: { type: String, required: true }
  // project: { type: Object as PropType<Project> } //, required: true
})
</script>

<template>
  <div style="height: 550px; width: 100vw">
    <v-img cover src="https://picsum.photos/2000/1000"></v-img>
  </div>
  <div>hello</div>
  <div>{{ projectName }}</div>
</template>
