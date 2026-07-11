<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: {
    type: String,
    default: '#',
  },
  label: {
    type: String,
    required: true,
  },
  ariaLabel: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'windows',
  },
});

const isUnavailable = computed(() => props.href === '#');

function handleClick(event) {
  if (isUnavailable.value) {
    event.preventDefault();
  }
}
</script>

<template>
  <a
    class="app-button app-button--gradient app-button--size-big"
    :class="`app-button--${variant}`"
    :href="href"
    :aria-label="ariaLabel || label"
    :aria-disabled="String(isUnavailable)"
    @click="handleClick"
  >
    <span class="app-button__gradient-layers" aria-hidden="true">
      <span class="app-button__gradient-fill" />
    </span>
    <span class="app-button__content">
      <span class="app-button__icon" aria-hidden="true">
        <slot name="icon" />
      </span>
      <span class="app-button__label">{{ label }}</span>
    </span>
  </a>
</template>

<style scoped lang="scss">
@use '../../styles/abyss-button';

.app-button--windows {
  --gradient-from: #58b4ff;
  --gradient-to: #522fba;
}

.app-button--android {
  --gradient-from: #62ea9f;
  --gradient-to: #067078;
}
</style>
