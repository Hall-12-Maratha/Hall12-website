import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { GeistSans } from "geist/font/sans";
import { Literata, Amita } from "next/font/google";

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
});

const amita = Amita({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-amita',
});


export const metadata: Metadata = {
  title: 'Hall XII - IIT Kanpur',
  description: 'Homepage for Hall of Residence XII, IIT Kanpur.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${literata.variable} ${amita.variable} dark`}>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
