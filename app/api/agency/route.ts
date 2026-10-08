import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const allowedTypes = ['نمایندگی فروش', 'همکاری پروژه‌ای', 'فروش سازمانی', 'طراحی و تجهیز داخلی'];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ['fullName', 'company', 'phone', 'city', 'cooperationType', 'activity'];
    const missing = required.filter((field) => !String(body[field] ?? '').trim());
    if (missing.length) return NextResponse.json({ message: 'فیلدهای الزامی را کامل کنید.', fields: missing }, { status: 400 });
    if (!allowedTypes.includes(body.cooperationType)) return NextResponse.json({ message: 'نوع همکاری نامعتبر است.' }, { status: 400 });
    if (!/^09\d{9}$/.test(body.phone.replace(/\s/g, ''))) return NextResponse.json({ message: 'شماره موبایل معتبر نیست.' }, { status: 400 });
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || 'marlow');
    const result = await db.collection('agency_requests').insertOne({
      fullName: body.fullName.trim(), company: body.company.trim(), phone: body.phone.trim(), email: String(body.email || '').trim(), city: body.city.trim(), cooperationType: body.cooperationType, activity: body.activity.trim(), message: String(body.message || '').trim(), status: 'new', createdAt: new Date(), updatedAt: new Date()
    });
    return NextResponse.json({ ok: true, id: result.insertedId.toString(), message: 'درخواست شما ثبت شد.' }, { status: 201 });
  } catch (error) {
    console.error('agency request error', error);
    return NextResponse.json({ message: 'ثبت درخواست انجام نشد. اتصال MongoDB را بررسی کنید.' }, { status: 500 });
  }
}
