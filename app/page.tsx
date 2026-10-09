'use client';

import Link from 'next/link';
import { ArrowLeft, Check, X } from 'lucide-react';
import { useState } from 'react';

type Product = {
  name: string;
  model: string;
  tone: string;
  image: string;
  description: string;
  features: string[];
};

const products: Product[] = [
  { name: 'صندلی مدیریتی', model: 'مدل M-01', tone: 'مدیریتی', image: '/products/executive-chair.svg', description: 'صندلی مدیریتی با طراحی رسمی، پشتی بلند و نشیمن راحت برای ساعت‌های طولانی کار.', features: ['پشتی بلند با طراحی ارگونومیک', 'روکش مقاوم و قابل شست‌وشو', 'مناسب اتاق مدیریت و جلسات'] },
  { name: 'صندلی گیمینگ', model: 'مدل G-02', tone: 'گیمینگ', image: '/products/gaming-chair.svg', description: 'صندلی گیمینگ با پشتی حمایتی و فرم اسپرت برای تمرکز و استفاده طولانی‌مدت.', features: ['پشتیبان کامل کمر و گردن', 'دسته‌های قابل تنظیم', 'مناسب کار، بازی و تولید محتوا'] },
  { name: 'صندلی کارشناسی', model: 'مدل O-03', tone: 'کارشناسی', image: '/products/ergonomic-chair.svg', description: 'انتخابی سبک و کاربردی برای میزهای کارشناسی، تیم‌های اداری و استفاده روزمره.', features: ['فرم جمع‌وجور و کاربردی', 'تهویه مناسب در پشتی', 'مناسب استفاده اداری روزانه'] },
];

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div className="product-modal" role="dialog" aria-modal="true">
      <div className="product-dialog">
        <button className="product-close" onClick={onClose} aria-label="بستن"><X size={20} /></button>
        <div className={`detail-visual ${product.tone}`}><img src={product.image} alt={product.name} /></div>
        <div className="detail-copy">
          <span className="detail-model">{product.model}</span>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>ویژگی‌های محصول</h3>
          <ul>{product.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
          <Link href="/agency" className="btn red" onClick={onClose}>درخواست مشاوره <ArrowLeft size={16} /></Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [selected, setSelected] = useState<Product | null>(null);
  return (
    <main dir="rtl">
      <header className="site-header"><div className="container header-inner">
        <Link href="/" className="brand"><b>م</b><span>مارلو<small>تولیدکننده مبلمان اداری</small></span></Link>
        <nav>{['خانه', 'محصولات', 'درباره ما', 'نمونه‌کارها', 'تماس با ما'].map((item, index) => <a key={item} className={index === 0 ? 'active' : ''} href={index === 1 ? '#products' : index === 3 ? '/projects' : index === 4 ? '#contact' : '#'}>{item}</a>)}</nav>
        <Link href="/agency" className="dashboard-link">درخواست نمایندگی <ArrowLeft size={15} /></Link>
        <Link href="/dashboard" className="dashboard-link">داشبورد اختصاصی <ArrowLeft size={15} /></Link>
      </div></header>

      <section className="hero"><div className="container hero-inner"><div className="hero-copy">
        <span className="eyebrow">مارلو / طراحی و تولید در تهران</span><h1>فضای کار شما<br /><em>امضای شماست.</em></h1><p>تولید تخصصی صندلی‌های اداری، مدیریتی و گیمینگ با تمرکز بر طراحی، دوام و آسایش.</p>
        <div className="hero-actions"><a className="btn red" href="#products">مشاهده محصولات <ArrowLeft size={17} /></a><a className="btn outline" href="#about">آشنایی با مارلو</a></div>
      </div><div className="hero-art"><span>COLLECTION / ۱۴۰۵</span><img className="chair-image" src={products[0].image} alt={products[0].name} /><div className="art-badge">ساخته‌شده<br />برای تمرکز</div></div></div></section>

      <section className="stats"><div><b>+۱۲</b><span>سال تجربه</span></div><div><b>+۲۴۰</b><span>پروژه تجهیزشده</span></div><div><b>۳</b><span>گروه محصول</span></div><div><b>تهران</b><span>یافت‌آباد، مرکز تولید</span></div></section>
      <section id="about" className="container about section"><div className="section-label">۰۱ / درباره مارلو</div><div><h2>تولید ایرانی،<br /><em>استاندارد حرفه‌ای.</em></h2><p>مارلو یک مجموعه تولیدی و طراحی مبلمان اداری است که محصولات خود را برای فضاهای کاری امروز توسعه می‌دهد.</p><p>هر محصول با هدف ساختن نشیمنی راحت، بادوام و شایسته فضای شما طراحی می‌شود.</p></div><div className="factory">MARLOW<br />WORKS</div></section>

      <section id="products" className="container section"><div className="section-head"><div><div className="section-label">۰۲ / محصولات</div><h2>برای هر فضای کار،<br /><em>یک انتخاب مطمئن.</em></h2></div><span className="catalog-note">برای دیدن جزئیات، روی هر محصول بزنید</span></div>
        <div className="product-grid">{products.map((product) => <article key={product.model} className="product-card" onClick={() => setSelected(product)} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && setSelected(product)}><div className={`product-image ${product.tone}`}><span>{product.model}</span><img className="chair-image" src={product.image} alt={product.name} /><b>مشاهده جزئیات <ArrowLeft size={15} /></b></div><div className="product-copy"><h3>{product.name}</h3><p>برای مشاهده مشخصات و ویژگی‌ها کلیک کنید</p></div></article>)}</div>
      </section>

      <section className="quality"><div className="container quality-inner"><div><div className="section-label light">۰۳ / چرا مارلو</div><h2>جزئیات،<br /><em>تفاوت را می‌سازد.</em></h2></div><div className="quality-grid">{['طراحی کاربردی', 'متریال ماندگار', 'پشتیبانی پروژه'].map((title, index) => <div key={title}><b>۰{index + 1}</b><h3>{title}</h3><p>فرم‌هایی برای نشستن واقعی و استفاده روزانه.</p></div>)}</div></div></section>
      <section id="contact" className="container section contact"><div className="section-label">۰۴ / تماس با ما</div><h2>برای پروژه بعدی<br /><em>با ما صحبت کنید.</em></h2><Link className="btn red" href="/agency">درخواست مشاوره <ArrowLeft size={17} /></Link></section>
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}
