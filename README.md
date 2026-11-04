# Oluwaseun — Web Development & AI Automation

Premium personal-brand website for Oluwaseun, a software engineer specializing in web development, custom digital products, and AI business automation.

## Tech Stack

- **Framework**: Next.js 16.4.3 (App Router, Turbopack)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Validation**: Zod v4
- **Email**: Resend API
- **Deployment**: Vercel

## Local Development

### 1. Prerequisites

- Node.js 18.17+ (verified with v22.20.0)
- npm 9+ (verified with v11.11.1)

### 2. Clone and install

```bash
npm install
```

### 3. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Open `.env.local` and set:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Your WhatsApp number in digits only (no `+`, spaces, or dashes). Example: `2348012345678` |
| `NEXT_PUBLIC_SITE_URL` | Production URL, e.g. `https://oluwaseun.dev` |
| `RESEND_API_KEY` | Your Resend API key from [resend.com](https://resend.com) |
| `CONTACT_NOTIFICATION_EMAIL` | Email address to receive project enquiry notifications |
| `RESEND_FROM_EMAIL` | Sender address (must be from your verified Resend domain), e.g. `Oluwaseun Enquiries <hello@oluwaseun.dev>` |
| `UPSTASH_REDIS_REST_URL` | *(Optional)* Upstash Redis URL for production-grade rate limiting |
| `UPSTASH_REDIS_REST_TOKEN` | *(Optional)* Upstash Redis token |

> **Note**: Without `RESEND_API_KEY` and `CONTACT_NOTIFICATION_EMAIL`, form submissions will return a configuration error in development. The form UI, validation, and WhatsApp CTAs continue to work normally.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Run tests

```bash
npm test
```

Tests verify: form validation, bot detection (honeypot), WhatsApp URL generation, and the in-memory rate limiter.

### 6. Type check

```bash
npx tsc --noEmit
```

### 7. Production build

```bash
npm run build
```

---

## Project Architecture

```
src/
  app/
    api/contact/route.ts    — POST endpoint: rate limiting, validation, Resend dispatch
    globals.css             — Design tokens, global styles, reduced-motion
    layout.tsx              — Root layout: SEO metadata, fonts, Navbar, Footer
    page.tsx                — Main landing page (all sections assembled)
    opengraph-image.tsx     — Dynamic OG image (ImageResponse)
    robots.ts               — Dynamic robots.txt
    sitemap.ts              — Dynamic sitemap.xml
    privacy/page.tsx        — Privacy policy
    not-found.tsx           — Custom 404 page
  components/
    layout/
      navbar.tsx            — Responsive sticky navbar with accessible mobile menu
      footer.tsx            — Footer with social links and dynamic copyright
    sections/
      hero.tsx              — Hero with architecture preview composition
      problems.tsx          — Business problems section (light surface)
      services.tsx          — Three services with pricing and WhatsApp CTAs
      portfolio.tsx         — Architecture showcases with system diagrams
      process.tsx           — 5-step delivery process timeline
      about.tsx             — About section with monogram composition
      partnership.tsx       — Ongoing retainer / support section
      contact.tsx           — Final CTA + enquiry form
    forms/
      project-enquiry-form.tsx  — Full form with loading, success, error states
    ui/
      badge.tsx             — Badge component (lime, outline, neutral variants)
      button.tsx            — Button component (primary/secondary/outline)
      whatsapp-button.tsx   — WhatsApp CTA with contextual prefilled messages
      floating-whatsapp.tsx — Mobile floating WhatsApp action (scroll-aware)
  lib/
    site-config.ts          — All brand copy, services, problems, process steps
    contact-schema.ts       — Zod schema (shared client + server)
    whatsapp.ts             — WhatsApp URL builder and message generator
    email.ts                — Resend email dispatch and HTML template
    rate-limit.ts           — Rate limiter (Upstash Redis + in-memory fallback)
    analytics.ts            — Privacy-conscious event tracking abstraction
  types/
    project.ts              — Strongly typed portfolio project model
tests/
  test-suite.ts             — Logic verification tests (tsx runner)
```

---

## WhatsApp Configuration

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to your full international number in **digits only**:

```
# Correct:
NEXT_PUBLIC_WHATSAPP_NUMBER=2348012345678

# Incorrect:
NEXT_PUBLIC_WHATSAPP_NUMBER=+234 (801) 234-5678
```

If unconfigured, all WhatsApp buttons fall back safely to the `#contact` anchor.

---

## Email (Resend) Configuration

1. Sign up at [resend.com](https://resend.com) and create an API key.
2. Verify your sending domain in Resend's dashboard.
3. Set `RESEND_FROM_EMAIL` to an address from your verified domain.
4. Set `CONTACT_NOTIFICATION_EMAIL` to the inbox that should receive enquiries.

**Enquiry notifications** include: service type, name, email, business name, budget tier, timeline, and project description. The reply-to is set to the submitter's email for convenient direct reply.

---

## Rate Limiting

- **Development / single-instance**: In-memory token bucket (5 requests / 10 minutes per IP). Resets on server restart.
- **Production / serverless**: Configure Upstash Redis for persistent cross-instance rate limiting. No additional code changes required — set the two Upstash env vars and the system automatically uses Redis.

Get credentials at [upstash.com](https://upstash.com).

---

## Analytics

The site includes a privacy-conscious analytics abstraction (`src/lib/analytics.ts`) that:

- Tracks: `whatsapp_click`, `project_form_start`, `project_form_submit`, `project_form_error`, `service_cta_click`
- Captures UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) without storing PII
- Integrates with Vercel Analytics if installed
- **Never sends** names, emails, or project descriptions to analytics

To enable Vercel Analytics:
```bash
npm install @vercel/analytics
```
Then import and add `<Analytics />` in `layout.tsx`.

---

## Deployment (Vercel)

### Option A — CLI

```bash
npx vercel --prod
```

### Option B — GitHub Integration

1. Push to a GitHub repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no framework configuration needed.
4. Set all environment variables in the Vercel project dashboard under **Settings → Environment Variables**.

### Production Checklist

- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` set to verified number
- [ ] `NEXT_PUBLIC_SITE_URL` set to actual production domain
- [ ] `RESEND_API_KEY` set and domain verified in Resend
- [ ] `CONTACT_NOTIFICATION_EMAIL` set to monitored inbox
- [ ] `RESEND_FROM_EMAIL` set to verified sender address
- [ ] Test form submission in production — verify enquiry email arrives
- [ ] Test all WhatsApp CTAs on mobile device — verify correct number and prefilled text
- [ ] Update social profile links in `footer.tsx` to real LinkedIn and GitHub URLs
- [ ] Replace LinkedIn/GitHub placeholder `href` values with real profile URLs
- [ ] Set real site URL in `src/lib/site-config.ts` (`url` field) and/or `NEXT_PUBLIC_SITE_URL`
- [ ] Review and approve all copy before public launch
- [ ] Add Google Search Console verification tag if required
- [ ] Configure Upstash Redis for production rate limiting (optional but recommended)
- [ ] Replace `sitemap.ts` fixed date `"2026-10-29"` with your actual last-updated date

---

## Owner-Supplied Details Required Before Launch

The following items require real information from the business owner:

| Item | Location | Status |
|---|---|---|
| WhatsApp phone number | `NEXT_PUBLIC_WHATSAPP_NUMBER` env var | ⏳ Required |
| LinkedIn profile URL | `src/components/layout/footer.tsx` line ~42 | ⏳ Required |
| GitHub profile URL | `src/components/layout/footer.tsx` line ~53 | ⏳ Required |
| Production domain name | `NEXT_PUBLIC_SITE_URL` and `site-config.ts` | ⏳ Required |
| Resend API key + verified domain | Resend dashboard + env vars | ⏳ Required |
| Contact notification email | `CONTACT_NOTIFICATION_EMAIL` env var | ⏳ Required |
| Real portfolio projects | `src/lib/portfolio-data.ts` | ⏳ Optional (placeholder showcases in place) |
| Professional portrait (optional) | `public/images/portrait/` | ⏳ Optional (monogram composition currently used) |

---

## Design System

| Token | Value | Usage |
|---|---|---|
| Warm Ivory | `#F7F7F4` | Light section backgrounds, text on dark |
| Deep Charcoal | `#171A19` | Primary dark background |
| Electric Lime | `#D9F36A` | Primary CTA, highlights, active states |
| Soft Neutral | `#E5E6E0` | Light section borders |
| Muted Text (dark) | `#9EABA2` | Secondary text on dark surfaces |
| Muted Text (light) | `#555E59` | Secondary text on light surfaces |

Typography: Geist Sans (display + body) / Geist Mono (code and technical elements).

---

## License

Private — commercial use reserved for Oluwaseun. Not open source.
