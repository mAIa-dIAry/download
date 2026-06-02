<script setup>
import AppHeading from './ui/AppHeading.vue';
import SectionCard from './ui/SectionCard.vue';

function stopBackgroundClick(event) {
  const targetElement = event.target;

  if (!(targetElement instanceof Element)) {
    return;
  }

  if (
    targetElement.closest(
      'a, button, input, select, textarea, summary, label, [role="button"], [role="link"]',
    )
  ) {
    return;
  }

  event.stopPropagation();
}

const sectionParagraphs = [
  'MAIA to aplikacja dziennika z analizą notatek przez AI, która stopniowo poznaje sposób myślenia użytkownika i buduje coraz trafniejsze wsparcie.',
  'Projekt pomaga porządkować codzienne zapiski, wyłapywać wzorce emocjonalne oraz wspierać proces terapii lub autoterapii dzięki regularnej refleksji nad zapisanymi doświadczeniami.',
  'Landing pełni rolę prostego punktu wejścia do aplikacji i miejsca, w którym użytkownik może szybko zrozumieć cel produktu oraz wybrać odpowiednią wersję dla swojego systemu.',
];
</script>

<template>
  <main class="main-content" @click="stopBackgroundClick">
    <SectionCard>
      <AppHeading eyebrow="O projekcie" tag="h2" variant="section">
        Dziennik, który uczy się użytkownika
      </AppHeading>

      <p v-for="paragraph in sectionParagraphs" :key="paragraph" class="main-content__text">
        {{ paragraph }}
      </p>
    </SectionCard>
  </main>
</template>

<style scoped lang="scss">
:global(*),
:global(*::before),
:global(*::after) {
  box-sizing: border-box;
}

:global(html) {
  color-scheme: dark;
}

:global(body) {
  --color-background: #050816;
  --color-surface: rgba(14, 20, 42, 0.72);
  --color-surface-strong: rgba(20, 28, 57, 0.9);
  --color-border: rgba(255, 255, 255, 0.12);
  --color-text: #f6f8ff;
  --color-text-highlight: #e3b5f2;
  --color-text-muted: rgba(246, 248, 255, 0.72);
  --color-shadow: rgba(0, 0, 0, 0.3);
  --color-windows: #198cff;
  --color-windows-dark: #0c68d7;
  --color-android: #3ddc84;
  --color-android-dark: #169c54;
  --color-badge: rgba(255, 255, 255, 0.12);
  --page-max-width: 72rem;
  --radius-m: 1.5rem;
  --radius-pill: 999px;
  --space-2xs: 0.375rem;
  --space-xs: 0.75rem;
  --space-s: 1rem;
  --space-m: 1.5rem;
  --space-l: 2rem;
  --space-xl: 3rem;
  --space-2xl: 5rem;
  --transition-base: 180ms ease;
  margin: 0;
  min-width: 20rem;
  font-family: 'Inter', 'Segoe UI', sans-serif;
  color: #f6f8ff;
  background:
    radial-gradient(circle at top, rgba(77, 110, 255, 0.16), transparent 30%),
    #050816;
}

.main-content {
  padding: var(--space-2xl) var(--space-l);
}

.main-content__text {
  margin: 0;
  max-width: 48rem;
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--color-text-muted);
}

@media (max-width: 40rem) {
  .main-content {
    padding-inline: var(--space-m);
  }
}
</style>