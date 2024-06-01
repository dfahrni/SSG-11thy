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
    - Stelle sicher, dass HTML und CSS korrekt sind ([W3C HTML Validator](https://validator.w3.org), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)).
    - Stelle sicher, dass der Lighthouse Index über 90 ist ([PageSpeed Insights](https://pagespeed.web.dev/)).

## Dokumentation

### HTML und CSS Validierung

- **HTML Validator**: [W3C HTML Validator Result](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdfahrni.github.io%2FSSG-11thy%2F)
- **CSS Validator**: [W3C CSS Validator Result](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdfahrni.github.io%2FSSG-11thy%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=de)

### Lighthouse Analyse

- **PageSpeed Insights**: [PageSpeed Insights Result](https://pagespeed.web.dev/analysis/https-dfahrni-github-io-SSG-11thy/1lwpr6i6ue?form_factor=mobile)

### Verwendeter Static Site Generator (SSG)

Für dieses Projekt wurde **Eleventy** (11ty) als Static Site Generator verwendet.

**Begründung**:
- **Flexibilität**: Eleventy ist sehr flexibel und unterstützt verschiedene Templating-Sprachen.
- **Einfachheit**: Eleventy ist einfach zu konfigurieren und zu benutzen.
- **Performance**: Eleventy generiert schnelle und performante statische Webseiten.

### Deployment und Hosting

**Verwendetes Hosting**: GitHub Pages

**Begründung**:
- **Kostenlos**: GitHub Pages bietet kostenlosen Hosting-Service für statische Webseiten.
- **Integration mit GitHub**: Einfaches Deployment durch Integration mit GitHub Repository.
- **Zuverlässigkeit**: GitHub Pages ist zuverlässig und bietet eine gute Performance.

### Quellen und Hilfsmittel

- [W3C HTML Validator](https://validator.w3.org)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Eleventy Dokumentation](https://www.11ty.dev/docs/)
- [GitHub Pages Dokumentation](https://docs.github.com/en/pages)
- **KI-Tools**: Teile dieser Dokumentation wurden mit Unterstützung von OpenAI ChatGPT erstellt.

## Bewertungsraster

1. **Erläuterung und Begründung SSG (10 Punkte)**:
    - Eleventy wurde aufgrund seiner Flexibilität, Einfachheit und Performance ausgewählt.

2. **HTML (10 Punkte)**:
    - Semantisch korrekt
    - Keine Fehler und Warnungen auf [W3C HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdfahrni.github.io%2FSSG-11thy%2F)

3. **CSS (10 Punkte)**:
    - Wenige, sinnvolle Klassen und Selektoren
    - Layout funktioniert auf iPhone 11 (Emuliert in Firefox) und 13" Laptop Display
    - Keine Fehler und Warnungen auf [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdfahrni.github.io%2FSSG-11thy%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=de)

4. **Leistung, Barrierefreiheit, Best Practices, SEO (10 Punkte)**:
    - Alle über 90 auf [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-dfahrni-github-io-SSG-11thy/1lwpr6i6ue?form_factor=mobile)

5. **Deployment und verwendetes Hosting mit Begründung (10 Punkte)**:
    - Die Website ist im Internet erreichbar und wird auf GitHub Pages gehostet, aufgrund der oben genannten Vorteile.

---

Mit dieser Dokumentation sind alle erforderlichen Punkte abgedeckt. Stelle sicher, dass du die Links zu den Ergebnissen der Validatoren und PageSpeed Insights aktualisierst, sobald die entsprechenden Analysen durchgeführt wurden. Falls du weitere Anpassungen benötigst, lass es mich wissen!
