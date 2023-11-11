<script setup lang="ts">
import triangleLeftMiddle from '@/assets/images/triangle-left-middle.svg'
import triangleRightMiddle from '@/assets/images/triangle-right-middle.svg'
import router from '@/router'
import { Routes } from '@/router/routes'
import { projects } from '@/composables/projects'

const props = defineProps({
  index: { type: Number, required: true }
})

const goToPreviousProject = () => {
  const prevName =
    props.index === 0 ? projects[projects.length - 1].title : projects[props.index - 1].title
  router.push({ name: Routes.Project, params: { projectName: prevName } })
}

const goToNextProject = () => {
  const nextName =
    props.index === projects.length - 1 ? projects[0].title : projects[props.index + 1].title
  router.push({ name: Routes.Project, params: { projectName: nextName } })
}
</script>

<template>
  <div class="my-5 d-flex justify-space-between project-nav">
    <div class="d-flex cursor" @click="goToPreviousProject">
      <v-img width="22px" :src="triangleLeftMiddle" class="mr-2" />Vorig project
    </div>
    <div class="cursor" @click="() => router.push({ name: Routes.Work })">Alle projecten</div>
    <div class="d-flex cursor" @click="goToNextProject">
      Volgend project<v-img width="22px" :src="triangleRightMiddle" class="ml-2" />
    </div>
  </div>
</template>
