<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { ref } from 'vue'
import smallImage from '@/assets/images/work/0-BPVelpNoord.png'

const dialog = ref(false)
</script>

<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col v-for="i in 12" :key="i" cols="12" md="3">
          <ProjectCard @click="() => (dialog = true)" />
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" width="80vw">
      <v-img :src="smallImage" />
    </v-dialog>
  </div>
</template>
