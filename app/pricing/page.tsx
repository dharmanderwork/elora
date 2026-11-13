import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Check, ArrowRight, Info } from 'lucide-react';
import {
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/MotionPrimitives';
import {
  SERVICE_CATEGORIES,
  SERVICES_DATA,
  PRICING_PACKAGES,
  BRAND_INFO,
} from '@/lib/elora-data';

export const metadata: Metadata = {
  title: 'Service Menu & Demonstration Pricing — Packages, Bridal & Memberships',
  description:
    'Transparent service menu and demonstration pricing for ÉLORA Beauty Atelier across Hair, Skin, Makeup, Nails, Spa Wellness, Bridal Couture, and Memberships.',
};

export default function PricingPage() {
  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      {/* Page Hero */}
      <section className="bg-[#171512] text-[#F3EDE4] pt-36 pb-20 lg:pt-44 lg:pb-24 border-b border-[#C7A77B]/30">
        <RevealOnScroll className="max-w-[1360px] mx-auto px-5 sm:px-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.26em] text-[#C7A77B]">
              Atelier Index & Investment Guide
            </p>
            <h1
              className="font-serif-editorial text-5xl sm:text-6xl font-normal text-[#F3EDE4]"
              style={{ textWrap: 'balance' }}
            >
              Service Menu & Curated Packages
            </h1>
            <p className="text-base text-[#F3EDE4]/80 leading-relaxed max-w-2xl">
              Every service includes an unhurried diagnostic consultation, botanical refreshments, and personalized post-ritual care recommendations.
            </p>
          </div>

          <Link
            href="/book"
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F3EDE4] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve an Appointment</span>
          </Link>
        </RevealOnScroll>
      </section>

      {/* Clear Demonstration Pricing Notice */}
      <div className="bg-[#171512]/[0.06] border-b border-[#171512]/15">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 py-4 flex items-center gap-3 text-xs text-[#171512]/80">
          <Info className="w-4 h-4 text-[#C7A77B] shrink-0" />
          <p>
            <strong>Demonstration Pricing Notice:</strong> All prices, bridal packages, and membership rates below are illustrative demonstration figures created for this live salon showcase.
          </p>
        </div>
      </div>

      {/* Individual Service Menu by Category */}
      <section className="py-20 lg:py-28 px-5 sm:px-8 max-w-[1360px] mx-auto space-y-20">
        {SERVICE_CATEGORIES.map((cat, idx) => {
          const categoryServices = SERVICES_DATA.filter((s) => s.category === cat.id);
          return (
            <RevealOnScroll key={cat.id} className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#171512]/20 pb-5">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A77B] tabular-nums">
                    0{idx + 1} · {cat.id}
                  </span>
                  <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171512] mt-1">
                    {cat.label}
                  </h2>
                </div>
                <p className="text-xs text-[#171512]/70 max-w-md sm:text-right">{cat.tagline}</p>
              </div>

              <div className="divide-y divide-[#171512]/10 border-b border-[#171512]/10">
                {categoryServices.map((service) => (
                  <div
                    key={service.id}
                    className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#171512]/[0.03] px-3 transition-colors"
                  >
                    <div className="space-y-1 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <Link
                          href={`/services/${service.slug}`}
                          className="font-serif-editorial text-2xl text-[#171512] hover:text-[#C7A77B] transition-colors"
                        >
                          {service.name}
                        </Link>
                        <span className="text-xs text-[#171512]/60 uppercase tracking-[0.14em] tabular-nums">
                          · {service.durationLabel}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#171512]/70">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-6 shrink-0">
                      <div className="text-left md:text-right">
                        <span className="text-[11px] uppercase tracking-[0.14em] text-[#171512]/55 block">
                          Starting From
                        </span>
                        <span className="font-serif-editorial text-2xl font-medium text-[#171512] tabular-nums">
                          ${service.startingPrice}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          href={`/services/${service.slug}`}
                          className="px-4 py-2.5 border border-[#171512]/25 text-xs uppercase tracking-[0.15em] text-[#171512] hover:border-[#171512] transition-colors whitespace-nowrap"
                        >
                          Details
                        </Link>
                        <Link
                          href={`/book?service=${service.id}`}
                          className="px-4 py-2.5 bg-[#171512] text-[#F3EDE4] text-xs uppercase tracking-[0.15em] hover:bg-[#C7A77B] hover:text-[#171512] transition-colors whitespace-nowrap"
                        >
                          Book
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          );
        })}
      </section>

      {/* Bridal Packages, Signature Day Packages & Memberships */}
      <section className="py-24 bg-[#171512] text-[#F3EDE4] border-t border-[#C7A77B]/30">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-14">
          <RevealOnScroll className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-[#C7A77B]">
              Bespoke Curations & Privileges
            </p>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#F3EDE4]">
              Bridal Couture, Day Sanctuaries & Atelier Privé Membership
            </h2>
          </RevealOnScroll>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.map((pkg) => (
              <StaggerItem
                key={pkg.id}
                className="border border-[#C7A77B]/35 bg-[#F3EDE4]/[0.03] hover:border-[#C7A77B] transition-all duration-300 hover:-translate-y-1 p-8 sm:p-10 flex flex-col justify-between space-y-8"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#C7A77B]">
                    <span>{pkg.tier}</span>
                    <span className="tabular-nums">{pkg.durationLabel}</span>
                  </div>

                  <h3 className="font-serif-editorial text-3xl text-[#F3EDE4] leading-snug">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-[#F3EDE4]/75 leading-relaxed">{pkg.subtitle}</p>

                  <div className="pt-2 border-y border-[#F3EDE4]/15 py-4">
                    <span className="font-serif-editorial text-4xl text-[#C7A77B] tabular-nums">
                      ${pkg.price}
                    </span>
                    <span className="block text-[11px] text-[#F3EDE4]/60 mt-1">
                      {pkg.billingNote}
                    </span>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {pkg.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#F3EDE4]/85">
                        <Check className="w-4 h-4 text-[#C7A77B] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#F3EDE4]/15 space-y-4">
                  <p className="text-xs text-[#F3EDE4]/65 italic">Ideal for: {pkg.idealFor}</p>
                  <Link
                    href="/book"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F3EDE4] transition-colors"
                  >
                    <span>Inquire or Reserve Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="text-xs text-[#F3EDE4]/55 text-center pt-4">{BRAND_INFO.demoNotice}</p>
        </div>
      </section>
    </div>
  );
}
