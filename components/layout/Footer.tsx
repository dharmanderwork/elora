'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUp,
  MessageCircle,
  Check,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA } from '@/lib/elora-data';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const signatureServices = SERVICES_DATA.filter((s) => s.featured).slice(0, 5);

  return (
    <footer className="bg-[#171512] text-[#F3EDE4] border-t border-[#C7A77B]/30 relative">
      {/* Upper Editorial CTA Strip */}
      <div className="border-b border-[#C7A77B]/20">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 py-12 lg:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C7A77B] mb-2">
              Private Consultations & Bespoke Rituals
            </p>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-[#F3EDE4]">
              Your moment of beauty awaits at Maison ÉLORA.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/book"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F3EDE4] transition-colors whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-4 border border-[#C7A77B]/50 text-[#F3EDE4] text-xs uppercase tracking-[0.2em] hover:border-[#C7A77B] hover:text-[#C7A77B] transition-colors whitespace-nowrap"
            >
              <span>View Service Menu</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <Link
                href="/"
                className="font-serif-editorial text-3xl tracking-[0.24em] uppercase text-[#F3EDE4] hover:text-[#C7A77B] transition-colors inline-block"
              >
                ÉLORA
              </Link>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] mt-1">
                Beauty Atelier
              </p>
            </div>

            <p className="text-sm text-[#F3EDE4]/80 leading-relaxed max-w-sm">
              {BRAND_INFO.description}
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.18em] text-[#C7A77B] mb-3">
                The ÉLORA Seasonal Edit (Newsletter)
              </p>
              {subscribed ? (
                <div className="p-4 border border-[#C7A77B]/40 bg-[#F3EDE4]/5 text-xs text-[#F3EDE4] flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#C7A77B] shrink-0" />
                  <span>
                    Thank you. You are subscribed to The ÉLORA Edit demonstration dispatches.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} noValidate className="space-y-2">
                  <div className="flex items-stretch border border-[#C7A77B]/40 focus-within:border-[#C7A77B]">
                    <label htmlFor="footer-newsletter-email" className="sr-only">
                      Email address for newsletter
                    </label>
                    <input
                      id="footer-newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-transparent px-4 py-3 text-xs text-[#F3EDE4] placeholder:text-[#F3EDE4]/45 focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      className="px-4 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#F3EDE4] transition-colors flex items-center gap-1 shrink-0"
                    >
                      <span>Join</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {error && <p className="text-xs text-[#C7A77B]">{error}</p>}
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C7A77B]">Atelier</h3>
            <ul className="space-y-2.5 text-sm text-[#F3EDE4]/80">
              <li>
                <Link href="/" className="hover:text-[#C7A77B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C7A77B] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C7A77B] transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#C7A77B] transition-colors">
                  Pricing & Menu
                </Link>
              </li>
              <li>
                <Link href="/experts" className="hover:text-[#C7A77B] transition-colors">
                  Our Experts
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#C7A77B] transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#C7A77B] transition-colors">
                  Beauty Journal
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#C7A77B] transition-colors">
                  Client FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C7A77B] transition-colors">
                  Contact Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Signature Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C7A77B]">
              Signature Rituals
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F3EDE4]/80">
              {signatureServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#C7A77B] transition-colors block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/book"
                  className="text-xs uppercase tracking-[0.16em] text-[#C7A77B] hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Reserve a Private Ritual</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C7A77B]">
              Sanctuary & Hours
            </h3>
            <div className="space-y-3 text-sm text-[#F3EDE4]/80">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C7A77B] shrink-0 mt-1" />
                <span>
                  {BRAND_INFO.address.street}, {BRAND_INFO.address.city}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C7A77B] shrink-0" />
                <a href={BRAND_INFO.contact.phoneHref} className="hover:text-[#C7A77B]">
                  {BRAND_INFO.contact.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C7A77B] shrink-0" />
                <a href={`mailto:${BRAND_INFO.contact.email}`} className="hover:text-[#C7A77B]">
                  {BRAND_INFO.contact.email}
                </a>
              </p>
              <div className="pt-2 border-t border-[#F3EDE4]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#C7A77B]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Atelier Hours</span>
                </div>
                {BRAND_INFO.hours.map((item) => (
                  <div key={item.days} className="flex justify-between text-xs text-[#F3EDE4]/75">
                    <span>{item.days}</span>
                    <span className="tabular-nums">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social & Demo Disclaimer */}
        <div className="mt-14 pt-8 border-t border-[#F3EDE4]/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.18em]">
            {BRAND_INFO.socials.map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target={soc.url.startsWith('http') ? '_blank' : undefined}
                rel={soc.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[#F3EDE4]/80 hover:text-[#C7A77B] transition-colors"
              >
                {soc.name} ({soc.handle})
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#F3EDE4]/70">
            <Link href="/privacy" className="hover:text-[#C7A77B] transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[#C7A77B] transition-colors">
              Terms & Conditions
            </Link>
            <span>·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#C7A77B] hover:text-[#F3EDE4] transition-colors uppercase tracking-[0.14em]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[#F3EDE4]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#F3EDE4]/55">
          <p>© {new Date().getFullYear()} ÉLORA BEAUTY ATELIER. All Rights Reserved.</p>
          <p className="max-w-xl sm:text-right">{BRAND_INFO.demoNotice}</p>
        </div>
      </div>

      {/* Floating WhatsApp Concierge Button */}
      <a
        href={BRAND_INFO.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ÉLORA Concierge on WhatsApp"
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#171512]/95 backdrop-blur-xs text-[#F3EDE4] border border-[#C7A77B]/80 shadow-md hover:bg-[#C7A77B] hover:text-[#171512] transition-all duration-200 group"
      >
        <MessageCircle className="w-4 h-4 text-[#C7A77B] group-hover:text-[#171512] transition-colors" />
        <span className="text-[10px] uppercase tracking-[0.16em] font-medium hidden md:inline">
          Concierge
        </span>
      </a>
    </footer>
  );
}
