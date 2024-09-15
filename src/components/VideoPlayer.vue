<template>
  <div class="video-container">
    <video
      :src="src"
      controls
      class="video-player"
      :poster="poster"
      preload="metadata"
    >
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  src: string;
  poster?: string;
}

defineProps<Props>();
</script>

<style scoped>
.video-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.video-player {
  width: 100%;
  height: auto;
  border-radius: 12px;
  background-color: #000;
}
</style>
