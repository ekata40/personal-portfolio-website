# Digital Ekta

Portfolio and consulting site for Ekta Upadhyay, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Start locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and replace `NEXT_PUBLIC_SITE_URL` before deployment.

## Editing content

- Brand/contact details: `content/site.ts`
- Services and service detail pages: `content/services.ts`
- Articles and post pages: `content/blog-posts.ts`

The contact form validates in the browser and posts to `/api/contact`. The API validates/sanitizes again and has a honeypot field. Add an email or CRM provider in `app/api/contact/route.ts` using `CONTACT_TO_EMAIL` and `EMAIL_PROVIDER_API_KEY`; no message is claimed as sent unless a provider is configured.

## Deployment

Deploy to any Next.js-compatible host. Set the environment variables in the host dashboard and update the public site URL for canonical metadata, sitemap, and robots output.
