# MongoDB with Next.js

NestJS is not required. The project now uses Next.js Route Handlers and the official MongoDB driver.

## Setup

1. Create a MongoDB Atlas database.
2. Copy `.env.example` to `.env.local`.
3. Put your Atlas connection string in `MONGODB_URI`.
4. Set `MONGODB_DB=marlow`.
5. Run:

```bash
npm install
npm run dev
```

The agency form sends data to `POST /api/agency` and stores it in the `agency_requests` collection.

Each record contains applicant details, cooperation type, status, and timestamps. The current form is ready for real persistence; add authentication before exposing the requests in the dashboard.
