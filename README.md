# Rocket.io Website

Production-quality company website for **Rocket.io** — a modern software and digital-product company.

Built with **Next.js 14**, **React**, **TypeScript** and **Tailwind CSS**.

---

## Quick Start (Local Development)

### Prerequisites

- Node.js **18.17** or later
- npm **9** or later

### 1 — Clone the repository

```bash
git clone https://github.com/menahil-tanveer55/react-app.git
cd react-app
```

### 2 — Install dependencies

```bash
npm install
```

### 3 — Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server on port 3000 |
| `npm run build` | Build for production |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Run Prettier to format all files |

---

## Project Structure

```
/
├── app/                      # Next.js App Router pages and layouts
│   ├── layout.tsx            # Root layout (fonts, header, footer)
│   ├── page.tsx              # Homepage
│   ├── not-found.tsx         # Custom 404 page
│   ├── sitemap.ts            # Auto-generated sitemap
│   ├── robots.ts             # robots.txt configuration
│   ├── products/             # Products pages
│   ├── services/             # Services page
│   ├── work/                 # Portfolio and case studies
│   ├── about/                # About page
│   ├── blog/                 # Blog listing and articles
│   ├── contact/              # Contact form page
│   ├── privacy/              # Privacy policy placeholder
│   └── terms/                # Terms placeholder
│
├── components/
│   ├── layout/               # Header, Footer, MobileNav, AnnouncementBar
│   ├── sections/             # Homepage and page sections
│   ├── ui/                   # Reusable UI components
│   └── forms/                # ContactForm
│
├── data/                     # Typed placeholder content (replace with real data)
│   ├── products.ts
│   ├── services.ts
│   ├── work.ts
│   ├── blog.ts
│   ├── testimonials.ts
│   ├── tech-stack.ts
│   ├── process-steps.ts
│   └── faqs.ts
│
├── config/
│   ├── site.ts               # Site name, URL, social links, navigation
│   └── metadata.ts           # Default SEO metadata
│
├── lib/
│   ├── utils.ts              # cn() helper and formatDate
│   └── contact-service.ts    # Form submission stub (connect to real backend here)
│
├── types/                    # TypeScript interfaces
├── styles/
│   └── globals.css           # CSS variables, Tailwind directives, base styles
└── public/                   # Static assets
```

---

## Updating Content

All placeholder content lives in the `data/` folder. Each file is a plain TypeScript array — edit the values directly.

| File | Controls |
|---|---|
| `data/products.ts` | Product cards, product detail pages |
| `data/services.ts` | Service cards, engagement models |
| `data/work.ts` | Case study cards and detail pages |
| `data/blog.ts` | Blog post cards and article pages |
| `data/testimonials.ts` | Testimonial quotes (marked as placeholders) |
| `data/tech-stack.ts` | Technology badges grouped by category |
| `data/process-steps.ts` | The 7-step process timeline |
| `data/faqs.ts` | FAQ accordion on the Services page |
| `config/site.ts` | Company name, URL, social links, nav links |

---

## Updating the Brand

All colours are defined as CSS custom properties in `styles/globals.css`:

```css
--color-primary         : #F04E23   /* Rocket Orange */
--color-secondary       : #0B1628   /* Midnight Navy */
--color-accent          : #2563EB   /* Electric Blue */
--color-accent-alt      : #F59E0B   /* Warm Amber */
```

Change a value once and it updates everywhere.

---

## Connecting the Contact Form

The contact form currently uses a stub in `lib/contact-service.ts`.  
To wire it to a real backend, replace the body of `submitContactForm()` with:

- A `fetch()` call to your REST API
- A Next.js Server Action
- A Supabase client call
- A Firebase Firestore write
- An email service like Resend or SendGrid

The function signature and return type stay the same — only the implementation changes.

---

## Deployment

### Vercel (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel detects Next.js automatically — no configuration needed
4. Click **Deploy**

### Other platforms

Run `npm run build` then `npm run start`, or deploy the `/.next` output to any Node.js host.

---

## Adding a New Page

1. Create a new folder in `app/` (e.g. `app/pricing/`)
2. Add a `page.tsx` file with a default export
3. Add `export const metadata` for SEO
4. Add the route to `config/site.ts` nav arrays if needed
5. Update `app/sitemap.ts` to include the new route

---

## Replacing Placeholder Content

Search for `[` in the `data/` and `app/` folders to find all placeholder markers:

```bash
grep -r "\[" data/ app/ --include="*.ts" --include="*.tsx" -l
```

Each placeholder is written as `[Add real content here]` so they are easy to find and replace.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14.2.5 | Framework with App Router |
| React | 18.3.1 | UI library |
| TypeScript | 5.5.3 | Type safety |
| Tailwind CSS | 3.4.6 | Styling |
| Lucide React | 0.408.0 | Icons |
| Framer Motion | 11.3.8 | Animations (available, not yet wired) |
| clsx + tailwind-merge | latest | Class name utilities |
