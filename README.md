# lgbti_chronicles_armed_conflict
web application for publishing the translations to french and english of the chronicles narrated by the LGTBI+ community about their experiences in the armed conflict in Colombia

## Background images

Add these JPG files to the `./images/` folder for the dynamic background:

- `background_1.jpg` – Introduction tab (default)
- `background_2.jpg` – Second tab
- `background_3.jpg` – When any card is selected

Recommended: 1920×1080 px, under 300 KB each.

## Deployment (GitHub Pages)

### Option 1: GitHub Actions (recommended)

1. In your repo: **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` – the workflow will build and deploy automatically

The site will be available at: `https://daniposa.github.io/amplificar_la_voz/`

### Option 2: Manual deploy

From the `lgbti-chronicles-app` folder:

```bash
npm run deploy
```

Requires SSH keys configured for GitHub, or use a personal access token.
