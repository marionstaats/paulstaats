<script setup lang="ts"></script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" :sm="3" class="mr-8">
        <slot name="text" />
      </v-col>
      <v-col cols="12" :sm="8"><slot name="image" /></v-col>
    </v-row>
    <slot name="footer" />
  </v-container>
</template>
