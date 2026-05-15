# Website Design Spec — Dott.ssa Lucia Massa

## Overview

Professional website for Lucia Massa, a psychologist and psychotherapist based in Salerno, Italy. The site serves as a professional showcase and credibility builder, helping potential patients find her via search and understand her services.

## Client Profile

- **Name**: Dott.ssa Lucia Massa
- **Role**: Psicologa Psicoterapeuta strategico-integrata
- **Specializations**: Ericksonian Hypnosis, Psychodiagnostics
- **Location**: Salerno, Italy
- **Workplace**: Cooperativa sociale "Strada facendo"
- **Online presence**: Facebook (~1083 followers), registered as "Creator digitale"
- **Registration**: Albo Psicologi Campania (number TBD from client)

## Goals

1. **Attract new patients** — SEO-optimized for searches like "psicologa Salerno", "psicoterapeuta Salerno"
2. **Build credibility** — professional showcase for people who already know her (e.g., from Facebook)
3. **Inform** — clearly explain services, approach, and what to expect

## Technology

- **Stack**: HTML5 / CSS3 / vanilla JavaScript
- **Architecture**: Multi-page (4 separate HTML files, shared CSS/JS)
- **Hosting**: Static hosting (GitHub Pages, Netlify, or similar)
- **No frameworks, no build tools, no dependencies**

## File Structure

```
sito-lucia/
├── index.html
├── chi-sono.html
├── servizi.html
├── contatti.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── img/
    ├── lucia-hero.jpg      (provided by client)
    ├── lucia-about.jpg     (provided by client)
    ├── studio-1.jpg        (provided by client)
    ├── studio-2.jpg        (provided by client)
    ├── studio-3.jpg        (provided by client)
    └── logo.svg            (to create or provided)
```

## Visual Design

### Style: Warm & Welcoming

Earthy tones, serif headings, soft backgrounds. Conveys empathy, safety, and professionalism.

### Color Palette

| Token          | Hex       | Usage                        |
|----------------|-----------|------------------------------|
| `--text-dark`  | `#5a3e2b` | Body text, headings          |
| `--text-mid`   | `#6b4c3b` | Secondary text, nav links    |
| `--text-light` | `#8b7355` | Captions, metadata           |
| `--accent`     | `#c4956a` | CTAs, buttons, active states |
| `--bg-primary` | `#faf6f1` | Main background              |
| `--bg-secondary`| `#f5e6d3`| Hero gradient, section bg    |
| `--bg-tertiary`| `#e8d5c4` | Card backgrounds, borders    |
| `--bg-warm`    | `#d4b896` | Decorative elements          |
| `--dark-bg`    | `#5a3e2b` | Footer background            |
| `--dark-mid`   | `#6b4c3b` | Dark sections ("Come lavoro")|
| `--whatsapp`   | `#25d366` | WhatsApp button              |

### Typography

- **Headings**: Georgia (serif), fallback: Times New Roman, serif
- **Body**: System font stack (sans-serif): `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Scale**: Section labels 10px uppercase tracking, titles 20-24px, body 14-16px

### Spacing & Layout

- Max content width: 1200px centered
- Section padding: 60-80px vertical on desktop, 40px on mobile
- Card border-radius: 8-10px
- Consistent 24px horizontal padding on mobile

## Pages

### 1. Homepage (`index.html`)

**Sections in order:**

1. **Navbar**
   - Left: "Lucia Massa" text logo (Georgia serif)
   - Right: Home, Chi Sono, Servizi, Contatti
   - Mobile: hamburger menu
   - Sticky on scroll with subtle shadow

2. **Hero**
   - Gradient background (`--bg-secondary` to `--bg-tertiary`)
   - Left: category label "PSICOLOGA PSICOTERAPEUTA" (uppercase, small, accent color)
   - Left: main claim "Ogni percorso inizia con un primo passo" (Georgia serif, 28-32px)
   - Left: subtitle with specializations
   - Left: two CTAs — "Contattami" (filled accent) + "Scopri i servizi" (outlined)
   - Left: Albo registration number (small text)
   - Right: circular photo of Lucia with white border
   - Mobile: stacked layout, photo above text

3. **Aree di intervento**
   - Section label + title "Di cosa mi occupo"
   - Horizontally wrapped pill/tags: Ansia, Depressione, Traumi, Fobie, Stress, Relazioni, Disturbi del sonno, Alimentazione, Autostima
   - Each pill: white background, rounded, subtle shadow

4. **Servizi preview**
   - Section label + title "Come posso aiutarti"
   - 3 cards in a row: Psicoterapia, Ipnosi, Psicodiagnostica
   - Each card: emoji icon in gradient circle, name, short description, "Scopri di più →" link
   - Cards link to `servizi.html` with anchor

5. **Come lavoro**
   - Dark background (`--dark-mid`)
   - Section label + title "Come lavoro"
   - 3 numbered steps with arrows: Primo contatto → Valutazione → Percorso
   - Each step: number in accent circle, title, description
   - Mobile: vertical layout without arrows

6. **Testimonial**
   - Warm background (`--bg-secondary`)
   - Section label + title "Cosa dicono di me"
   - 2 cards with: opening quote mark, italic text, anonymous attribution (initial + age), star rating
   - Content to be provided/approved by client (anonymous, GDPR-compliant)

7. **CTA finale**
   - Dark gradient background
   - "Hai bisogno di parlare con qualcuno?" (Georgia serif)
   - Subtitle "Il primo passo è il più importante. Contattami senza impegno."
   - Two buttons: "Chiamami" (accent) + "WhatsApp" (green #25d366)

8. **Social embed**
   - Section label "SEGUIMI"
   - Facebook Page Plugin embed (official widget, shows latest posts)

9. **Footer**
   - Dark background (`--dark-bg`)
   - 3 columns: info (name, title, location, P.IVA), navigation links, social links (Facebook, Instagram, WhatsApp)
   - Bottom bar: copyright + Privacy Policy link
   - Mobile: stacked columns

### 2. Chi Sono (`chi-sono.html`)

**Sections in order:**

1. **Navbar** (shared)

2. **Page header**
   - Gradient background
   - Label "CHI SONO" + title "Il mio percorso professionale"

3. **Motivational quote**
   - Dark background, centered italic text
   - Quote to be confirmed with client

4. **Bio section**
   - Two-column: photo left (rounded corners) + text right
   - Professional biography: approach, philosophy, experience
   - Albo registration number
   - Mobile: photo above text, full width

5. **Il mio approccio**
   - Title "Come lavoro con te"
   - 3 cards: Ascolto empatico, Obiettivi concreti, Integrazione
   - Each card: emoji, title, description

6. **Formazione (timeline)**
   - Title "Il mio percorso di studi"
   - Vertical timeline with accent dots and left border
   - Each entry: year, title, institution
   - Entries: Laurea, Specializzazione Psicoterapia, Ipnosi Ericksoniana, Psicodiagnostica
   - Exact dates/institutions to be provided by client

7. **Lo studio**
   - Title "Un ambiente accogliente"
   - 3 photos of the studio in a row (provided by client)
   - Mobile: stacked or carousel

8. **CTA** — "Vuoi saperne di più?" + Contattami button

9. **Footer** (shared)

### 3. Servizi (`servizi.html`)

**Sections in order:**

1. **Navbar** (shared)

2. **Page header**
   - Gradient background
   - Label "SERVIZI" + title "Come posso aiutarti"
   - Subtitle "Ogni percorso è unico, costruito insieme sulle tue esigenze"

3. **Service blocks** (4 services, each separated by a divider)

   Each service block contains:
   - Icon (emoji in gradient circle) + title
   - Description paragraph
   - Metadata pills: duration, frequency, modality (studio/online)
   - "Per chi è indicata" or "Include" tag list

   **3a. Psicoterapia Individuale**
   - Duration: 50 min | Frequency: weekly | Modality: studio + online
   - Tags: Ansia, Depressione, Traumi, Stress, Relazioni

   **3b. Ipnosi Ericksoniana**
   - Duration: 60 min | Modality: solo in studio
   - Tags: Fobie, Dolore cronico, Dipendenze, Insonnia

   **3c. Psicodiagnostica**
   - Duration: 2-3 incontri | Modality: solo in studio
   - Tags: Test personalità, Valutazioni cognitive, Perizie, Relazione clinica

   **3d. Consulenze Online**
   - Duration: 50 min | Modality: piattaforma sicura
   - General description, no specific tags

4. **FAQ accordion**
   - Title "Domande frequenti"
   - Expandable items (click to toggle):
     - "Quanto dura un percorso terapeutico?"
     - "Come funziona il primo colloquio?"
     - "Le sedute sono coperte dal SSN?"
     - "Posso detrarre le spese?"
   - Answers to be confirmed with client

5. **CTA** — "Quale servizio fa per te?" + Contattami button

6. **Footer** (shared)

### 4. Contatti (`contatti.html`)

**Sections in order:**

1. **Navbar** (shared)

2. **Page header**
   - Gradient background
   - Label "CONTATTI" + title "Iniziamo un percorso insieme"
   - Subtitle "Il primo passo è sempre il più importante"

3. **Prima visita — Cosa aspettarsi**
   - Dark background
   - 4 icons in a row: Atmosfera rilassata, Ascolto esigenze, Proposta percorso, Nessun impegno
   - Reassures potential patients about first visit

4. **Contact section** (two columns)

   **Left column:**
   - Info card: address, phone, email, WhatsApp (with icons)
   - Hours card: Mon-Fri 9:00-19:00, Sat 9:00-13:00 (by appointment), Sun closed
   - Google Maps embed (iframe)

   **Right column:**
   - Contact form with fields:
     - Nome e Cognome (required)
     - Email (required)
     - Telefono (optional)
     - Servizio di interesse (dropdown: Psicoterapia, Ipnosi, Psicodiagnostica, Consulenza Online, Altro)
     - Messaggio (textarea, required)
     - Privacy consent checkbox (required)
     - Submit button "Invia messaggio"
   - Form submission: `mailto:` link or external service (Formspree/Netlify Forms)

   Mobile: stacked, form above info

5. **Footer** (shared)

## Shared Components

### Navbar
- Fixed/sticky on scroll
- Background: `--bg-primary` with bottom border
- Active page: bold + darker color
- Mobile: hamburger icon, slide-in menu from right
- Transition: smooth open/close

### Footer
- 3-column layout: info, nav, social
- Bottom bar with copyright and privacy policy
- Responsive: stacks on mobile

### Page headers
- Consistent gradient background
- Uppercase label (accent color, letter-spacing: 3px)
- Georgia serif title
- Optional subtitle

### CTA sections
- Dark gradient background
- Georgia serif question/statement
- One or two action buttons

## Responsive Design

- **Desktop**: > 1024px — full layout as designed
- **Tablet**: 768px-1024px — 2 columns reduce, cards may stack
- **Mobile**: < 768px — single column, hamburger menu, stacked layouts
- Images scale proportionally
- Touch targets: minimum 44px

## Animations

- **Scroll fade-in**: elements fade in and slide up slightly as they enter viewport (IntersectionObserver)
- **Hover effects**: buttons lighten, cards lift with shadow
- **Menu**: smooth slide-in transition on mobile
- **FAQ accordion**: smooth height transition on expand/collapse
- All animations respect `prefers-reduced-motion`

## SEO

- Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`)
- `<title>` per page: "Dott.ssa Lucia Massa — Psicologa Psicoterapeuta Salerno"
- Meta descriptions per page
- Open Graph tags for social sharing
- Schema.org structured data (LocalBusiness + PsychologicalTreatment)
- Alt text on all images
- `<h1>` only once per page

## Performance

- No frameworks — minimal payload
- Images: WebP format with JPG fallback, lazy loading
- CSS: single file, no unused styles
- JS: single file, defer loading
- Google Fonts avoided (system font stack + local Georgia)
- Target: Lighthouse 95+ on all metrics

## Accessibility

- WCAG 2.1 AA compliance
- Sufficient color contrast (verified against palette)
- Keyboard navigable (focus styles)
- Skip-to-content link
- ARIA labels on interactive elements
- Form labels and error states
- `lang="it"` on `<html>`

## Privacy & Legal

- Privacy Policy page/link (required for contact form with email collection)
- Cookie consent: not needed if no tracking cookies used
- GDPR consent checkbox on contact form
- No Google Analytics initially (can be added later with cookie consent)
- Testimonials must be anonymous and consent-verified

## Content to be provided by client

- [ ] Professional photo (hero, about page)
- [ ] Studio photos (3)
- [ ] Exact bio text (or approve generated version)
- [ ] Albo registration number
- [ ] P.IVA
- [ ] Studio address
- [ ] Phone number
- [ ] Email address
- [ ] WhatsApp number
- [ ] Formation details (years, institutions)
- [ ] Testimonial text (approved, anonymous)
- [ ] FAQ answers
- [ ] Motivational quote (or approve suggestion)
- [ ] Logo (or approve text-only branding)
- [ ] Google Maps coordinates/embed
- [ ] Social media links (Facebook, Instagram)
- [ ] Privacy Policy text

## Form handling

The contact form needs a backend to send emails. Options for static hosting:

1. **Formspree** (free tier: 50 submissions/month) — recommended for simplicity
2. **Netlify Forms** (free tier: 100 submissions/month) — if hosting on Netlify
3. **EmailJS** — sends directly from browser, no server needed

Recommendation: **Formspree** — minimal setup, no code changes needed, just a form action URL.

## Out of scope

- Blog/content section (can be added later)
- Online booking system
- Patient portal
- Multi-language support
- E-commerce / payments
- CMS integration
