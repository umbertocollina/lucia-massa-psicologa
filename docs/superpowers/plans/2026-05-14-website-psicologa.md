# Website Dott.ssa Lucia Massa — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 4-page professional website for a psychologist in Salerno using pure HTML/CSS/JS with warm earthy design, responsive layout, scroll animations, and contact form.

**Architecture:** Multi-page static site — 4 HTML files share a single CSS stylesheet and a single JS file. No build tools, no frameworks. CSS custom properties for theming. IntersectionObserver for scroll animations. Formspree for contact form submission.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid), vanilla JavaScript (ES6+), Formspree

**Spec:** `docs/superpowers/specs/2026-05-14-website-psicologa-design.md`

---

## File Map

| File | Responsibility |
|------|---------------|
| `css/style.css` | All styles: reset, variables, layout, components, responsive, animations |
| `js/main.js` | Navbar sticky/hamburger, scroll animations, FAQ accordion |
| `index.html` | Homepage: hero, aree intervento, servizi preview, come lavoro, testimonial, CTA, social, footer |
| `chi-sono.html` | About: quote, bio, approccio, formazione timeline, studio gallery, CTA, footer |
| `servizi.html` | Services: 4 service blocks, FAQ accordion, CTA, footer |
| `contatti.html` | Contact: prima visita, info + form, map, footer |
| `img/placeholder-*.svg` | Inline SVG placeholders until client provides real photos |

---

## Task 1: Project scaffold and CSS foundation

**Files:**
- Create: `css/style.css`
- Create: `img/` directory

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p "css" "js" "img"
```

- [ ] **Step 2: Write CSS reset, custom properties, and base typography**

Create `css/style.css` with:

```css
/* ===== RESET ===== */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===== CUSTOM PROPERTIES ===== */
:root {
  --text-dark: #5a3e2b;
  --text-mid: #6b4c3b;
  --text-light: #8b7355;
  --accent: #c4956a;
  --accent-hover: #b8856a;
  --bg-primary: #faf6f1;
  --bg-secondary: #f5e6d3;
  --bg-tertiary: #e8d5c4;
  --bg-warm: #d4b896;
  --dark-bg: #5a3e2b;
  --dark-mid: #6b4c3b;
  --whatsapp: #25d366;
  --white: #ffffff;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 50%;
  --transition: 0.3s ease;
  --max-width: 1200px;
  --font-heading: Georgia, "Times New Roman", serif;
  --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* ===== BASE ===== */
html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  color: var(--text-dark);
  background-color: var(--bg-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

/* ===== TYPOGRAPHY ===== */
h1, h2, h3, h4 {
  font-family: var(--font-heading);
  color: var(--text-dark);
  line-height: 1.3;
}

h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.25rem; }

.section-label {
  font-size: 0.625rem;
  color: var(--accent);
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: var(--font-body);
  font-weight: 600;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--text-dark);
  margin-top: 0.25rem;
}

.section-subtitle {
  font-size: 0.875rem;
  color: var(--text-light);
  margin-top: 0.375rem;
}

/* ===== LAYOUT ===== */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section-padding {
  padding: 70px 0;
}

/* ===== BUTTONS ===== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 28px;
  border-radius: var(--radius-sm);
  font-size: 0.9375rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition), transform var(--transition), box-shadow var(--transition);
  border: none;
  font-family: var(--font-body);
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-primary {
  background-color: var(--accent);
  color: var(--white);
}

.btn-primary:hover {
  background-color: var(--accent-hover);
}

.btn-outline {
  background-color: transparent;
  color: var(--text-mid);
  border: 1.5px solid var(--accent);
}

.btn-outline:hover {
  background-color: var(--accent);
  color: var(--white);
}

.btn-whatsapp {
  background-color: var(--whatsapp);
  color: var(--white);
}

.btn-whatsapp:hover {
  background-color: #1fb855;
}

/* ===== SKIP LINK (A11Y) ===== */
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: var(--accent);
  color: var(--white);
  padding: 8px 16px;
  z-index: 1000;
  font-size: 0.875rem;
}

.skip-link:focus {
  top: 0;
}

/* ===== SCROLL ANIMATIONS ===== */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .fade-in {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

- [ ] **Step 3: Commit scaffold**

```bash
git init
git add css/style.css
git commit -m "feat: project scaffold with CSS foundation, variables, and base styles"
```

---

## Task 2: Navbar and footer components (CSS)

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add navbar styles to `css/style.css`**

Append to `css/style.css`:

```css
/* ===== NAVBAR ===== */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--bg-tertiary);
  transition: box-shadow var(--transition);
}

.navbar.scrolled {
  box-shadow: var(--shadow-md);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
}

.navbar-logo {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--text-mid);
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.navbar-links a {
  font-size: 0.875rem;
  color: var(--text-light);
  transition: color var(--transition);
  position: relative;
}

.navbar-links a:hover,
.navbar-links a.active {
  color: var(--text-mid);
  font-weight: 600;
}

.navbar-links a.active::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--accent);
  border-radius: 1px;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
  background: none;
  border: none;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--text-mid);
  transition: transform var(--transition), opacity var(--transition);
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ===== MOBILE MENU ===== */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 280px;
  height: 100vh;
  background-color: var(--bg-primary);
  z-index: 99;
  padding: 80px 32px 32px;
  transition: right var(--transition);
  box-shadow: var(--shadow-lg);
}

.mobile-menu.open {
  right: 0;
}

.mobile-menu a {
  display: block;
  font-size: 1.125rem;
  color: var(--text-mid);
  padding: 16px 0;
  border-bottom: 1px solid var(--bg-tertiary);
  transition: color var(--transition);
}

.mobile-menu a:hover,
.mobile-menu a.active {
  color: var(--accent);
  font-weight: 600;
}

.mobile-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 98;
}

.mobile-overlay.open {
  display: block;
}
```

- [ ] **Step 2: Add footer styles to `css/style.css`**

Append to `css/style.css`:

```css
/* ===== FOOTER ===== */
.footer {
  background-color: var(--dark-bg);
  color: var(--bg-warm);
  padding: 48px 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 32px;
}

.footer-brand h3 {
  font-family: var(--font-heading);
  color: var(--bg-secondary);
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
}

.footer-brand p {
  font-size: 0.8125rem;
  line-height: 1.8;
  color: var(--bg-warm);
}

.footer-nav h4,
.footer-social h4 {
  font-family: var(--font-heading);
  color: var(--bg-secondary);
  font-size: 0.9375rem;
  margin-bottom: 0.75rem;
}

.footer-nav a,
.footer-social a {
  display: block;
  font-size: 0.8125rem;
  color: var(--bg-warm);
  padding: 4px 0;
  transition: color var(--transition);
}

.footer-nav a:hover,
.footer-social a:hover {
  color: var(--accent);
}

.footer-bottom {
  border-top: 1px solid var(--dark-mid);
  padding: 16px 0;
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-light);
}

.footer-bottom a {
  color: var(--bg-warm);
  transition: color var(--transition);
}

.footer-bottom a:hover {
  color: var(--accent);
}
```

- [ ] **Step 3: Add page header and CTA section styles**

Append to `css/style.css`:

```css
/* ===== PAGE HEADER ===== */
.page-header {
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
  padding: 48px 0;
  text-align: center;
}

/* ===== CTA SECTION ===== */
.cta-section {
  background: linear-gradient(135deg, var(--dark-mid), var(--dark-bg));
  padding: 56px 0;
  text-align: center;
}

.cta-section h2 {
  font-family: var(--font-heading);
  color: var(--bg-secondary);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.cta-section p {
  color: var(--bg-warm);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.cta-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
```

- [ ] **Step 4: Commit navbar/footer/shared component styles**

```bash
git add css/style.css
git commit -m "feat: add navbar, footer, page header, and CTA section styles"
```

---

## Task 3: Homepage HTML

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create `index.html` with full HTML structure**

Create `index.html` with all 9 sections (navbar, hero, aree di intervento, servizi preview, come lavoro, testimonial, CTA finale, social embed, footer):

```html
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dott.ssa Lucia Massa — Psicologa Psicoterapeuta Salerno</title>
  <meta name="description" content="Psicologa Psicoterapeuta a Salerno. Psicoterapia strategico-integrata, Ipnosi Ericksoniana e Psicodiagnostica. Prenota un primo colloquio.">
  <meta property="og:title" content="Dott.ssa Lucia Massa — Psicologa Psicoterapeuta Salerno">
  <meta property="og:description" content="Psicologa Psicoterapeuta a Salerno. Psicoterapia strategico-integrata, Ipnosi Ericksoniana e Psicodiagnostica.">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="it_IT">
  <link rel="stylesheet" href="css/style.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "PsychologicalTreatment",
    "name": "Dott.ssa Lucia Massa — Psicologa Psicoterapeuta",
    "description": "Psicoterapia strategico-integrata, Ipnosi Ericksoniana e Psicodiagnostica a Salerno",
    "provider": {
      "@type": "Person",
      "name": "Lucia Massa",
      "jobTitle": "Psicologa Psicoterapeuta",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Salerno",
        "addressCountry": "IT"
      }
    }
  }
  </script>
</head>
<body>
  <a href="#main-content" class="skip-link">Vai al contenuto principale</a>

  <!-- NAVBAR -->
  <nav class="navbar" aria-label="Navigazione principale">
    <div class="container">
      <a href="index.html" class="navbar-logo">Lucia Massa</a>
      <div class="navbar-links">
        <a href="index.html" class="active">Home</a>
        <a href="chi-sono.html">Chi Sono</a>
        <a href="servizi.html">Servizi</a>
        <a href="contatti.html">Contatti</a>
      </div>
      <button class="hamburger" aria-label="Apri menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <!-- MOBILE MENU -->
  <div class="mobile-overlay" aria-hidden="true"></div>
  <div class="mobile-menu" role="dialog" aria-label="Menu navigazione">
    <a href="index.html" class="active">Home</a>
    <a href="chi-sono.html">Chi Sono</a>
    <a href="servizi.html">Servizi</a>
    <a href="contatti.html">Contatti</a>
  </div>

  <main id="main-content">

    <!-- HERO -->
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          <span class="section-label">Psicologa Psicoterapeuta</span>
          <h1>Ogni percorso inizia<br>con un primo passo</h1>
          <p class="hero-subtitle">Psicoterapeuta strategico-integrata.<br>Esperta in Ipnosi Ericksoniana e Psicodiagnostica.</p>
          <div class="hero-buttons">
            <a href="contatti.html" class="btn btn-primary">Contattami</a>
            <a href="servizi.html" class="btn btn-outline">Scopri i servizi</a>
          </div>
          <p class="hero-albo">📋 Iscr. Albo Psicologi Campania n° XXXX</p>
        </div>
        <div class="hero-image">
          <div class="hero-image-placeholder" aria-label="Foto della Dott.ssa Lucia Massa">Foto Lucia</div>
        </div>
      </div>
    </section>

    <!-- AREE DI INTERVENTO -->
    <section class="aree section-padding fade-in">
      <div class="container" style="text-align: center;">
        <span class="section-label">Aree di intervento</span>
        <h2 class="section-title">Di cosa mi occupo</h2>
        <div class="pill-list">
          <span class="pill">😰 Ansia</span>
          <span class="pill">😔 Depressione</span>
          <span class="pill">💔 Traumi</span>
          <span class="pill">🕷️ Fobie</span>
          <span class="pill">🧠 Stress</span>
          <span class="pill">💑 Relazioni</span>
          <span class="pill">😴 Disturbi del sonno</span>
          <span class="pill">🍽️ Alimentazione</span>
          <span class="pill">🎯 Autostima</span>
        </div>
      </div>
    </section>

    <!-- SERVIZI PREVIEW -->
    <section class="servizi-preview section-padding fade-in" style="background: var(--white);">
      <div class="container" style="text-align: center;">
        <span class="section-label">Servizi</span>
        <h2 class="section-title">Come posso aiutarti</h2>
        <div class="cards-row">
          <a href="servizi.html#psicoterapia" class="service-card">
            <div class="service-icon">🧠</div>
            <h3>Psicoterapia</h3>
            <p>Percorsi individuali con approccio strategico-integrato</p>
            <span class="card-link">Scopri di più →</span>
          </a>
          <a href="servizi.html#ipnosi" class="service-card">
            <div class="service-icon">🌀</div>
            <h3>Ipnosi</h3>
            <p>Ipnosi ericksoniana dolce e naturale</p>
            <span class="card-link">Scopri di più →</span>
          </a>
          <a href="servizi.html#psicodiagnostica" class="service-card">
            <div class="service-icon">📋</div>
            <h3>Psicodiagnostica</h3>
            <p>Valutazioni e test standardizzati</p>
            <span class="card-link">Scopri di più →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- COME LAVORO -->
    <section class="come-lavoro section-padding fade-in">
      <div class="container" style="text-align: center;">
        <span class="section-label" style="color: var(--bg-warm);">Il percorso</span>
        <h2 class="section-title" style="color: var(--bg-secondary);">Come lavoro</h2>
        <div class="steps-row">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Primo contatto</h3>
            <p>Chiamata o messaggio per conoscerci e capire le tue esigenze</p>
          </div>
          <span class="step-arrow" aria-hidden="true">→</span>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Valutazione</h3>
            <p>Primo colloquio per definire obiettivi e piano terapeutico</p>
          </div>
          <span class="step-arrow" aria-hidden="true">→</span>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Percorso</h3>
            <p>Sedute regolari con strumenti su misura per i tuoi obiettivi</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIAL -->
    <section class="testimonial section-padding fade-in">
      <div class="container" style="text-align: center;">
        <span class="section-label">Testimonianze</span>
        <h2 class="section-title">Cosa dicono di me</h2>
        <div class="testimonial-grid">
          <div class="testimonial-card">
            <div class="quote-mark">"</div>
            <p class="quote-text">Ho trovato in Lucia una professionista attenta e competente. Mi ha aiutato a superare un momento molto difficile.</p>
            <p class="quote-author">— M., 35 anni</p>
            <div class="stars" aria-label="5 stelle su 5">★★★★★</div>
          </div>
          <div class="testimonial-card">
            <div class="quote-mark">"</div>
            <p class="quote-text">L'ipnosi ericksoniana ha cambiato il mio modo di affrontare l'ansia. Un percorso che consiglio a tutti.</p>
            <p class="quote-author">— A., 42 anni</p>
            <div class="stars" aria-label="5 stelle su 5">★★★★★</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINALE -->
    <section class="cta-section fade-in">
      <div class="container">
        <h2>Hai bisogno di parlare con qualcuno?</h2>
        <p>Il primo passo è il più importante. Contattami senza impegno.</p>
        <div class="cta-buttons">
          <a href="tel:+39XXXXXXXXXX" class="btn btn-primary">📞 Chiamami</a>
          <a href="https://wa.me/39XXXXXXXXXX" class="btn btn-whatsapp" target="_blank" rel="noopener">💬 WhatsApp</a>
        </div>
      </div>
    </section>

    <!-- SOCIAL EMBED -->
    <section class="social-section section-padding fade-in">
      <div class="container" style="text-align: center;">
        <span class="section-label">Seguimi</span>
        <div class="fb-embed-wrapper">
          <div class="fb-page" data-href="https://www.facebook.com/lucia.massa.106" data-tabs="timeline" data-width="500" data-height="300" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
            <blockquote cite="https://www.facebook.com/lucia.massa.106" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/lucia.massa.106">Lucia Massa su Facebook</a>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>Dott.ssa Lucia Massa</h3>
          <p>Psicologa Psicoterapeuta<br>Salerno<br>P.IVA XXXXXXXXX</p>
        </div>
        <div class="footer-nav">
          <h4>Navigazione</h4>
          <a href="index.html">Home</a>
          <a href="chi-sono.html">Chi Sono</a>
          <a href="servizi.html">Servizi</a>
          <a href="contatti.html">Contatti</a>
        </div>
        <div class="footer-social">
          <h4>Social</h4>
          <a href="https://www.facebook.com/lucia.massa.106" target="_blank" rel="noopener">📘 Facebook</a>
          <a href="#" target="_blank" rel="noopener">📸 Instagram</a>
          <a href="https://wa.me/39XXXXXXXXXX" target="_blank" rel="noopener">💬 WhatsApp</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Dott.ssa Lucia Massa — Tutti i diritti riservati | <a href="#">Privacy Policy</a></p>
      </div>
    </div>
  </footer>

  <!-- Facebook SDK -->
  <div id="fb-root"></div>
  <script async defer crossorigin="anonymous" src="https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v18.0" nonce=""></script>

  <script src="js/main.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Commit homepage HTML**

```bash
git add index.html
git commit -m "feat: add homepage HTML with all 9 sections"
```

---

## Task 4: Homepage-specific CSS

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add hero styles to `css/style.css`**

Append to `css/style.css`:

```css
/* ===== HERO ===== */
.hero {
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 50%, var(--bg-warm) 100%);
  padding: 72px 0;
}

.hero-grid {
  display: flex;
  align-items: center;
  gap: 48px;
}

.hero-content {
  flex: 1;
}

.hero-content h1 {
  font-size: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
}

.hero-subtitle {
  font-size: 0.9375rem;
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.hero-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 1rem;
}

.hero-albo {
  font-size: 0.75rem;
  color: var(--text-light);
}

.hero-image {
  flex-shrink: 0;
}

.hero-image img,
.hero-image-placeholder {
  width: 220px;
  height: 220px;
  border-radius: var(--radius-full);
  object-fit: cover;
  border: 5px solid rgba(255, 255, 255, 0.5);
}

.hero-image-placeholder {
  background: var(--bg-warm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: var(--text-mid);
}
```

- [ ] **Step 2: Add aree di intervento / pills styles**

Append to `css/style.css`:

```css
/* ===== PILLS ===== */
.pill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 1.25rem;
}

.pill {
  background: var(--white);
  padding: 8px 18px;
  border-radius: 24px;
  font-size: 0.8125rem;
  color: var(--text-mid);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition), box-shadow var(--transition);
}

.pill:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

- [ ] **Step 3: Add service cards, come-lavoro steps, testimonial, and social styles**

Append to `css/style.css`:

```css
/* ===== SERVICE CARDS ===== */
.cards-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 2rem;
}

.service-card {
  background: var(--bg-primary);
  border-radius: var(--radius-md);
  padding: 28px 20px;
  text-align: center;
  transition: transform var(--transition), box-shadow var(--transition);
  display: block;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.service-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--accent), var(--bg-warm));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 14px;
}

.service-card h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.service-card p {
  font-size: 0.8125rem;
  color: var(--text-light);
  line-height: 1.5;
}

.card-link {
  display: inline-block;
  margin-top: 12px;
  font-size: 0.8125rem;
  color: var(--accent);
  font-weight: 600;
}

/* ===== COME LAVORO ===== */
.come-lavoro {
  background: var(--dark-mid);
}

.steps-row {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  margin-top: 2rem;
}

.step {
  flex: 1;
  max-width: 240px;
  text-align: center;
}

.step-number {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  background: var(--accent);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin: 0 auto 10px;
}

.step h3 {
  color: var(--bg-secondary);
  font-size: 0.9375rem;
  margin-bottom: 0.375rem;
}

.step p {
  font-size: 0.8125rem;
  color: var(--bg-warm);
  line-height: 1.5;
}

.step-arrow {
  color: var(--accent);
  font-size: 1.5rem;
  margin-top: 12px;
}

/* ===== TESTIMONIAL ===== */
.testimonial {
  background: var(--bg-secondary);
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 2rem;
}

.testimonial-card {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  text-align: left;
}

.quote-mark {
  font-size: 2.5rem;
  color: var(--accent);
  font-family: var(--font-heading);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.quote-text {
  font-size: 0.875rem;
  color: var(--text-mid);
  line-height: 1.7;
  font-style: italic;
}

.quote-author {
  font-size: 0.8125rem;
  color: var(--text-light);
  margin-top: 12px;
}

.stars {
  color: var(--accent);
  font-size: 0.75rem;
  margin-top: 6px;
  letter-spacing: 2px;
}

/* ===== SOCIAL EMBED ===== */
.social-section {
  background: var(--bg-primary);
}

.fb-embed-wrapper {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}
```

- [ ] **Step 4: Commit homepage CSS**

```bash
git add css/style.css
git commit -m "feat: add homepage-specific styles (hero, pills, cards, steps, testimonials)"
```

---

## Task 5: Responsive CSS

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add all responsive breakpoints to `css/style.css`**

Append to `css/style.css`:

```css
/* ===== RESPONSIVE ===== */

/* Tablet */
@media (max-width: 1024px) {
  .hero-content h1 {
    font-size: 1.75rem;
  }

  .hero-image img,
  .hero-image-placeholder {
    width: 180px;
    height: 180px;
  }

  .cards-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  /* Hero */
  .hero {
    padding: 48px 0;
  }

  .hero-grid {
    flex-direction: column-reverse;
    text-align: center;
    gap: 24px;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-image img,
  .hero-image-placeholder {
    width: 160px;
    height: 160px;
  }

  /* Sections */
  .section-padding {
    padding: 48px 0;
  }

  .section-title {
    font-size: 1.25rem;
  }

  /* Cards */
  .cards-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  /* Steps */
  .steps-row {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .step-arrow {
    display: none;
  }

  .step {
    max-width: 100%;
  }

  /* Testimonials */
  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  /* CTA */
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  /* Footer */
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }

  /* About page */
  .bio-grid {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .bio-photo {
    width: 180px;
    height: 220px;
  }

  .approach-grid {
    grid-template-columns: 1fr;
  }

  .studio-grid {
    grid-template-columns: 1fr;
  }

  /* Services */
  .service-block-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* Contact */
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .prima-visita-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  h1 { font-size: 1.5rem; }

  .btn {
    padding: 10px 20px;
    font-size: 0.875rem;
    width: 100%;
    justify-content: center;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .prima-visita-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 2: Commit responsive styles**

```bash
git add css/style.css
git commit -m "feat: add responsive breakpoints for tablet and mobile"
```

---

## Task 6: JavaScript — navbar, scroll animations, FAQ accordion

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: Create `js/main.js` with all interactive behavior**

```javascript
document.addEventListener("DOMContentLoaded", () => {

  // ===== NAVBAR SCROLL SHADOW =====
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 10);
    }, { passive: true });
  }

  // ===== HAMBURGER MENU =====
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileOverlay = document.querySelector(".mobile-overlay");

  function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    mobileOverlay.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  if (hamburger && mobileMenu && mobileOverlay) {
    hamburger.addEventListener("click", toggleMenu);
    mobileOverlay.addEventListener("click", toggleMenu);

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (mobileMenu.classList.contains("open")) toggleMenu();
      });
    });
  }

  // ===== SCROLL FADE-IN =====
  const fadeElements = document.querySelectorAll(".fade-in");
  if (fadeElements.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    fadeElements.forEach(el => el.classList.add("visible"));
  }

  // ===== FAQ ACCORDION =====
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      question.setAttribute("aria-expanded", isOpen);

      if (isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = "0";
      }

      faqItems.forEach(other => {
        if (other !== item && other.classList.contains("open")) {
          other.classList.remove("open");
          other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-answer").style.maxHeight = "0";
        }
      });
    });
  });

});
```

- [ ] **Step 2: Commit JavaScript**

```bash
git add js/main.js
git commit -m "feat: add JS for navbar scroll, hamburger menu, fade-in animations, FAQ accordion"
```

---

## Task 7: Open in browser and verify homepage

**Files:** none (verification only)

- [ ] **Step 1: Open index.html in browser and verify**

```bash
start index.html
```

Check:
- Navbar displays correctly, logo left, links right
- Hero section shows with gradient, text, placeholder image
- All 9 sections render in correct order
- Colors match the spec palette
- Scroll down — fade-in animations trigger
- Resize browser to mobile width — hamburger appears, layout stacks
- Click hamburger — mobile menu slides in from right
- Click overlay — menu closes

- [ ] **Step 2: Fix any visual issues found during verification**

Address any layout problems, spacing inconsistencies, or missing styles.

- [ ] **Step 3: Commit fixes if any**

```bash
git add -A
git commit -m "fix: homepage visual adjustments after browser verification"
```

---

## Task 8: Chi Sono page HTML

**Files:**
- Create: `chi-sono.html`

- [ ] **Step 1: Create `chi-sono.html`**

Create `chi-sono.html` with all sections: navbar, page header, quote, bio, approccio (3 cards), formazione timeline, studio gallery, CTA, footer. Use the same navbar and footer HTML as `index.html` but set `class="active"` on the "Chi Sono" link.

The page includes:
- `<meta name="description">` specific to the about page
- Page header with gradient, label "CHI SONO", title "Il mio percorso professionale"
- Dark background motivational quote section
- Bio section: two-column flex with photo placeholder left and text right, includes albo number
- "Come lavoro con te": 3 cards in a grid (`.approach-grid`) with emoji icons
- Formazione timeline: vertical timeline with `.timeline` class, accent dots, left border, 4 entries
- Studio gallery: 3 placeholder images in a `.studio-grid`
- CTA section
- Identical footer

- [ ] **Step 2: Commit chi-sono page**

```bash
git add chi-sono.html
git commit -m "feat: add Chi Sono page with bio, approach, timeline, and studio gallery"
```

---

## Task 9: Chi Sono page CSS

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add chi-sono specific styles to `css/style.css`**

Append to `css/style.css`:

```css
/* ===== QUOTE SECTION ===== */
.quote-section {
  background: var(--dark-mid);
  padding: 36px 24px;
  text-align: center;
}

.quote-section blockquote {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  color: var(--bg-secondary);
  font-style: italic;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* ===== BIO SECTION ===== */
.bio-section {
  padding: 64px 0;
}

.bio-grid {
  display: flex;
  gap: 32px;
  align-items: flex-start;
}

.bio-photo,
.bio-photo-placeholder {
  width: 220px;
  min-height: 280px;
  border-radius: var(--radius-md);
  object-fit: cover;
  flex-shrink: 0;
}

.bio-photo-placeholder {
  background: var(--bg-warm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: var(--text-mid);
}

.bio-text h2 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.bio-text p {
  font-size: 0.9375rem;
  color: var(--text-mid);
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

.bio-albo {
  font-size: 0.8125rem;
  color: var(--text-light);
  margin-top: 1rem;
}

/* ===== APPROACH CARDS ===== */
.approach-section {
  background: var(--white);
  padding: 64px 0;
}

.approach-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 2rem;
}

.approach-card {
  background: var(--bg-primary);
  border-radius: var(--radius-md);
  padding: 24px;
  text-align: center;
}

.approach-card .card-emoji {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.approach-card h3 {
  font-size: 0.9375rem;
  margin-bottom: 0.5rem;
}

.approach-card p {
  font-size: 0.8125rem;
  color: var(--text-light);
  line-height: 1.5;
}

/* ===== TIMELINE ===== */
.timeline-section {
  padding: 64px 0;
}

.timeline {
  max-width: 500px;
  margin: 2rem auto 0;
}

.timeline-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  position: relative;
}

.timeline-dot {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  background: var(--accent);
  margin-top: 6px;
  flex-shrink: 0;
}

.timeline-content {
  border-left: 2px solid var(--bg-tertiary);
  padding-left: 16px;
  padding-bottom: 24px;
}

.timeline-item:last-child .timeline-content {
  border-left: none;
  padding-bottom: 0;
}

.timeline-year {
  font-size: 0.6875rem;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
}

.timeline-content h3 {
  font-size: 0.9375rem;
  margin-top: 2px;
}

.timeline-content p {
  font-size: 0.8125rem;
  color: var(--text-light);
}

/* ===== STUDIO GALLERY ===== */
.studio-section {
  background: var(--white);
  padding: 64px 0;
}

.studio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 1.5rem;
}

.studio-grid img,
.studio-placeholder {
  width: 100%;
  height: 180px;
  border-radius: var(--radius-md);
  object-fit: cover;
}

.studio-placeholder {
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  color: var(--text-mid);
}
```

- [ ] **Step 2: Commit chi-sono CSS**

```bash
git add css/style.css
git commit -m "feat: add Chi Sono page styles (bio, approach, timeline, studio gallery)"
```

---

## Task 10: Servizi page HTML

**Files:**
- Create: `servizi.html`

- [ ] **Step 1: Create `servizi.html`**

Create `servizi.html` with: navbar (active on "Servizi"), page header, 4 service blocks with IDs (`#psicoterapia`, `#ipnosi`, `#psicodiagnostica`, `#online`), FAQ accordion section, CTA, footer.

Each service block uses this structure:
```html
<div class="service-block fade-in" id="psicoterapia">
  <div class="container service-block-content">
    <div class="service-block-icon">🧠</div>
    <div class="service-block-text">
      <h3>Psicoterapia Individuale</h3>
      <p>Description...</p>
      <div class="service-meta">
        <span>⏱ Durata: 50 min</span>
        <span>📅 Frequenza: settimanale</span>
        <span>📍 Studio / Online</span>
      </div>
      <div class="service-tags">
        <span class="pill">Ansia</span>
        <!-- more pills -->
      </div>
    </div>
  </div>
</div>
```

FAQ section uses:
```html
<div class="faq-item">
  <button class="faq-question" aria-expanded="false">
    <span>Quanto dura un percorso terapeutico?</span>
    <span class="faq-icon">+</span>
  </button>
  <div class="faq-answer">
    <p>La durata varia in base alle esigenze individuali...</p>
  </div>
</div>
```

- [ ] **Step 2: Commit servizi page**

```bash
git add servizi.html
git commit -m "feat: add Servizi page with 4 service blocks and FAQ accordion"
```

---

## Task 11: Servizi page CSS

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add servizi-specific styles to `css/style.css`**

Append to `css/style.css`:

```css
/* ===== SERVICE BLOCKS ===== */
.service-block {
  padding: 40px 0;
  background: var(--bg-primary);
}

.service-block:nth-child(even) {
  background: var(--white);
}

.service-block-content {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.service-block-icon {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-full);
  background: linear-gradient(135deg, var(--accent), var(--bg-warm));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  flex-shrink: 0;
}

.service-block-text h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.service-block-text > p {
  font-size: 0.9375rem;
  color: var(--text-mid);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.service-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 1rem;
}

.service-meta span {
  font-size: 0.8125rem;
  color: var(--text-light);
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.service-tags .pill {
  font-size: 0.75rem;
  padding: 4px 12px;
}

.service-tags-label {
  font-size: 0.875rem;
  color: var(--text-dark);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.service-divider {
  height: 1px;
  background: var(--bg-tertiary);
  margin: 0 auto;
  max-width: var(--max-width);
}

/* ===== FAQ ===== */
.faq-section {
  background: var(--white);
  padding: 64px 0;
}

.faq-list {
  max-width: 700px;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.faq-item {
  background: var(--bg-primary);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 18px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9375rem;
  color: var(--text-dark);
  font-family: var(--font-body);
  text-align: left;
}

.faq-icon {
  color: var(--accent);
  font-size: 1.25rem;
  transition: transform var(--transition);
}

.faq-item.open .faq-icon {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-answer p {
  padding: 0 18px 16px;
  font-size: 0.875rem;
  color: var(--text-mid);
  line-height: 1.7;
}
```

- [ ] **Step 2: Commit servizi CSS**

```bash
git add css/style.css
git commit -m "feat: add Servizi page styles (service blocks, FAQ accordion)"
```

---

## Task 12: Contatti page HTML

**Files:**
- Create: `contatti.html`

- [ ] **Step 1: Create `contatti.html`**

Create `contatti.html` with: navbar (active on "Contatti"), page header, "Prima visita" dark section with 4 reassurance items, two-column contact section (info cards + hours on left, form on right), Google Maps iframe placeholder, footer.

Contact form uses Formspree:
```html
<form action="https://formspree.io/f/FORM_ID" method="POST" class="contact-form">
  <div class="form-group">
    <label for="name">Nome e Cognome *</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div class="form-group">
    <label for="email">Email *</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form-group">
    <label for="phone">Telefono</label>
    <input type="tel" id="phone" name="phone">
  </div>
  <div class="form-group">
    <label for="service">Servizio di interesse</label>
    <select id="service" name="service">
      <option value="">Seleziona...</option>
      <option value="psicoterapia">Psicoterapia Individuale</option>
      <option value="ipnosi">Ipnosi Ericksoniana</option>
      <option value="psicodiagnostica">Psicodiagnostica</option>
      <option value="online">Consulenza Online</option>
      <option value="altro">Altro</option>
    </select>
  </div>
  <div class="form-group">
    <label for="message">Messaggio *</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  <div class="form-group form-checkbox">
    <input type="checkbox" id="privacy" name="privacy" required>
    <label for="privacy">Acconsento al trattamento dei dati personali (<a href="#" target="_blank">Privacy Policy</a>)</label>
  </div>
  <button type="submit" class="btn btn-primary" style="width: 100%;">Invia messaggio</button>
</form>
```

- [ ] **Step 2: Commit contatti page**

```bash
git add contatti.html
git commit -m "feat: add Contatti page with prima visita, contact form, and info section"
```

---

## Task 13: Contatti page CSS

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Add contatti-specific styles to `css/style.css`**

Append to `css/style.css`:

```css
/* ===== PRIMA VISITA ===== */
.prima-visita {
  background: var(--dark-mid);
  padding: 40px 0;
}

.prima-visita-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 1.25rem;
}

.prima-visita-item {
  text-align: center;
}

.prima-visita-item .item-emoji {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}

.prima-visita-item p {
  font-size: 0.8125rem;
  color: var(--bg-secondary);
  line-height: 1.5;
}

/* ===== CONTACT SECTION ===== */
.contact-section {
  padding: 64px 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}

.contact-info-card {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 16px;
}

.contact-info-card h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.info-row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 12px;
}

.info-row .info-icon {
  font-size: 1.125rem;
  flex-shrink: 0;
}

.info-row .info-label {
  font-size: 0.8125rem;
  color: var(--text-dark);
  font-weight: 600;
}

.info-row .info-value {
  font-size: 0.8125rem;
  color: var(--text-light);
}

.hours-card {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 16px;
}

.hours-card h3 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.hours-card p {
  font-size: 0.875rem;
  color: var(--text-mid);
  line-height: 2;
}

.map-embed {
  border-radius: var(--radius-md);
  overflow: hidden;
  height: 200px;
  background: var(--bg-warm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: var(--text-mid);
}

.map-embed iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* ===== CONTACT FORM ===== */
.contact-form-wrapper {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 28px;
  box-shadow: var(--shadow-sm);
}

.contact-form-wrapper h3 {
  font-size: 1rem;
  margin-bottom: 1.25rem;
}

.form-group {
  margin-bottom: 14px;
}

.form-group label {
  display: block;
  font-size: 0.8125rem;
  color: var(--text-light);
  margin-bottom: 4px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px 14px;
  background: var(--bg-primary);
  border: 1px solid var(--bg-tertiary);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  color: var(--text-dark);
  font-family: var(--font-body);
  transition: border-color var(--transition);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(196, 149, 106, 0.15);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.form-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.form-checkbox input {
  width: auto;
  margin-top: 3px;
  flex-shrink: 0;
}

.form-checkbox label {
  font-size: 0.75rem;
  color: var(--text-light);
  line-height: 1.5;
}

.form-checkbox a {
  color: var(--accent);
  text-decoration: underline;
}
```

- [ ] **Step 2: Commit contatti CSS**

```bash
git add css/style.css
git commit -m "feat: add Contatti page styles (prima visita, contact form, info cards, map)"
```

---

## Task 14: Full-site browser verification

**Files:** none (verification only)

- [ ] **Step 1: Open each page and verify visuals**

Open each HTML file in the browser and check:

1. **index.html**: All 9 sections render, correct colors, fade-in animations work
2. **chi-sono.html**: Quote, bio, approach cards, timeline, studio gallery all render
3. **servizi.html**: 4 service blocks with correct content, FAQ accordion opens/closes
4. **contatti.html**: Prima visita section, info + hours cards, contact form, map placeholder

- [ ] **Step 2: Test responsive at 3 widths**

Resize browser to test at:
- Desktop (1200px+): full layout
- Tablet (768px): cards stack to 2 columns
- Mobile (375px): hamburger menu, single column, stacked layouts

- [ ] **Step 3: Test all interactive elements**

- Hamburger menu: opens, closes, overlay works
- Navbar: sticky shadow appears on scroll
- FAQ: items expand/collapse, only one open at a time
- All internal links navigate correctly between pages
- Active page highlighted in navbar on each page

- [ ] **Step 4: Fix any issues found**

Address spacing, color, layout, or interaction bugs.

- [ ] **Step 5: Commit any fixes**

```bash
git add -A
git commit -m "fix: visual and interaction fixes after full-site verification"
```

---

## Task 15: Final polish — accessibility, SEO, performance

**Files:**
- Modify: all HTML files, `css/style.css`

- [ ] **Step 1: Verify accessibility**

Check each page:
- `lang="it"` on `<html>` tag
- Skip link present and works with keyboard
- All images have alt text
- Form inputs have labels
- ARIA attributes on hamburger and FAQ
- Focus styles visible on all interactive elements
- Color contrast passes WCAG AA (use browser dev tools)

- [ ] **Step 2: Verify SEO**

Check each page:
- Unique `<title>` tag
- Unique `<meta name="description">`
- Open Graph tags present
- Only one `<h1>` per page
- Semantic HTML structure (header, nav, main, section, footer)
- Schema.org JSON-LD on index.html

- [ ] **Step 3: Add focus styles if missing**

If focus styles aren't visible, add to `css/style.css`:

```css
/* ===== FOCUS STYLES ===== */
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: accessibility, SEO, and performance polish"
```
