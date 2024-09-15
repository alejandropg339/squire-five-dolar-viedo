<template>
  <div class="video-container">
    <video
      :src="src"
      controls
      class="video-player"
      :poster="poster"
      preload="metadata"
      autoplay
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
  -webkit-box-shadow: var(--skeleton-shadow);
  -moz-box-shadow: var(--skeleton-shadow);
  box-shadow: var(--skeleton-shadow);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
}

.video-player {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: #000;
}
</style>
