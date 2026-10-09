# Marlow Vercel build fix

این فایل‌ها را روی ریپازیتوری اصلی جایگزین کن:
- `app/page.tsx`
- `app/projects/page.tsx`
- `lib/mongodb.ts`
- `tsconfig.json`

سپس در Vercel متغیرهای `MONGODB_URI` و در صورت نیاز `MONGODB_DB` را تنظیم کن و دوباره Deploy بزن.
