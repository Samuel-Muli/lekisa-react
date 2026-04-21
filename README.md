# Lekisa Trading Limited — Website

Corporate website for **Lekisa Trading Limited**, an industrial chemical distributor based in Nairobi, Kenya. Built with **React 18 + Vite**, styled with Bootstrap 5, and designed around a custom Navy + Gold design system.

---

## Quick Start

### Prerequisites
- Node.js 18 or higher
- npm 9 or higher

### Run locally
```bash
# 1. Install dependencies
npm install

# 2. Start development server  (http://localhost:5173)
npm run dev

# 3. Expose to network
npm run dev -- --host

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

### Add your images
Copy your `img/` folder into `public/`:
```
public/
└── img/
    ├── ceo.jpg
    ├── md.jpg
    ├── a1.jpg
    ├── hero-image.png
    ├── g1.jpeg  ...  g6.jpg
    └── ...
```

---

## Pages

| URL        | File                     | Description                        |
|------------|--------------------------|------------------------------------|
| `/`        | Redirects → `/home`      | Root redirect                      |
| `/home`    | `src/pages/Home.jsx`     | Landing page                       |
| `/about`   | `src/pages/About.jsx`    | Company overview, team, values     |
| `/contact` | `src/pages/Contact.jsx`  | Contact form + map                 |
| `/gallery` | `src/pages/Gallery.jsx`  | Filterable photo gallery           |
| `/policy`  | `src/pages/Policy.jsx`   | Policy & compliance statement      |
| `/service` | `src/pages/Service.jsx`  | Services detail page               |
| `/staff`   | `src/pages/Staff.jsx`    | Full staff directory               |
| `/*`       | `src/pages/NotFound.jsx` | 404 page                           |

---

## Tech Stack

| Tool             | Version  | Purpose                        |
|------------------|----------|--------------------------------|
| React            | 18.2     | UI framework                   |
| React Router DOM | 6.22     | Client-side routing            |
| Vite             | 5.1      | Build tool & dev server        |
| Bootstrap        | 5.0 CDN  | Layout & utility classes       |
| Font Awesome     | 5.15 CDN | Icons                          |
| WOW.js           | 1.1 CDN  | Scroll-reveal animations       |
| CounterUp        | 1.0 CDN  | Animated number counters       |
| Lightbox2        | 2.11 CDN | Gallery image viewer           |
| Google Fonts     | CDN      | Syne (headings) + Lora (body)  |

---

## Deployment

### Option 1: cPanel / Shared Hosting

```bash
npm run build
```

Upload everything inside the generated `dist/` folder to `public_html/`.

Add this to your `.htaccess` to prevent 404s on page refresh:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```

### Option 2: Render.com

#### Prerequisites
- GitHub repository with project pushed
- Render account ([render.com](https://render.com))

#### Steps

1. **Create a new Static Site on Render:**
   - Log in to [Render Dashboard](https://dashboard.render.com)
   - Click **New +** → **Static Site**
   - Connect your GitHub repository
   - Select the branch to deploy (usually `main`)

2. **Configure Build Settings:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

3. **Deploy:**
   - Click **Create Static Site**
   - Render will automatically build and deploy from the `dist` folder
   - Your site will be live at `your-name.onrender.com`

4. **Custom Domain (Optional):**
   - Go to **Settings** → **Custom Domains**
   - Add your domain and follow DNS configuration steps

5. **Auto-Deploy:**
   - Any push to your selected branch will trigger automatic rebuilds and redeployment

---

## Contact Form

The contact form submits to [Web3Forms](https://web3forms.com).  
The access key lives in `src/pages/Contact.jsx`:

```jsx
data.append('access_key', 'bc5139d2-b18d-46fa-85d4-4f5a11272896');
```

To change it, replace that value with a key from your Web3Forms account.

---

## Author

Designed & developed by **Samuel Muli**
Portfolio: [muli-samuel.onrender.com](https://muli-samuel.onrender.com)

**Client:** Lekisa Trading Limited
**Location:** Godown No.4, Off Outering Road, Donholm, Nairobi — KENYA
**Phone:** +254 713 506 664 | +254 741 077 018
**Email:** info@lekisatrading.co.ke
