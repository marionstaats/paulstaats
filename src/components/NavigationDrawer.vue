<script setup lang="ts">
import { VNavigationDrawer } from 'vuetify/components'
import { projectsNav } from '@/composables/navigation'
import { useThemeStore } from '@/stores/themeStore'
import { storeToRefs } from 'pinia'

defineProps({
  modelValue: { type: Boolean, default: false }
})

const themeStore = useThemeStore()
const { dark } = storeToRefs(themeStore)
</script>

<template>
  <v-navigation-drawer
    :modelValue="modelValue"
    class="bg-backgroundNav"
    temporary
    :permanent="false"
  >
    <div class="navigation__content mt-2 d-flex flex-column justify-space-between">
      <v-list density="compact" nav>
        <v-list-item
          v-for="({ title, to }, i) in projectsNav"
          :key="i"
          :title="title"
          :to="{ name: to }"
          :value="title"
        ></v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>
