"use client";

import React, { useState } from "react";
import CenteredHero from "@/components/CenteredHero"; 

export default function LandingSequence () {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  return (
    <div className="h-dvh w-full bg-black">
      {!isVideoFinished ? (
        /* Intro Video Phase */
        <video
          autoPlay
          muted
          playsInline
          onEnded={() => setIsVideoFinished(true)}
          className="h-full w-full object-cover transition-opacity duration-1000"
        >
          <source src="/intro-cinematic.mp4" type="video/mp4" />
        </video>
      ) : (
        /* Portfolio Home Page Phase */
        <div className="animate-in fade-in duration-1000">
          <CenteredHero />
        </div>
      )}
      
      {/* Optional: Skip Button */}
      {!isVideoFinished && (
        <button
          onClick={() => setIsVideoFinished(true)}
          className="absolute bottom-10 right-10 z-50 text-white/50 hover:text-white underline"
        >
          Skip Intro
        </button>
      )}
    </div>
  );
};

