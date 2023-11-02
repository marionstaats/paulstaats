<script setup lang="ts">
import Sharing from '@/components/Sharing.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import ProjectText from '@/components/ProjectText.vue'
import Flipbook from '@/components/Flipbook.vue'

defineProps({
  projectName: { type: String, default: 'Some Project' }
  // project: { type: Object as PropType<Project> } //, required: true
})
</script>

<template>
  <div>
    <div style="height: 600px; width: 100vw" class="mb-8">
      <v-img cover src="https://picsum.photos/2000/1000" class="d-flex align-center justify-center"
        ><h1
          style="
            color: white;
            font-size: 60px;
            font-weight: 600;
            text-transform: uppercase;
            text-align: center;
          "
        >
          {{ projectName }}
        </h1></v-img
      >
    </div>
    <Page>
      <template v-slot:text>
        <ProjectText />
      </template>
      <template v-slot:image>
        <v-row class="mb-4"><Flipbook /></v-row
        ><v-row class="mb-4"><v-img src="https://picsum.photos/400/200" /></v-row>
        <v-row><Sharing /></v-row>
        <v-row><ProjectNavigation /></v-row>
      </template>
    </Page>
  </div>
</template>
