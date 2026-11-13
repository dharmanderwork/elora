import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import { BRAND_INFO } from '@/lib/elora-data';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
});

const baseUrl = process.env.APP_URL || 'https://elorabeautyatelier.demo';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'ÉLORA Beauty Atelier — Luxury Salon & Spa Experience',
    template: '%s | ÉLORA Beauty Atelier',
  },
  description:
    'Where Beauty Becomes an Experience. Discover bespoke hair artistry, cellular skin rituals, haute couture bridal beauty, nail artistry, and holistic spa wellness at ÉLORA Beauty Atelier.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ÉLORA Beauty Atelier — Luxury Salon & Spa Experience',
    description:
      'An elevated beauty sanctuary designed around you. Explore architectural hair styling, 24K cellular facials, bridal couture makeup, and holistic spa rituals.',
    url: baseUrl,
    siteName: 'ÉLORA Beauty Atelier',
    type: 'website',
    images: [
      {
        url: '/images/hero-atelier.jpg',
        width: 1200,
        height: 675,
        alt: 'ÉLORA Beauty Atelier Luxury Salon Sanctuary',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ÉLORA Beauty Atelier — Luxury Salon & Spa Experience',
    description:
      'Where Beauty Becomes an Experience. Bespoke hair artistry, cellular skin rituals, bridal makeup, and holistic wellness.',
    images: ['/images/hero-atelier.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: BRAND_INFO.name,
    slogan: BRAND_INFO.tagline,
    description: `${BRAND_INFO.description} (${BRAND_INFO.demoNotice})`,
    url: baseUrl,
    telephone: '+1-212-555-0194',
    email: BRAND_INFO.contact.email,
    priceRange: '$$$',
    image: `${baseUrl}/images/hero-atelier.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '742 Madison Avenue, Suite 400 (Fictional Demo Address)',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10065',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '17:00',
      },
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans-clean bg-[#F3EDE4] text-[#171512] antialiased min-h-screen flex flex-col selection:bg-[#C7A77B] selection:text-[#171512]"
      >
        <Header />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
