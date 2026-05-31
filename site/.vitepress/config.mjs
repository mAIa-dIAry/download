import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'pl-PL',
  title: 'MAIA',
  description: 'MAIA to aplikacja dziennika z analizą notatek przez AI, która wspiera terapię i autoterapię.',
  base: './',
  outDir: '../.site-dist',
  head: [
    ['meta', { name: 'theme-color', content: '#050816' }],
  ],
});