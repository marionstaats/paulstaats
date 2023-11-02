<script setup lang="ts">
import Page from '@/components/Page.vue'
import hengelo from '@/assets/images/hengelokaart.png'
import triangle from '@/assets/images/triangle-right-middle.svg'
</script>

<template>
  <Page>
    <template v-slot:text>
      <v-card-title>Bureau</v-card-title>
      <v-card-text>
        <div>Marten van Rossemstraat 15</div>
        <div>6821 BA Arnhem</div></v-card-text
      >
      <div class="d-flex align-center">
        <div>
          <v-card-title class="d-flex">Bezoekadres</v-card-title>
          <v-card-text>
            <div>Weusthagstraat 3</div>
            <div>7556 ZA Hengelo (O)</div></v-card-text
          >
        </div>
        <div class="d-flex"><v-img :src="triangle" style="width: 40px; height: 40px" /></div>
      </div>
      <v-card-text
        ><v-list>
          <v-list-item>
            <v-icon class="mr-2" icon="mdi-at"></v-icon>
            <a class="text-decoration-none" href="mailto:info@paulstaats.com"
              >info@paulstaats.com</a
            >
          </v-list-item>
        </v-list>
        <v-list-item>
          <v-icon class="mr-2" icon="mdi-phone"></v-icon>
          <a class="text-decoration-none" href="tel:0031621816847">06 218 168 47</a> </v-list-item
        ><v-list-item>
          <v-icon class="mr-2" icon="mdi-web"></v-icon>
          <a class="text-decoration-none">www.paulstaats.com</a>
        </v-list-item></v-card-text
      >
      <v-card-text>
        <div class="mb-1">Architectenregister: 2.960301.002</div>
        <div class="mb-1">KvK Arnhem: 61719951</div>
        <div class="mb-1">ING: NL 27 INGB 0666 2788 57</div>
        <div>BTW id: NL 001477655 B72</div></v-card-text
      >
      <v-card-text> <div>Op een opdracht is de DNR 2011 van toepassing</div></v-card-text>
    </template>
    <template v-slot:image><v-img :src="hengelo" /></template>
  </Page>
</template>
