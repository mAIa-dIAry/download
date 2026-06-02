import { defineConfig } from 'vitepress';

const landingBase =
  process.env.LANDING_BASE?.trim() ||
  (process.env.NODE_ENV === 'production' ? '/download/' : '/');

export default defineConfig({
  lang: 'pl-PL',
  title: 'MAIA',
  description: 'MAIA to aplikacja dziennika z analizą notatek przez AI, która wspiera terapię i autoterapię.',
  base: landingBase,
  outDir: '../.site-dist',
  head: [
    ['meta', { name: 'theme-color', content: '#050816' }],
  ],
});