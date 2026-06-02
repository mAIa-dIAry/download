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
- Landing pobiera aktualne linki i wersje w runtime z channels/stable.json.
- W dev VitePress dziala z baza /, a build produkcyjny z baza /download/, bo taki jest docelowy project path na GitHub Pages dla repo download.
- Inny target deployu mozna obsluzyc przez zmienna srodowiskowa LANDING_BASE.
- npm run build generuje statyczny output do .site-dist/, a potem synchronizuje glowny index.html i artefakty statyczne do katalogu glownego projektu.

## Kontekst procesu

- Szczegoly publicznego flow release, manifestu i Pages sa opisane w LOGS.md.
