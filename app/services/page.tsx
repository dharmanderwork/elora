import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import ServicesCatalog from '@/components/services/ServicesCatalog';
import { BRAND_INFO } from '@/lib/elora-data';

export const metadata: Metadata = {
  title: 'Luxury Salon & Spa Services — Hair, Skin, Bridal, Nails & Wellness',
  description:
    'Discover ÉLORA Beauty Atelier’s 22 bespoke beauty rituals across Hair Artistry, Cellular Skin Facials, Bridal Makeup, Nail Couture, and Holistic Spa Wellness.',
};

export default function ServicesPage() {
  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      {/* Page Hero */}
      <section className="bg-[#171512] text-[#F3EDE4] pt-36 pb-20 lg:pt-44 lg:pb-24 border-b border-[#C7A77B]/30">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.26em] text-[#C7A77B]">
              Curated Service Discovery
            </p>
            <h1
              className="font-serif-editorial text-5xl sm:text-6xl font-normal text-[#F3EDE4]"
              style={{ textWrap: 'balance' }}
            >
              Bespoke Rituals & Haute Beauty Services
            </h1>
            <p className="text-base text-[#F3EDE4]/80 leading-relaxed max-w-2xl">
              Explore our complete repertoire of hair architecture, cellular facial sculpting, bridal makeup, Japanese gel nail care, and holistic spa treatments.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#C7A77B]/50 text-[#F3EDE4] text-xs uppercase tracking-[0.18em] hover:border-[#C7A77B] hover:text-[#C7A77B] transition-colors whitespace-nowrap"
            >
              <span>View Full Price List</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#F3EDE4] transition-colors whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-16 lg:py-24 px-5 sm:px-8 max-w-[1360px] mx-auto">
        <Suspense
          fallback={
            <div className="py-20 text-center font-serif-editorial text-2xl text-[#171512]/70">
              Loading curated services...
            </div>
          }
        >
          <ServicesCatalog />
        </Suspense>

        <div className="mt-16 p-6 border border-[#171512]/15 bg-[#171512]/[0.03] text-xs text-[#171512]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p>{BRAND_INFO.demoNotice}</p>
          <Link
            href="/faq"
            className="uppercase tracking-[0.16em] text-[#171512] font-medium hover:text-[#C7A77B] whitespace-nowrap"
          >
            Read Service & Hygiene FAQs →
          </Link>
        </div>
      </section>
    </div>
  );
}
