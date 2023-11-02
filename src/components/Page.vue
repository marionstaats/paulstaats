<script setup lang="ts"></script>

<template>
  <v-container>
    <v-row>
      <v-col cols="4" class="mr-9">
        <slot name="text" />
      </v-col>
      <v-col cols="7"><slot name="image" /></v-col>
    </v-row>
    <slot name="footer" />
  </v-container>
</template>
