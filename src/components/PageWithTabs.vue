<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  tabs: { type: Array, required: true }
})

const activeTab = ref(0)
</script>

<template>
  <div>yo</div>
  <!--  <v-tabs slider-color="primary" v-model="activeTab" align-tabs="center">-->
  <!--    <v-tab v-for="{ tab, i } in tabs" :key="i" :value="i">{{ tab }}</v-tab>-->
  <!--  </v-tabs>-->
  <!--  <v-window v-model="activeTab">-->
  <!--    <v-window-item v-for="n in tabs" :key="n" :value="n">-->
  <!--      <slot name="tabContent" :tab="n" />-->
  <!--    </v-window-item>-->
  <!--  </v-window>-->
</template>
