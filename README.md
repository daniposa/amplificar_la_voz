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

## Deployment (Production – UdeA)

Production URL: `https://chibcha.udea.edu.co/amplificar_la_voz/`

From the `lgbti-chronicles-app` folder:

```bash
npm run build
```

Upload the contents of `dist/lgbti-chronicles-app/browser/` to the server's
`/amplificar_la_voz/` directory.

The web server must serve `index.html` for unknown routes (SPA routing). For
Apache, add a `.htaccess` file in `/amplificar_la_voz/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /amplificar_la_voz/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /amplificar_la_voz/index.html [L]
</IfModule>
```

To test the subpath build locally before deploying:

```bash
ng serve --configuration=github-pages
```

Then open `http://localhost:4200/amplificar_la_voz/`.
