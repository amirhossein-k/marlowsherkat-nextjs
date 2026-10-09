'use client';

import Link from 'next/link';
import { ArrowLeft, Menu } from 'lucide-react';
import { useState } from 'react';

type Product = { name: string; model: string; tone: string; image: string };
const products: Product[] = [
  { name: 'صندلی مدیریتی', model: 'مدل M-01', tone: 'مدیریتی', image: '/products/executive-chair.svg' },
  { name: 'صندلی گیمینگ', model: 'مدل G-02', tone: 'گیمینگ', image: '/products/gaming-chair.svg' },
  { name: 'صندلی کارشناسی', model: 'مدل O-03', tone: 'کارشناسی', image: '/products/ergonomic-chair.svg' },
];

function Chair({ image, tone }: { image: string; tone: string }) {
  return <img className={`chair-image ${tone}`} src={image} alt={tone} />;
}

export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <main dir="rtl">
      <header className="site-header"><div className="container header-inner">
        <Link href="/" className="brand"><b>م</b><span>مارلو<small>تولیدکننده مبلمان اداری</small></span></Link>
        <nav>{['خانه', 'محصولات', 'درباره ما', 'نمونه‌کارها', 'تماس با ما'].map((item, i) => <a key={item} className={i === 0 ? 'active' : ''} href={i === 1 ? '#products' : i === 3 ? '#projects' : i === 4 ? '#contact' : '#'}>{item}</a>)}</nav>
        <Link href="/agency" className="dashboard-link">درخواست نمایندگی <ArrowLeft size={15} /></Link>
        <Link href="/dashboard" className="dashboard-link">داشبورد اختصاصی <ArrowLeft size={15} /></Link>
        <button className="mobile-menu" aria-label="منو"><Menu /></button>
      </div></header>

      <section className="hero"><div className="container hero-inner"><div className="hero-copy">
        <span className="eyebrow">مارلو / طراحی و تولید در تهران</span><h1>فضای کار شما<br /><em>امضای شماست.</em></h1>
        <p>تولید تخصصی صندلی‌های اداری، مدیریتی و گیمینگ با تمرکز بر طراحی، دوام و آسایش.</p>
        <div className="hero-actions"><a className="btn red" href="#products">مشاهده محصولات <ArrowLeft size={17} /></a><a className="btn outline" href="#about">آشنایی با مارلو</a></div>
      </div><div className="hero-art"><span>COLLECTION / ۱۴۰۵</span><Chair image={products[0].image} tone={products[0].tone} /><div className="art-badge">ساخته‌شده<br />برای تمرکز</div></div></div></section>

      <section className="stats"><div><b>+۱۲</b><span>سال تجربه</span></div><div><b>+۲۴۰</b><span>پروژه تجهیزشده</span></div><div><b>۳</b><span>گروه محصول</span></div><div><b>تهران</b><span>یافت‌آباد، مرکز تولید</span></div></section>
      <section id="about" className="container about section"><div className="section-label">۰۱ / درباره مارلو</div><div><h2>تولید ایرانی،<br /><em>استاندارد حرفه‌ای.</em></h2><p>مارلو یک مجموعه تولیدی و طراحی مبلمان اداری است که محصولات خود را برای فضاهای کاری امروز توسعه می‌دهد.</p><p>هر محصول با هدف ساختن نشیمنی راحت، بادوام و شایسته فضای شما طراحی می‌شود.</p></div><div className="factory">MARLOW<br />WORKS</div></section>
      <section id="products" className="container section"><div className="section-head"><div><div className="section-label">۰۲ / محصولات</div><h2>برای هر فضای کار،<br /><em>یک انتخاب مطمئن.</em></h2></div><Link className="text-link" href="/dashboard">کاتالوگ محصولات <ArrowLeft size={15} /></Link></div>
        <div className="product-grid">{products.map((product, i) => <article onClick={() => setActive(i)} className={`product-card ${active === i ? 'chosen' : ''}`} key={product.model}><div className={`product-image ${product.tone}`}><span>{product.model}</span><Chair image={product.image} tone={product.tone} /><b>مشاهده <ArrowLeft size={15} /></b></div><div className="product-copy"><h3>{product.name}</h3><p>طراحی شده برای استفاده حرفه‌ای و طولانی</p></div></article>)}</div>
      </section>
      <section id="projects" className="quality"><div className="container quality-inner"><div><div className="section-label light">۰۳ / چرا مارلو</div><h2>جزئیات،<br /><em>تفاوت را می‌سازد.</em></h2></div><div className="quality-grid"><div><b>۰۱</b><h3>طراحی کاربردی</h3><p>فرم‌هایی برای نشستن واقعی و استفاده روزانه.</p></div><div><b>۰۲</b><h3>متریال ماندگار</h3><p>انتخاب متریال با تمرکز بر دوام و ظاهر حرفه‌ای.</p></div><div><b>۰۳</b><h3>پشتیبانی پروژه</h3><p>از انتخاب محصول تا تجهیز کامل، همراه تیم شما هستیم.</p></div></div></div></section>
      <section id="contact" className="container section contact"><div className="section-label">۰۴ / تماس با ما</div><h2>برای پروژه بعدی<br /><em>با ما صحبت کنید.</em></h2><Link className="btn red" href="/agency">درخواست مشاوره <ArrowLeft size={17} /></Link></section>
    </main>
  );
}
