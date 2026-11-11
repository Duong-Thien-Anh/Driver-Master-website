# SGAT Driving Academy

Landing page for the SGAT driving academy, built with the Next.js App Router.
Run the commands below from the `frontend/` directory.

## Run locally

```bash
npm install
npm run dev
```

## Structure

- `app/` — Next.js routes and page composition.
- `features/landing/` — landing page sections and UI components.
- `shared/` — shared frontend styles.
- `server/courses/` — course types and server-side course service.
- `server/inquiries/` — inquiry validation and optional webhook delivery.
- `app/api/courses/` — JSON API route backed by the courses service.
- `app/api/inquiries/` — registration endpoint; configure `LEAD_WEBHOOK_URL` to forward submissions.

Course content currently lives in `server/courses/` as in-memory data. Copy `.env.example` and set `LEAD_WEBHOOK_URL` to enable inquiry delivery.

The sibling `backend/` directory is intentionally empty and reserved for a future Java backend. Current API handlers run inside this Next.js application.
