# Projektarbeit Webengineering

## Webseite
**[Gruppenarbeit](https://dfahrni.github.io/SSG-11thy/)**

## Erläuterung und Begründung SSG

### Erläuterung SSG
Ein Static Site Generator (SSG) ist ein Werkzeug, das Entwicklern hilft, Webseiten zu erstellen, indem es statische HTML-Dateien aus Vorlagen und Inhalten generiert. Entwickler schreiben den Inhalt in einfachen Formaten wie Markdown und verwenden Templates für das Layout. Der SSG kombiniert diese Elemente und erzeugt daraus fertige, statische Webseiten.

Das Pflegen einer Webseite mit einem SSG ist einfach. Wenn neuer Inhalt hinzugefügt werden soll, erstellt der Entwickler eine neue Datei mit dem gewünschten Text oder Informationen. Danach wird der SSG ausgeführt, um die neuen HTML-Seiten zu generieren, die dann auf den Webserver hochgeladen werden. Dieser Prozess ermöglicht es, die Webseite aktuell zu halten, ohne dass komplexe Verwaltung dynamischer Inhalte erforderlich ist.

### Begründung SSG
Wir haben uns entschieden, Eleventy als unseren Static Site Generator (SSG) zu nutzen, aus mehreren wichtigen Gründen:

Beispiel vom Dozent: Unser Dozent hat Eleventy als Beispiel genutzt, was uns den Einstieg erheblich erleichtert hat. Da wir bereits mit den grundlegenden Funktionen und Konzepten vertraut sind, konnten wir ohne lange Einarbeitungszeit produktiv mit Eleventy arbeiten.

Gute Dokumentation: Eleventy bietet eine ausgezeichnete Dokumentation. Diese ist klar strukturiert und umfassend, was uns ermöglicht, schnell Antworten auf Fragen zu finden und Lösungen für Probleme zu erarbeiten. Eine gute Dokumentation ist entscheidend für effizientes Arbeiten und schnelle Fortschritte in der Entwicklung.

Einfache Installation: Eleventy lässt sich problemlos mit dem npm Package Manager installieren. Dies erleichtert die Integration in unsere bestehenden Entwicklungsprozesse und ermöglicht es uns, schnell mit der Arbeit zu beginnen. Die einfache Installation und Handhabung spart Zeit und reduziert die Komplexität der Einrichtung.

Hohe Performance: Eleventy ist einer der performantesten SSGs auf dem Markt. Seine Fähigkeit, Webseiten schnell und effizient zu generieren.

Durch die Kombination dieser Vorteile – einfache Einarbeitung dank des Beispiels unseres Dozenten, hervorragende Dokumentation, unkomplizierte Installation und hohe Performance – ist Eleventy die ideale Wahl für unser Projekt. Es ermöglicht uns, effektiv und effizient zu arbeiten und gleichzeitig eine qualitativ hochwertige und schnell ladende Webseite zu erstellen.

## Validierungsanforderung

### HTML und CSS Validierung
- **HTML Validator:** [HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdfahrni.github.io%2FSSG-11thy%2F)
- **CSS Validator:** [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdfahrni.github.io%2FSSG-11thy%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=de)

### Lighthouse Analyse
- **PageSpeed Insights:** [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-dfahrni-github-io-SSG-11thy/u6dwkbf8bt?form_factor=mobile)

## Deployment und Hosting

### Deployment
Unser Projekt wird direkt aus unserem GitHub-Repository über GitHub Pages bereitgestellt. Dabei startet unser Master-Repository eine Pipeline, die im Hintergrund Eleventy rendert und somit nur die Daten des "_site" -Ordners deployt.

[Hier](https://dfahrni.github.io/SSG-11thy/) kommst du zu unserer Webseite.

### Begründung GitHub Pages
Wir haben uns für GitHub Pages entschieden, weil es viele Vorteile bietet, die unsere Entwicklung und Bereitstellung erheblich vereinfachen.

Erstens ist GitHub Pages kostenlos, was es zu einer sehr kosteneffizienten Lösung macht. Darüber hinaus müssen wir uns keine Sorgen um SSL-Zertifikate machen, da diese automatisch bereitgestellt und verwaltet werden. Dies gewährleistet eine sichere Verbindung für unsere Webseite, ohne zusätzlichen Aufwand.

Ein weiteres Highlight ist die Integration von GitHub Actions, die uns eine leistungsstarke und flexible Pipeline zur Verfügung stellt. Mit GitHub Actions können wir automatisierte Workflows erstellen, die verschiedene Aufgaben wie Tests, Builds und Deployments ausführen.

Durch die Nutzung von Access Tokens können wir das Deployment der Webseite sicher und automatisiert auf einem separaten Branch durchführen. Dies erleichtert das Management unserer Veröffentlichungen und stellt sicher, dass nur geprüfte und genehmigte Änderungen live gehen.

Zusätzlich bietet GitHub Pages eine hervorragende Integration mit dem gesamten GitHub-Plattform, was die Zusammenarbeit im Team vereinfacht.

## Nachkorrektur

### SSG
Vergleich zu anderen SSG:

**1. Flexibilität:** Eleventy unterstützt viele Template-Sprachen wie Nunjucks, Liquid und Markdown. Das gibt uns die Freiheit, die Tools zu verwenden, die am besten zu unserem Projekt passen.

**2. Einfachheit:** Eleventy ist einfach einzurichten und zu verwenden. Im Vergleich zu komplexeren SSGs wie Gatsby, das auf React und GraphQL aufbaut, ist Eleventy leichter zu lernen und schneller zu nutzen.

**3. Anpassbarkeit:** Eleventy gibt uns keine strikten Vorgaben und lässt uns unsere eigene Struktur und Arbeitsabläufe gestalten. Das ist ein grosser Vorteil gegenüber SSGs wie Jekyll, die vordefinierte Strukturen haben.

**4. Performance:** Eleventy generiert schnelle, statische HTML-Dateien, die unsere Webseite schnell laden lassen. Obwohl Hugo bekanntlich schneller ist, bietet Eleventy für unsere Bedürfnisse ausreichend Performance.

**Quellen zur Begründung:** https://www.11ty.dev/
https://www.aleksandrhovhannisyan.com/blog/eleventy-the-good-the-bad-and-the-possum/

### Deployment
Im Vergleich bieten andere Hosting-Möglichkeiten ebenfalls Vorteile. Netlify bietet erweiterte Funktionen wie Formulare und serverlose Funktionen, ist aber für grössere Projekte kostenpflichtig. Vercel ist auf hohe Leistung und Skalierung ausgelegt, ideal für Next.js-Projekte, jedoch ebenfalls kostenpflichtig für erweiterte Funktionen. AWS S3 und CloudFront sind sehr leistungsstark und skalierbar, erfordern jedoch technisches Wissen und können bei hohem Traffic teuer werden. DigitalOcean bietet grosse Anpassungsmöglichkeiten durch virtuelle Maschinen, erfordert aber mehr technische Verwaltung und Wartung.

Zusammengefasst ist GitHub Pages eine kostenlose, einfache und sichere Hosting-Lösung, ideal für kleine bis mittelgrosse Projekte, während andere Anbieter zusätzliche Funktionen und Flexibilität bieten, jedoch oft mit höheren Kosten und mehr Komplexität verbunden sind.

**Quellen zum Deployment:** https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages
https://jamstacky.com/comparision/github-pages-vs-cloudflare-pages/

### Vergleich zu self-Hosting

Wir haben versucht, unsere Webseite selbst zu hosten, sind aber auf mehrere Probleme gestossen. Schwierigkeiten mit dem HTML Validator und das korrekte Einrichten von SSL-Zertifikaten führten dazu, dass unsere Webseite als unsicher eingestuft wurde. GeoBlocking durch Daniels pfSense Firewall schränkte die Erreichbarkeit ein, und offenstehende Ports machten die Webseite anfällig für Angriffe. Zudem war die Webseite nicht rund um die Uhr erreichbar, da sie in Daniels privater Umgebung gehostet wurde.

Deshalb haben wir uns für GitHub Pages entschieden. Es bietet eine kostenlose, sichere und zuverlässige Lösung mit automatischen SSL-Zertifikaten. Zudem ermöglicht es einfache Implementierung von Pipelines und automatisiert viele Prozesse, was unseren Entwicklungs- und Deploymentprozess erheblich vereinfacht hat.