<script setup lang="ts">
import { VNavigationDrawer } from 'vuetify/components'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import Logo from '@/components/Logo.vue'
import { Routes } from '@/router/routes'
import { profileNav, projectsNav } from '@/composables/navigation'
import { isMobile } from '@/composables/isMobile'
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
    :temporary="isMobile"
    :permanent="!isMobile"
  >
    <Logo v-if="!isMobile" />

    <div class="navigation__content mt-2 d-flex flex-column justify-space-between">
      <v-list density="compact" nav>
        <v-list-group value="Projecten">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="PROJECTEN"></v-list-item>
          </template>
          <v-list-item
            v-for="({ title, to }, i) in projectsNav"
            :key="i"
            :title="title"
            :to="to"
            :value="title"
          ></v-list-item>
        </v-list-group>
        <v-list-group value="Profiel">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="PROFIEL"></v-list-item>
          </template>
          <v-list-item
            v-for="({ title, to }, i) in profileNav"
            :key="i"
            :title="title"
            :to="to"
            :value="title"
          ></v-list-item>
        </v-list-group>
        <v-list-item title="CONTACT" :to="Routes.Contact"></v-list-item>
      </v-list>
      <ThemeSwitch v-if="!isMobile" class="align-self-center pb-2" />
    </div>
  </v-navigation-drawer>
</template>
