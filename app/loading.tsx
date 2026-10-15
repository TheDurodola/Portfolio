import React from 'react';

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F5EFE1]">
      <div className="flex items-center gap-3 border-2 border-[#0A0A0A] bg-[#FAFAFA] px-6 py-4 shadow-none">
        <span className="h-3 w-3 animate-pulse bg-[#EF4444]" />
        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0A0A0A]">
          LOADING // VOICEBOX
        </span>
      </div>
    </div>
  );
}