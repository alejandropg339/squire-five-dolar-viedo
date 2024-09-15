<template>
  <div>
    <VMarkdownView :mode="mode" :content="content"></VMarkdownView>
  </div>
</template>

<script setup lang="ts">
import { VMarkdownView } from 'vue3-markdown'
import 'vue3-markdown/dist/style.css';

interface Props {
    content: string;
    mode: 'light' | 'dark';
}

defineProps<Props>()

</script>

<style scoped lang='scss'>
.markdown-body {
    background: transparent !important;
}

.markdown-body[data-theme=dark]{
    color: #fff;
}
</style>
