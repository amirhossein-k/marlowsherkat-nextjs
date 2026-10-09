import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const projects = [
  'دفتر مرکزی شرکت فناوری آریا / اقدسیه تهران',
  'استودیو تولید محتوای ری‌را / ونک تهران',
  'اتاق مدیریت شرکت پارس‌گستر / الهیه تهران',
];

export default function Projects() {
  const projectCards = projects.map((project, i) =>
    React.createElement(
      'article',
      { key: project },
      React.createElement('div', { className: `project-photo p${i}` },
        React.createElement('span', null, `۰${i + 1}`)
      ),
      React.createElement('div', null,
        React.createElement('small', null, 'پروژه منتخب / ۱۴۰۵'),
        React.createElement('h2', null, project),
        React.createElement('p', null, 'طراحی، انتخاب محصول و تجهیز کامل فضای کاری با تمرکز بر آسایش و هویت برند.')
      )
    )
  );

  return React.createElement(
    'main',
    { dir: 'rtl', className: 'projects-page' },
    React.createElement('header', null,
      React.createElement('div', { className: 'container' },
        React.createElement(Link, { href: '/', className: 'back' },
          React.createElement(ArrowRight, { size: 17 }),
          ' بازگشت به سایت'
        ),
        React.createElement('span', null, 'مارلو / نمونه‌کارها')
      )
    ),
    React.createElement('section', { className: 'container projects-hero' },
      React.createElement('div', { className: 'section-label' }, '۰۴ / نمونه‌کارها'),
      React.createElement('h1', null, 'فضاهایی که', React.createElement('br'), React.createElement('em', null, 'بهتر کار می‌کنند.')),
      React.createElement('p', null, 'نگاهی به پروژه‌هایی که با محصولات مارلو طراحی و تجهیز شده‌اند.')
    ),
    React.createElement('section', { className: 'container projects-list' }, projectCards)
  );
}
