import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = ['دفتر مرکزی شرکت فناوری آریا / اقدسیه تهران', 'استودیو تولید محتوای ری‌را / ونک تهران', 'اتاق مدیریت شرکت پارس‌گستر / الهیه تهران'];

export default function Projects() {
  return <main dir="rtl" className="projects-page"><header><div className="container"><Link href="/" className="back"><ArrowRight size={17} /> بازگشت به سایت</Link><span>مارلو / نمونه‌کارها</span></div></header><section className="container projects-hero"><div className="section-label">۰۴ / نمونه‌کارها</div><h1>فضاهایی که<br /><em>بهتر کار می‌کنند.</em></h1><p>نگاهی به پروژه‌هایی که با محصولات مارلو طراحی و تجهیز شده‌اند.</p></section><section className="container projects-list">{projects.map((project, i) => <article key={project}><div className={`project-photo p${i}`}><span>۰{i + ۱}</span></div><div><small>پروژه منتخب / ۱۴۰۵</small><h2>{project}</h2><p>طراحی، انتخاب محصول و تجهیز کامل فضای کاری با تمرکز بر آسایش و هویت برند.</p></div></article>)}</section></main>;
}
