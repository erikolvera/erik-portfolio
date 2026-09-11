import type { Metadata } from 'next';
import { Archivo, Newsreader, Martian_Mono } from 'next/font/google';
import { Header } from '@/components/portfolio/header';
import { site } from '@/lib/site';
import './globals.css';
const display = Archivo({
  variable: '--font-display',
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
});
const body = Newsreader({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});
const mono = Martian_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: '%s — Erik Olvera' },
  description: site.description,
  authors: [{ name: site.name }],
  alternates: { canonical: '/' },
  openGraph: {
    title: site.title,
    description: site.description,
    type: 'website',
    locale: 'en_US',
    siteName: site.name,
    url: '/',
  },
  twitter: {
    card: 'summary',
    title: site.title,
    description: site.description,
  },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
