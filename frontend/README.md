# SGAT Driving Academy

Landing page for the SGAT driving academy, built with the Next.js App Router.
Run the commands below from the `frontend/` directory.

## Run locally

```bash
npm install
npm run dev
```

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

Course content currently lives in `server/courses/` as in-memory data. Copy `.env.example` and set `LEAD_WEBHOOK_URL` to enable inquiry delivery.

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
