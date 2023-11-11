<script setup lang="ts">
import Sharing from '@/components/Sharing.vue'
import ProjectNavigation from '@/components/ProjectNavigation.vue'
import ProjectText from '@/components/ProjectText.vue'
import Flipbook from '@/components/Flipbook.vue'
import Page from '@/components/Page.vue'
import video from '@/assets/videos/IMG_3967.mp4'
import CoverImage from '@/components/CoverImage.vue'
import { projects } from '@/composables/projects'
import { isMobile } from '@/composables/isMobile'
import { getImageUrl } from '@/composables/getImage'
import { computed, onUpdated } from 'vue'

const props = defineProps({
  projectName: { type: String, required: true }
})

const marginBottom = 'mb-6'

const projectIndex = computed(() =>
  projects.findIndex((project) => project.title === props.projectName)
)
const project = computed(() => projects[projectIndex.value])

const flipBookImagesUrl = computed(() =>
  project.value?.flipbookImages?.map((image: string) => getImageUrl(image))
)
const coverImageUrl = getImageUrl(project.value?.coverImage)

onUpdated(() => window.scrollTo(0, 0))
</script>

<template>
  <div>
    <CoverImage
      :images="[coverImageUrl]"
      :title="project?.title"
      :class="isMobile ? 'mb-2' : 'mb-8'"
    />
    <Page>
      <template v-slot:text>
        <ProjectText
          :subtitle="project?.subTitle"
          :text="project?.text"
          :link="project?.link"
          :linkText="project?.linkText"
          :audio="project?.music"
        />
      </template>
      <template v-slot:image>
        <div>
          <v-row :class="marginBottom"><v-img :src="getImageUrl(project?.image)" /></v-row>
          <v-row v-if="project?.video" :class="marginBottom"
            ><video width="800" height="450" controls>
              <source :src="video" type="video/mp4" />
              Uw browser ondersteunt het video element niet.
            </video></v-row
          >
          <v-row v-if="project?.flipbookImages" :class="marginBottom"
            ><Flipbook :pages="flipBookImagesUrl"
          /></v-row>
        </div>
      </template>
      <template v-slot:footer
        ><v-row><Sharing /></v-row> <v-row><ProjectNavigation :index="projectIndex" /></v-row
      ></template>
    </Page>
  </div>
</template>
