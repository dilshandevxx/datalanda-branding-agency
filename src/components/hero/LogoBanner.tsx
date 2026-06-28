import React from 'react';
import { brandLogos } from '@/data/logos';

export function LogoBanner() {
  return (
    <div className="relative z-10 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 mt-auto flex-shrink-0">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full divide-x divide-y md:divide-y-0 divide-white/10">
        
        {/* Placeholder rendering for logos matching the aesthetic */}
        <div className="h-24 md:h-28 flex items-center justify-center p-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <span className="font-bold text-xl tracking-tighter uppercase text-white">Business Insider</span>
        </div>
        
        <div className="h-24 md:h-28 flex items-center justify-center p-6 opacity-70 hover:opacity-100 transition-opacity duration-300 gap-2">
          {/* NBC colorful placeholder icon */}
          <div className="flex -space-x-1">
            <div className="w-3 h-4 rounded-full bg-yellow-500 transform -rotate-12" />
            <div className="w-3 h-5 rounded-full bg-red-500 z-10" />
            <div className="w-3 h-4 rounded-full bg-blue-500 transform rotate-12" />
          </div>
          <span className="font-bold text-2xl tracking-tighter text-white">NBC</span>
        </div>
        
        <div className="h-24 md:h-28 flex items-center justify-center p-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <span className="font-serif font-bold text-xl md:text-2xl tracking-tight text-white">Entrepreneur</span>
        </div>
        
        <div className="h-24 md:h-28 flex flex-col items-center justify-center p-4 opacity-70 hover:opacity-100 transition-opacity duration-300 text-center gap-1">
          <span className="font-bold text-[10px] leading-none text-white bg-red-600 px-2 py-1">THE GLOBE AND MAIL</span>
          <span className="text-[9px] uppercase tracking-wider text-white">Canada's Top Growing</span>
        </div>
        
        <div className="h-24 md:h-28 flex items-center justify-center p-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <span className="font-bold text-xl tracking-tighter italic text-white">FAST COMPANY</span>
        </div>
        
        <div className="h-24 md:h-28 flex items-center justify-center p-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
          <span className="font-bold text-xl md:text-2xl tracking-tighter text-white">Bloomberg</span>
        </div>

      </div>
    </div>
  );
}
