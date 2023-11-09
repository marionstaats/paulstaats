<script setup lang="ts">
import { isMobile } from '@/composables/isMobile'
import signatureBlack from '@/assets/images/handtekening-ps-black.png'
import signatureWhite from '@/assets/images/handtekening-ps-wit.png'
import { useThemeStore } from '@/stores/themeStore'
import { storeToRefs } from 'pinia'
import triangleBlack from '@/assets/images/triangle-right-black.svg'
import triangleWhite from '@/assets/images/triangle-right-white.svg'

const themeStore = useThemeStore()
const { dark } = storeToRefs(themeStore)
</script>

<template>
  <v-footer v-if="isMobile" :height="50" app class="px-0">
    <v-img
      class="signature"
      :src="dark ? signatureWhite : signatureBlack"
      height="50px"
      width="100px" /><v-img
      class="logo"
      :src="dark ? triangleBlack : triangleWhite"
      height="45px"
      width="45px"
  /></v-footer>
</template>
