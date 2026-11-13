'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import LuxuryImage from '@/components/ui/LuxuryImage';
import { GALLERY_ITEMS, type GalleryCategory, type GalleryItem } from '@/lib/elora-data';

const GALLERY_CATEGORIES: ('All' | GalleryCategory)[] = [
  'All',
  'Salon Interiors',
  'Hair Transformations',
  'Makeup Looks',
  'Bridal Makeup',
  'Skincare Treatments',
  'Nail Art',
  'Beauty Details',
];

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems: GalleryItem[] =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  }, [filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="space-y-12">
      {/* Filter Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#171512]/15 pb-6">
        <div
          role="tablist"
          aria-label="Filter gallery by category"
          className="flex flex-wrap items-center gap-2"
        >
          {GALLERY_CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2.5 text-xs uppercase tracking-[0.16em] border transition-colors whitespace-nowrap shrink-0 ${
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

        <span className="text-xs uppercase tracking-[0.16em] text-[#171512]/60 tabular-nums">
          {filteredItems.length} Editorial Plates · Click Any Image to Enlarge
        </span>
      </div>

      {/* Asymmetric Editorial Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-[#171512]/15 bg-[#F3EDE4] overflow-hidden flex flex-col justify-between"
            >
              <button
                type="button"
                onClick={() => openLightbox(idx)}
                aria-label={`Open ${item.title} in full-screen lightbox`}
                className="relative w-full h-80 sm:h-96 overflow-hidden text-left block focus:outline-none"
              >
                <LuxuryImage
                  src={item.image}
                  alt={item.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#171512]/0 group-hover:bg-[#171512]/45 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 px-4 py-2 bg-[#171512] text-[#F3EDE4] border border-[#C7A77B] text-xs uppercase tracking-[0.18em]">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C7A77B]" />
                    <span>Inspect Plate</span>
                  </span>
                </div>
              </button>

              <div className="p-6 space-y-2 border-t border-[#171512]/10">
                <div className="flex items-center justify-between text-xs text-[#171512]/65 uppercase tracking-[0.15em]">
                  <span>{item.category}</span>
                  <span>{item.specialist}</span>
                </div>
                <h2 className="font-serif-editorial text-2xl text-[#171512]">{item.title}</h2>
                <p className="text-xs text-[#171512]/75 leading-relaxed">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Lightbox view of ${activeLightboxItem.title}`}
            className="fixed inset-0 z-50 bg-[#171512]/95 backdrop-blur-md text-[#F3EDE4] flex flex-col justify-between p-5 sm:p-10"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#F3EDE4]/15 pb-4">
              <div className="text-xs uppercase tracking-[0.2em] text-[#C7A77B] tabular-nums">
                Plate 0{lightboxIndex + 1} / 0{filteredItems.length} · {activeLightboxItem.category}
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#C7A77B]/40 text-xs uppercase tracking-[0.18em] text-[#F3EDE4] hover:bg-[#C7A77B] hover:text-[#171512] transition-colors"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Center Image & Navigation */}
            <div className="relative flex-grow my-6 flex items-center justify-center overflow-hidden">
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous image"
                className="absolute left-2 sm:left-6 z-20 w-12 h-12 bg-[#171512]/80 border border-[#C7A77B]/50 flex items-center justify-center text-[#F3EDE4] hover:bg-[#C7A77B] hover:text-[#171512] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="relative w-full max-w-4xl h-[55vh] sm:h-[65vh] border border-[#C7A77B]/30">
                <LuxuryImage
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  sizes="90vw"
                  className="object-contain bg-[#171512]"
                />
              </div>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next image"
                className="absolute right-2 sm:right-6 z-20 w-12 h-12 bg-[#171512]/80 border border-[#C7A77B]/50 flex items-center justify-center text-[#F3EDE4] hover:bg-[#C7A77B] hover:text-[#171512] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="border-t border-[#F3EDE4]/15 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif-editorial text-2xl text-[#F3EDE4]">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-xs text-[#F3EDE4]/75 mt-1">{activeLightboxItem.caption}</p>
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#C7A77B] shrink-0">
                Artistry: {activeLightboxItem.specialist}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
