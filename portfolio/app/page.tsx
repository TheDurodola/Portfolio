import Image from "next/image";
import ConstructionSign from "@/public/construction.png";
import Tape from "@/public/tape.png";
import React from "react";

// Using a standard functional component with React.FC or inferred types
const CenteredHero: React.FC = () => {
  return (
    <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden">
      <Image
        src={Tape}
        alt="Background Image"
        fill
        priority
        quality={90}
        className="object-fill object-center"
        sizes="100vw"
      />

    
      <div className="absolute inset-0 bg-black/40 z-10" />

    
      <main className="relative z-20 px-4 text-center text-white">
        <div className="relative h-50 w-full md:h-96">
          <Image
            src={ConstructionSign}
            fill
            alt="Hero"
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Welcome to Bolaji's Portfolio
        </h1>
        <p className="mx-auto max-w-2xl text-lg opacity-90 md:text-xl">
          Currently under Construction
        </p>
      </main>
    </div>
  );
};

export default CenteredHero;
