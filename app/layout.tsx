import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'مارلو | مبلمان اداری و گیمینگ',description:'تولیدکننده صندلی‌های اداری، مدیریتی و گیمینگ در تهران'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fa" dir="rtl"><body>{children}</body></html>}
