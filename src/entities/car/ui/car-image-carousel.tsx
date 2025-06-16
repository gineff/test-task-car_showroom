'use client';

import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface CarImageCarouselProps {
  images: string[];
  alt: string;
}

const MAX_VISIBLE_DOTS = 11;

export const CarImageCarousel = ({ images, alt }: CarImageCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageChange = (index: number) => {
    if (index !== current) {
      setIsLoading(true);
      setCurrent(index);
    }
  };

  // Вычисляем диапазон отображаемых точек
  const getVisibleDotIndexes = () => {
    if (images.length <= MAX_VISIBLE_DOTS) return images.map((_, i) => i);

    const half = Math.floor(MAX_VISIBLE_DOTS / 2);
    let start = current - half;
    let end = current + half;

    if (start < 0) {
      end += -start;
      start = 0;
    }

    if (end > images.length - 1) {
      start -= end - (images.length - 1);
      end = images.length - 1;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visibleDots = getVisibleDotIndexes();

  return (
    <div className='relative w-full h-48 bg-gray-100'>
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center z-10 bg-white/70'>
          <Loader2 className='w-6 h-6 text-gray-400 animate-spin' />
        </div>
      )}

      <Image
        src={images[current]}
        alt={alt}
        fill
        className='object-contain p-4 transition-opacity duration-300 ease-in-out'
        sizes='(max-width: 768px) 100vw, 33vw'
        onLoad={() => setIsLoading(false)}
      />

      {images.length > 1 && (
        <div className='absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1 z-20'>
          {visibleDots.map(index => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                index === current ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
