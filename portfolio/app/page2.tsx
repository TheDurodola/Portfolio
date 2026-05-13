import Image from 'next/image';
import React from 'react';

// Using a standard functional component with React.FC or inferred types
const CenteredHero: React.FC = () => {
  return (
    /* 
       Parent Container: 
       relative: Necessary for the 'fill' image boundary.
       h-dvh: Dynamic Viewport Height (handles mobile address bars).
       flex/items-center/justify-center: Standard Flexbox centering.
    */
    <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden">
      
      {/* 
          Background Layer:
          fill: Next.js specific prop for absolute positioning.
          priority: Essential for LCP optimization on a single page.
          object-cover: Tailwind class for object-fit: cover.
      */}
      <Image
        src="/background.jpg"
        alt="Background Image"
        fill
        priority
        quality={90}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* 
          Overlay: 
          Optional but recommended for text contrast.
      */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 
          Content Layer:
          z-20: Ensure content stays above the image and overlay.
          text-center: Horizontal text alignment.
      */}
      <main className="relative z-20 px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          System Architecture
        </h1>
        <p className="mx-auto max-w-2xl text-lg opacity-90 md:text-xl">
          A high-integrity, centered layout using Next.js Image optimization 
          and Tailwind CSS utility classes.
        </p>
      </main>
    </div>
  );
};

export default CenteredHero;