"use client";
import Link from "next/link";
import { ArrowLeft, Check, X } from "lucide-react";
import { useState } from "react";

type Product = {
  name: string;
  model: string;
  image: string;
  tone: string;
  description: string;
  features: string[];
};
const products: Product[] = [
  {
    name: "صندلی مدیریتی",
    model: "مدل M-01",
    image: "/products/ss.webp",
    tone: "executive",
    description:
      "صندلی مدیریتی با طراحی رسمی، پشتی بلند و نشیمن راحت برای ساعت‌های طولانی کار.",
    features: [
      "پشتی بلند با طراحی ارگونومیک",
      "روکش مقاوم و قابل شست‌وشو",
      "مناسب اتاق مدیریت و جلسات",
    ],
  },
  {
    name: "صندلی گیمینگ",
    model: "مدل G-02",
    image: "/products/aa.webp",
    tone: "gaming",
    description:
      "صندلی گیمینگ با پشتی حمایتی و فرم اسپرت برای تمرکز و استفاده طولانی‌مدت.",
    features: [
      "پشتیبان کامل کمر و گردن",
      "دسته‌های قابل تنظیم",
      "مناسب کار، بازی و تولید محتوا",
    ],
  },
  {
    name: "صندلی کارشناسی",
    model: "مدل O-03",
    image: "/products/qq.webp",
    tone: "office",
    description:
      "انتخابی سبک و کاربردی برای میزهای کارشناسی، تیم‌های اداری و استفاده روزمره.",
    features: [
      "فرم جمع‌وجور و کاربردی",
      "تهویه مناسب در پشتی",
      "مناسب استفاده اداری روزانه",
    ],
  },
];
function ProductModal({
  product,
  close,
}: {
  product: Product;
  close: () => void;
}) {
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-box">
        <button className="close" onClick={close} aria-label="بستن">
          <X />
        </button>
        <div className={`modal-image ${product.tone}`}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className="modal-copy">
          <small>{product.model}</small>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>ویژگی‌های محصول</h3>
          <ul>
            {product.features.map((f) => (
              <li key={f}>
                <Check size={16} />
                {f}
              </li>
            ))}
          </ul>
          <Link href="/agency" className="btn red" onClick={close}>
            درخواست مشاوره <ArrowLeft size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  const [selected, setSelected] = useState<Product | null>(null);
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <b>م</b>
            <span>
              مارلو<small>تولیدکننده مبلمان اداری</small>
            </span>
          </Link>
          <nav>
            <a className="active" href="#home">
              خانه
            </a>
            <a href="#products">محصولات</a>
            <a href="#about">درباره ما</a>
            <Link href="/projects">نمونه‌کارها</Link>
            <a href="#contact">تماس با ما</a>
          </nav>
          <Link href="/agency" className="header-link">
            درخواست نمایندگی <ArrowLeft size={14} />
          </Link>
          <Link href="/dashboard" className="header-link">
            داشبورد اختصاصی <ArrowLeft size={14} />
          </Link>
        </div>
      </header>
      <section id="home" className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">مارلو / طراحی و تولید در تهران</span>
            <h1>
              فضای کار شما
              <br />
              <em>امضای شماست.</em>
            </h1>
            <p>
              تولید تخصصی صندلی‌های اداری، مدیریتی و گیمینگ با تمرکز بر طراحی،
              دوام و آسایش.
            </p>
            <div className="actions">
              <a className="btn red" href="#products">
                مشاهده محصولات <ArrowLeft size={17} />
              </a>
              <a className="btn outline" href="#about">
                آشنایی با مارلو
              </a>
            </div>
          </div>
          <div className="hero-art">
            <span>COLLECTION / ۱۴۰۵</span>
            <img src={products[0].image} alt={products[0].name} />
            <b>
              ساخته‌شده
              <br />
              برای تمرکز
            </b>
          </div>
        </div>
      </section>
      <section className="stats">
        <div>
          <b>+۱۲</b>
          <span>سال تجربه</span>
        </div>
        <div>
          <b>+۲۴۰</b>
          <span>پروژه تجهیزشده</span>
        </div>
        <div>
          <b>۳</b>
          <span>گروه محصول</span>
        </div>
        <div>
          <b>تهران</b>
          <span>یافت‌آباد، مرکز تولید</span>
        </div>
      </section>
      <section id="about" className="container section about">
        <div className="label">۰۱ / درباره مارلو</div>
        <div>
          <h2>
            تولید ایرانی،
            <br />
            <em>استاندارد حرفه‌ای.</em>
          </h2>
          <p>
            مارلو یک مجموعه تولیدی و طراحی مبلمان اداری است که محصولات خود را
            برای فضاهای کاری امروز توسعه می‌دهد.
          </p>
          <p>
            هر محصول با هدف ساختن نشیمنی راحت، بادوام و شایسته فضای شما طراحی
            می‌شود.
          </p>
        </div>
        <div className="factory">
          MARLOW
          <br />
          WORKS
        </div>
      </section>
      <section id="products" className="container section">
        <div className="section-head">
          <div>
            <div className="label">۰۲ / محصولات</div>
            <h2>
              برای هر فضای کار،
              <br />
              <em>یک انتخاب مطمئن.</em>
            </h2>
          </div>
          <span className="hint">برای دیدن جزئیات، روی هر محصول بزنید</span>
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <article
              className="product-card"
              key={p.model}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(p)}
              onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
            >
              <div className={`product-image ${p.tone}`}>
                <span>{p.model}</span>
                <img src={p.image} alt={p.name} />
                <b>
                  مشاهده جزئیات <ArrowLeft size={15} />
                </b>
              </div>
              <div className="product-copy">
                <h3>{p.name}</h3>
                <p>برای مشاهده مشخصات و ویژگی‌ها کلیک کنید</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="quality">
        <div className="container quality-inner">
          <div>
            <div className="label light">۰۳ / چرا مارلو</div>
            <h2>
              جزئیات،
              <br />
              <em>تفاوت را می‌سازد.</em>
            </h2>
          </div>
          <div className="quality-grid">
            {["طراحی کاربردی", "متریال ماندگار", "پشتیبانی پروژه"].map(
              (x, i) => (
                <div key={x}>
                  <b>۰{i + 1}</b>
                  <h3>{x}</h3>
                  <p>فرم‌هایی برای نشستن واقعی و استفاده روزانه.</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <section id="contact" className="contact section">
        <div className="container">
          <div className="label">۰۴ / تماس با ما</div>
          <h2>
            برای پروژه بعدی
            <br />
            <em>با ما صحبت کنید.</em>
          </h2>
          <Link href="/agency" className="btn red">
            درخواست مشاوره <ArrowLeft size={17} />
          </Link>
        </div>
      </section>
      {selected && (
        <ProductModal product={selected} close={() => setSelected(null)} />
      )}
    </main>
  );
}
