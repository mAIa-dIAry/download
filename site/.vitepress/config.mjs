import { defineConfig } from 'vitepress';

function normalizeBase(base) {
  const trimmedBase = base?.trim();

  if (!trimmedBase) {
    return null;
  }

  if (trimmedBase === '.' || trimmedBase === './') {
    return './';
  }

  return trimmedBase.endsWith('/') ? trimmedBase : `${trimmedBase}/`;
}

const landingBase =
  normalizeBase(process.env.LANDING_BASE) ??
  (process.env.NODE_ENV === 'production' ? '/download/' : '/');

export default defineConfig({
  lang: 'pl-PL',
  title: 'MAIA',
  description: 'MAIA to aplikacja dziennika z analizą notatek przez AI, która wspiera terapię i autoterapię.',
  base: landingBase,
  outDir: '../.site-dist',
  head: [
    ['link', { rel: 'icon', href: `${landingBase}favicon.ico` }],
    ['meta', { name: 'theme-color', content: '#050816' }],
  ],
});