# Gruppenarbeit Web-Engineering

## Projektbeschreibung

Erstelle eine Website für dich persönlich oder ein Projekt deiner Wahl und deploye sie auf einem geeigneten Hosting für statische Webseiten.

## Anforderungen

1. **HTML-Grundstruktur und CSS-Layout**:
    - Erstelle eine einfache HTML-Grundstruktur und ein CSS-Layout, das für möglichst viele verschiedene Bildschirme funktioniert.

2. **Meta-Tags**:
    - Setze geeignete Meta-Tags, damit eine Suchmaschine die Seite optimal indexieren kann.

3. **Static Site Generator (SSG)**:
    - Nutze für die Inhalte einen Static Site Generator (SSG), der aus Markdown-Files Webseiten rendert. Implementiere das erstellte Theme.

4. **Deployment**:
    - Deploye die Website auf einem Hosting für statische Webseiten direkt und automatisch aus dem Git Repository.

5. **Validierung**:
    - Stelle sicher, dass HTML und CSS korrekt sind ([W3C HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdfahrni.github.io%2FSSG-11thy%2F), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdfahrni.github.io%2FSSG-11thy%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=de)).
    - Stelle sicher, dass der Lighthouse Index über 90 ist ([PageSpeed Insights](https://pagespeed.web.dev/analysis/https-dfahrni-github-io-SSG-11thy/1lwpr6i6ue?form_factor=mobile)).

## Implementierungsschritte

### 1. Einrichtung des Projekts mit WebStorm

- Öffne WebStorm.
- Erstelle ein neues Projekt.
- Erstelle die grundlegende HTML-Struktur und das CSS-Layout.

### 2. Repository auf GitHub erstellen

- Erstelle ein neues Repository auf GitHub.
- Klone das Repository in dein lokales Projektverzeichnis.

### 3. Static Site Generator: Eleventy

**Installation und Einrichtung**:
- Installiere Eleventy (11ty) über npm:
  ```bash
  npm install -g @11ty/eleventy

- Erstelle eine index.md Datei:
  ```bash
  echo '# Page header' > index.md

- Erstelle eine Konfigurationsdatei .eleventy.js:
  ```js
  // .eleventy.js
  module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "css/styles.css": "styles.css" });
  eleventyConfig.ignores.add("#Doku");
  eleventyConfig.ignores.add("README.md");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
  };

### 4. Deployment mit GitHub Pages

Branch erstellen:

- Erstelle den gh-pages Branch:
  ```bash
  git checkout --orphan gh-pages
  git reset --hard
  git commit --allow-empty -m "Initializing gh-pages branch"
  git push origin gh-pages
  git checkout master

GitHub Actions Workflow:
- Erstelle eine Datei .github/workflows/deploy.yml:
 ```bash
name: Build and Deploy

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Build site with Eleventy
        run: npx @11ty/eleventy

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

## Erklärung der deploy.yml Datei
- Workflow-Auslösung: Der Workflow wird bei jedem Push zum master Branch ausgelöst.
- Node.js Setup: Der Workflow setzt Node.js auf und installiert die Abhängigkeiten.
- Build und Deployment: Eleventy wird ausgeführt, um die statischen Seiten zu generieren und der Inhalt des _site Ordners wird auf den gh-pages Branch gepusht.

## Verwendung von GitHub Token
- Erstellung eines Personal Access Tokens (PAT): Gehe zu deinen GitHub-Einstellungen und erstelle ein neues Token mit den notwendigen Berechtigungen (repo).
- Hinzufügen des Tokens als Secret: Füge das Token als Secret GITHUB_TOKEN in den Repository-Einstellungen hinzu.

## 6. Lokale Entwicklung und Vorab-Rendering

- Installation der Abhängigkeiten:
 ```bash
npm install
```

- Lokales Rendering:
 ```bash
npx @11ty/eleventy
```


## Validierung und Analyse
### HTML und CSS Validierung:

HTML Validator: [W3C HTML Validator Result](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdfahrni.github.io%2FSSG-11thy%2F)  
CSS Validator: [W3C CSS Validator Result](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdfahrni.github.io%2FSSG-11thy%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=de)
### Lighthouse Analyse:

PageSpeed Insights: [PageSpeed Insights Result](https://pagespeed.web.dev/analysis/https-dfahrni-github-io-SSG-11thy/1lwpr6i6ue?form_factor=mobile)
## Dokumentation
HTML Validator: [W3C HTML Validator Result]()  
CSS Validator: [W3C CSS Validator Result]()  
PageSpeed Insights: [PageSpeed Insights Result]()
### Quellen und Hilfsmittel
- W3C HTML Validator  
- W3C CSS Validator  
- PageSpeed Insights  
- Eleventy Dokumentation  
- GitHub Pages Dokumentation  
- KI-Tools: Teile dieser Dokumentation wurden mit Unterstützung von OpenAI ChatGPT erstellt.
## Bewertungsraster
Erläuterung und Begründung SSG (10 Punkte):

Eleventy wurde aufgrund seiner Flexibilität, Einfachheit und Performance ausgewählt.
### HTML (10 Punkte):

Semantisch korrekt
Keine Fehler und Warnungen auf W3C HTML Validator
### CSS (10 Punkte):

Wenige, sinnvolle Klassen und Selektoren
Layout funktioniert auf iPhone 11 (Emuliert in Firefox) und 13" Laptop Display
Keine Fehler und Warnungen auf W3C CSS Validator
Leistung, Barrierefreiheit, Best Practices, SEO (10 Punkte):

Alle über 90 auf PageSpeed Insights
Deployment und verwendetes Hosting mit Begründung (10 Punkte):

Die Website ist im Internet erreichbar und wird auf GitHub Pages gehostet, aufgrund der oben genannten Vorteile.