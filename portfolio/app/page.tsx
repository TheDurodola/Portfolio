import Image from "next/image";
import ConstructionSign from "@/public/construction.png";
import Tape from "@/public/tape.png";
import React from "react";

const CenteredHero: React.FC = () => {
  return (
    <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-black">
      {/* Background Layer */}
      <Image
        src={Tape}
        alt="Background Pattern"
        fill
        priority
        quality={90}
        className="object-fill object-center" // Changed object-fill to object-cover to prevent stretching
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Content Layer */}
      <main className="relative z-20 flex flex-col  -mt-20 items-center px-4 text-center text-white">
        
        {/* Container for the Construction Sign */}
        <div className="relative mb-6 h-48 w-48 md:h-64 md:w-64"> 
          <Image
            src={ConstructionSign}
            alt="Under Construction Sign"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 192px, 256px"
          />
        </div>

        <h1 className="max-w-md text-3xl font-bold md:text-5xl">
          Welcome to Bolaji's Portfolio
        </h1>
        
        <p className="mt-4 max-w-2xl text-lg font-medium tracking-wide opacity-90 md:text-xl">
          Currently under Construction
        </p>
      </main>
    </div>
  );
};

export default CenteredHero;