import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND_INFO } from '@/lib/elora-data';

export const metadata: Metadata = {
  title: 'Terms & Conditions (Demonstration Template)',
  description: 'Demonstration Terms & Conditions template for ÉLORA Beauty Atelier.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      <section className="bg-[#171512] text-[#F3EDE4] pt-36 pb-16 lg:pt-44 lg:pb-20 border-b border-[#C7A77B]/30">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-[#C7A77B]">
            Atelier Policies · Demonstration Document
          </p>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl text-[#F3EDE4]">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#F3EDE4]/70">
            Last Updated: November 2026 · Clearly Identifiable Demo Template
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-5 sm:px-8 max-w-4xl mx-auto space-y-8 text-sm text-[#171512]/85 leading-relaxed">
        <div className="p-6 border border-[#C7A77B] bg-[#171512] text-[#F3EDE4] text-xs">
          <strong>Demonstration Legal Notice:</strong> {BRAND_INFO.demoNotice} All service rates, packages, and policies outlined below serve as an illustrative template for salon owners.
        </div>

        <div className="space-y-3">
          <h2 className="font-serif-editorial text-2xl text-[#171512]">
            01. Demonstration Booking & Pricing Disclaimer
          </h2>
          <p>
            ÉLORA Beauty Atelier is a fictional luxury salon showcase. Completing the 8-step appointment wizard generates a simulated demonstration itinerary and does not constitute a binding reservation with a physical salon.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif-editorial text-2xl text-[#171512]">
            02. Studio Etiquette & 24-Hour Cancellation Standard (Template)
          </h2>
          <p>
            To preserve an unhurried sanctuary for every guest, we kindly ask for 24 hours notice for any rescheduling or cancellation (48 hours for Bridal Couture or half-day rituals).
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif-editorial text-2xl text-[#171512]">
            03. Related Policies
          </h2>
          <p>
            Review our{' '}
            <Link href="/privacy" className="underline text-[#171512] font-medium">
              Privacy Policy
            </Link>{' '}
            or{' '}
            <Link href="/faq" className="underline text-[#171512] font-medium">
              Frequently Asked Questions
            </Link>{' '}
            for further details.
          </p>
        </div>
      </section>
    </div>
  );
}
