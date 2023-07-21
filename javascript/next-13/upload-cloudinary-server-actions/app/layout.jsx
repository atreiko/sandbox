import { Inter } from 'next/font/google';
import connectDB from '@/utils/database';
import './globals.css';

connectDB()

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Upload Images',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
