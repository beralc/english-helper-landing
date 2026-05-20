# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

Root `/` redirects to `/es` by default (see `next.config.js`).

## Architecture

**Next.js 16 / React 19 / TypeScript / Tailwind CSS**, deployed on Vercel with auto-deploy on push to `main`.

### Routing & i18n

All pages live under `app/[lang]/` — the `lang` param is either `"en"` or `"es"`. `generateStaticParams` in `layout.tsx` pre-renders both locales. Language switching is handled by `components/LanguageSwitcher.tsx`.

### Content system

All copy lives in `lib/content.ts` as a typed `Record<Lang, Content>` object — no separate locale files. To add or change any text, edit the `content` object there. The `getContent(lang)` helper is called in server components and passed down as props.

### Component conventions

- Server components by default (`app/[lang]/page.tsx`, `app/[lang]/layout.tsx`)
- Client components use `'use client'` directive (e.g., `InvitationForm.tsx`, `CookieConsent.tsx`)
- Components receive typed props sliced from `Content` (e.g., `content: Content['form']`)

### Form submission

`InvitationForm.tsx` currently simulates submission with a `setTimeout`. The TODO comment marks where the real endpoint should go. When implementing, add an API route at `app/api/submit/route.ts` or use an external service (Formspree, etc.).

### Key files

- `lib/content.ts` — all bilingual copy (EN/ES)
- `app/[lang]/layout.tsx` — root layout with GA, LanguageSwitcher, CookieConsent
- `app/[lang]/page.tsx` — main landing page composition
- `app/[lang]/privacy/page.tsx` — privacy policy page
- `next.config.js` — redirect `/` → `/es`, image domains
