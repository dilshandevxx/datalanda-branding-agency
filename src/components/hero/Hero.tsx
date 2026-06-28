import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { LogoBanner } from './LogoBanner';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-white flex flex-col font-sans overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.35] mix-blend-luminosity"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop")' }} // Placeholder retro/tech image
        />
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-8 md:px-12 xl:px-16 2xl:px-24">
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
          <div className="text-2xl font-black italic tracking-tighter text-white">
            func.media
          </div>
          <div className="hidden md:block w-[1px] h-8 bg-white/20" />
          <p className="text-xs text-gray-300 max-w-[160px] leading-snug font-medium">
            Hyper-relevant marketing<br />for today's customers.
          </p>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition-colors">Work</a>
          <a href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors group">
            Expertise 
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors group">
            Explore 
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
          </a>
          <a href="#" className="flex items-center gap-1 text-white hover:text-gray-200 transition-colors">
            Get a Proposal 
            <ArrowUpRight className="w-4 h-4 text-[#F5B82A]" strokeWidth={2.5} />
          </a>
        </nav>
      </header>

      {/* Main Hero Content */}
      <main className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-12 xl:px-16 2xl:px-24 w-full">
        <div className="max-w-5xl space-y-8 md:space-y-10">
          
          {/* Forbes Quote Badge */}
          <div className="flex items-center gap-4">
            <span className="text-5xl md:text-6xl font-serif leading-none font-bold text-white mt-2">“</span>
            <div className="w-12 h-[2px] bg-[#F5B82A]" />
            <span className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-white">Forbes</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold leading-[1.05] tracking-tight text-white">
            A powerful player in the<br className="hidden lg:block" />
            digital marketing space<span className="text-[#F5B82A]">.</span>
          </h1>

          {/* Action / Reel Button */}
          <div className="pt-4 flex items-center gap-5 cursor-pointer group w-fit">
            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/60 group-hover:scale-105">
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-medium text-white mb-0.5">Watch the reel</span>
              <span className="text-[15px] font-bold text-[#F5B82A]">1:45</span>
            </div>
          </div>
        </div>

        {/* Floating Right Side Slider Dots */}
        <div className="hidden md:flex absolute right-6 md:right-12 xl:right-16 top-1/2 -translate-y-1/2 flex-col gap-3">
          <button className="w-2.5 h-2.5 bg-[#F5B82A]" aria-label="Active slide 1" />
          <button className="w-2.5 h-2.5 bg-white/30 hover:bg-white/70 transition-colors" aria-label="Slide 2" />
          <button className="w-2.5 h-2.5 bg-white/30 hover:bg-white/70 transition-colors" aria-label="Slide 3" />
        </div>
      </main>

      {/* Logos Ticker Section */}
      <LogoBanner />
    </section>
  );
}
