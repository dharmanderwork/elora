import React from 'react';
import type { Metadata } from 'next';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowUpRight,
  Compass,
} from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import { RevealOnScroll } from '@/components/ui/MotionPrimitives';
import { BRAND_INFO } from '@/lib/elora-data';

export const metadata: Metadata = {
  title: 'Contact Concierge & Sanctuary Location — Maison ÉLORA',
  description:
    'Connect with the ÉLORA Beauty Atelier Concierge for private consultations, bridal bookings, opening hours, and demonstration sanctuary directions.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      {/* Page Hero */}
      <section className="bg-[#171512] text-[#F3EDE4] pt-36 pb-20 lg:pt-44 lg:pb-24 border-b border-[#C7A77B]/30">
        <RevealOnScroll className="max-w-[1360px] mx-auto px-5 sm:px-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.26em] text-[#C7A77B]">
              Private Concierge Desk
            </p>
            <h1
              className="font-serif-editorial text-5xl sm:text-6xl font-normal text-[#F3EDE4]"
              style={{ textWrap: 'balance' }}
            >
              Visit or Inquire With Maison ÉLORA
            </h1>
            <p className="text-base text-[#F3EDE4]/80 leading-relaxed max-w-2xl">
              Whether arranging a bridal suite trial, customizing a half-day sanctuary ritual, or requesting a diagnostic consultation, our concierge is delighted to assist you.
            </p>
          </div>

          <a
            href={BRAND_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F3EDE4] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Message on WhatsApp</span>
          </a>
        </RevealOnScroll>
      </section>

      {/* Contact Details + Validated Form */}
      <section className="py-20 lg:py-28 px-5 sm:px-8 max-w-[1360px] mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Address, Phone, Hours, Socials */}
          <RevealOnScroll className="lg:col-span-5 space-y-8">
            <div className="border border-[#171512]/15 p-8 bg-[#171512] text-[#F3EDE4] space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B]">
                  Fictional Demo Sanctuary
                </p>
                <h2 className="font-serif-editorial text-3xl text-[#F3EDE4] mt-1">
                  Atelier Coordinates
                </h2>
              </div>

              <div className="space-y-4 text-sm text-[#F3EDE4]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C7A77B] shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#F3EDE4]">{BRAND_INFO.address.suite}</p>
                    <p>{BRAND_INFO.address.street}</p>
                    <p>{BRAND_INFO.address.city}</p>
                    <p className="text-xs text-[#C7A77B] mt-1">{BRAND_INFO.address.landmark}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#F3EDE4]/10">
                  <Phone className="w-4 h-4 text-[#C7A77B] shrink-0" />
                  <a href={BRAND_INFO.contact.phoneHref} className="hover:text-[#C7A77B]">
                    {BRAND_INFO.contact.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C7A77B] shrink-0" />
                  <a href={`mailto:${BRAND_INFO.contact.email}`} className="hover:text-[#C7A77B]">
                    {BRAND_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F3EDE4]/15 space-y-2.5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#C7A77B]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Opening Hours</span>
                </div>
                {BRAND_INFO.hours.map((h) => (
                  <div key={h.days} className="flex justify-between text-xs text-[#F3EDE4]/80">
                    <span>{h.days}</span>
                    <span className="tabular-nums">{h.time}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#F3EDE4]/15 space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-[#C7A77B]">
                  Social Channels
                </p>
                <div className="flex flex-wrap gap-4 pt-1">
                  {BRAND_INFO.socials.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target={soc.url.startsWith('http') ? '_blank' : undefined}
                      rel={soc.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-xs text-[#F3EDE4] hover:text-[#C7A77B] inline-flex items-center gap-1"
                    >
                      <span>{soc.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#C7A77B]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 border border-[#171512]/15 text-xs text-[#171512]/70 leading-relaxed">
              {BRAND_INFO.demoNotice}
            </div>
          </RevealOnScroll>

          {/* Right: Contact Form */}
          <RevealOnScroll delay={0.12} className="lg:col-span-7 border border-[#171512]/15 p-8 sm:p-12 bg-[#F3EDE4]">
            <div className="mb-8 space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] font-medium">
                Direct Dispatch
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171512]">
                Send a Private Message
              </h2>
              <p className="text-xs text-[#171512]/70">
                Complete the form below to test our client inquiry validation and response flow.
              </p>
            </div>

            <ContactForm />
          </RevealOnScroll>
        </div>

        {/* Architectural Map Embed Placeholder */}
        <RevealOnScroll className="border border-[#171512]/20 bg-[#171512] text-[#F3EDE4] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C7A77B]">
              <Compass className="w-4 h-4" />
              <span>Arrival & Chauffeur Drop-Off</span>
            </div>
            <h2 className="font-serif-editorial text-3xl text-[#F3EDE4]">
              Map & Sanctuary Access (Demo Placeholder)
            </h2>
            <p className="text-xs sm:text-sm text-[#F3EDE4]/75 leading-relaxed">
              Located in the heart of the Upper East Side district (fictional demonstration address). Private courtyard entry is available for bridal parties and VIP guests upon prior notice to our concierge.
            </p>
          </div>

          <div className="lg:col-span-7 border border-[#C7A77B]/40 bg-[#F3EDE4]/[0.04] p-8 min-h-[240px] flex flex-col items-center justify-center text-center space-y-3 relative overflow-hidden">
            <MapPin className="w-8 h-8 text-[#C7A77B]" />
            <p className="font-serif-editorial text-2xl text-[#F3EDE4]">
              Maison ÉLORA · 742 Madison Avenue (Demo Map View)
            </p>
            <p className="text-xs text-[#F3EDE4]/70 max-w-md">
              Interactive Google Maps Embed Placeholder — Replace with live salon coordinates and Google Maps Embed key upon business deployment.
            </p>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C7A77B] pt-1">
              40.7685° N, 73.9693° W · Demonstration Pin
            </span>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
