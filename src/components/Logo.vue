<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore'
import { useTheme } from 'vuetify'
import router from '@/router'
import { Routes } from '@/router/routes'
import logo from '@/assets/images/logo-paul.png'
import signatureWhite from '@/assets/images/handtekening-ps-wit.png'
import signatureBlack from '@/assets/images/handtekening-ps-black.png'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const theme = useTheme()
const { dark } = storeToRefs(themeStore)
</script>

<template>
  <div
    class="logo d-flex pa-3"
    style="cursor: pointer"
    @click="() => router.push({ name: Routes.Home })"
  >
    <v-img style="width: 100px" class="mr-4" :src="logo" />
    <v-img style="width: 213px; top: 16px" v-if="dark" :src="signatureWhite" />
    <v-img style="width: 213px; top: 16px" v-else :src="signatureBlack" />
  </div>
</template>
