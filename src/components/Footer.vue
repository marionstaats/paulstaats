<script setup lang="ts">
import { isMobile } from '@/composables/isMobile'
import signatureBlack from '@/assets/images/handtekening-ps-black.png'
import signatureWhite from '@/assets/images/handtekening-ps-wit.png'
import { useThemeStore } from '@/stores/themeStore'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { dark } = storeToRefs(themeStore)
</script>

<template>
  <v-footer v-if="isMobile" :height="50" app>
    <v-img :src="dark ? signatureWhite : signatureBlack"
  /></v-footer>
</template>
