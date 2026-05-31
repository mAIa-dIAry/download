# Download page

Statyczny landing jest teraz zasilany przez VitePress i komponent Vue.

## Komendy

- npm install
- npm run dev
- npm run build

## Jak to dziala

- Zrodla strony sa w katalogu site/.
- Widok jest rozbity na komponenty AppHeading, AppButton, HeroHeader i SectionCard.
- Style sa trzymane jako SCSS bezposrednio w komponentach Vue.
- Dane do wersji i linkow pobierane sa z data.json na etapie buildu.
- npm run build generuje statyczny output do .site-dist/, a potem synchronizuje glowny index.html i artefakty statyczne do katalogu glownego projektu.