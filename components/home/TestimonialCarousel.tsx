'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/lib/elora-data';

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[index];

  return (
    <div className="relative border border-[#171512]/15 bg-[#F3EDE4] p-8 sm:p-12 lg:p-16">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-[#171512]/10 pb-6 mb-8">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#171512]/70">
          <Quote className="w-4 h-4 text-[#C7A77B]" />
          <span>Client Impressions</span>
          <span aria-hidden="true">·</span>
          <span>Demonstration Stories</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.18em] text-[#171512]/60 tabular-nums">
            0{index + 1} / 0{TESTIMONIALS_DATA.length}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 border border-[#171512]/25 flex items-center justify-center text-[#171512] hover:bg-[#171512] hover:text-[#F3EDE4] hover:border-[#171512] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 border border-[#171512]/25 flex items-center justify-center text-[#171512] hover:bg-[#171512] hover:text-[#F3EDE4] hover:border-[#171512] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-[240px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <blockquote className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl leading-snug text-[#171512] font-normal italic max-w-4xl">
              “{current.quote}”
            </blockquote>

            <div className="pt-4 border-t border-[#171512]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif-editorial text-xl font-medium text-[#171512]">
                  {current.clientName}
                </p>
                <p className="text-xs text-[#171512]/70 mt-0.5">
                  {current.clientRole} <span aria-hidden="true">·</span> Ritual:{' '}
                  <span className="text-[#171512] font-medium">{current.serviceName}</span> with{' '}
                  {current.specialistName}
                </p>
              </div>

              <div className="text-xs text-[#171512]/75 sm:text-right">
                <span className="uppercase tracking-[0.16em] text-[#C7A77B] block font-medium">
                  Documented Result
                </span>
                <span>{current.outcomeSummary}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator Bar */}
      <div className="mt-8 flex items-center gap-2">
        {TESTIMONIALS_DATA.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(idx)}
            aria-label={`View testimonial from ${item.clientName}`}
            className={`h-1 transition-all duration-300 ${
              idx === index ? 'w-12 bg-[#C7A77B]' : 'w-4 bg-[#171512]/20 hover:bg-[#171512]/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
