<script setup lang="ts">
import adfontem from '@/assets/images/partners/adfontem_page-0001.jpg'
import berenbroek from '@/assets/images/partners/berenbroek_page-0001.jpg'
import dagnl from '@/assets/images/partners/dagnl_page-0001.jpg'
import hurenkamp from '@/assets/images/partners/hurenkamp_page-0001.jpg'
import strategie from '@/assets/images/partners/strategie_page-0001.jpg'

const cols = 4
const colsMobile = 12
</script>

<template>
  <v-container fluid
    ><v-row justify="center">
      <v-col :cols="colsMobile" :sm="cols"><v-img :src="adfontem" /></v-col
      ><v-col :cols="colsMobile" :sm="cols"><v-img :src="berenbroek" /></v-col>
    </v-row>
    <v-row justify="center">
      <v-col :cols="colsMobile" :sm="cols"><v-img :src="hurenkamp" /></v-col
      ><v-col :cols="colsMobile" :sm="cols"><v-img :src="strategie" /></v-col>
    </v-row>
    <v-row justify="center">
      <v-col :cols="colsMobile" :sm="cols"><v-img :src="dagnl" /></v-col>
    </v-row>
  </v-container>
</template>
