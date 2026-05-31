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
</script>

<template>
  <a
    class="app-button"
    :class="`app-button--${variant}`"
    :href="href"
    :aria-label="ariaLabel || label"
    :aria-disabled="String(isUnavailable)"
    :data-unavailable="isUnavailable ? 'true' : null"
  >
    <span class="app-button__icon" aria-hidden="true">
      <slot name="icon" />
    </span>
    <span class="app-button__label">{{ label }}</span>
  </a>
</template>

<style scoped lang="scss">
.app-button {
  --button-bg: var(--color-surface-strong);
  --button-shadow: transparent;
  --button-overlay-opacity: 0;
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  min-width: 11.5rem;
  padding: 0.95rem 1.3rem;
  border: 1px solid transparent;
  border-radius: var(--radius-pill);
  color: var(--color-text);
  text-decoration: none;
  background: var(--button-bg);
  box-shadow: 0 1rem 2rem -1.2rem var(--button-shadow);
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base),
    filter var(--transition-base),
    opacity var(--transition-base);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: inherit;
    background: rgba(5, 8, 22, 0.28);
    opacity: var(--button-overlay-opacity);
    pointer-events: none;
    transition: opacity var(--transition-base);
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-0.125rem);
    filter: brightness(1.05);
  }

  &[data-unavailable='true'] {
    --button-overlay-opacity: 1;
    box-shadow: 0 1rem 2rem -1.2rem rgba(0, 0, 0, 0.18);
  }

  &--windows {
    --button-bg: linear-gradient(135deg, var(--color-windows), var(--color-windows-dark));
    --button-shadow: rgba(25, 140, 255, 0.45);
  }

  &--android {
    --button-bg: linear-gradient(135deg, var(--color-android), var(--color-android-dark));
    --button-shadow: rgba(61, 220, 132, 0.4);
  }

  &__icon {
    position: relative;
    z-index: 1;
    display: inline-flex;
    width: 1.25rem;
    height: 1.25rem;
    flex: 0 0 auto;

    :deep(svg) {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  }

  &__label {
    position: relative;
    z-index: 1;
    font-size: 1rem;
    font-weight: 700;
  }
}
</style>