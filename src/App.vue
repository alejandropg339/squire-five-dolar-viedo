<template>
  <div :class="isDarkMode ? 'dark' : 'light'">
    <Headline 
    :theme="isDarkMode ? 'dark' : 'light'"
    @toggleTheme="toggleDarkMode" />

    <section class="content container" style="margin-top: 90px">
      <p class="text-center">To create your video, just enter the URL of the webpage you'd like a personalized 30-second video for, and we'll take care of the rest</p>

      <div class="d-flex align-items-end w-100">
      <Input
        class='flex-fill'
        id="input-url"
        v-model="url"
        placeholder="Find a webpage URL"
        :disabled="isDisabled"
        isSearchable
        label="URL"
      />

      <Button
        class="ms-2"
        type="primary"
        size="md"
        label="Generate"
       >
        <template #start>
          <img class="me-2" src="./assets/ai.svg" alt="ai-icon">
        </template>
       </Button>
      </div>

      <div class="d-flex w-100 mt-4 justify-content-center">
        <Skeleton />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import Headline from './components/Headline.vue'; 
import Input from './components/atoms/Input.vue';
import Button from './components/atoms/Button.vue';
import Skeleton from './components/atoms/Skeleton.vue';

const isDarkMode = ref(false);
const url = ref('');
const isDisabled = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light');
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
});

</script>

<style lang='scss'>
/* Definir estilos para ambos modos usando CSS variables */
:root {
  --bg-color: #fbfbfb;
  --text-color: #000000;

  // inputs
  --fv-input-bg: #ffffff;

  // buttons
  --fv-button-hover: #383838;
  --fv-btn-primary-bg: #3a3d47;
  --fv-btn-primary-color: #ffffff;

  //skeleton
  --skeleton-bg: #e0e0e0;
}

[data-theme="dark"] {
  --bg-color: #292c35;
  --text-color: #ffffff;

  // inputs
  --fv-input-bg: #3a3d47;

  // buttons
  --fv-button-hover: #3a3d47;
  --fv-btn-primary-bg: #fbfbfb;
  --fv-btn-primary-color: #000000;

  //skeleton
  --skeleton-bg: #3a3d47;
}



body {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
}

header {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--text-color);
}

main {
  padding: 2rem;
}

footer {
  padding: 1rem;
  text-align: center;
  border-top: 1px solid var(--text-color);
}

.fv-button {
  padding: 0.2rem;
  border-radius: 0.25rem;
  border: none;

  &--ghost{
    background-color: transparent;
    color: var(--text-color);

    &:hover {
      background-color: var(--fv-button-hover);
    }
  }

  &--icon {
    width: 40px;
    height: 40px;
  }
}

</style>
