import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import BookingWizard from '@/components/booking/BookingWizard';
import { RevealOnScroll } from '@/components/ui/MotionPrimitives';

export const metadata: Metadata = {
  title: 'Book an Appointment — Interactive 8-Step Ritual Reservation',
  description:
    'Reserve your bespoke hair, cellular facial, bridal makeup, nail, or spa ritual at ÉLORA Beauty Atelier using our interactive demonstration booking concierge.',
};

export default function BookAppointmentPage() {
  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      {/* Page Hero */}
      <section className="bg-[#171512] text-[#F3EDE4] pt-36 pb-16 lg:pt-44 lg:pb-20 border-b border-[#C7A77B]/30">
        <RevealOnScroll className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-4">
          <p className="text-xs uppercase tracking-[0.26em] text-[#C7A77B]">
            Private Concierge Reservation
          </p>
          <h1
            className="font-serif-editorial text-5xl sm:text-6xl font-normal text-[#F3EDE4]"
            style={{ textWrap: 'balance' }}
          >
            Book Your Experience
          </h1>
          <p className="text-base text-[#F3EDE4]/80 max-w-2xl leading-relaxed">
            Tailor your visit step by step. Select your desired discipline, ritual, preferred specialist, and suite time below.
          </p>
        </RevealOnScroll>
      </section>

      <section className="py-16 lg:py-24 px-5 sm:px-8 max-w-[1360px] mx-auto">
        <Suspense
          fallback={
            <div className="py-20 text-center font-serif-editorial text-2xl text-[#171512]/70">
              Initializing reservation concierge...
            </div>
          }
        >
          <RevealOnScroll delay={0.1}>
            <BookingWizard />
          </RevealOnScroll>
        </Suspense>
      </section>
    </div>
  );
}
