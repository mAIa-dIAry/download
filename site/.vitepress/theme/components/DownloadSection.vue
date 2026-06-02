<script setup>
import { computed, onMounted, ref } from "vue";
import { withBase } from "vitepress";
import AppButton from "./ui/AppButton.vue";

function normalizeVersion(version) {
  if (typeof version !== "string") {
    return "";
  }

  const trimmedVersion = version.trim();

  if (!trimmedVersion) {
    return "";
  }

  return `v${trimmedVersion.replace(/^v/i, "")}`;
}

function normalizeDownloadUrl(url) {
  if (typeof url !== "string") {
    return "#";
  }

  const trimmedUrl = url.trim();

  return trimmedUrl || "#";
}

const manifestUrl = withBase("/channels/stable.json");
const brandMarkUrl = withBase("/assets/tile-icon-2048.png");
const brandLogotypeUrl = withBase("/assets/logotype.png");
const manifest = ref(null);

async function loadManifest() {
  try {
    const response = await fetch(manifestUrl, { cache: "no-store" });

    if (!response.ok) {
      return;
    }

    manifest.value = await response.json();
  } catch {
    manifest.value = null;
  }
}

const versionLabel = computed(() => {
  return (
    normalizeVersion(manifest.value?.appVersion) ||
    normalizeVersion(manifest.value?.releaseTag) ||
    "v0.0.0"
  );
});
const windowsUrl = computed(() => {
  return normalizeDownloadUrl(
    manifest.value?.desktop?.windowsUrl ??
      manifest.value?.desktop?.releasePageUrl,
  );
});
const androidUrl = computed(() => {
  return normalizeDownloadUrl(manifest.value?.android?.apkUrl);
});

onMounted(() => {
  void loadManifest();
});
</script>

<template>
  <header class="download-section">
    <div
      class="download-section__glow download-section__glow--primary"
      aria-hidden="true"
    ></div>
    <div
      class="download-section__glow download-section__glow--secondary"
      aria-hidden="true"
    ></div>
    <div class="download-section__content">
      <div class="download-section__brand">
        <img
          class="download-section__brand-mark"
          :src="brandMarkUrl"
          alt="Logo MAIA"
          width="320"
          height="320"
          loading="lazy"
          decoding="async"
        />
        <img
          class="download-section__brand-logotype"
          :src="brandLogotypeUrl"
          alt="Logotyp MAIA"
          width="2000"
          height="650"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div class="download-section__actions">
        <p class="download-section__prompt">
          <span>Pobierz</span>
          <span class="download-section__prompt-version">{{ versionLabel }}</span>
        </p>
        <AppButton
          :href="windowsUrl"
          aria-label="Pobierz na Windows"
          label="Windows"
          variant="windows"
        >
          <template #icon>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M2 3.5 11 2v9H2v-7.5Zm10 7.5V1.86L22 0v11H12Zm-10 2H11v9l-9-1.5V13Zm10 0H22v11l-10-1.86V13Z"
              />
            </svg>
          </template>
        </AppButton>

        <AppButton
          :href="androidUrl"
          aria-label="Pobierz na Android"
          label="Android"
          variant="android"
        >
          <template #icon>
            <svg viewBox="0 0 576 512" aria-hidden="true">
              <path
                d="M420.5 253.9a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-265.1 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm273.7-96.5l47.9-83c.8-1.1 1.3-2.4 1.5-3.8s.2-2.7-.1-4.1-.9-2.6-1.7-3.7-1.8-2-3-2.7-2.5-1.1-3.9-1.3-2.7 0-4 .4-2.5 1.1-3.6 1.9-1.9 2-2.5 3.2l-48.5 84.1c-38.8-17.4-80.8-26.4-123.3-26.4s-84.5 9-123.3 26.4L116.2 64.4c-.6-1.2-1.5-2.3-2.5-3.2s-2.3-1.5-3.6-1.9-2.7-.5-4-.4-2.7 .6-3.9 1.3-2.2 1.6-3 2.7-1.4 2.4-1.7 3.7-.3 2.7-.1 4.1 .8 2.6 1.5 3.8l47.9 83C64.5 202.2 8.2 285.5 0 384l576 0c-8.2-98.5-64.5-181.8-146.9-226.6z"
              />
            </svg>
          </template>
        </AppButton>
      </div>

      <p class="download-section__footer">Vxid Functixn</p>
    </div>
  </header>
</template>

<style scoped lang="scss">
.download-section {
  --hero-padding-inline: var(--space-l);
  --hero-padding-block: var(--space-xl);
  --hero-glow-size: clamp(18rem, 62vmax, 60rem);
  --hero-glow-primary-top: calc(var(--hero-glow-size) * -0.4);
  --hero-glow-primary-left: calc(var(--hero-glow-size) * -0.3);
  --hero-glow-secondary-right: calc(var(--hero-glow-size) * -0.5);
  --hero-glow-secondary-bottom: calc(var(--hero-glow-size) * -0.1);
  position: relative;
  display: flex;
  min-height: 100dvh;
  overflow: hidden;
  padding: var(--hero-padding-block) var(--hero-padding-inline);
  background:
    radial-gradient(
      circle at 28% 24%,
      rgba(117, 59, 168, 0.329),
      transparent 74%
    ),
    radial-gradient(
      circle at 70% 66%,
      rgba(142, 102, 28, 0.301),
      transparent 52%
    ),
    radial-gradient(
      circle at top left,
      rgba(25, 140, 255, 0.14),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(61, 220, 132, 0.12),
      transparent 28%
    ),
    linear-gradient(180deg, #040611 0%, #070c1b 45%, #040611 100%);

  &__glow {
    position: absolute;
    width: var(--hero-glow-size);
    aspect-ratio: 1;
    border-radius: 50%;
    filter: blur(2rem);
    opacity: 0.65;

    &--primary {
      top: var(--hero-glow-primary-top);
      left: var(--hero-glow-primary-left);
      background: radial-gradient(
        circle,
        rgba(25, 140, 255, 0.35),
        transparent 65%
      );
    }

    &--secondary {
      right: var(--hero-glow-secondary-right);
      bottom: var(--hero-glow-secondary-bottom);
      background: radial-gradient(
        circle,
        rgba(61, 220, 132, 0.22),
        transparent 65%
      );
    }
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-l);
    width: min(100%, 52rem);
    margin: 0 auto;
    text-align: center;
  }

  &__brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-m);
  }

  &__brand-mark,
  &__brand-logotype {
    display: block;
    max-width: 100%;
    filter: drop-shadow(0 1.5rem 4rem rgba(0, 0, 0, 0.3));
  }

  &__brand-mark {
    width: clamp(9rem, 32vw, 20rem);
    height: auto;
    object-fit: contain;
  }

  &__brand-logotype {
    width: min(clamp(14rem, 34vw, 24rem), 82vw);
    height: auto;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-s);
  }

  &__prompt,
  &__footer {
    margin: 0;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-text-muted);
  }

  &__prompt {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-basis: 100%;
    gap: var(--space-xs);
    font-size: 0.9rem;
    font-weight: 700;
  }

  &__prompt-version {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-2xs) var(--space-xs);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-pill);
    letter-spacing: normal;
    text-transform: none;
    background: var(--color-badge);
  }

  &__footer {
    font-size: 0.75rem;
  }
}

@media (max-width: 40rem) {
  .download-section {
    --hero-padding-inline: var(--space-m);
    --hero-padding-block: var(--space-l);
  }
}
</style>
