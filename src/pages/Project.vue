<script setup lang="ts">
import Sharing from '@/components/Sharing.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import ProjectText from '@/components/ProjectText.vue'
import Flipbook from '@/components/Flipbook.vue'
import Page from '@/components/Page.vue'
import video from '@/assets/videos/IMG_3967.mp4'
import coverImage from '@/assets/images/work/0-Dorpszicht Terwolde.png'
import smallImage from '@/assets/images/work/0-BPVelpNoord.png'
import CoverImage from '@/components/CoverImage.vue'

defineProps({
  projectName: { type: String, default: 'Some Project' }
  // project: { type: Object as PropType<Project> } //, required: true
})

const marginBottom = 'mb-6'
</script>

<template>
  <div>
    <CoverImage :images="[coverImage]" :title="projectName" class="mb-8" />
    <Page>
      <template v-slot:text>
        <ProjectText />
      </template>
      <template v-slot:image>
        <div>
          <v-row :class="marginBottom"><v-img :src="smallImage" /></v-row>
          <v-row :class="marginBottom"
            ><video width="800" height="450" controls>
              <source :src="video" type="video/mp4" />
              Uw browser ondersteunt het video element niet.
            </video></v-row
          >
          <v-row :class="marginBottom"><Flipbook /></v-row>
        </div>
      </template>
      <template v-slot:footer
        ><v-row><Sharing /></v-row> <v-row><ProjectNavigation /></v-row
      ></template>
    </Page>
  </div>
</template>
