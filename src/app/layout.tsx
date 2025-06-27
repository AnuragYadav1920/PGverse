import { Inter } from 'next/font/google';
import './globals.css';
import {Navbar, Footer} from "./page"
import { Children } from 'react';
export const runtime = 'edge'; // ✅ Forces Node.js runtime


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PGverse',
  description: "find best PG's around you",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        {/* <Navbar/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
