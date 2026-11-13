'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Subtle Champagne Gold Scroll Progress Hairline at Top of Viewport */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#C7A77B] origin-left z-[60] pointer-events-none"
      />

      {/* Route-Change Transition Curtain + Editorial Lift */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle top gold sweep on route change */}
          <motion.div
            key={`bar-${pathname}`}
            initial={{ scaleX: 0, opacity: 0.9 }}
            animate={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[60px] left-0 right-0 h-[1px] bg-[#C7A77B] origin-left z-50 pointer-events-none"
          />
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
