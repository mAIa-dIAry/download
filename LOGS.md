# Logs

## Cel

Ten plik opisuje kontekst techniczny procesu publikacji publicznego repo `download`.

Repo `download` jest publicznym punktem dystrybucji dla:

- landingu publikowanego na GitHub Pages,
- `channels/stable.json`,
- publicznego releasu z binarkami desktop, APK i OTA.

## Źródło danych

- Prywatne repo `app` buduje artefakty i publikuje prywatny release.
- Workflow w repo `app` kopiuje assety do publicznego releasu w repo `download`.
- Ten sam workflow generuje `channels/stable.json` i commit do repo `download`.
- Repo `download` publikuje landing i manifest przez GitHub Pages.

## Przepływ

1. W repo `app` uruchamiane jest `yarn build`.
2. W repo `app` uruchamiane jest `yarn release`.
3. Release w repo `app` uruchamia workflow `Publish Download Release Assets`.
4. Workflow pobiera assety z releasu `app`.
5. Workflow tworzy albo aktualizuje publiczny release o tym samym tagu w repo `download`.
6. Workflow generuje `channels/stable.json` z URL-ami do `github.com/mAIa-dIAry/download/releases/download/<tag>/...`.
7. Workflow commituję nowy manifest do repo `download`.
8. Push do repo `download` uruchamia workflow `Deploy Landing` i publikuje stronę na GitHub Pages.

## Oczekiwane artefakty

Publiczny release w repo `download` powinien zawierać co najmniej:

- `latest.yml`,
- installer Windows `.exe`,
- `.exe.blockmap`,
- plik APK,
- zip OTA.

## Gdzie szukać problemu

Jeśli landing działa, ale release nie ma kompletu assetów:

- sprawdź workflow `Publish Download Release Assets` w repo `app`,
- sprawdź krok `Verify downloaded app release assets`,
- porównaj listę plików z `dist/release/<version>` w repo `app` z publicznym releasem `download`.

Jeśli release jest poprawny, ale mobile nie widzi aktualizacji:

- sprawdź zawartość `channels/stable.json`,
- sprawdź `releaseTag`, `android.apkUrl`, `ota.url`, `ota.checksum`,
- sprawdź, czy `minNativeBuild` i `targetNativeBuild` pasują do bieżącego builda Androida.

Jeśli landing nie pokazuje aktualnych danych:

- sprawdź workflow `Deploy Landing` w repo `download`,
- sprawdź, czy push z manifestem dotarł do `main`,
- sprawdź, czy Pages publikuje aktualny katalog `.site-dist` i `channels/`.

## Sekrety i uprawnienia

- `GITHUB_TOKEN` albo `GH_TOKEN` lokalnie: potrzebny do `yarn release` w repo `app`.
- `DOWNLOAD_REPO_PUSH_TOKEN` w repo `app`: potrzebny workflow do zapisu releasu i manifestu w repo `download`.

## Szybka kontrola po releasie

1. W repo `app` istnieje release z tagiem `vX.Y.Z`.
2. W repo `download` istnieje release z tym samym tagiem.
3. Publiczny release ma komplet assetów.
4. `channels/stable.json` wskazuje URL-e do releasu `download`.
5. GitHub Pages serwuje aktualny landing i manifest.