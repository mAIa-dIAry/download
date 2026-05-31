<template>
  <section class="section-card">
    <div class="section-card__inner">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
.section-card {
  width: min(100%, var(--page-max-width));
  margin: 0 auto;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
    padding: var(--space-xl);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-m);
    background: var(--color-surface);
    box-shadow: 0 1.5rem 4rem -2.5rem var(--color-shadow);
  }
}

@media (max-width: 40rem) {
  .section-card__inner {
    padding: var(--space-l);
  }
}
</style>