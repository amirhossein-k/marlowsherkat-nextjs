# Vercel deployment

## 1. Push to GitHub

```bash
git init
git add .
git commit -m "Prepare Marlow Next.js site for Vercel"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/marlow-nextjs.git
git push -u origin main
```

## 2. Import into Vercel

1. Open Vercel.
2. Select **Add New Project**.
3. Import the GitHub repository.
4. Keep the framework as **Next.js**.
5. Keep the root directory as the repository root.
6. Deploy.

`vercel.json` already defines the build, install, and development commands.

## 3. Add MongoDB environment variables

In Vercel: **Project Settings → Environment Variables** add:

```text
MONGODB_URI=your MongoDB Atlas connection string
MONGODB_DB=marlow
```

Add them to **Production**, **Preview**, and **Development** as needed. Never commit `.env.local`.

## 4. Configure MongoDB Atlas

In Atlas:

- Add the Vercel deployment connection access as allowed network access. For a quick demo, use `0.0.0.0/0` only with a strong database password; for production, use a safer network design.
- Create a database user with only the permissions this app needs.
- Use a database named `marlow` or change `MONGODB_DB`.

## 5. Deploy and verify

After deployment, verify:

- `/`
- `/projects`
- `/dashboard`
- `/agency`
- `POST /api/agency` by submitting the agency form

## Important

The dashboard is currently a UI prototype and is not authenticated. Before exposing real agency requests, add authentication and authorization. The API validates required fields and stores submissions in `agency_requests`, but it does not yet provide an admin API to list, edit, or delete requests.
