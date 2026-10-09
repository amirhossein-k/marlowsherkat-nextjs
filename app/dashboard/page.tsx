'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, BriefcaseBusiness, Check, LayoutDashboard, Package, Plus, Search, Settings, Users, X } from 'lucide-react';

type Tab = 'overview' | 'products' | 'projects' | 'customers' | 'settings';
type Request = { title: string; time: string; status: 'جدید' | 'در حال بررسی' | 'پاسخ داده شد' };

const products = [
  { name: 'صندلی مدیریتی', model: 'M-01', image: '/products/executive-chair.svg', tone: 'executive' },
  { name: 'صندلی گیمینگ', model: 'G-02', image: '/products/gaming-chair.svg', tone: 'gaming' },
  { name: 'صندلی کارشناسی', model: 'O-03', image: '/products/ergonomic-chair.svg', tone: 'office' },
];

const initialRequests: Request[] = [
  { title: 'تجهیز دفتر مرکزی آریا', time: '۱ ساعت پیش', status: 'جدید' },
  { title: 'سفارش صندلی گیمینگ', time: '۲ ساعت پیش', status: 'در حال بررسی' },
  { title: 'مشاوره فضای کار نوین', time: '۳ ساعت پیش', status: 'پاسخ داده شد' },
];

const tabLabels: Record<Tab, string> = { overview: 'نمای کلی', products: 'محصولات', projects: 'نمونه‌کارها', customers: 'مشتریان', settings: 'تنظیمات' };

export default function Dashboard() {
  const [tab, setTab] = useState<Tab>('overview');
  const [requests, setRequests] = useState(initialRequests);
  const [query, setQuery] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [notice, setNotice] = useState('');
  const [companyName, setCompanyName] = useState('مارلو');
  const filteredRequests = useMemo(() => requests.filter((item) => item.title.includes(query)), [requests, query]);

  function updateStatus(index: number) {
    setRequests((current) => current.map((item, i) => i === index ? { ...item, status: item.status === 'جدید' ? 'در حال بررسی' : item.status === 'در حال بررسی' ? 'پاسخ داده شد' : 'جدید' } : item));
    setNotice('وضعیت درخواست به‌روزرسانی شد');
    setTimeout(() => setNotice(''), 2200);
  }

  return <main className="dashboard">
    <aside className="dashboard-sidebar">
      <Link href="/" className="dash-brand"><b>م</b><span>مارلو<small>داشبورد مدیریت</small></span></Link>
      <nav>{(Object.keys(tabLabels) as Tab[]).map((key) => <button key={key} className={tab === key ? 'selected' : ''} onClick={() => setTab(key)}>{key === 'overview' ? <LayoutDashboard size={17}/> : key === 'products' ? <Package size={17}/> : key === 'projects' ? <BriefcaseBusiness size={17}/> : key === 'customers' ? <Users size={17}/> : <Settings size={17}/>} {tabLabels[key]}</button>)}</nav>
      <Link href="/" className="back-site"><ArrowRight size={15}/> بازگشت به سایت</Link>
    </aside>

    <section className="dash-content">
      <header className="dash-header"><div><small>جمعه، ۱۸ مهر ۱۴۰۵</small><h1>{tabLabels[tab]}</h1></div><button className="dash-add" onClick={() => setShowAdd(true)}><Plus size={16}/> افزودن پروژه</button></header>
      {notice && <div className="dash-notice"><Check size={16}/> {notice}</div>}

      {tab === 'overview' && <>
        <div className="dash-stats"><div><span>بازدید این ماه</span><b>۱۲,۴۸۰</b><small>۱۸٪ بیشتر از ماه قبل</small></div><div><span>پروژه‌های فعال</span><b>۲۴</b><small>۳ پروژه در انتظار تأیید</small></div><div><span>درخواست مشاوره</span><b>{requests.length.toLocaleString('fa-IR')}</b><small>۱۲ درخواست جدید</small></div><div><span>محصولات فعال</span><b>۳۶</b><small>همه موجود در کاتالوگ</small></div></div>
        <div className="dash-grid"><div className="dash-panel"><div className="panel-head"><h2>بازدید و درخواست‌ها</h2><span>۶ ماه اخیر</span></div><div className="chart">{[35,50,42,68,59,82].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><div className="chart-labels"><span>اردیبهشت</span><span>خرداد</span><span>تیر</span><span>مرداد</span><span>شهریور</span><span>مهر</span></div></div><RequestPanel requests={filteredRequests} query={query} setQuery={setQuery} updateStatus={updateStatus} /></div>
      </>}

      {tab === 'products' && <section className="dash-panel full-panel"><div className="panel-head"><h2>کاتالوگ محصولات</h2><span>{products.length} محصول فعال</span></div><div className="dash-product-grid">{products.map((product) => <article className="dash-product" key={product.model}><div className={`dash-product-image ${product.tone}`}><img src={product.image} alt={product.name}/></div><div><small>مدل {product.model}</small><h3>{product.name}</h3><button onClick={() => setNotice(`جزئیات ${product.name} آماده ویرایش است`)}>ویرایش محصول</button></div></article>)}</div></section>}
      {tab === 'projects' && <section className="dash-panel full-panel"><div className="panel-head"><h2>نمونه‌کارها</h2><button className="mini-action" onClick={() => setShowAdd(true)}><Plus size={14}/> پروژه جدید</button></div><div className="project-table"><div><b>دفتر مرکزی آریا</b><span>اقدسیه تهران</span><em>فعال</em></div><div><b>استودیو تولید محتوای ری‌را</b><span>ونک تهران</span><em>فعال</em></div><div><b>اتاق مدیریت پارس‌گستر</b><span>الهیه تهران</span><em>در حال آماده‌سازی</em></div></div></section>}
      {tab === 'customers' && <section className="dash-panel full-panel"><div className="panel-head"><h2>مشتریان</h2><span>مدیریت مخاطبان پروژه</span></div><div className="customer-list"><div><b>شرکت فناوری آریا</b><span>پروژه تجهیز دفتر مرکزی</span><button onClick={() => setNotice('اطلاعات مشتری آماده تماس است')}>مشاهده</button></div><div><b>استودیو ری‌را</b><span>سفارش مبلمان فضای تولید</span><button onClick={() => setNotice('اطلاعات مشتری آماده تماس است')}>مشاهده</button></div><div><b>پارس‌گستر</b><span>اتاق مدیریت</span><button onClick={() => setNotice('اطلاعات مشتری آماده تماس است')}>مشاهده</button></div></div></section>}
      {tab === 'settings' && <section className="dash-panel full-panel settings-panel"><div className="panel-head"><h2>تنظیمات داشبورد</h2><span>تغییرات فقط در همین مرورگر ذخیره می‌شود</span></div><label>نام مجموعه<input value={companyName} onChange={(event) => setCompanyName(event.target.value)} /></label><label className="toggle-row"><input type="checkbox" defaultChecked /> نمایش اعلان‌های جدید</label><button className="save-settings" onClick={() => setNotice('تنظیمات ذخیره شد')}>ذخیره تنظیمات</button></section>}
    </section>
    {showAdd && <div className="dash-modal"><div className="dash-modal-box"><button onClick={() => setShowAdd(false)} aria-label="بستن"><X size={18}/></button><h2>افزودن پروژه</h2><label>نام پروژه<input placeholder="مثلاً تجهیز دفتر مرکزی" /></label><label>موقعیت پروژه<input placeholder="تهران، اقدسیه" /></label><button className="save-settings" onClick={() => { setShowAdd(false); setNotice('پروژه جدید به فهرست اضافه شد'); }}>ثبت پروژه</button></div></div>}
  </main>;
}

function RequestPanel({ requests, query, setQuery, updateStatus }: { requests: Request[]; query: string; setQuery: (value: string) => void; updateStatus: (index: number) => void }) {
  return <div className="dash-panel"><div className="panel-head"><h2>آخرین درخواست‌ها</h2><span>وضعیت با کلیک تغییر می‌کند</span></div><div className="request-search"><Search size={15}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جست‌وجوی درخواست" /></div>{requests.map((request, index) => <button className="request request-button" key={request.title} onClick={() => updateStatus(index)}><i className={`dot d${index}`}/><span><b>{request.title}</b><small>{request.time}</small></span><em>{request.status}</em></button>)}</div>;
}
