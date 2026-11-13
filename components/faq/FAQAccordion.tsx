'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS, type FAQItem } from '@/lib/elora-data';

const FAQ_CATEGORIES: ('All' | FAQItem['category'])[] = [
  'All',
  'Appointments',
  'Cancellations',
  'Services',
  'Payments',
  'Bridal Bookings',
  'Hygiene',
  'Consultation',
  'Product Recommendations',
];

export default function FAQAccordion() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | FAQItem['category']>('All');
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const filteredFaqs =
    selectedCategory === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-10">
      {/* Category Filter */}
      <div
        role="tablist"
        aria-label="Filter FAQs by topic"
        className="flex flex-wrap items-center gap-2 border-b border-[#171512]/15 pb-6"
      >
        {FAQ_CATEGORIES.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] border transition-colors whitespace-nowrap shrink-0 ${
                active
                  ? 'bg-[#171512] text-[#F3EDE4] border-[#171512] font-medium'
                  : 'bg-transparent text-[#171512]/75 border-[#171512]/20 hover:border-[#C7A77B] hover:text-[#171512]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Accordion Items */}
      <div className="divide-y divide-[#171512]/15 border-y border-[#171512]/15">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="py-5">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggleItem(faq.id)}
                className="w-full flex items-start justify-between gap-6 text-left py-2 group focus:outline-none"
              >
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#C7A77B] block font-medium">
                    {faq.category}
                  </span>
                  <h2 className="font-serif-editorial text-2xl sm:text-3xl text-[#171512] group-hover:text-[#C7A77B] transition-colors">
                    {faq.question}
                  </h2>
                </div>
                <span
                  className={`mt-2 w-9 h-9 border border-[#171512]/25 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#171512] text-[#F3EDE4]' : 'text-[#171512]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 pb-2 text-sm sm:text-base text-[#171512]/80 leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
