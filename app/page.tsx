'use client';

import Link from 'next/link';
import { ArrowLeft, Check, ChevronLeft, ChevronRight, X } from 'lucide-react';
import React, { useState } from 'react';

type Product = { name: string; model: string; tone: string; image: string; description: string; features: string[] };
const products: Product[] = [
  { name: 'صندلی مدیریتی', model: 'مدل M-01', tone: 'مدیریتی', image: '/products/executive-chair.svg', description: 'صندلی مدیریتی با طراحی رسمی، پشتی بلند و نشیمن راحت برای ساعت‌های طولانی کار.', features: ['پشتی بلند با طراحی ارگونومیک', 'روکش مقاوم و قابل شست‌وشو', 'مناسب اتاق مدیریت و جلسات'] },
  { name: 'صندلی گیمینگ', model: 'مدل G-02', tone: 'گیمینگ', image: '/products/gaming-chair.svg', description: 'صندلی گیمینگ با پشتی حمایتی و فرم اسپرت برای تمرکز و استفاده طولانی‌مدت.', features: ['پشتیبان کامل کمر و گردن', 'دسته‌های قابل تنظیم', 'مناسب کار، بازی و تولید محتوا'] },
  { name: 'صندلی کارشناسی', model: 'مدل O-03', tone: 'کارشناسی', image: '/products/ergonomic-chair.svg', description: 'انتخابی سبک و کاربردی برای میزهای کارشناسی، تیم‌های اداری و استفاده روزمره.', features: ['فرم جمع‌وجور و کاربردی', 'تهویه مناسب در پشتی', 'مناسب استفاده اداری روزانه'] },
];

const e = React.createElement;
function Chair({ product, className = '' }: { product: Product; className?: string }) {
  return e('img', { className: `chair-image ${product.tone} ${className}`, src: product.image, alt: product.name });
}
function ProductModal({ product, close }: { product: Product; close: () => void }) {
  return e('div', { className: 'product-modal', role: 'dialog', 'aria-modal': 'true' },
    e('div', { className: 'product-dialog' },
      e('button', { className: 'product-close', onClick: close, 'aria-label': 'بستن' }, e(X, { size: 20 })),
      e('div', { className: `detail-visual ${product.tone}` }, e(Chair, { product })),
      e('div', { className: 'detail-copy' },
        e('span', { className: 'detail-model' }, product.model),
        e('h2', null, product.name),
        e('p', null, product.description),
        e('h3', null, 'ویژگی‌های محصول'),
        e('ul', null, product.features.map((feature) => e('li', { key: feature }, e(Check, { size: 16 }), feature))),
        e(Link, { href: '/agency', className: 'btn red', onClick: close }, 'درخواست مشاوره ', e(ArrowLeft, { size: 16 }))
      )
    )
  );
}

export default function Home() {
  const [selected, setSelected] = useState<Product | null>(null);
  return e('main', { dir: 'rtl' },
    e('header', { className: 'site-header' }, e('div', { className: 'container header-inner' },
      e(Link, { href: '/', className: 'brand' }, e('b', null, 'م'), e('span', null, 'مارلو', e('small', null, 'تولیدکننده مبلمان اداری'))),
      e('nav', null, ['خانه', 'محصولات', 'درباره ما', 'نمونه‌کارها', 'تماس با ما'].map((item, i) => e('a', { key: item, className: i === 0 ? 'active' : '', href: i === 1 ? '#products' : i === 3 ? '/projects' : i === 4 ? '#contact' : '#' }, item))),
      e(Link, { href: '/agency', className: 'dashboard-link' }, 'درخواست نمایندگی ', e(ArrowLeft, { size: 15 })),
      e(Link, { href: '/dashboard', className: 'dashboard-link' }, 'داشبورد اختصاصی ', e(ArrowLeft, { size: 15 }))
    )),
    e('section', { className: 'hero' }, e('div', { className: 'container hero-inner' }, e('div', { className: 'hero-copy' },
      e('span', { className: 'eyebrow' }, 'مارلو / طراحی و تولید در تهران'), e('h1', null, 'فضای کار شما', e('br'), e('em', null, 'امضای شماست.')), e('p', null, 'تولید تخصصی صندلی‌های اداری، مدیریتی و گیمینگ با تمرکز بر طراحی، دوام و آسایش.'), e('div', { className: 'hero-actions' }, e('a', { className: 'btn red', href: '#products' }, 'مشاهده محصولات ', e(ArrowLeft, { size: 17 })), e('a', { className: 'btn outline', href: '#about' }, 'آشنایی با مارلو'))
    ), e('div', { className: 'hero-art' }, e('span', null, 'COLLECTION / ۱۴۰۵'), e(Chair, { product: products[0] }), e('div', { className: 'art-badge' }, 'ساخته‌شده', e('br'), 'برای تمرکز')))),
    e('section', { className: 'stats' }, ['+۱۲|سال تجربه', '+۲۴۰|پروژه تجهیزشده', '۳|گروه محصول', 'تهران|یافت‌آباد، مرکز تولید'].map((x) => { const [a, b] = x.split('|'); return e('div', { key: a }, e('b', null, a), e('span', null, b)); })),
    e('section', { id: 'about', className: 'container about section' }, e('div', { className: 'section-label' }, '۰۱ / درباره مارلو'), e('div', null, e('h2', null, 'تولید ایرانی،', e('br'), e('em', null, 'استاندارد حرفه‌ای.')), e('p', null, 'مارلو یک مجموعه تولیدی و طراحی مبلمان اداری است که محصولات خود را برای فضاهای کاری امروز توسعه می‌دهد.'), e('p', null, 'هر محصول با هدف ساختن نشیمنی راحت، بادوام و شایسته فضای شما طراحی می‌شود.')), e('div', { className: 'factory' }, 'MARLOW', e('br'), 'WORKS')),
    e('section', { id: 'products', className: 'container section' }, e('div', { className: 'section-head' }, e('div', null, e('div', { className: 'section-label' }, '۰۲ / محصولات'), e('h2', null, 'برای هر فضای کار،', e('br'), e('em', null, 'یک انتخاب مطمئن.'))), e('span', { className: 'catalog-note' }, 'برای دیدن جزئیات، روی هر محصول بزنید')),
      e('div', { className: 'product-grid' }, products.map((product) => e('article', { onClick: () => setSelected(product), className: 'product-card', key: product.model, role: 'button', tabIndex: 0, onKeyDown: (event: React.KeyboardEvent) => { if (event.key === 'Enter') setSelected(product); } }, e('div', { className: `product-image ${product.tone}` }, e('span', null, product.model), e(Chair, { product }), e('b', null, 'مشاهده جزئیات ', e(ArrowLeft, { size: 15 }))), e('div', { className: 'product-copy' }, e('h3', null, product.name), e('p', null, 'برای مشاهده مشخصات و ویژگی‌ها کلیک کنید'))))),
    e('section', { className: 'quality' }, e('div', { className: 'container quality-inner' }, e('div', null, e('div', { className: 'section-label light' }, '۰۳ / چرا مارلو'), e('h2', null, 'جزئیات،', e('br'), e('em', null, 'تفاوت را می‌سازد.'))), e('div', { className: 'quality-grid' }, ['طراحی کاربردی', 'متریال ماندگار', 'پشتیبانی پروژه'].map((x, i) => e('div', { key: x }, e('b', null, `۰${i + 1}`), e('h3', null, x), e('p', null, 'فرم‌هایی برای نشستن واقعی و استفاده روزانه.'))))),
    e('section', { id: 'contact', className: 'container section contact' }, e('div', { className: 'section-label' }, '۰۴ / تماس با ما'), e('h2', null, 'برای پروژه بعدی', e('br'), e('em', null, 'با ما صحبت کنید.')), e(Link, { className: 'btn red', href: '/agency' }, 'درخواست مشاوره ', e(ArrowLeft, { size: 17 }))),
    selected ? e(ProductModal, { product: selected, close: () => setSelected(null) }) : null
  );
}
