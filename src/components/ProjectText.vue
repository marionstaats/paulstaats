<script setup lang="ts">
import audio from '@/assets/audio/Sabastraat.mp3'
</script>

<template>
  <div>
    <h2 class="mb-6">Some subtitle</h2>
    <div class="mb-6">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ip
    </div>
    <a
      class="d-flex justify-center font-weight-bold mb-6"
      href="https://paulstaats.com/"
      target="_blank"
      >Some link to somewhere</a
    >
    <div class="d-flex justify-center">
      <audio controls>
        <source :src="audio" type="audio/mpeg" />
        Uw browser ondersteunt het audio element niet.
      </audio>
    </div>
  </div>
</template>
