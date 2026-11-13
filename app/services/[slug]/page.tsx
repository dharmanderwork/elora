import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import LuxuryImage from '@/components/ui/LuxuryImage';
import {
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
  ImageMaskReveal,
} from '@/components/ui/MotionPrimitives';
import { SERVICES_DATA, SPECIALISTS_DATA, BRAND_INFO } from '@/lib/elora-data';

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) {
    return { title: 'Service Not Found' };
  }
  return {
    title: `${service.name} — ${service.category} Ritual`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES_DATA.filter(
    (s) => s.category === service.category && s.id !== service.id
  ).slice(0, 3);

  const categorySpecialists = SPECIALISTS_DATA.filter(
    (sp) => sp.specialtyCategory === service.category
  );

  return (
    <div className="bg-[#F3EDE4] text-[#171512]">
      {/* Service Banner */}
      <section className="relative bg-[#171512] text-[#F3EDE4] pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[#C7A77B]/30">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
          <div className="mb-8">
            <Link
              href={`/services?category=${encodeURIComponent(service.category)}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C7A77B] hover:text-[#F3EDE4] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to {service.category} Services</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <RevealOnScroll className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#C7A77B]">
                  <span>{service.category} Atelier</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{service.durationLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">Starting at ${service.startingPrice} (Demo)</span>
                </div>

                <h1
                  className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F3EDE4] leading-[1.08]"
                  style={{ textWrap: 'balance' }}
                >
                  {service.name}
                </h1>

                <p className="font-serif-editorial text-xl sm:text-2xl italic text-[#F3EDE4]/85">
                  {service.subtitle}
                </p>

                <p className="text-base text-[#F3EDE4]/80 leading-relaxed pt-2">
                  {service.fullDescription}
                </p>
              </div>

              {/* Contiguous Purchase / Reservation Module */}
              <div className="p-6 sm:p-8 border border-[#C7A77B]/40 bg-[#F3EDE4]/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif-editorial text-3xl sm:text-4xl text-[#C7A77B] tabular-nums">
                      ${service.startingPrice}
                    </span>
                    <span className="text-xs uppercase tracking-[0.16em] text-[#F3EDE4]/70">
                      / {service.durationLabel} Session
                    </span>
                  </div>
                  <p className="text-xs text-[#F3EDE4]/65">
                    Includes private diagnostic consultation & botanical refreshments
                  </p>
                </div>

                <Link
                  href={`/book?service=${service.id}`}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F3EDE4] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Service</span>
                </Link>
              </div>
            </RevealOnScroll>

            <ImageMaskReveal delay={0.12} className="lg:col-span-5 relative min-h-[380px] lg:h-full border border-[#C7A77B]/30">
              <LuxuryImage
                src={service.image}
                alt={service.name}
                priority
                className="object-cover"
              />
            </ImageMaskReveal>
          </div>
        </div>
      </section>

      {/* Benefits, What's Included & Before/After Transformation */}
      <section className="py-20 lg:py-28 px-5 sm:px-8 max-w-[1360px] mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Benefits */}
          <RevealOnScroll className="lg:col-span-6 border border-[#171512]/15 p-8 sm:p-10 bg-[#F3EDE4] space-y-6">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#C7A77B] font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Key Ritual Benefits</span>
            </div>
            <h2 className="font-serif-editorial text-3xl text-[#171512]">
              Why Guests Choose This Experience
            </h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#171512]/85">
                  <Check className="w-4 h-4 text-[#C7A77B] shrink-0 mt-1" />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          {/* What is Included */}
          <RevealOnScroll delay={0.12} className="lg:col-span-6 border border-[#171512]/15 p-8 sm:p-10 bg-[#171512] text-[#F3EDE4] space-y-6">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-[#C7A77B]">
              <Clock className="w-4 h-4" />
              <span>Step-by-Step Choreography</span>
            </div>
            <h2 className="font-serif-editorial text-3xl text-[#F3EDE4]">
              What Is Included in Your {service.durationLabel} Session
            </h2>
            <ol className="space-y-4">
              {service.included.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm text-[#F3EDE4]/85">
                  <span className="font-mono text-xs text-[#C7A77B] tabular-nums mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </RevealOnScroll>
        </div>

        {/* Before / After Transformation Showcase */}
        <RevealOnScroll className="border border-[#171512]/15 p-8 sm:p-12 bg-[#171512]/[0.03]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[#171512]/65">
                Clinical & Aesthetic Transformation
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171512]">
                Before & After Progression
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div className="p-5 bg-[#F3EDE4] border border-[#171512]/15 space-y-2">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#171512]/60">
                    Initial Presentation
                  </p>
                  <p className="text-sm text-[#171512]/85 leading-relaxed">
                    {service.transformationNote.beforeState}
                  </p>
                </div>

                <div className="p-5 bg-[#171512] text-[#F3EDE4] border border-[#C7A77B]/40 space-y-2">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#C7A77B]">
                    Post-Ritual Result
                  </p>
                  <p className="text-sm text-[#F3EDE4]/90 leading-relaxed">
                    {service.transformationNote.afterState}
                  </p>
                </div>

                <div className="p-5 bg-[#F3EDE4] border border-[#171512]/15 space-y-2">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#C7A77B] font-medium">
                    Expected Longevity
                  </p>
                  <p className="text-sm text-[#171512]/85 leading-relaxed">
                    {service.transformationNote.longevity}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="relative h-56 border border-[#171512]/15">
                  <LuxuryImage
                    src={service.secondaryImage}
                    alt={`${service.name} preparation`}
                    className="object-cover"
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#171512]/65">
                  01 · Diagnostic & Preparation
                </p>
              </div>
              <div className="space-y-2">
                <div className="relative h-56 border border-[#C7A77B]">
                  <LuxuryImage
                    src={service.image}
                    alt={`${service.name} finished result`}
                    className="object-cover"
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#171512]">
                  02 · Luminous Finish
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Service FAQs & Specialist Pairing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <RevealOnScroll className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#171512]/65">
              <HelpCircle className="w-4 h-4 text-[#C7A77B]" />
              <span>Service-Specific Questions</span>
            </div>
            <h2 className="font-serif-editorial text-3xl text-[#171512]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="p-6 border border-[#171512]/15 bg-[#F3EDE4] space-y-2">
                  <h3 className="font-serif-editorial text-xl font-medium text-[#171512]">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#171512]/75 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12} className="lg:col-span-5 border border-[#171512]/15 p-8 bg-[#F3EDE4] space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] font-medium">
              Recommended Artisans
            </p>
            <h3 className="font-serif-editorial text-2xl text-[#171512]">
              {service.category} Specialists
            </h3>
            <div className="space-y-4">
              {categorySpecialists.map((sp) => (
                <div
                  key={sp.id}
                  className="flex items-center justify-between gap-4 pb-4 border-b border-[#171512]/10"
                >
                  <div>
                    <p className="font-serif-editorial text-xl text-[#171512]">{sp.name}</p>
                    <p className="text-xs text-[#171512]/65">{sp.role}</p>
                  </div>
                  <Link
                    href={`/book?service=${service.id}&specialist=${sp.id}`}
                    className="px-4 py-2 bg-[#171512] text-[#F3EDE4] text-xs uppercase tracking-[0.14em] hover:bg-[#C7A77B] hover:text-[#171512] transition-colors whitespace-nowrap"
                  >
                    Reserve
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#171512]/60">{BRAND_INFO.demoNotice}</p>
          </RevealOnScroll>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="pt-12 border-t border-[#171512]/15 space-y-8">
            <RevealOnScroll className="flex items-center justify-between">
              <h2 className="font-serif-editorial text-3xl text-[#171512]">
                Complementary {service.category} Rituals
              </h2>
              <Link
                href="/services"
                className="text-xs uppercase tracking-[0.18em] text-[#171512] hover:text-[#C7A77B] inline-flex items-center gap-1.5"
              >
                <span>All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </RevealOnScroll>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((rel) => (
                <StaggerItem
                  key={rel.id}
                  className="border border-[#171512]/15 p-6 bg-[#F3EDE4] hover:border-[#C7A77B] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-2">
                    <div className="text-xs text-[#171512]/65 uppercase tracking-[0.15em]">
                      <span>{rel.durationLabel}</span>
                      <span aria-hidden="true"> · </span>
                      <span className="tabular-nums">From ${rel.startingPrice}</span>
                    </div>
                    <h3 className="font-serif-editorial text-2xl text-[#171512]">{rel.name}</h3>
                    <p className="text-xs text-[#171512]/75 leading-relaxed">
                      {rel.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#171512]/10">
                    <Link
                      href={`/services/${rel.slug}`}
                      className="text-xs uppercase tracking-[0.16em] text-[#171512] hover:text-[#C7A77B] inline-flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={`/book?service=${rel.id}`}
                      className="text-xs uppercase tracking-[0.16em] text-[#C7A77B] font-medium hover:underline"
                    >
                      Book Now
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}
      </section>
    </div>
  );
}
