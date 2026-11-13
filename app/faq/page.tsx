import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, MessageSquare } from 'lucide-react';
import FAQAccordion from '@/components/faq/FAQAccordion';
import { RevealOnScroll } from '@/components/ui/MotionPrimitives';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Appointments, Bridal, Hygiene & Policies',
  description:
    'Find clear answers about ÉLORA Beauty Atelier appointment scheduling, cancellation policies, hospital-grade autoclave hygiene, bridal bookings, and consultations.',
};

export default function FAQPage() {
  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      {/* Page Hero */}
      <section className="bg-[#171512] text-[#F3EDE4] pt-36 pb-20 lg:pt-44 lg:pb-24 border-b border-[#C7A77B]/30">
        <RevealOnScroll className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.26em] text-[#C7A77B]">
            Client Guidance & Atelier Standards
          </p>
          <h1
            className="font-serif-editorial text-5xl sm:text-6xl font-normal text-[#F3EDE4]"
            style={{ textWrap: 'balance' }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-base text-[#F3EDE4]/80 max-w-2xl leading-relaxed">
            Everything you need to know prior to your visit—from arrival etiquette and bridal trials to our medical-grade sterilization protocols.
          </p>
        </RevealOnScroll>
      </section>

      <section className="py-16 lg:py-24 px-5 sm:px-8 max-w-5xl mx-auto space-y-16">
        <RevealOnScroll delay={0.1}>
          <FAQAccordion />
        </RevealOnScroll>

        <RevealOnScroll className="p-8 sm:p-10 bg-[#171512] text-[#F3EDE4] border border-[#C7A77B]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B]">
              Personal Assistance
            </p>
            <h2 className="font-serif-editorial text-3xl text-[#F3EDE4]">
              Have a question not answered above?
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#F3EDE4] transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contact Concierge</span>
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#C7A77B]/50 text-[#F3EDE4] text-xs uppercase tracking-[0.18em] hover:border-[#C7A77B] hover:text-[#C7A77B] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Ritual</span>
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
