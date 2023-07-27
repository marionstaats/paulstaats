<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { useTheme } from 'vuetify'

const themeStore = useThemeStore()
const theme = useTheme()
const themeDark = ref(themeStore.dark)
</script>

<template>
  <v-switch
    class="float-right"
    v-model="themeDark"
    style="width: max-content"
    @update:modelValue="() => themeStore.switch(theme)"
  >
    <template v-slot:prepend><v-icon icon="mdi-white-balance-sunny" /></template
    ><template v-slot:append><v-icon icon="mdi-moon-waning-crescent" /></template
  ></v-switch>
</template>
