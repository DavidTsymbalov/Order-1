# School of Informed Risk

Сайт-визитка программы «Университет длинной дистанции».

**GitHub Pages:** https://davidtsymbalov178-crypto.github.io/Order-1/

## Локально

```bash
npm install
npm run dev
```

Сборка под GitHub Pages:

```bash
npm run build:pages
```

## GitHub Pages

1. В репозитории: **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. После merge в `main` workflow `.github/workflows/deploy-pages.yml` сам соберёт и опубликует сайт
3. Либо вручную: Actions → **Deploy to GitHub Pages** → Run workflow

Сайт открывается по адресу: `https://davidtsymbalov178-crypto.github.io/Order-1/`
