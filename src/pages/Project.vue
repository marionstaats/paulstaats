<script setup lang="ts">
import Sharing from '@/components/Sharing.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import ProjectText from '@/components/ProjectText.vue'
import Flipbook from '@/components/Flipbook.vue'
import Carousel from '@/components/Carousel.vue'

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
    <v-container>
      <v-row>
        <v-col cols="6">
          <ProjectText />
        </v-col>
        <v-col cols="6"
          ><v-row class="mb-4"><Flipbook /></v-row
          ><v-row class="mb-4"><v-img src="https://picsum.photos/300/200" /></v-row
          ><v-row class="mb-4"><Carousel /></v-row
        ></v-col>
      </v-row>
      <v-row><Sharing /></v-row>
      <v-row><ProjectNavigation /></v-row>
    </v-container>
  </div>
</template>
