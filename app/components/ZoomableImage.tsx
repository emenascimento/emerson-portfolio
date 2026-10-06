'use client';

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { IconX, IconMaximize } from '@tabler/icons-react';

interface ZoomableImageProps extends Omit<ImageProps, 'onClick'> {
  wrapperClassName?: string;
  figcaption?: string;
}

export function ZoomableImage({ wrapperClassName, figcaption, className, alt, ...props }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  return (
    <>
      <figure className={`w-full group cursor-zoom-in ${wrapperClassName || ''}`} onClick={() => setIsOpen(true)}>
        <div className="relative w-full h-full">
          <Image
            alt={alt || "Imagem do projeto"}
            className={`transition-all duration-300 group-hover:opacity-90 ${className || ''}`}
            {...props}
          />
          <div className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
            <IconMaximize size={24} stroke={1.5} />
          </div>
        </div>
        {figcaption && (
          <figcaption className="text-center text-sm font-medium text-zinc-500 mt-4 px-4">
            {figcaption}
          </figcaption>
        )}
      </figure>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors z-[101]"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            aria-label="Fechar visualização"
          >
            <IconX size={24} stroke={2} />
          </button>
          <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center">
            <Image
              alt={alt || "Imagem do projeto ampliada"}
              src={props.src}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
