import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND_INFO } from '@/lib/elora-data';

export const metadata: Metadata = {
  title: 'Privacy Policy (Demonstration Template)',
  description: 'Demonstration Privacy Policy template for ÉLORA Beauty Atelier.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      <section className="bg-[#171512] text-[#F3EDE4] pt-36 pb-16 lg:pt-44 lg:pb-20 border-b border-[#C7A77B]/30">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-[#C7A77B]">
            Legal Governance · Demonstration Document
          </p>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl text-[#F3EDE4]">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#F3EDE4]/70">
            Last Updated: November 2026 · Clearly Identifiable Demo Template
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-5 sm:px-8 max-w-4xl mx-auto space-y-8 text-sm text-[#171512]/85 leading-relaxed">
        <div className="p-6 border border-[#C7A77B] bg-[#171512] text-[#F3EDE4] text-xs">
          <strong>Demonstration Legal Notice:</strong> {BRAND_INFO.demoNotice} This Privacy Policy is a structured legal placeholder designed to be customized by a real salon business prior to commercial launch.
        </div>

        <div className="space-y-3">
          <h2 className="font-serif-editorial text-2xl text-[#171512]">
            01. Information We Collect in Demonstration Mode
          </h2>
          <p>
            When you interact with the demonstration booking wizard, contact form, or newsletter subscription on this showcase website, inputs entered into forms are processed locally in your browser session to demonstrate validation and confirmation states. No personal data is transmitted to external commercial databases or third-party marketers.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif-editorial text-2xl text-[#171512]">
            02. Production Salon Data Practices (Template)
          </h2>
          <p>
            In a live commercial deployment for a beauty atelier, client contact details, skin allergy notes, colour formulas, and appointment history are collected solely to personalize rituals, dispatch appointment confirmations, and maintain clinical safety records.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif-editorial text-2xl text-[#171512]">
            03. Your Privacy Rights & Contact
          </h2>
          <p>
            For questions regarding this demonstration template, please visit our{' '}
            <Link href="/contact" className="underline text-[#171512] font-medium">
              Contact Concierge
            </Link>{' '}
            page or view our{' '}
            <Link href="/terms" className="underline text-[#171512] font-medium">
              Terms & Conditions
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
