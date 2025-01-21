import type { Metadata } from "next";
import {Varta} from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const varta = Varta({
  variable: "--font-varta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Curtis Grotzke — Personal Portfolio`,
  description: "Personal portfolio for Vancouver based software developer Curtis Grotzke",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='w-full h-full scroll-smooth'>
      <body
        className={`${varta.variable} antialiased dark w-full h-full bg-black`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
