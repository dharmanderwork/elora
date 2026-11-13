import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, ShieldCheck, Sparkles, Award, Compass } from 'lucide-react';
import LuxuryImage from '@/components/ui/LuxuryImage';
import { BRAND_INFO, SPECIALISTS_DATA } from '@/lib/elora-data';

export const metadata: Metadata = {
  title: 'About Maison ÉLORA — Our Story & Beauty Philosophy',
  description:
    'Explore the story, architectural sanctuary, mission, and uncompromising beauty philosophy behind ÉLORA Beauty Atelier.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      {/* Editorial Hero */}
      <section className="relative bg-[#171512] text-[#F3EDE4] pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden border-b border-[#C7A77B]/30">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs uppercase tracking-[0.26em] text-[#C7A77B]">
              Maison ÉLORA · Heritage & Philosophy
            </p>
            <h1
              className="font-serif-editorial text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#F3EDE4]"
              style={{ textWrap: 'balance' }}
            >
              Crafted as an Antidote to Hurried Beauty.
            </h1>
            <p className="text-base sm:text-lg text-[#F3EDE4]/80 leading-relaxed max-w-2xl">
              {BRAND_INFO.description}
            </p>
          </div>

          <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] border border-[#C7A77B]/35">
            <LuxuryImage
              src="/images/hero-atelier.jpg"
              alt="Travertine arches and brass mirrors inside ÉLORA Beauty Atelier"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story & Brand Philosophy */}
      <section className="py-24 lg:py-32 px-5 sm:px-8 max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#171512]/65">
              01 · Our Origin Story
            </p>
            <h2
              className="font-serif-editorial text-4xl sm:text-5xl font-normal leading-tight text-[#171512]"
              style={{ textWrap: 'balance' }}
            >
              Born from European Haute Couture Backstage & Holistic Esthetics.
            </h2>
            <div className="w-16 h-[1px] bg-[#C7A77B] mt-4" />
          </div>

          <div className="lg:col-span-7 space-y-6 text-base text-[#171512]/80 leading-relaxed">
            <p>
              ÉLORA Beauty Atelier was founded by Creative Hair Director Céleste Vance alongside Lead Dermal Aesthetician Dr. Soraya Rostami after fifteen years working between Paris fashion weeks and Geneva cellular skin clinics. Both noticed the same paradox in modern salons: women were asked to choose between clinical efficiency that felt cold and rushed, or spa indulgence that lacked technical mastery.
            </p>
            <p>
              Maison ÉLORA was envisioned to unite both worlds. Every square foot of our travertine pavilion was designed to slow the pulse while delivering the highest caliber of hair architecture, cellular facial sculpting, couture bridal makeup, and botanical nail care.
            </p>
            <blockquote className="p-8 bg-[#171512] text-[#F3EDE4] border border-[#C7A77B]/30 my-6">
              <p className="font-serif-editorial text-2xl sm:text-3xl italic text-[#F3EDE4]">
                “We do not believe in trends that overpower a woman’s individuality. Our craft is to listen deeply, study your natural proportions, and reveal radiance that feels effortless.”
              </p>
              <footer className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] mt-4">
                — Céleste Vance & Dr. Soraya Rostami
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Beauty Philosophy */}
      <section className="py-24 bg-[#171512] text-[#F3EDE4] border-y border-[#C7A77B]/25">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-16">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-[#C7A77B]">
              02 · Mission, Vision & Ethos
            </p>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#F3EDE4]">
              Three Principles Guiding Every Ritual
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#F3EDE4]/15 p-8 space-y-4 bg-[#F3EDE4]/[0.02]">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A77B]">
                01 · Our Mission
              </span>
              <h3 className="font-serif-editorial text-3xl text-[#F3EDE4]">
                Personal, Unhurried Artistry
              </h3>
              <p className="text-sm text-[#F3EDE4]/75 leading-relaxed">
                To transform routine beauty maintenance into a restorative personal ceremony—where every guest receives undivided specialist attention, honest diagnostic guidance, and long-lasting results.
              </p>
            </div>

            <div className="border border-[#F3EDE4]/15 p-8 space-y-4 bg-[#F3EDE4]/[0.02]">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A77B]">
                02 · Our Vision
              </span>
              <h3 className="font-serif-editorial text-3xl text-[#F3EDE4]">
                Biological & Structural Harmony
              </h3>
              <p className="text-sm text-[#F3EDE4]/75 leading-relaxed">
                To set the global benchmark for clean luxury beauty—proving that ammonia-free colour, barrier-respecting cellular skincare, and HEMA-free nail couture outperform harsh conventional methods.
              </p>
            </div>

            <div className="border border-[#F3EDE4]/15 p-8 space-y-4 bg-[#F3EDE4]/[0.02]">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A77B]">
                03 · Beauty Philosophy
              </span>
              <h3 className="font-serif-editorial text-3xl text-[#F3EDE4]">
                Integrity Over Artifice
              </h3>
              <p className="text-sm text-[#F3EDE4]/75 leading-relaxed">
                Whether sculpting a collarbone cut, performing intra-oral buccal lifting, or preparing a bride for her ceremony, our work honors the health of your hair fiber, skin barrier, and natural nail plate first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Salon Ambience & Interiors */}
      <section className="py-24 lg:py-32 px-5 sm:px-8 max-w-[1360px] mx-auto space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#171512]/65">
              03 · Architectural Sanctuary
            </p>
            <h2
              className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#171512]"
              style={{ textWrap: 'balance' }}
            >
              Honed Travertine, Warm Ivory Linen, and Acoustic Stillness.
            </h2>
            <p className="text-base text-[#171512]/80 leading-relaxed">
              Our interior architecture was conceived as a sensory exhale. Arched ceilings clad in sound-absorbing Venetian plaster eliminate salon echo. Custom champagne-brass vanity mirrors feature adjustable Kelvin daylight calibration so you see hair colour and complexion tones in true natural light.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="border border-[#171512]/15 p-5">
                <h3 className="font-serif-editorial text-xl text-[#171512]">
                  The Travertine Hair Gallery
                </h3>
                <p className="text-xs text-[#171512]/75 mt-1.5 leading-relaxed">
                  Generously spaced bouclé styling stations with private botanical steam wash suites.
                </p>
              </div>
              <div className="border border-[#171512]/15 p-5">
                <h3 className="font-serif-editorial text-xl text-[#171512]">
                  Acoustic Dermal & Spa Suites
                </h3>
                <p className="text-xs text-[#171512]/75 mt-1.5 leading-relaxed">
                  Candlelit suites with heated memory-linen tables and private rain showers.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            <div className="relative h-80 sm:h-96 border border-[#171512]/15">
              <LuxuryImage
                src="/images/skin-ritual.jpg"
                alt="ÉLORA private facial and wellness suite"
                className="object-cover"
              />
            </div>
            <div className="relative h-80 sm:h-96 border border-[#171512]/15 mt-8">
              <LuxuryImage
                src="/images/nail-spa.jpg"
                alt="Botanical apothecary and travertine manicure sanctuary"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards & CTA */}
      <section className="py-20 bg-[#171512]/[0.05] border-t border-[#171512]/15">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#C7A77B] font-medium">
              04 · Experience Maison ÉLORA
            </p>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171512]">
              Ready to discover our curated rituals and specialists?
            </h2>
            <p className="text-sm text-[#171512]/75">
              Explore our complete service menu across Hair, Skin, Bridal Makeup, Nail Couture, and Holistic Wellness, or reserve your private consultation today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#171512] text-[#F3EDE4] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C7A77B] hover:text-[#171512] transition-colors"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/experts"
              className="inline-flex items-center gap-2 px-7 py-4 border border-[#171512] text-[#171512] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#171512] hover:text-[#F3EDE4] transition-colors"
            >
              <span>Meet Our {SPECIALISTS_DATA.length} Experts</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
