<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import { Routes } from '@/router/routes'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
</script>

<template>
  <div class="navigation d-flex justify-space-between">
    <Logo />
    <div class="d-flex align-center px-4">
      <v-tabs align-tabs="end">
        <v-tab :to="{ name: Routes.Home }">PROJECTEN</v-tab>
        <v-tab :to="{ name: Routes.Profile }">PROFIELSCHETS</v-tab>
        <v-tab :to="{ name: Routes.Clients }">OPDRACHTGEVERS</v-tab>
        <v-tab :to="{ name: Routes.Contact }">CONTACT</v-tab>
      </v-tabs>
      <ThemeSwitch />
    </div>
  </div>
</template>
