'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

interface LuxuryImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  sizes?: string;
}

export default function LuxuryImage({
  src,
  alt,
  fill = true,
  width,
  height,
  priority = false,
  className = 'object-cover',
  containerClassName = 'relative w-full h-full overflow-hidden bg-[#171512]/10',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: LuxuryImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`${containerClassName} flex flex-col items-center justify-center bg-[#171512] text-[#F3EDE4] p-6 border border-[#C7A77B]/30`}
        role="img"
        aria-label={alt}
      >
        <Sparkles className="w-6 h-6 text-[#C7A77B] mb-2 opacity-80" />
        <span className="font-serif-editorial text-sm tracking-widest uppercase text-[#C7A77B] text-center">
          ÉLORA ATELIER
        </span>
        <span className="text-xs text-[#F3EDE4]/70 mt-1 text-center max-w-xs">{alt}</span>
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          referrerPolicy="no-referrer"
          className={className}
          onError={() => setHasError(true)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width || 800}
          height={height || 600}
          priority={priority}
          sizes={sizes}
          referrerPolicy="no-referrer"
          className={className}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
