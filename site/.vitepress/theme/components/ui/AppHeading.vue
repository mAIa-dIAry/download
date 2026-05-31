<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  badge: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: 'h2',
  },
  variant: {
    type: String,
    default: 'section',
  },
});
</script>

<template>
  <div class="app-heading" :class="`app-heading--${variant}`">
    <p v-if="eyebrow" class="app-heading__eyebrow">{{ eyebrow }}</p>
    <div class="app-heading__title-row">
      <component :is="tag" class="app-heading__title">
        <slot />
      </component>
      <span v-if="badge" class="app-heading__badge">{{ badge }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-heading {
  display: grid;
  gap: var(--space-s);

  &__eyebrow,
  &__title {
    margin: 0;
  }

  &__eyebrow {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  &__title-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-s);
  }

  &__title {
    line-height: 0.98;

    :deep(span) {
      color: var(--color-text-highlight);
    }
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-2xs) var(--space-xs);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-pill);
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--color-text-muted);
    background: var(--color-badge);
  }

  &--hero {
    justify-items: center;
    text-align: center;

    .app-heading__title-row {
      justify-content: center;
    }

    .app-heading__title {
      font-size: clamp(2.15rem, 4.8vw, 4.1rem);
      font-weight: 700;
      letter-spacing: -0.06em;
    }
  }

  &--section {
    .app-heading__title {
      font-size: clamp(2rem, 4vw, 3rem);
      line-height: 1.05;
    }
  }
}
</style>