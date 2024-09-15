<template>
  <div class="fv-input">
    <div v-if="label" class="d-flex align-items-center justify-content-between">
      <section class="d-flex align-items-center">
        <label
          class="mb-1 fv-input-label"
          :class="{ 'fv-input-label--disabled': disabled }"
        >
          {{ label }}
        </label>
      </section>
    </div>

    <div class="fv-input__wrap position-relative">
      <input
        :id="id"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="{ 'ps-5': isSearchable }"
        :type="type === 'password' ? 'password' : undefined"
        class="fv-input__field form-control"
        @input="handleInput"
      />

      <i
        v-if="isSearchable"
        class="bx bx-search icon-search position-absolute"
      ></i>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | undefined | null;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  type?:
    | 'alphanumeric'
    | 'numeric'
    | 'letters'
    | 'anyCharacter'
    | 'url'
    | 'password';
  isSearchable?: boolean;
  label?: string;
}

withDefaults(defineProps<Props>(), {
  disabled: false,
  type: 'anyCharacter',
  isSearchable: false,
});

const emit = defineEmits(['update:modelValue'])


const handleInput = (event: any) => {
  emit('update:modelValue', event?.target?.value)
}
</script>

<style scoped lang="scss">
.fv-input {
  &__wrap {
    position: relative;
  }

  &__field {
    min-height: 40px;
    background: var(--fv-input-bg);
    color: var(--text-color);
    border: var(--cobre-input-border);
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    padding-left: 2.5rem; 

    &[type='text'],
    &[type='password'] {
      &:not(.co-input__field--error) {
        border: none;
      }
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.form-control {
      &:focus {
        color: var(--cobre-input-focus-color);
        border: var(--cobre-input-focus-border);
        outline: 0;
        box-shadow: var(--cobre-input-focus-shadow);
      }
    }
  }

  .icon-search {
    position: absolute;
    top: 50%;
    left: 10px; 
    transform: translateY(-50%);
    font-size: 1.2rem; 
    color: var(--icon-color); 
  }
}

::placeholder {
  color: #d1d1d1 !important;
  font-weight: 400;
}

</style>
