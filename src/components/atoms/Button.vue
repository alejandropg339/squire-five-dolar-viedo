<template>
    <button 
        :class="`fv-button fv-button--${type} fv-button--${size} d-flex align-items-center justify-content-center`"
        @click="emit('click')"
    >
        <slot name=start></slot>
        <slot name=content></slot>
         <p v-if="label" class="mb-0">{{ label }}</p>
        <slot name=end></slot>
    </button>
</template>

<script setup lang="ts">

interface Props {
  type?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon' | 'auto';  
  label?: string;
}

const emit = defineEmits(['click']);

defineProps<Props>();

</script>

<style scoped lang="scss">

.fv-button {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;

  &--ghost{
    background-color: transparent;
    color: var(--text-color);

    &:hover {
      background-color: var(--fv-button-hover);
    }
  }

  &--primary{
    background-color: var(--fv-btn-primary-bg);
    color: var(--fv-btn-primary-color);

    &:hover {
      opacity: 0.9;
    }
  }

  &--secondary{
    background-color: var(--fv-btn-primary-bg);
    color: var(--fv-btn-primary-color);

    &:hover {
      opacity: 0.9;
    }
  }

  &--icon {
    width: 30px;
    height: 30px;
  }

  &--auto {
    width: auto;
    height: auto;
  }

  &--sm {
    width: auto;
    height: 40px;
  }

  &--md {
    width: auto;
    height: 40px;
  }

  &--lg {
    width: 110px;
    height: 40px;
  }
}
</style>