'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, Calendar, ArrowUpRight } from 'lucide-react';

const PRIMARY_NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Experts', href: '/experts' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];

const MOBILE_EXTRA_NAV = [
  { label: 'Frequently Asked Questions', href: '/faq' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const useDarkHeader = !isHomePage || scrolled || mobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useDarkHeader
            ? 'bg-[#171512]/95 backdrop-blur-md border-b border-[#C7A77B]/25 py-3.5 text-[#F3EDE4]'
            : 'bg-gradient-to-b from-[#171512]/80 via-[#171512]/40 to-transparent py-5 text-[#F3EDE4]'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand wordmark */}
          <Link
            href="/"
            className="font-serif-editorial text-2xl sm:text-[28px] tracking-[0.22em] uppercase text-[#F3EDE4] hover:text-[#C7A77B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A77B]"
          >
            ÉLORA
          </Link>

          {/* Zone 2: Clean single-line navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-7"
          >
            {PRIMARY_NAV.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 text-xs uppercase tracking-[0.18em] whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#C7A77B] font-medium'
                      : 'text-[#F3EDE4]/85 hover:text-[#C7A77B]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1px] bg-[#C7A77B] transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium bg-[#C7A77B] text-[#171512] hover:bg-[#F3EDE4] transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#F3EDE4] hover:text-[#C7A77B] border border-[#C7A77B]/35 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#171512] text-[#F3EDE4] pt-24 pb-10 px-6 overflow-y-auto lg:hidden flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="border-b border-[#C7A77B]/20 pb-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#C7A77B]">
                  ÉLORA Beauty Atelier · Navigation
                </p>
              </div>

              <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3.5">
                {PRIMARY_NAV.map((item) => {
                  const isActive =
                    item.href === '/'
                      ? pathname === '/'
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-serif-editorial text-2xl tracking-wider flex items-center justify-between py-1.5 border-b border-[#F3EDE4]/10 transition-colors ${
                        isActive ? 'text-[#C7A77B]' : 'text-[#F3EDE4] hover:text-[#C7A77B]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#C7A77B]" />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-2 space-y-2">
                {MOBILE_EXTRA_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs uppercase tracking-[0.16em] text-[#F3EDE4]/70 hover:text-[#C7A77B] py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-8 space-y-4 border-t border-[#C7A77B]/25 mt-8">
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F3EDE4] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Experience</span>
              </Link>
              <p className="text-[11px] text-[#F3EDE4]/60 text-center tracking-wide">
                Where Beauty Becomes an Experience.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
