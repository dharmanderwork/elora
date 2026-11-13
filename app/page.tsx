import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  Award,
  HeartHandshake,
  Gem,
} from 'lucide-react';
import LuxuryImage from '@/components/ui/LuxuryImage';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import {
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
  ImageMaskReveal,
  GoldLineReveal,
} from '@/components/ui/MotionPrimitives';
import {
  BRAND_INFO,
  SERVICE_CATEGORIES,
  SERVICES_DATA,
  SPECIALISTS_DATA,
  GALLERY_ITEMS,
} from '@/lib/elora-data';

const WHY_ELORA_PILLARS = [
  {
    number: '01',
    title: 'Master Artisans & Trichologists',
    description:
      'Every stylist, dermal facialist, and bridal artist brings over a decade of international runway, clinical esthetics, or couture atelier training.',
    icon: Award,
  },
  {
    number: '02',
    title: 'Botanical & Cellular Formulations',
    description:
      'We work exclusively with ammonia-free pigments, Swiss bio-peptides, 24K gold leaf, and cold-pressed botanical elixirs free from harsh synthetics.',
    icon: Gem,
  },
  {
    number: '03',
    title: 'Bespoke Bone-Structure Diagnostics',
    description:
      'Every visit begins with an unhurried diagnostic consultation analyzing facial architecture, skin barrier health, and personal lifestyle rhythm.',
    icon: HeartHandshake,
  },
  {
    number: '04',
    title: 'Hospital-Grade Autoclave Hygiene',
    description:
      'All metal instruments undergo ultrasonic purification and Class-B medical autoclave sterilization in sealed pouches opened in your presence.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Architectural Travertine Sanctuary',
    description:
      'Designed with acoustic plaster vaults, Kelvin-calibrated brass mirrors, and private suites so city clamor fades the moment you arrive.',
    icon: Sparkles,
  },
];

export default function HomePage() {
  const featuredSpecialists = SPECIALISTS_DATA.filter((sp) => sp.featured).slice(0, 4);
  const featuredServices = SERVICES_DATA.filter((s) => s.featured).slice(0, 5);
  const galleryPreview = GALLERY_ITEMS.slice(0, 5);

  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#171512] text-[#F3EDE4] pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <LuxuryImage
            src="/images/hero-atelier.jpg"
            alt="ÉLORA Beauty Atelier arched travertine interior sanctuary"
            priority
            sizes="100vw"
            className="object-cover object-center scale-[1.02] transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171512]/90 via-[#171512]/70 to-[#171512]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171512] via-transparent to-[#171512]/50" />
        </div>

        <div className="relative z-10 max-w-[1360px] w-full mx-auto px-5 sm:px-8 pt-10 pb-12">
          <StaggerContainer staggerDelay={0.12} className="max-w-3xl space-y-6">
            <StaggerItem>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C7A77B]">
                <span>ÉLORA Beauty Atelier</span>
                <span aria-hidden="true" className="hidden sm:inline">
                  ·
                </span>
                <span>Where Beauty Becomes an Experience</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1
                className="font-serif-editorial text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.06] tracking-wide text-[#F3EDE4]"
                style={{ textWrap: 'balance' }}
              >
                Discover Your Most Beautiful Self.
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-base sm:text-lg text-[#F3EDE4]/85 max-w-xl leading-relaxed font-normal">
                An elevated beauty experience designed around you. From architectural hair artistry and 24K cellular skin rituals to timeless bridal couture.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F3EDE4] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/book"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-[#F3EDE4]/60 bg-[#171512]/40 backdrop-blur-xs text-[#F3EDE4] text-xs uppercase tracking-[0.2em] font-medium hover:border-[#C7A77B] hover:text-[#C7A77B] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 text-[#C7A77B]" />
                  <span>Book Your Experience</span>
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Full-width Architectural Proof Strip below Hero copy */}
          <StaggerContainer
            staggerDelay={0.1}
            delayChildren={0.25}
            className="mt-16 lg:mt-24 pt-8 border-t border-[#F3EDE4]/20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            <StaggerItem>
              <p className="font-serif-editorial text-2xl sm:text-3xl text-[#C7A77B] tabular-nums">
                22+ Rituals
              </p>
              <p className="text-xs text-[#F3EDE4]/75 mt-1">
                Across Hair, Skin, Bridal, Nails & Holistic Spa
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="font-serif-editorial text-2xl sm:text-3xl text-[#C7A77B] tabular-nums">
                100% Bespoke
              </p>
              <p className="text-xs text-[#F3EDE4]/75 mt-1">
                Private bone-structure & dermal barrier diagnostics
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="font-serif-editorial text-2xl sm:text-3xl text-[#C7A77B] tabular-nums">
                Class-B Sterile
              </p>
              <p className="text-xs text-[#F3EDE4]/75 mt-1">
                Hospital-grade autoclave & botanical purity standards
              </p>
            </StaggerItem>
            <StaggerItem className="flex items-end justify-between">
              <div>
                <p className="font-serif-editorial text-2xl sm:text-3xl text-[#C7A77B]">
                  Maison ÉLORA
                </p>
                <p className="text-xs text-[#F3EDE4]/75 mt-1">
                  Private suites & acoustic treatment sanctuaries
                </p>
              </div>
              <a
                href="#brand-introduction"
                aria-label="Scroll to brand introduction"
                className="hidden sm:inline-flex items-center justify-center w-10 h-10 border border-[#C7A77B]/40 text-[#C7A77B] hover:bg-[#C7A77B] hover:text-[#171512] transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION A: BRAND INTRODUCTION */}
      <section
        id="brand-introduction"
        className="py-24 lg:py-32 px-5 sm:px-8 max-w-[1360px] mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <RevealOnScroll direction="up" className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.24em] text-[#171512]/70">
                01 · The Philosophy of Maison ÉLORA
              </p>
              <h2
                className="font-serif-editorial text-4xl sm:text-5xl font-normal leading-[1.12] text-[#171512]"
                style={{ textWrap: 'balance' }}
              >
                Where haute beauty artistry meets unhurried sensory restoration.
              </h2>
              <GoldLineReveal />
            </div>

            <div className="space-y-5 text-base text-[#171512]/80 leading-relaxed">
              <p>{BRAND_INFO.description}</p>
              <p>
                Conceived as an architectural sanctuary away from hurried salon assembly lines, ÉLORA unites Paris-trained hair directors, cellular facial sculptors, and minimalist nail artisans under one travertine roof. We believe that true luxury is never loud—it is felt in the weightless movement of a haircut twelve weeks later, the calm luminosity of healthy skin, and the quiet confidence of being genuinely cared for.
              </p>
            </div>

            <div className="pt-4 border-t border-[#171512]/15 flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="font-serif-editorial text-xl italic text-[#171512]">
                  “Every detail is choreographed so you leave feeling restored, luminous, and unmistakably yourself.”
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-[#171512]/65 mt-2">
                  Céleste Vance · Founder & Creative Director
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#171512] border-b border-[#C7A77B] pb-1 hover:text-[#C7A77B] transition-colors whitespace-nowrap"
              >
                <span>Read Our Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
            <ImageMaskReveal className="sm:col-span-7 relative min-h-[380px] lg:h-full border border-[#171512]/10">
              <LuxuryImage
                src="/images/hair-artistry.jpg"
                alt="Dimensional honey champagne balayage hair artistry at ÉLORA"
                className="object-cover"
              />
            </ImageMaskReveal>
            <div className="sm:col-span-5 flex flex-col justify-between gap-6">
              <ImageMaskReveal delay={0.15} className="relative h-64 sm:h-full border border-[#171512]/10">
                <LuxuryImage
                  src="/images/skin-ritual.jpg"
                  alt="Cellular facial massage ritual in candlelit suite"
                  className="object-cover"
                />
              </ImageMaskReveal>
              <RevealOnScroll delay={0.25} className="p-6 bg-[#171512] text-[#F3EDE4] border border-[#C7A77B]/30">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#C7A77B]">
                  Bespoke Consultations
                </p>
                <p className="font-serif-editorial text-xl mt-2 text-[#F3EDE4]">
                  Complimentary 20-minute diagnostic mapping with every ritual.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: SIGNATURE SERVICES & CATEGORIES */}
      <section className="py-24 lg:py-32 bg-[#171512] text-[#F3EDE4] border-y border-[#C7A77B]/25">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-16">
          <RevealOnScroll className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#F3EDE4]/15 pb-10">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-[#C7A77B]">
                02 · Curated Disciplines
              </p>
              <h2
                className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#F3EDE4]"
                style={{ textWrap: 'balance' }}
              >
                Five Pillars of Elevated Beauty Artistry
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#F3EDE4] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Explore All 22 Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#C7A77B]/45 text-[#F3EDE4] text-xs uppercase tracking-[0.18em] hover:border-[#C7A77B] hover:text-[#C7A77B] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Complete Price Menu</span>
              </Link>
            </div>
          </RevealOnScroll>

          {/* 5 Pillars Category Showcase */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {SERVICE_CATEGORIES.map((cat, idx) => (
              <StaggerItem key={cat.id} className="h-full">
                <Link
                  href={`/services?category=${encodeURIComponent(cat.id)}`}
                  className="group h-full border border-[#F3EDE4]/15 bg-[#171512] hover:border-[#C7A77B] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <LuxuryImage
                      src={cat.heroImage}
                      alt={cat.label}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171512] via-[#171512]/20 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs tracking-[0.2em] text-[#F3EDE4]/90 font-mono tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-5">
                    <div>
                      <h3 className="font-serif-editorial text-2xl text-[#F3EDE4] group-hover:text-[#C7A77B] transition-colors">
                        {cat.label}
                      </h3>
                      <p className="text-xs text-[#F3EDE4]/70 mt-2 leading-relaxed">
                        {cat.tagline}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F3EDE4]/10 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#C7A77B]">
                      <span>Discover Rituals</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Featured Individual Rituals Row */}
          <div className="pt-8 space-y-8">
            <RevealOnScroll className="flex items-center justify-between">
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F3EDE4]">
                Most Requested Signature Rituals
              </h3>
              <span className="text-xs uppercase tracking-[0.18em] text-[#C7A77B]">
                Demonstration Pricing
              </span>
            </RevealOnScroll>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.slice(0, 3).map((service) => (
                <StaggerItem
                  key={service.id}
                  className="border border-[#F3EDE4]/15 bg-[#F3EDE4]/[0.03] flex flex-col justify-between group hover:border-[#C7A77B]/60 transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="relative h-64 w-full overflow-hidden">
                      <LuxuryImage
                        src={service.image}
                        alt={service.name}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-7 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-[#C7A77B] uppercase tracking-[0.16em]">
                        <span>{service.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{service.durationLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">From ${service.startingPrice}</span>
                      </div>
                      <h4 className="font-serif-editorial text-2xl text-[#F3EDE4]">
                        {service.name}
                      </h4>
                      <p className="text-sm text-[#F3EDE4]/75 leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="px-7 pb-7 pt-3 flex items-center justify-between gap-4 border-t border-[#F3EDE4]/10">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs uppercase tracking-[0.18em] text-[#F3EDE4] hover:text-[#C7A77B] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={`/book?service=${service.id}`}
                      className="px-4 py-2 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#F3EDE4] transition-colors whitespace-nowrap"
                    >
                      Book Now
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* SECTION C: WHY ÉLORA */}
      <section className="py-24 lg:py-32 px-5 sm:px-8 max-w-[1360px] mx-auto">
        <RevealOnScroll className="max-w-3xl space-y-4 mb-16">
          <p className="text-xs uppercase tracking-[0.24em] text-[#171512]/70">
            03 · The ÉLORA Standard
          </p>
          <h2
            className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#171512]"
            style={{ textWrap: 'balance' }}
          >
            Why Discerning Women Entrust Their Beauty to Maison ÉLORA
          </h2>
          <GoldLineReveal />
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {WHY_ELORA_PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <StaggerItem
                key={pillar.number}
                className="border border-[#171512]/15 p-7 bg-[#F3EDE4] hover:border-[#C7A77B] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A77B] tabular-nums">
                    {pillar.number}
                  </span>
                  <IconComponent className="w-5 h-5 text-[#C7A77B]" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif-editorial text-2xl text-[#171512] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#171512]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* SECTION D: SIGNATURE EXPERIENCE (IMMERSIVE EDITORIAL) */}
      <section className="px-5 sm:px-8 max-w-[1360px] mx-auto pb-24 lg:pb-32">
        <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-12 border border-[#171512]/15 bg-[#171512] text-[#F3EDE4] overflow-hidden items-stretch">
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[540px] overflow-hidden group">
            <LuxuryImage
              src="/images/bridal-couture.jpg"
              alt="Haute Couture Bridal Suite & Cellular Sculpting Experience at ÉLORA"
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.24em] text-[#C7A77B]">
                04 · The Bridal & Private Suite Sanctuary
              </p>
              <h2
                className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#F3EDE4]"
                style={{ textWrap: 'balance' }}
              >
                An Unhurried Private Suite Reserved Exclusively Around You.
              </h2>
              <p className="text-sm sm:text-base text-[#F3EDE4]/80 leading-relaxed">
                Whether preparing for your wedding morning with our Haute Couture Bridal Atelier or retreating for a four-hour cellular skin and hair sanctuary, our private travertine suites offer complete tranquility, bespoke lighting calibration, and dedicated concierge service.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#F3EDE4]/15 text-xs text-[#F3EDE4]/80">
              <p>· Private acoustic suites with Kelvin daylight & candlelight mirrors</p>
              <p>· Complimentary organic herbal infusions & artisanal refreshments</p>
              <p>· Coordinated multi-specialist rituals for effortless time mastery</p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/book?category=Makeup"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F3EDE4] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Reserve Private Suite</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-4 border border-[#C7A77B]/50 text-[#F3EDE4] text-xs uppercase tracking-[0.18em] hover:border-[#C7A77B] hover:text-[#C7A77B] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Explore Bridal Packages</span>
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* SECTION E: FEATURED SPECIALISTS */}
      <section className="py-24 lg:py-32 bg-[#171512]/[0.04] border-t border-[#171512]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 space-y-14">
          <RevealOnScroll className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-[#171512]/70">
                05 · The Artisans
              </p>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#171512]">
                Meet Our Principal Specialists
              </h2>
            </div>
            <Link
              href="/experts"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#171512] border-b border-[#171512] pb-1 hover:text-[#C7A77B] hover:border-[#C7A77B] transition-colors whitespace-nowrap"
            >
              <span>View All 6 Master Specialists</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </RevealOnScroll>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSpecialists.map((person) => (
              <StaggerItem
                key={person.id}
                className="bg-[#F3EDE4] border border-[#171512]/15 hover:border-[#C7A77B] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-80 w-full overflow-hidden">
                    <LuxuryImage
                      src={person.image}
                      alt={`${person.name} — ${person.role}`}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-2.5">
                    <div className="text-xs text-[#171512]/65 uppercase tracking-[0.15em]">
                      <span>{person.specialtyCategory}</span>
                      <span aria-hidden="true"> · </span>
                      <span className="tabular-nums">{person.experienceYears} Yrs Exp</span>
                    </div>
                    <h3 className="font-serif-editorial text-2xl text-[#171512]">
                      {person.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#C7A77B] font-medium">
                      {person.role}
                    </p>
                    <p className="text-xs text-[#171512]/75 leading-relaxed pt-1">
                      {person.specialties.join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#171512]/10 flex items-center justify-between">
                  <Link
                    href={`/book?specialist=${person.id}`}
                    className="text-xs uppercase tracking-[0.16em] font-medium text-[#171512] hover:text-[#C7A77B] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Book with {person.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION F: LUXURY GALLERY PREVIEW */}
      <section className="py-24 lg:py-32 px-5 sm:px-8 max-w-[1360px] mx-auto space-y-14">
        <RevealOnScroll className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-[#171512]/70">
              06 · Visual Portfolio
            </p>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#171512]">
              Inside the Atelier & Portfolio
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171512] text-[#F3EDE4] text-xs uppercase tracking-[0.18em] hover:bg-[#C7A77B] hover:text-[#171512] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Enter Full Gallery & Lightbox</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </RevealOnScroll>

        {/* Asymmetric Editorial Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <StaggerItem className="md:col-span-7">
            <Link
              href="/gallery"
              className="block relative h-[380px] sm:h-[460px] group overflow-hidden border border-[#171512]/15"
            >
              <LuxuryImage
                src={galleryPreview[0].image}
                alt={galleryPreview[0].title}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171512]/85 via-transparent to-transparent flex items-end p-7">
                <div className="text-[#F3EDE4]">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#C7A77B]">
                    {galleryPreview[0].category}
                  </p>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl mt-1">
                    {galleryPreview[0].title}
                  </h3>
                </div>
              </div>
            </Link>
          </StaggerItem>

          <StaggerItem className="md:col-span-5">
            <Link
              href="/gallery"
              className="block relative h-[380px] sm:h-[460px] group overflow-hidden border border-[#171512]/15"
            >
              <LuxuryImage
                src={galleryPreview[1].image}
                alt={galleryPreview[1].title}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171512]/85 via-transparent to-transparent flex items-end p-7">
                <div className="text-[#F3EDE4]">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#C7A77B]">
                    {galleryPreview[1].category}
                  </p>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl mt-1">
                    {galleryPreview[1].title}
                  </h3>
                </div>
              </div>
            </Link>
          </StaggerItem>

          {galleryPreview.slice(2, 5).map((item) => (
            <StaggerItem key={item.id} className="md:col-span-4">
              <Link
                href="/gallery"
                className="block relative h-[320px] group overflow-hidden border border-[#171512]/15"
              >
                <LuxuryImage
                  src={item.image}
                  alt={item.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171512]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-[#F3EDE4]">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#C7A77B]">
                      {item.category}
                    </p>
                    <h3 className="font-serif-editorial text-2xl mt-1">{item.title}</h3>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* SECTION G: TESTIMONIALS */}
      <section className="py-20 lg:py-28 px-5 sm:px-8 max-w-[1360px] mx-auto">
        <RevealOnScroll>
          <TestimonialCarousel />
        </RevealOnScroll>
      </section>

      {/* SECTION H & I: INSTAGRAM / SOCIAL EDITORIAL DISPATCH */}
      <section className="py-20 px-5 sm:px-8 max-w-[1360px] mx-auto border-t border-[#171512]/15">
        <RevealOnScroll className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#171512]/65">
              07 · Social Journal & Daily Moments
            </p>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171512] mt-1">
              Follow @elora.atelier
            </h2>
          </div>
          <Link
            href="/journal"
            className="text-xs uppercase tracking-[0.18em] text-[#171512] hover:text-[#C7A77B] border-b border-[#C7A77B] pb-1 inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Read The ÉLORA Beauty Journal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              img: '/images/hero-atelier.jpg',
              caption: 'Morning light across our Roman travertine styling arches.',
              tag: 'Sanctuary',
            },
            {
              img: '/images/hair-artistry.jpg',
              caption: 'Hand-swept Riviera honey balayage & amino pearl gloss.',
              tag: 'Hair Couture',
            },
            {
              img: '/images/skin-ritual.jpg',
              caption: 'Preparing warm botanical elixirs for our 24K Cellular Facial.',
              tag: 'Skin Rituals',
            },
            {
              img: '/images/nail-spa.jpg',
              caption: 'Sheer travertine ivory and 24K champagne gold micro-French.',
              tag: 'Nail Artistry',
            },
          ].map((post, i) => (
            <StaggerItem key={i}>
              <Link
                href="/gallery"
                className="group block border border-[#171512]/15 bg-[#F3EDE4] hover:border-[#C7A77B] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <LuxuryImage
                    src={post.img}
                    alt={post.caption}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#C7A77B]">
                    {post.tag} · @elora.atelier
                  </p>
                  <p className="text-xs text-[#171512]/80 line-clamp-2">{post.caption}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
