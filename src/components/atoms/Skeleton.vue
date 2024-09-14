<template>
  <div class="skeleton"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.skeleton {
  width: 70vw;
  height: 0;
  padding-top: 50%;
  background-color: var(--skeleton-bg);
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  /* Animación de shimmer */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -150%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: shimmer 1.1s infinite;
  }
}

/* Animación de shimmer */
@keyframes shimmer {
  0% {
    left: -150%;
  }
  100% {
    left: 150%;
  }
}
</style>
