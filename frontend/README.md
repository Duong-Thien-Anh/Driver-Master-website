# SGAT Driving Academy

Landing page for the SGAT driving academy, built with the Next.js App Router.
Run the commands below from the `frontend/` directory.

## Run locally

```bash
npm install
npm run dev
```

## Code checks

Run these commands from `frontend/`:

```bash
npm run lint       # ESLint: Next.js, React Hooks, accessibility, and TypeScript rules
npm run lint:fix   # Apply fixes supported by ESLint, then report remaining issues
npm run typecheck  # TypeScript compiler checks
npm run build     # Production build
```

ESLint configuration lives in `eslint.config.mjs`. Both lint commands fail on warnings.
Generated files and local tool state are excluded. TypeScript is kept on 6.0 because
the TypeScript ESLint parser currently requires TypeScript below 6.1.

This uses the [official Next.js ESLint configuration](https://nextjs.org/docs/app/api-reference/config/eslint).
Next.js supports ESLint 10, but some bundled plugins still declare ESLint 9 peer ranges;
npm may report peer warnings. Lint, typecheck, build, and an `npm ci --dry-run` have been verified.

## Structure

- `app/` — Next.js routes, layouts, and server-side data loading.
- `features/<feature>/*Page.tsx` — page composition: section order and data passed to sections.
- `features/<feature>/sections/` — named sections owned by each page, with their local display data.
- `features/landing/components/` — existing hero, tuition preview, header, footer, course cards, and road animation.
- `features/registration/` — registration form and submission behavior.
- `shared/` — shared frontend components, effects, and Tailwind theme.
- `server/courses/` — course types and server-side course service.
- `server/inquiries/` — inquiry validation and optional webhook delivery.
- `app/api/courses/` — JSON API route backed by the courses service.
- `app/api/inquiries/` — registration endpoint; configure `LEAD_WEBHOOK_URL` to forward submissions.

Course names, vehicle descriptions, tuition amounts (VND), and training location live in
`features/courses/data/course-catalog.ts`. Course cards, both tuition lists, registration
choices, and the courses API use this catalog. `server/courses/` exposes the server-side
course service. Copy `.env.example` and set `LEAD_WEBHOOK_URL` to enable inquiry delivery.

The sibling `backend/` directory is intentionally empty and reserved for a future Java backend. Current API handlers run inside this Next.js application.

## Editing page sections

| Route | Page composition | Section directory |
| --- | --- | --- |
| `/` | `features/landing/LandingPage.tsx` | `features/landing/sections/` |
| `/khoa-hoc` | `features/courses/CoursesPage.tsx` | `features/courses/sections/` |
| `/hoc-phi` | `features/tuition/TuitionPage.tsx` | `features/tuition/sections/` |
| `/ve-chung-toi` | `features/about/AboutPage.tsx` | `features/about/sections/` |
| `/lo-trinh` | `features/roadmap/RoadmapPage.tsx` | `features/roadmap/sections/` |

Edit section content and Tailwind classes in its section component. Reorder sections in
the corresponding `*Page.tsx`. Keep section-specific lists beside their section and reuse
existing components for the homepage hero, tuition preview, registration form, and footer.
Preserve anchor IDs and scroll reveal wrappers when moving sections.
