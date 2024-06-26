<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore'
import triangleRightBlack from '@/assets/images/logo/triangle-right-black.svg'
import triangleRightWhite from '@/assets/images/logo/triangle-right-white.svg'
import triangleLeftBlack from '@/assets/images/logo/triangle-left-black.svg'
import triangleLeftWhite from '@/assets/images/logo/triangle-left-white.svg'
import Flipbook from 'flipbook-vue'
import { computed, onUpdated, ref } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  pages: { type: Array as PropType<Array<string>>, default: () => [] },
  imageHeight: { type: Number as PropType<number>, required: true },
  imageWidth: { type: Number as PropType<number>, required: true }
})

const TRIANGLE_SIZE = 40
const currentPage = ref(0)
const showRightTriangle = ref(true)

const themeStore = useThemeStore()
const triangle = computed(() => (themeStore.dark ? triangleRightBlack : triangleRightWhite))
const triangleLeft = computed(() => (themeStore.dark ? triangleLeftBlack : triangleLeftWhite))

const hasFlipbook = ref(false)
const styleFlipbook = ref()
const styleRightTriangle = ref()
const styleLeftTriangle = ref()

onUpdated(() => {
  if (props.imageWidth > 0) {
    const height = props.imageHeight != 0 ? props.imageHeight : props.imageWidth * 0.5622
    hasFlipbook.value = true
    styleFlipbook.value = `height: ${height}px; width: ${props.imageWidth}px`
    styleRightTriangle.value = `top: ${height - TRIANGLE_SIZE}px; left: ${props.imageWidth - TRIANGLE_SIZE}px; height: ${TRIANGLE_SIZE}px; width: ${TRIANGLE_SIZE}px`
    styleLeftTriangle.value = `top: ${height - TRIANGLE_SIZE}px; left: 0px; height: ${TRIANGLE_SIZE}px; width: ${TRIANGLE_SIZE}px`
  }
})

const flipRight = (flipbook: any) => {
  flipbook.flipRight()
  currentPage.value += 1
  if (currentPage.value === props.pages?.length - 1) {
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
  <flipbook
    v-if="hasFlipbook"
    class="flipbook"
    v-slot="flipbook"
    singlePage
    :pages="pages"
    :style="styleFlipbook"
  >
    <v-overlay modelValue contained persistent scrim="transparent">
      <div v-if="showRightTriangle" class="flipbook__right-triangle" :style="styleRightTriangle">
        <v-img :src="triangle" @click="flipRight(flipbook)" />
      </div>
      <div v-if="!showRightTriangle" class="flipbook__left-triangle" :style="styleLeftTriangle">
        <v-img :src="triangleLeft" @click="() => flipLeft(flipbook)" />
      </div> </v-overlay
  ></flipbook>
</template>
