<template>
  <header class="header w-100 d-flex justify-content-between">
    <button class='header__logo'>FiveDollarVideo</button>

    <Button
      type="ghost"
      size="icon"
      @click="handleToggleTheme"
    >
      <template #content>
        <i v-if="theme === 'light'" class="bx bx-sun"></i>
        <i v-else class="bx bx-moon"></i>
      </template>
    </Button>
  </header>
</template>

<script setup lang="ts">
import Button from './atoms/Button.vue';

interface Props {
  theme: 'light' | 'dark';
}

withDefaults(defineProps<Props>(), {
  theme: 'light',
});

const emit = defineEmits(['toggleTheme']);

const handleToggleTheme = () => {
  emit('toggleTheme');
};
</script>

<style scoped lang='scss'>

$header-height: 60px;
$background-opacity: 0.01;
$blur-amount: 10px;

.header {
    position: fixed;
    top: 0;
    width: 100%;
    height: $header-height;
    background: rgba(255, 255, 255, $background-opacity);
    backdrop-filter: blur($blur-amount);
    -webkit-backdrop-filter: blur($blur-amount);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    border: none;
 &__logo {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-color);
    border: none;
    background: transparent;
 }
}

</style>
