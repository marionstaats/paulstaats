<script setup lang="ts">
import { VNavigationDrawer } from 'vuetify/components'
import logo from '@/assets/images/logo-paul.png'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import { Routes } from '@/router/routes'
import router from '@/router'
import { profileNav, projectsNav } from '@/composables/navigation'
import { isMobile } from '@/composables/isMobile'

defineProps({
  modelValue: { type: Boolean, default: false }
})
</script>

<template>
  <v-navigation-drawer
    :modelValue="modelValue"
    class="bg-backgroundNav"
    :temporary="isMobile"
    :permanent="!isMobile"
  >
    <div v-if="!isMobile" class="pa-4" @click="() => router.push(Routes.Home)">
      <v-img :src="logo" />
    </div>

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
