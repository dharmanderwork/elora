import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import GalleryView from '@/components/gallery/GalleryView';
import { RevealOnScroll } from '@/components/ui/MotionPrimitives';

export const metadata: Metadata = {
  title: 'Editorial Visual Gallery — Salon Interiors, Bridal, Hair & Skin Transformations',
  description:
    'Explore the visual archive of ÉLORA Beauty Atelier: Roman travertine interiors, dimensional balayage, bridal makeup couture, cellular facials, and nail artistry.',
};

export default function GalleryPage() {
  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      {/* Page Hero */}
      <section className="bg-[#171512] text-[#F3EDE4] pt-36 pb-20 lg:pt-44 lg:pb-24 border-b border-[#C7A77B]/30">
        <RevealOnScroll className="max-w-[1360px] mx-auto px-5 sm:px-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.26em] text-[#C7A77B]">
              Visual Archive & Lookbook
            </p>
            <h1
              className="font-serif-editorial text-5xl sm:text-6xl font-normal text-[#F3EDE4]"
              style={{ textWrap: 'balance' }}
            >
              The ÉLORA Editorial Gallery
            </h1>
            <p className="text-base text-[#F3EDE4]/80 leading-relaxed max-w-2xl">
              An intimate look inside our travertine sanctuary, bespoke bridal transformations, dimensional hair colour, and minimalist nail couture.
            </p>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-7 py-4 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F3EDE4] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Transformation</span>
          </Link>
        </RevealOnScroll>
      </section>

      <section className="py-16 lg:py-24 px-5 sm:px-8 max-w-[1360px] mx-auto">
        <GalleryView />
      </section>
    </div>
  );
}
