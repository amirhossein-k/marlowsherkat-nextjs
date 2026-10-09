import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'مارلو | مبلمان اداری و گیمینگ', description: 'طراحی و تولید مبلمان اداری مارلو' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
