<script setup lang="ts">
import { VNavigationDrawer } from 'vuetify/components'
import logo from '@/assets/images/logo-paul.png'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import { Routes } from '@/router/routes'
import router from '@/router'
import { profile, projects } from '@/composables/navigation'
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
            <v-list-item v-bind="props" title="Projecten"></v-list-item>
          </template>
          <v-list-item
            v-for="({ title, icon, to }, i) in projects"
            :key="i"
            :title="title"
            :prepend-icon="icon"
            :to="to"
            :value="title"
          ></v-list-item>
        </v-list-group>
        <v-list-group value="Profiel" prepend-icon="mdi-account">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Profiel"></v-list-item>
          </template>
          <v-list-item
            v-for="({ title, icon, to }, i) in profile"
            :key="i"
            :title="title"
            :prepend-icon="icon"
            :to="to"
            :value="title"
          ></v-list-item>
        </v-list-group>
        <v-list-item title="Contact" :to="Routes.Contact" prepend-icon="mdi-phone"></v-list-item>
      </v-list>
      <ThemeSwitch v-if="!isMobile" class="align-self-center pb-2" />
    </div>
  </v-navigation-drawer>
</template>
