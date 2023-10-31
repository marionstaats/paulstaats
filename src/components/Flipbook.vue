<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore'
import triangleRightBlack from '@/assets/images/triangle-right-black.svg'
import triangleRightWhite from '@/assets/images/triangle-right-white.svg'
import triangleLeftBlack from '@/assets/images/triangle-left-black.svg'
import triangleLeftWhite from '@/assets/images/triangle-left-white.svg'
import Flipbook from 'flipbook-vue'
import { computed, ref } from 'vue'

const pages = [
  'https://picsum.photos/300/200',
  'https://picsum.photos/300/201',
  'https://picsum.photos/300/202'
]
const currentPage = ref(0)
const showRightTriangle = ref(true)

const themeStore = useThemeStore()
const triangle = computed(() => (themeStore.dark ? triangleRightBlack : triangleRightWhite))
const triangleLeft = computed(() => (themeStore.dark ? triangleLeftBlack : triangleLeftWhite))
const flipRight = (flipbook: any) => {
  flipbook.flipRight()
  currentPage.value += 1
  if (currentPage.value === pages.length - 1) {
    showRightTriangle.value = false
  }
}
const flipLeft = (flipbook: any) => {
  flipbook.flipLeft()
  currentPage.value -= 1
  if (currentPage.value === 0) {
    showRightTriangle.value = true
  }
}
</script>

<template>
  <v-card flat rounded="0"
    ><flipbook
      class="flipbook"
      style="width: 300px; height: 200px"
      v-slot="flipbook"
      singlePage
      :pages="pages"
    >
      <v-overlay :modelValue="true" contained persistent scrim="transparent">
        <div
          v-if="showRightTriangle"
          style="position: absolute; top: 180px; left: 280px; height: 20px; width: 20px"
        >
          <v-img :src="triangle" @click="flipRight(flipbook)" />
        </div>
        <div
          v-if="!showRightTriangle"
          style="position: absolute; top: 180px; left: 0; height: 20px; width: 20px"
        >
          <v-img :src="triangleLeft" @click="() => flipLeft(flipbook)" />
        </div> </v-overlay></flipbook
  ></v-card>
</template>
