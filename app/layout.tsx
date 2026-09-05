import type { Metadata, Viewport } from 'next';
import '@fontsource/barlow-condensed/latin-600.css';
import '@fontsource/barlow-condensed/latin-700.css';
import '@fontsource-variable/manrope';
import './globals.css';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/layout/footer';
import { site } from '@/data/site';
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'OVRLD — OVRLD YOUR LIMIT.', template: '%s | OVRLD' },
  description: 'Performance gear and training software built for the work.',
  robots: {
    index: process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true',
    follow: process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true',
  },
  icons: { icon: '/brand/favicon.png' },
};
export const viewport: Viewport = { themeColor: '#101110' };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="announcement">
          <i aria-hidden="true" />
          OVRLD 001 <span>/</span> PREORDERS COMING SOON
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
