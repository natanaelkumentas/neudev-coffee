'use client';

import { useState } from 'react';

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
};

export function ImageWithFallback({
  src,
  alt,
  fallback = '/images/fallback.jpeg',
  className,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallback)}
    />
  );
}
