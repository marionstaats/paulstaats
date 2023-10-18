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
  <div class="logo d-flex pa-4" style="width: 220px" @click="() => router.push(Routes.Home)">
    <v-img :src="logo" />
    <v-img style="width: 45px" v-if="dark" :src="signatureWhite" />
    <v-img style="width: 45px" v-else :src="signatureBlack" />
  </div>
</template>
