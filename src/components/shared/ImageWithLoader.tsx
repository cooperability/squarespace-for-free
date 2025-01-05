'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ImageWithLoader({
  src,
  alt,
  width,
  height,
  className = '',
}: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`duration-700 ease-in-out ${
          isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
        }`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
} 