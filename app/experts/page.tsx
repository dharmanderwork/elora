import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowUpRight, Award } from 'lucide-react';
import LuxuryImage from '@/components/ui/LuxuryImage';
import {
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/MotionPrimitives';
import { SPECIALISTS_DATA, BRAND_INFO } from '@/lib/elora-data';

export const metadata: Metadata = {
  title: 'Our Experts & Master Artisans — Hair, Skin, Bridal & Spa Specialists',
  description:
    'Meet the master hair directors, cellular aestheticians, principal bridal makeup artists, and holistic spa therapists at ÉLORA Beauty Atelier.',
};

export default function ExpertsPage() {
  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      {/* Page Hero */}
      <section className="bg-[#171512] text-[#F3EDE4] pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-[#C7A77B]/30">
        <RevealOnScroll className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-xs uppercase tracking-[0.26em] text-[#C7A77B]">
              Master Collective · Maison ÉLORA
            </p>
            <h1
              className="font-serif-editorial text-5xl sm:text-6xl lg:text-7xl font-normal text-[#F3EDE4]"
              style={{ textWrap: 'balance' }}
            >
              The Artisans Behind the Experience
            </h1>
            <p className="text-base sm:text-lg text-[#F3EDE4]/80 leading-relaxed max-w-2xl">
              Each ÉLORA specialist is selected for rare technical mastery, international editorial credentials, and an unhurried, intuitive devotion to client care.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/book"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F3EDE4] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve With a Specialist</span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      {/* Specialists Editorial Grid */}
      <section className="py-20 lg:py-28 px-5 sm:px-8 max-w-[1360px] mx-auto space-y-16">
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {SPECIALISTS_DATA.map((specialist, index) => (
            <StaggerItem
              key={specialist.id}
              className="border border-[#171512]/15 bg-[#F3EDE4] hover:border-[#C7A77B] transition-all duration-300 hover:-translate-y-1 grid grid-cols-1 sm:grid-cols-12 overflow-hidden group"
            >
              <div className="sm:col-span-5 relative min-h-[340px] sm:h-full overflow-hidden">
                <LuxuryImage
                  src={specialist.image}
                  alt={`${specialist.name} — ${specialist.role}`}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#171512]/85 text-[#C7A77B] px-2.5 py-1 text-[11px] font-mono tabular-nums tracking-widest">
                  0{index + 1}
                </span>
              </div>

              <div className="sm:col-span-7 p-7 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#171512]/65">
                    <span>{specialist.specialtyCategory}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{specialist.experienceYears} Years Experience</span>
                  </div>

                  <h2 className="font-serif-editorial text-3xl text-[#171512]">
                    {specialist.name}
                  </h2>

                  <p className="text-xs uppercase tracking-[0.16em] text-[#C7A77B] font-medium">
                    {specialist.role}
                  </p>

                  <p className="text-sm text-[#171512]/80 leading-relaxed pt-1">
                    {specialist.bio}
                  </p>

                  <blockquote className="pt-2 text-xs italic font-serif-editorial text-lg text-[#171512]/90">
                    “{specialist.philosophy}”
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#171512]/10 space-y-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[#171512]/55 mb-1">
                      Core Specialties
                    </p>
                    <p className="text-xs text-[#171512] font-medium">
                      {specialist.specialties.join(' · ')}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#171512]/65 hover:text-[#C7A77B] transition-colors inline-flex items-center gap-1"
                    >
                      <span>{specialist.instagramHandle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <Link
                      href={`/book?category=${encodeURIComponent(specialist.specialtyCategory)}&specialist=${specialist.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171512] text-[#F3EDE4] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#C7A77B] hover:text-[#171512] transition-colors whitespace-nowrap"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#C7A77B]" />
                      <span>Book With {specialist.name.split(' ')[0]}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Collective Standards Banner */}
        <RevealOnScroll className="p-8 sm:p-12 bg-[#171512] text-[#F3EDE4] border border-[#C7A77B]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C7A77B]">
              <Award className="w-4 h-4" />
              <span>Continuous Couture Education</span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE4]">
              Unsure which specialist is best suited for your goals?
            </h2>
            <p className="text-sm text-[#F3EDE4]/75 leading-relaxed">
              Select “Any Available Master Specialist” during booking or contact our concierge for a personalized recommendation. ({BRAND_INFO.demoNotice})
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 border border-[#C7A77B] text-[#C7A77B] text-xs uppercase tracking-[0.2em] hover:bg-[#C7A77B] hover:text-[#171512] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Consult Our Concierge</span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
