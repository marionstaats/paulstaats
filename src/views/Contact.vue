<script setup lang="ts">
import Page from '@/components/Page.vue'
</script>

<template>
  <Page title="Contact">
    <v-card>
      <v-card-title>Adres</v-card-title>
      <v-card-text>
        <div>Sabastraat 13 7556 TH Hengelo</div>
        <div>Marten van Rossemstraat 15 6821 BA Arnhem</div></v-card-text
      >
      <v-card-item
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
          <a class="text-decoration-none" href="tel:0031621816847">06 218 168 47</a>
        </v-list-item></v-card-item
      >
      <v-card-text>
        <div>
          Architectenregister: 2.960301.002 KvK Arnhem: 61719951 ING: NL 27 INGB 0666 2788 57 BTW
          id: NL 001477655 B72
        </div>
        <div>Op een opdracht is de DNR 2011 van toepassing</div></v-card-text
      >
    </v-card>
  </Page>
</template>
