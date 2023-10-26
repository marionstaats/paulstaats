<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'

defineProps({
  projectName: { type: String, required: true }
  // project: { type: Object as PropType<Project> } //, required: true
})

const colors = ['green', 'secondary', 'yellow darken-4', 'red lighten-2', 'orange darken-1']
</script>

<template>
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
        <h1>Some title</h1>
        <h3>Some subtitle</h3>
        <span
          >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book. It
          has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of Lorem Ip</span
        >
      </v-col>
      <v-col cols="6"
        ><v-row class="mb-4"
          ><v-carousel
            :continuous="false"
            show-arrows="hover"
            hide-delimiter-background
            height="400"
          >
            <template v-slot:prev="{ props }">
              <v-btn icon="mdi-arrow-left" variant="plain" @click="props.onClick" />
            </template>
            <template v-slot:next="{ props }">
              <v-btn icon="mdi-arrow-right" variant="plain" @click="props.onClick" />
            </template>
            <v-carousel-item v-for="i in colors" :key="i">
              <v-sheet :color="i" height="100%" tile />
            </v-carousel-item> </v-carousel></v-row
        ><v-row class="mb-4"><v-img src="https://picsum.photos/300/200" /></v-row
        ><v-row class="mb-4"><v-img src="https://picsum.photos/300/200" /></v-row
      ></v-col>
    </v-row>
  </v-container>
</template>
