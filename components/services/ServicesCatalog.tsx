'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import LuxuryImage from '@/components/ui/LuxuryImage';
import {
  SERVICE_CATEGORIES,
  SERVICES_DATA,
  type ServiceCategory,
} from '@/lib/elora-data';

const ALL_CATEGORIES: ('All' | ServiceCategory)[] = [
  'All',
  'Hair',
  'Skin',
  'Makeup',
  'Nails',
  'Spa & Wellness',
];

export default function ServicesCatalog() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('category') as ServiceCategory | null;

  const [activeCategory, setActiveCategory] = useState<'All' | ServiceCategory>(() =>
    initialCat && ALL_CATEGORIES.includes(initialCat) ? initialCat : 'All'
  );

  const filteredServices =
    activeCategory === 'All'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const activeCategoryMeta = SERVICE_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="space-y-12">
      {/* Interactive Category Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#171512]/15 pb-6">
        <div
          role="tablist"
          aria-label="Filter services by category"
          className="flex flex-wrap items-center gap-2"
        >
          {ALL_CATEGORIES.map((category) => {
            const isSelected = activeCategory === category;
            const count =
              category === 'All'
                ? SERVICES_DATA.length
                : SERVICES_DATA.filter((s) => s.category === category).length;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-200 whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? 'bg-[#171512] text-[#F3EDE4] border-[#171512] font-medium'
                    : 'bg-transparent text-[#171512]/75 border-[#171512]/20 hover:border-[#C7A77B] hover:text-[#171512]'
                }`}
              >
                <span>{category}</span>
                <span className="ml-2 text-[11px] text-[#C7A77B] tabular-nums">({count})</span>
              </button>
            );
          })}
        </div>

        <p className="text-xs text-[#171512]/65 uppercase tracking-[0.16em] tabular-nums">
          Showing {filteredServices.length} Curated Rituals · Demo Pricing
        </p>
      </div>

      {/* Category Editorial Subheader */}
      <AnimatePresence mode="wait">
        {activeCategoryMeta && (
          <motion.div
            key={activeCategoryMeta.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 sm:p-8 bg-[#171512] text-[#F3EDE4] border border-[#C7A77B]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C7A77B]">
                {activeCategoryMeta.label}
              </p>
              <p className="font-serif-editorial text-2xl sm:text-3xl mt-1 text-[#F3EDE4]">
                {activeCategoryMeta.tagline}
              </p>
            </div>
            <Link
              href={`/book?category=${encodeURIComponent(activeCategoryMeta.id)}`}
              className="px-5 py-3 bg-[#C7A77B] text-[#171512] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#F3EDE4] transition-colors whitespace-nowrap shrink-0"
            >
              Book {activeCategoryMeta.id} Ritual
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services Grid with Scroll & Category Stagger */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.55,
                delay: (idx % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border border-[#171512]/15 bg-[#F3EDE4] hover:border-[#C7A77B] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <Link
                  href={`/services/${service.slug}`}
                  className="block relative h-64 w-full overflow-hidden"
                >
                  <LuxuryImage
                    src={service.image}
                    alt={service.name}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                <div className="p-7 space-y-3.5">
                  <div className="flex items-center justify-between text-xs text-[#171512]/70 uppercase tracking-[0.16em]">
                    <span>{service.category}</span>
                    <span className="inline-flex items-center gap-1.5 tabular-nums">
                      <Clock className="w-3.5 h-3.5 text-[#C7A77B]" />
                      {service.durationLabel}
                    </span>
                  </div>

                  <Link href={`/services/${service.slug}`} className="block">
                    <h2 className="font-serif-editorial text-2xl sm:text-[26px] text-[#171512] group-hover:text-[#C7A77B] transition-colors leading-snug">
                      {service.name}
                    </h2>
                  </Link>

                  <p className="text-sm text-[#171512]/75 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-4 border-t border-[#171512]/10 space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-[0.15em] text-[#171512]/60">
                    Starting Investment (Demo)
                  </span>
                  <span className="font-serif-editorial text-2xl font-medium text-[#171512] tabular-nums">
                    ${service.startingPrice}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 py-3 px-4 border border-[#171512]/30 text-xs uppercase tracking-[0.16em] text-[#171512] hover:border-[#171512] hover:bg-[#171512] hover:text-[#F3EDE4] transition-colors whitespace-nowrap"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/book?service=${service.id}`}
                    className="inline-flex items-center justify-center gap-1.5 py-3 px-4 bg-[#171512] text-[#F3EDE4] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#C7A77B] hover:text-[#171512] transition-colors whitespace-nowrap"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C7A77B]" />
                    <span>Book Now</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
