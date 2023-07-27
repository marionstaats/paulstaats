<script setup lang="ts">
import Page from '@/components/Page.vue'
import Hover from '@/components/Hover.vue'
</script>

<template>
  <Page title="Alle projecten">
    <v-row>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <Hover />
      </v-col>
    </v-row>
  </Page>
</template>
