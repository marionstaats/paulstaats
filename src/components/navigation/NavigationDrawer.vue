<script setup lang="ts">
import { VNavigationDrawer } from 'vuetify/components'
import { mainNav } from '@/composables/navigation'

defineProps({
  modelValue: { type: Boolean, default: false }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <v-navigation-drawer
    :modelValue="modelValue"
    @update:modelValue="(value: boolean) => $emit('update:modelValue', value)"
    class="bg-background"
    temporary
    :permanent="false"
  >
    <div class="navigation__content mt-2 d-flex flex-column justify-space-between">
      <v-list density="compact" nav>
        <v-list-item
          v-for="({ title, to }, i) in mainNav"
          :key="i"
          :title="title"
          :to="{ name: to }"
          :value="title"
        ></v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>
