# TrueFleet website

The marketing and compliance website for TrueFleet, a digital platform for commercial vehicle
owners, transporters and fleet operators.

Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

---

## Running it locally

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

Other commands:

```bash
npm run build     # production build
npm run start     # serve the production build
npm run lint      # eslint
npx tsc --noEmit  # type check
```

---

## Before you go live

Three things need your input. Everything else is done.

### 1. Fill in your company details

Open **`data/company.ts`** and complete every field marked `TODO`:

- registered legal entity name
- registered office address
- support email and support phone number
- governing law state (used in the terms)
- CIN and GSTIN, once you have them
- `siteUrl`, if the production domain is not `https://www.truefleet.in`

Fields left empty are hidden from the site automatically, so nothing half-finished or invented
is ever shown. While `npm run dev` is running, a small checklist panel appears in the corner
listing whatever is still missing. It never appears in a production build.

Payment gateways and banks generally will not activate a merchant account until the legal name,
registered address, support email and support phone are visible on the website.

### 2. Connect the forms to somewhere real

The contact form and the partner enquiry form validate on both the client and the server, but
they do not pretend to succeed. Until a delivery target is configured they return a clear error
and point the visitor at your phone number and email instead.

Pick one option and set the environment variables:

**Webhook** (Zapier, Make, n8n, a Slack workflow, or your own endpoint):

```
ENQUIRY_WEBHOOK_URL="https://..."
```

**Email through Resend** (no package to install, uses their REST API):

```
RESEND_API_KEY="re_..."
ENQUIRY_FROM_EMAIL="website@yourdomain.in"   # must be a verified sender
ENQUIRY_TO_EMAIL="enquiries@yourdomain.in"
```

**Your own system**: replace the body of `deliverEnquiry` in `lib/enquiry-delivery.ts` with a call
to your CRM or database. Nothing else needs to change.

Copy `.env.example` to `.env.local` for local development, and set the same variables in your
hosting provider for production.

### 3. Have the policies reviewed

`/terms`, `/privacy`, `/refund-policy` and `/shipping-policy` are complete, business-appropriate
initial drafts written so that a payment gateway or bank can complete merchant onboarding. They
have **not** been reviewed by a lawyer. Each page carries a note to that effect in its source.

Have counsel review all four before launch, and again whenever you add a service line or a
fulfilment partner. Timelines and processing windows quoted in the refund and shipping policies
are read from `data/legal.ts`, so they can be aligned with your gateway and partner agreements
without touching page content.

---

## Where the content lives

Business content is deliberately kept out of the components.

| File | What it controls |
| --- | --- |
| `data/company.ts` | Legal name, address, email, phone, CIN, GSTIN, site URL, social links |
| `data/services.ts` | All 14 services, their descriptions and their current availability stage |
| `data/benefits.ts` | Member advantages, and published partner benefits |
| `data/navigation.ts` | Header, footer and legal navigation |
| `data/legal.ts` | Policy last-updated date, refund windows, delivery windows, retention wording |

### Adding a partner benefit

`publishedPartnerBenefits` in `data/benefits.ts` is empty on purpose. Add an entry only once the
commercial agreement is signed **and** the partner has approved public advertising of that
benefit. Anything added there appears on the home page automatically. The file contains a
commented example showing the shape.

### Marking a service as live

Each service in `data/services.ts` has an `availability` value:

| Value | Shown on the site as |
| --- | --- |
| `live` | Available now |
| `partner-integration` | Through partner integrations |
| `in-development` | In development |
| `planned` | Planned |

Nothing is set to `live` today. Change a service to `live` only once members can actually use it.

---

## Deploying

The site is fully static apart from the two form endpoints, so it deploys anywhere that runs
Node 20 or later.

**Vercel** is the least work: import the repository, add the environment variables from step 2
above, and deploy. HTTPS, compression and caching are handled for you.

**Anywhere else:**

```bash
npm ci
npm run build
npm run start     # listens on port 3000
```

Put it behind a reverse proxy that terminates TLS. Payment gateways require the live site to be
served over HTTPS.

After deploying, point `siteUrl` in `data/company.ts` at the production domain so canonical URLs,
the sitemap at `/sitemap.xml` and the Open Graph tags all resolve correctly.

---

## Project structure

```
app/
  layout.tsx              root layout, fonts, metadata, structured data
  page.tsx                home page
  services/               all services and their current stage
  fleet-owners/           the transport owner story
  partners/               partner value proposition and enquiry form
  about/                  mission, vision, how we work
  contact/                contact form and company details
  terms/ privacy/ refund-policy/ shipping-policy/
  api/contact/ api/partner/    form endpoints
  sitemap.ts robots.ts not-found.tsx
components/
  site/                   header, mobile navigation, footer, logo, dev checklist
  ui/                     buttons, sections, reveal animation, icons, page hero
  home/                   the nine home page sections
  product/                the app interface previews, built in code
  fleet/                  the vehicle to platform to partner diagram
  forms/                  contact and partner forms, fields, status panels
  legal/                  shared policy page layout
data/                     all editable business content
lib/                      validation, form delivery adapter, helpers
assets/fonts/             self-hosted Manrope and Inter (latin subset, OFL licensed)
```

---

## Design and technical notes

**Typography** carries the identity: Manrope for headings, Inter for body text. Both are
self-hosted variable fonts, latin subset only, about 73KB combined and preloaded. Nothing is
fetched from a font CDN, so there is no render-blocking third-party request.

**Palette** is deliberately narrow: white and a cool off-white for surfaces, near-black for text,
a deep navy as the brand colour, and a single brass accent used only for small signals. All
tokens live in the `@theme` block at the top of `app/globals.css`.

**The app previews** in the hero, on the home page and on the fleet owners page are real markup,
not screenshots. They stay sharp at any resolution, add no image weight, and every one carries a
visible note saying the content is illustrative.

**Motion** is one fade-and-lift reveal used on section openings, plus a short staggered entrance
in the hero. `prefers-reduced-motion` switches all of it off, and a `<noscript>` rule makes every
revealed element visible if JavaScript does not run.

**Accessibility**: semantic landmarks, a skip link, one visible focus style used everywhere,
labelled form fields with `aria-invalid` and linked error messages, and text colours checked
against WCAG AA on every background they are used on.

**No fabricated claims.** There are no invented statistics, testimonials, customer logos,
partner names, certifications or registration details anywhere on the site. Partner categories
are named; partner companies are not, until they approve it in writing.
