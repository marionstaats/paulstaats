<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore'
import triangleRightBlack from '@/assets/images/logo/triangle-right-black.svg'
import triangleRightWhite from '@/assets/images/logo/triangle-right-white.svg'
import triangleLeftBlack from '@/assets/images/logo/triangle-left-black.svg'
import triangleLeftWhite from '@/assets/images/logo/triangle-left-white.svg'
import Flipbook from 'flipbook-vue'
import { computed, ref } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  pages: { type: Array as PropType<Array<string>>, default: () => [] }
})

const currentPage = ref(0)
const showRightTriangle = ref(true)

const themeStore = useThemeStore()
const triangle = computed(() => (themeStore.dark ? triangleRightBlack : triangleRightWhite))
const triangleLeft = computed(() => (themeStore.dark ? triangleLeftBlack : triangleLeftWhite))

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
    class="flipbook"
    v-slot="flipbook"
    singlePage
    :pages="pages"
  >
    <v-overlay modelValue contained persistent scrim="transparent">
      <div
        v-if="showRightTriangle"
        class="flipbook__right-triangle"
      >
        <v-img :src="triangle" @click="flipRight(flipbook)" />
      </div>
      <div
        v-if="!showRightTriangle"
        class="flipbook__left-triangle"
      >
        <v-img :src="triangleLeft" @click="() => flipLeft(flipbook)" />
      </div> </v-overlay
  ></flipbook>
</template>
