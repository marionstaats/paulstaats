<script setup lang="ts">
import { VNavigationDrawer } from 'vuetify/components'
import logo from '@/assets/logo-paul.png'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
</script>

<template>
  <v-navigation-drawer class="bg-backgroundNav" permanent>
    <div class="pa-4">
      <v-img :src="logo" />
    </div>

    <v-list density="compact" nav>
      <v-list-item title="Projecten" to="/"></v-list-item>
      <v-list-item title="Profielschets" to="/profile"></v-list-item>
      <v-list-item title="Contact" to="/contact"></v-list-item>
    </v-list>
    <ThemeSwitch />
  </v-navigation-drawer>
</template>
