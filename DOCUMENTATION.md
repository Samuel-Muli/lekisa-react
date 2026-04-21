# Lekisa Trading Limited — Full Project Documentation

**Version:** 1.0.0
**Prepared by:** Samuel Muli
**Last updated:** 2026
**Handover document for:** Developers, Maintainers, and Project Stakeholders

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Repository Structure](#2-repository-structure)
3. [Design System](#3-design-system)
4. [Architecture & Key Decisions](#4-architecture--key-decisions)
5. [Component Reference](#5-component-reference)
6. [Page Reference](#6-page-reference)
7. [Hooks Reference](#7-hooks-reference)
8. [Routing](#8-routing)
9. [Styling Guide](#9-styling-guide)
10. [Images & Assets](#10-images--assets)
11. [Third-Party Libraries](#11-third-party-libraries)
12. [Contact Form](#12-contact-form)
13. [Development Workflow](#13-development-workflow)
14. [Deployment Guide](#14-deployment-guide)
15. [Common Maintenance Tasks](#15-common-maintenance-tasks)
16. [Known Limitations & Future Work](#16-known-limitations--future-work)
17. [Contact & Support](#17-contact--support)

---

## 1. Project Overview

Lekisa Trading Limited is a Kenyan industrial chemical distributor. This is their corporate website, converted from a set of standalone HTML pages into a single-page React application.

**Business purpose of the site:**
- Present the company, its mission, values, and team to potential clients
- Showcase services: chemical engineering, mechanical engineering, process engineering, and project management
- Allow potential clients to send enquiries via the contact form
- Establish credibility with a gallery, policy statements, and staff directory

**What was built:**
- 8 pages (Home, About, Contact, Gallery, Policy, Service, Staff, 404)
- 5 reusable components (Topbar, Navbar, Footer, Breadcrumb, BackToTop)
- 2 custom hooks (useWow, useCounterUp)
- 1 global design system stylesheet (`index.css`)
- Client-side routing with React Router DOM v6
- Responsive layout down to 375px mobile width

---

## 2. Repository Structure

```
lekisa-react/
│
├── index.html                  # Vite HTML entry point. CDN scripts live here.
├── vite.config.js              # Vite build configuration
├── package.json                # NPM dependencies and scripts
├── README.md                   # Quick-start reference
├── DOCUMENTATION.md            # This file — full handover guide
│
└── src/
    ├── main.jsx                # ReactDOM root render + BrowserRouter
    ├── App.jsx                 # Route definitions + ScrollToTop
    ├── index.css               # ALL styles — design system + page specifics
    │
    ├── components/             # Shared UI pieces used on every page
    │   ├── Topbar.jsx          # Dark navy bar: email, phone, social icons
    │   ├── Navbar.jsx          # Main navigation bar with sticky + active states
    │   ├── Footer.jsx          # 4-column footer: brand, links, contact, map+newsletter
    │   ├── Breadcrumb.jsx      # Page hero header with breadcrumb trail (props-driven)
    │   └── BackToTop.jsx       # Scroll-aware floating back-to-top button
    │
    ├── hooks/
    │   ├── useWow.js           # Re-initialises WOW.js scroll animations on mount
    │   └── useCounterUp.js     # Re-initialises CounterUp animated numbers on mount
    │
    └── pages/
        ├── Home.jsx            # /home  — Landing page
        ├── About.jsx           # /about — Company, team, values
        ├── Contact.jsx         # /contact — Form + info cards + map
        ├── Gallery.jsx         # /gallery — Filterable image grid
        ├── Policy.jsx          # /policy — CEO statement + compliance commitments
        ├── Service.jsx         # /service — 4 service cards + why choose us
        ├── Staff.jsx           # /staff — Staff cards + culture section
        └── NotFound.jsx        # /* — 404 error page
```

---

## 3. Design System

The entire visual identity is defined through **CSS custom properties** at the top of `src/index.css`. These are the single source of truth for all colors, shadows, and transitions across every page.

### Brand Color Palette

| Variable            | Value       | Usage                                     |
|---------------------|-------------|-------------------------------------------|
| `--ltl-navy`        | `#0b1e3d`   | Primary brand dark blue — headings, CTA backgrounds, navbar |
| `--ltl-navy-mid`    | `#132952`   | Medium navy — footer gradients            |
| `--ltl-navy-light`  | `#1e3d72`   | Light navy — hero gradients, stats section |
| `--ltl-gold`        | `#c9a84c`   | Accent gold — buttons, icons, hover states, labels |
| `--ltl-gold-light`  | `#e2c27d`   | Lighter gold (decorative use)             |
| `--ltl-gold-pale`   | `#f7f0de`   | Gold background wash — icon circles, counter cards |
| `--ltl-white`       | `#ffffff`   | Pure white                                |
| `--ltl-off-white`   | `#f8f7f4`   | Warm near-white — form inputs, blockquotes |
| `--ltl-smoke`       | `#eef0f4`   | Light grey — alternating section backgrounds |
| `--ltl-muted`       | `#6b7280`   | Muted grey — small labels, subtext        |
| `--ltl-text`        | `#1a2332`   | Main body text color                      |
| `--ltl-text-light`  | `#4b5563`   | Secondary body text                       |

### Typography

| Role         | Font Family  | Weights Used           | Where                                          |
|--------------|--------------|------------------------|------------------------------------------------|
| Headings     | **Syne**     | 400, 500, 600, 700, 800| All h1–h6, display classes, nav labels, buttons |
| Body         | **Lora**     | 400, 500, 600, italic  | Paragraphs, blockquotes, descriptions         |

Both fonts load from Google Fonts in `index.html`. Syne is a geometric sans-serif that gives the brand a modern industrial quality. Lora is a transitional serif that adds readability and warmth to longer body copy.

### Shadows

| Variable       | Value                                  | Usage                  |
|----------------|----------------------------------------|------------------------|
| `--shadow-sm`  | `0 2px 8px rgba(11,30,61,.08)`         | Cards at rest          |
| `--shadow-md`  | `0 8px 24px rgba(11,30,61,.12)`        | Cards on hover         |
| `--shadow-lg`  | `0 16px 48px rgba(11,30,61,.16)`       | Lifted/featured cards  |

### Transitions

All interactive elements use `--ease: 0.35s cubic-bezier(0.4, 0, 0.2, 1)` — a standard "ease-in-out" Material Design curve that feels natural and professional.

### Section Alternation Pattern

Pages alternate backgrounds between sections to create visual rhythm:

```
White (bg-white) → Smoke (var(--ltl-smoke)) → White → Navy (stats/CTA) → White → ...
```

---

## 4. Architecture & Key Decisions

### Why React + Vite instead of plain HTML?

The original project was 9 separate HTML files, each containing a full copy of the navbar, topbar, and footer. Any change to shared elements (e.g. updating a phone number, changing a nav link) required editing all 9 files. React solves this by making those elements **components** written once and shared everywhere.

Vite was chosen as the build tool because it is fast, has zero configuration for React projects, and produces optimised production builds out of the box.

### Why is jQuery still present?

Three CDN libraries loaded in `index.html` require jQuery as a peer dependency:
- **CounterUp** — animates numbers counting up on scroll
- **WOW.js** — triggers CSS animations when elements enter the viewport
- **Lightbox2** — full-screen image viewer in the gallery

These libraries predate React and are not available as pure React packages with equivalent functionality. Rather than rewrite or replace them (which would require significant additional work), they are loaded via CDN and initialised through custom hooks (`useWow.js` and `useCounterUp.js`) that run after each page mounts. This is a pragmatic hybrid approach that keeps the proven visual effects working correctly in a React context.

### Why are all styles in one file?

`src/index.css` is the single stylesheet for the entire application. This was a deliberate decision for maintainability — a developer taking over this project can find and change any style in one place without hunting across multiple CSS modules or styled components. The file is clearly sectioned with comments:

- Global design tokens (CSS variables)
- Base & typography
- Shared components (Spinner, Buttons, Topbar, Navbar, Footer, etc.)
- Page-specific blocks (Contact, Gallery, Policy, Service, Staff)

### Routing strategy

React Router DOM v6 `BrowserRouter` is used so URLs look clean: `/about` instead of `/#/about`. This requires server configuration on deployment (see [Deployment Guide](#14-deployment-guide)).

Route redirects handle legacy URL patterns:
- `/` → `/home` (people who type the bare domain)
- `/index` → `/home` (legacy bookmarks from the HTML version)

### Data as constants

Each page defines its repeating data (staff members, service cards, values, etc.) as JavaScript arrays of objects at the top of the file, above the component. This means that when the client needs to update content — add a team member, change a service description — the developer only edits a data array, not JSX markup. Example in `Staff.jsx`:

```jsx
const TEAM = [
  { img: 'img/ceo.jpg', name: 'Stephen Kioko Mwania', role: 'Director & C.E.O', ... },
  { img: 'img/md.jpg',  name: 'James Mulinge',         role: 'Managing Director', ... },
  // Add new team member here
];
```

---

## 5. Component Reference

### `Topbar.jsx`

**Purpose:** The thin dark bar that appears above the navbar on desktop screens (hidden on mobile with `d-none d-lg-block`).

**Contains:** Email address link, phone number link, social media icon links (Facebook, Twitter, Instagram, LinkedIn).

**To update:** Edit the `href` values in the JSX directly. Social links currently point to `#` — replace with actual profile URLs when available.

**Props:** None. All content is hardcoded.

---

### `Navbar.jsx`

**Purpose:** The main navigation bar. Handles active states, sticky scroll behaviour, and mobile menu collapse.

**Key behaviours:**
- Reads `useLocation()` from React Router to automatically mark the correct nav item as `.active`
- The About dropdown parent highlights when the user is on either `/about` or `/policy`
- On scroll past 45px, adds `sticky-top shadow-sm` CSS classes and sets `top: 0px` to pin the bar to the top
- On mobile (< 992px), the Bootstrap collapse menu closes automatically when the user navigates to a new page via a `<Link>`

**Props:** None. Behaviour is derived from current route.

**To add a new nav item:**
```jsx
<Link to="/newpage" className={`nav-item nav-link${isActive('/newpage') ? ' active' : ''}`}>
  New Page
</Link>
```

---

### `Footer.jsx`

**Purpose:** The full 4-column footer displayed at the bottom of every page, followed by the copyright bar.

**Columns:**
1. Brand logo + tagline + social icons
2. Quick links (React Router `<Link>`)
3. Contact info (address, email, phone) — built from a data array
4. Embedded Google Maps iframe + newsletter email input

**Newsletter input:** Currently has no functionality attached — it is a visual element only. To make it functional, add a `useState` hook and a `fetch` call to an email service (Mailchimp, ConvertKit, etc.).

**To update contact details:** Edit the data array inside `Footer.jsx`:
```jsx
{ icon: 'fa-envelope', label: 'Email', content: <a href="mailto:NEW@EMAIL.com">NEW@EMAIL.com</a> },
```

**To update the Google Maps embed:** Replace the `src` URL of the `<iframe>` with a new embed URL generated from Google Maps.

---

### `Breadcrumb.jsx`

**Purpose:** The dark navy page header that appears below the navbar on all inner pages. Shows a gold label, the page title, and a breadcrumb navigation trail.

**Props:**

| Prop     | Type     | Required | Description                                                    |
|----------|----------|----------|----------------------------------------------------------------|
| `label`  | string   | No       | Small gold uppercase text above the title, e.g. `"Who We Are"` |
| `title`  | string   | Yes      | The main `h1` heading                                          |
| `crumbs` | array    | Yes      | Array of `{ label: string, to?: string }` objects. The last item should have no `to` property (it is the current page) |

**Example usage:**
```jsx
<Breadcrumb
  label="Our Standards"
  title="Policy & Compliance"
  crumbs={[
    { label: 'Home', to: '/home' },
    { label: 'About', to: '/about' },
    { label: 'Policy' }          // no 'to' = current page
  ]}
/>
```

---

### `BackToTop.jsx`

**Purpose:** A floating gold circle button in the bottom-right corner that scrolls the page to the top. Visible only when the user has scrolled more than 300px.

**Implementation:** Uses React `useState` (boolean visibility) and `useEffect` (scroll event listener). Does not use jQuery. Clicking it calls `window.scrollTo({ top: 0, behavior: 'smooth' })`.

**Props:** None.

---

## 6. Page Reference

### `Home.jsx` — `/home`

The landing page. The most content-dense page on the site.

**Sections in order:**
1. Hero — full-width dark navy background with tagline, CTA buttons, and hero image
2. Mission & Vision — two cards side by side
3. About — two-column with image + counter tiles
4. Core Values — 6-card grid (data array: `VALUES`)
5. Stats — full-width navy band with 4 animated counters
6. Services — 3-card grid (data array: `SERVICES`) with link to `/service`
7. CEO Statement — image + blockquote pull quote
8. Team — 3 circular photo cards (data array: `TEAM`) with link to `/staff`
9. CTA — full-width dark overlay section with contact + call buttons

**Spinner:** A loading spinner is shown on initial page load and hidden via `useEffect` after mount.

---

### `About.jsx` — `/about`

**Sections:** Company description + image, Mission & Vision, Core Values (6 cards), Stats strip, Team (4 members), Why Choose Us (image + checklist), CTA.

---

### `Contact.jsx` — `/contact`

**Sections:** 4 info cards (address, email, phone, website), contact form + animated image, Google Maps embed.

**Form implementation (important):**
The form uses React controlled inputs with `useState`. On submit it calls `fetch()` to the Web3Forms API. Three possible states are tracked:

| State value | Meaning                | UI feedback                              |
|-------------|------------------------|------------------------------------------|
| `null`      | Not yet submitted      | Normal form                              |
| `'sending'` | Request in flight      | Button shows spinner + "Sending…" text, disabled |
| `'ok'`      | Successfully sent      | Gold success alert, form resets to empty |
| `'error'`   | Network or API failure | Red Bootstrap danger alert               |

**To change the receiving email address:** Log in to [web3forms.com](https://web3forms.com), create or update the access key, then paste the new key here:
```jsx
data.append('access_key', 'YOUR-NEW-KEY-HERE');
```

---

### `Gallery.jsx` — `/gallery`

**Sections:** Heading + description, filter buttons, image grid, CTA.

**Filter implementation:** Uses `useState` with the value `'all' | 'facility' | 'products' | 'team'`. When a filter button is clicked, the state updates and the `visible` derived constant re-filters the `ITEMS` array. No jQuery, no DOM manipulation — pure React.

**To add a new gallery image:**
```jsx
// In the ITEMS array at the top of Gallery.jsx:
{
  img:   'img/g7.jpg',        // path inside public/
  alt:   'New Image Alt',
  title: 'Card Title',
  desc:  'Short description under the card',
  cat:   'facility',          // 'facility' | 'products' | 'team'
  badge: 'Facility',          // text on the badge overlay
},
```

**Lightbox:** Uses Lightbox2 (CDN). The `<a href={item.img} data-lightbox="gallery">` attribute activates it. Clicking any gallery image opens it in the full-screen viewer.

---

### `Policy.jsx` — `/policy`

**Sections:** CEO photo + policy statement blockquote, 8 commitment cards (data array: `COMMITMENTS`), 3 ongoing commitment glass-style cards (data array: `ONGOING`), CTA.

---

### `Service.jsx` — `/service`

**Sections:** Commitment intro with value pills, 4 service detail cards (data array: `SERVICES`), Why Choose Us (6 value cards), CTA.

**Service cards** each contain: image with overlay and badge, title with icon, description paragraph, feature checklist (gold SVG bullet points), and an enquiry button.

---

### `Staff.jsx` — `/staff`

**Sections:** Staff grid (data array: `TEAM`), stats strip with 4 counters, culture section (text + 4 value tiles), careers CTA.

**Staff cards** feature: department badge (top-left), photo, animated social icons that slide in from the right on hover (CSS only), staff name, gold role label, divider, and a bio paragraph.

**To add a new staff member:**
```jsx
// In the TEAM array at the top of Staff.jsx:
{
  img:   'img/new-staff.jpg',
  name:  'Full Name Here',
  role:  'Job Title',
  dept:  'Department',          // shown on the badge: 'Leadership' | 'Operations' | etc.
  bio:   'One or two sentence biography.',
  delay: '0.5s',                // WOW animation delay — increment by 0.1s from previous
},
```

---

### `NotFound.jsx` — `/*`

A styled 404 page with a large ghost "404" watermark, a frown icon, two CTA buttons (Back to Home, Contact Us), and a row of quick navigation pill links to all main pages. No footer on this page — standard practice for error pages.

---

## 7. Hooks Reference

### `useWow.js`

```js
import useWow from '../hooks/useWow';
// Call inside any page component:
useWow();
```

**What it does:** WOW.js watches the DOM for elements with `className="wow fadeInUp"` (or similar Animate.css classes) and triggers those animations when the element scrolls into view. In a standard HTML site, WOW is initialised once on page load. In a React SPA, the DOM is replaced on every navigation — so WOW must be re-initialised on every page mount. This hook handles that automatically.

**Options:** `{ live: false }` — disables WOW's MutationObserver, which is not needed in React (React handles DOM updates itself).

---

### `useCounterUp.js`

```js
import useCounterUp from '../hooks/useCounterUp';
// Call inside any page that has data-toggle="counter-up" elements:
useCounterUp();
```

**What it does:** Finds all elements with `data-toggle="counter-up"` in the current page and initialises the jQuery CounterUp plugin on them. The plugin animates the text content of those elements from 0 to their value when they scroll into view.

**Usage in JSX:**
```jsx
<div className="stat-number" data-toggle="counter-up">369</div>
```

---

## 8. Routing

All routes are defined in `src/App.jsx`.

```
/              →  Redirect to /home       (permanent, replaces history)
/home          →  Home page
/about         →  About page
/contact       →  Contact page
/gallery       →  Gallery page
/policy        →  Policy page
/service       →  Service page
/staff         →  Staff page
/index         →  Redirect to /home       (legacy HTML bookmark support)
/* (any other) →  NotFound (404) page
```

**Adding a new page:**

1. Create `src/pages/NewPage.jsx`
2. Import and add a `<Route>` in `App.jsx`:
```jsx
import NewPage from './pages/NewPage';
// ...
<Route path="/newpage" element={<NewPage />} />
```
3. Add a nav link in `Navbar.jsx` (see Navbar reference above)
4. Add a footer link in `Footer.jsx`

**How active nav states work:**

`Navbar.jsx` uses the `useLocation()` hook from React Router. The `isActive(path)` helper returns `true` when `pathname === path`, which adds the `.active` CSS class to the corresponding nav item.

---

## 9. Styling Guide

### Where to find styles

All styles live in **`src/index.css`**. The file is divided into clearly labelled sections:

```
:root { ... }               ← Design tokens (CSS variables)
Base & Typography           ← body, headings, .lead, .label-gold
Spinner, Back to Top        ← Shared utility components
Buttons                     ← All .btn variants
Topbar                      ← .topbar
Navbar                      ← .nav-bar, .navbar, dropdowns
Breadcrumb Hero             ← .bg-breadcrumb
Value / Core Cards          ← .value-card, .value-icon  (reused on 4 pages)
Stats                       ← .stats-section, .stat-item, .stat-number
Hero Section                ← .hero-section
CEO Statement               ← .ceo-statement
CTA Section                 ← .cta-section
Mission / Vision            ← .mission-vision-section
Service cards (inline)      ← .service-card, .service-icon  (homepage variant)
Team member (circular)      ← .team-member, .team-img       (homepage/about variant)
Footer                      ← .footer, .footer-social, .copyright
--- PAGE-SPECIFIC ---
Contact Page                ← .contact-info-card, .contact-form-wrap, .map-wrapper
Gallery Page                ← .gallery-filter, .gallery-item, .gallery-img-wrap
Policy Page                 ← .policy-statement, .policy-item, .commitment-section
Service Page                ← .value-pill, .service-detail-card, .service-feature-list
Staff Page                  ← .staff-card, .staff-img-wrap, .staff-social, .team-stats-strip
```

### How to change a brand colour

Edit the CSS variable in `:root {}` at the top of `index.css`. The change cascades everywhere automatically:

```css
:root {
  --ltl-gold: #c9a84c;   /* Change this to update gold across the whole site */
  --ltl-navy: #0b1e3d;   /* Change this to update navy across the whole site */
}
```

### How to change a font

Replace the Google Fonts URL in `index.html` and update the font-family references in `index.css`:

```css
/* In index.css — change both these lines */
h1, h2, h3, h4, h5, h6 { font-family: 'NewHeadingFont', sans-serif; }
body                     { font-family: 'NewBodyFont', serif; }
```

### Bootstrap overrides

The site overrides Bootstrap's `--bs-primary` to point to `--ltl-navy`. This means Bootstrap utility classes like `text-primary`, `bg-primary`, and `border-primary` all produce the brand navy colour rather than Bootstrap's default blue.

```css
:root {
  --bs-primary:     var(--ltl-navy);
  --bs-primary-rgb: 11, 30, 61;
}
```

Note: `text-primary` in this project renders gold (`var(--ltl-gold)`) on white backgrounds — this is intentional for the small section labels. This is overridden at the bottom of `index.css`:
```css
.text-primary { color: var(--ltl-gold) !important; }
```

---

## 10. Images & Assets

All images should be placed in the `public/img/` directory. Vite serves everything in `public/` at the root, so `public/img/ceo.jpg` is accessed in JSX as `src="img/ceo.jpg"`.

### Required images

| Filename                   | Used in                       | Description                          |
|----------------------------|-------------------------------|--------------------------------------|
| `1.jpg`                    | Service page, favicon         | Chemical product / site icon         |
| `2.jpeg`                   | Service page, CTA backgrounds | Industrial image                     |
| `3.jpeg`                   | Service page                  | Process engineering image            |
| `4.jpg`                    | Service page                  | Project management image             |
| `a1.jpg`                   | Home, About                   | Company facility / warehouse         |
| `ceo.jpg`                  | Home, About, Policy, Staff    | Photo of the CEO                     |
| `md.jpg`                   | Home, About, Staff            | Photo of the Managing Director       |
| `operations-manager.jpg`   | Home, About, Staff            | Photo of the Operations Manager      |
| `secretary.jpg`            | About, Staff                  | Photo of the Company Secretary       |
| `hero-image.png`           | Home                          | Hero section illustration            |
| `bg-breadcrumb.jpg`        | All inner pages               | Background for the breadcrumb header |
| `contact-img.png`          | Contact                       | Decorative animated contact image    |
| `service-mission.jpg`      | Service                       | Services intro section image         |
| `why-choose-us.jpg`        | About                         | Why choose us section image          |
| `commitment-bg.jpg`        | Policy                        | Background for commitment section    |
| `g1.jpeg – g6.jpg`         | Gallery                       | Gallery photos                       |

### Image guidelines

- **Staff photos:** Aim for at least 400×400px, square crop, head and shoulders. JPEG format.
- **Section images:** At least 800px wide. JPEG at 80% quality.
- **Gallery images:** At least 600×400px. JPEG or WebP.
- Add `loading="lazy"` to all images below the fold (already done in the gallery and service pages).

---

## 11. Third-Party Libraries

All third-party libraries load from CDN in `index.html`. None of them are installed as npm packages (except React and React Router which are in `package.json`).

| Library         | CDN Provider        | Version | Loaded via  |
|-----------------|---------------------|---------|-------------|
| Bootstrap CSS   | jsdelivr            | 5.0.0   | `<link>`    |
| Bootstrap JS    | jsdelivr            | 5.0.0   | `<script>`  |
| jQuery          | Google APIs         | 3.6.4   | `<script>`  |
| Font Awesome    | fontawesome.com     | 5.15.4  | `<link>`    |
| Bootstrap Icons | jsdelivr            | 1.4.1   | `<link>`    |
| Animate.css     | cdnjs               | 3.7.2   | `<link>`    |
| WOW.js          | cdnjs               | 1.1.2   | `<script>`  |
| jQuery Easing   | cdnjs               | 1.4.1   | `<script>`  |
| Waypoints       | cdnjs               | 4.0.1   | `<script>`  |
| CounterUp       | cdnjs               | 1.0.0   | `<script>`  |
| Lightbox2 CSS   | cdnjs               | 2.11.4  | `<link>`    |
| Lightbox2 JS    | cdnjs               | 2.11.4  | `<script>`  |
| Owl Carousel CSS| cdnjs               | 2.3.4   | `<link>`    |
| Owl Carousel JS | cdnjs               | 2.3.4   | `<script>`  |
| Google Fonts    | fonts.googleapis.com| —       | `<link>`    |

**Important:** The order of `<script>` tags in `index.html` matters. jQuery must load before CounterUp, Waypoints, and Lightbox2.

---

## 12. Contact Form

The contact form on `/contact` submits to [Web3Forms](https://web3forms.com), a free form backend service.

### How it works

1. User fills in the form (name, email, phone, subject, message)
2. On submit, `event.preventDefault()` stops the default browser form submission
3. A `FormData` object is built and the access key is appended
4. `fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })` sends the data
5. On success (`res.ok`), a gold success alert is shown and the form fields reset to empty
6. On failure, a red error alert is shown with a prompt to call directly

### Changing the receiving email address

1. Go to [web3forms.com](https://web3forms.com)
2. Enter the new email address to generate a new access key
3. In `src/pages/Contact.jsx`, find this line and replace the key:
```jsx
data.append('access_key', 'bc5139d2-b18d-46fa-85d4-4f5a11272896');
```

### Spam protection

A honeypot field is appended: `data.append('botcheck', '')`. Web3Forms uses this to filter automated spam submissions.

---

## 13. Development Workflow

### Prerequisites

- **Node.js 18+** — Download from [nodejs.org](https://nodejs.org)
- **npm 9+** — Included with Node.js

### Setup

```bash
# Clone or unzip the project
cd lekisa-react

# Install dependencies
npm install

# Start dev server — live reload at http://localhost:5173
npm run dev
```

### Available scripts

| Script              | Description                                                    |
|---------------------|----------------------------------------------------------------|
| `npm run dev`       | Start the development server with hot module replacement       |
| `npm run build`     | Build the optimised production bundle into `dist/`             |
| `npm run preview`   | Serve the production build locally for final checks            |

### Making content changes

| Task                          | File(s) to edit                                    |
|-------------------------------|----------------------------------------------------|
| Update phone number           | `Topbar.jsx`, `Navbar.jsx`, `Footer.jsx`, `Contact.jsx` |
| Update email address          | `Topbar.jsx`, `Footer.jsx`, `Contact.jsx`          |
| Update company address        | `Footer.jsx`, `Contact.jsx`                        |
| Add/remove a nav item         | `Navbar.jsx`, `Footer.jsx`                         |
| Change hero text or CTA       | `src/pages/Home.jsx` (hero section)                |
| Add a team member             | `Staff.jsx` and `About.jsx` (`TEAM` arrays)        |
| Add a gallery image           | `Gallery.jsx` (`ITEMS` array) + add image to `public/img/` |
| Update service descriptions   | `Service.jsx` (`SERVICES` array)                   |
| Change brand colors           | `src/index.css` (`:root` variables)                |
| Change fonts                  | `index.html` (Google Fonts URL) + `src/index.css`  |

---

## 14. Deployment Guide

### Option A — cPanel Shared Hosting (recommended for this client)

1. Build the project:
```bash
npm run build
```

2. This generates a `dist/` folder containing:
   - `index.html`
   - `assets/` (compiled JS and CSS, fingerprinted filenames)

3. Upload all contents of `dist/` to `public_html/` on the cPanel server.

4. Upload your `img/` folder to `public_html/img/`.

5. **Critical:** Create or edit `.htaccess` in `public_html/` with these rules:
```apache
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# React Router — serve index.html for all non-file requests
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```

Without the last rule, refreshing any page other than `/home` will show a 404 from the server because the server looks for a real file or folder at `/about`, `/contact` etc. — which don't exist. The rule tells Apache to always serve `index.html` and let React Router handle the URL.

### Option B — Netlify (alternative, free tier available)

1. Push the project to a GitHub repository
2. Connect the repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add a `public/_redirects` file:
```
/*  /index.html  200
```

Netlify will handle the rest automatically.

### Option C — Vercel (alternative, free tier available)

1. Push to GitHub
2. Import the repository in Vercel
3. Vercel auto-detects Vite — no configuration needed
4. Vercel handles client-side routing automatically

---

## 15. Common Maintenance Tasks

### Update a phone number across the entire site

The phone number appears in multiple files. Search for `713506664` across all files and replace:

```
Topbar.jsx    — href and display text
Navbar.jsx    — href and display text
Footer.jsx    — href values (×2) and display text
Contact.jsx   — INFO array (hrefs and display text)
Home.jsx      — CTA section "Call Now" button href
```

### Add a new staff member

1. Add their photo to `public/img/`
2. Add an entry to the `TEAM` array in `src/pages/Staff.jsx`:
```jsx
{
  img:   'img/new-person.jpg',
  name:  'Full Name',
  role:  'Job Title',
  dept:  'Department',   // e.g. 'Finance', 'Sales', 'Operations'
  bio:   'Brief description of their role.',
  delay: '0.5s',         // increment by 0.1s from the last entry
},
```
3. If they should also appear on the About page, add them to the `TEAM` array in `src/pages/About.jsx` as well.

### Add a new service

1. Add an entry to the `SERVICES` array in `src/pages/Service.jsx`:
```jsx
{
  img:      'img/new-service.jpg',
  alt:      'Service Alt Text',
  badge:    'Badge Text',
  icon:     'fa-icon-name',            // Font Awesome 5 icon class
  title:    'Service Title',
  desc:     'Short description paragraph.',
  features: ['Feature one', 'Feature two', ...],
  delay:    '0.5s',
},
```
2. Add a preview card to `Home.jsx` in the `SERVICES` array if it should appear on the landing page.

### Add a new gallery image

Add an entry to the `ITEMS` array in `src/pages/Gallery.jsx` and place the image in `public/img/`:
```jsx
{
  img:   'img/g7.jpg',
  alt:   'Descriptive alt text',
  title: 'Card Title',
  desc:  'Card description.',
  cat:   'facility',         // 'facility' | 'products' | 'team'
  badge: 'Facility',
},
```

### Update the Google Maps embed

1. Go to [maps.google.com](https://maps.google.com) and find the location
2. Click Share → Embed a map → Copy HTML
3. Extract the `src` URL from the copied iframe code
4. Replace the `src` value in `Footer.jsx` (appears twice — once in the footer map, once in the full map on the Contact page in `Contact.jsx`)

---

## 16. Known Limitations & Future Work

### Current limitations

| Item                              | Detail                                                                            |
|-----------------------------------|-----------------------------------------------------------------------------------|
| **No real logo**                  | The brand mark is the text "LTL" with a gold "L". A proper SVG logo file should replace this when available. |
| **Social media links**            | All social icon links point to `#`. They need real URLs once accounts are created. |
| **Newsletter form**               | The newsletter email input in the footer is visual only — it has no backend integration. |
| **Staff photos**                  | Several staff cards may still use `no-profile.png` if real photos have not been provided. |
| **No analytics**                  | Google Analytics (GA4) has not been added. See recommendation below. |
| **SEO meta tags**                 | Each page has basic meta title/description. Open Graph and Twitter Card tags should be added. |
| **Favicon**                       | Currently using `img/1.jpg` (a product photo) as the favicon. A proper branded icon should replace this. |

### Recommended next improvements

**Google Analytics (GA4)**
Add the tracking snippet just before `</head>` in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```

**Open Graph tags**
Add to `index.html` inside `<head>`:
```html
<meta property="og:title"       content="Lekisa Trading Limited" />
<meta property="og:description" content="Kenya's trusted partner in industrial chemical distribution." />
<meta property="og:image"       content="https://lekisatrading.co.ke/img/og-image.jpg" />
<meta property="og:url"         content="https://lekisatrading.co.ke" />
<meta property="og:type"        content="website" />
```

**WhatsApp button**
For a Kenyan B2B audience, a WhatsApp click-to-chat button can significantly increase enquiries. Add to `App.jsx` alongside `<BackToTop />`:
```jsx
<a
  href="https://wa.me/254713506664?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20chemical%20products."
  className="back-to-top"
  style={{ right: 88, background: '#25D366', color: 'white' }}
  target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
>
  <i className="fab fa-whatsapp" style={{ fontSize: '1.3rem' }}></i>
</a>
```

---

## 17. Contact & Support

**Developer:** Samuel Muli
**Portfolio:** [muli-samuel.onrender.com](https://muli-samuel.onrender.com)

**Client:** Lekisa Trading Limited
**Location:** Godown No.4, Off Outering Road, Donholm, Nairobi — KENYA
**Phone:** +254 713 506 664 | +254 741 077 018
**Email:** info@lekisatrading.co.ke
**Website:** lekisatrading.co.ke

---

*End of documentation. Last updated 2026.*
