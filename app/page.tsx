"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import WireframeBackground from "@/components/WireframeBackground";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 p-4 md:p-8 relative overflow-hidden min-h-[calc(100vh-80px)]">
      <WireframeBackground />
      
      {/* Social Link (Top Right) */}
      <a 
        href="https://x.com/BoninblueDesign" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="absolute top-6 right-6 z-50 text-white/50 hover:text-white transition-colors duration-300"
        aria-label="Visit us on X"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* Content Container */}
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl z-10">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-52 md:w-72 opacity-90 hover:opacity-100 transition-opacity duration-500">
             <Logo />
          </div>
           <p className="text-[10px] md:text-xs text-cyan-700 tracking-[0.4em] font-heading uppercase text-center opacity-80">
            Unifying the Logic of Beauty and Technology
          </p>
        </div>

        {/* Minimal Navigation (Text Only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full px-8 md:px-0 max-w-3xl">
          
          {/* VR SHOOT AROUND */}
          {/* VR SHOOT AROUND */}
          <Link href="/vr-shoot-around" className="glass-panel relative group flex flex-col items-center gap-3 p-8 hover:border-white/50 transition-all duration-500">
             <div className="absolute bottom-3 right-3 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5 text-white">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
               </svg>
             </div>
             <h2 className="text-xl font-heading font-bold tracking-widest text-white group-hover:text-white transition-colors">
               VR SHOOT AROUND
             </h2>
             <div className="h-px w-8 bg-white/50 group-hover:w-full transition-all duration-500" />
             <p className="text-[10px] text-gray-400 font-sans tracking-[0.2em] uppercase mt-2">
               Realistic basketball simulator
             </p>
          </Link>

          {/* VR MEDIA VIEWER */}
           <Link href="/vr-media-viewer" className="glass-panel relative group flex flex-col items-center gap-3 p-8 hover:border-white/50 transition-all duration-500">
             <div className="absolute bottom-3 right-3 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5 text-white">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
               </svg>
             </div>
             <h2 className="text-xl font-heading font-bold tracking-widest text-white group-hover:text-white transition-colors">
               VR MEDIA VIEWER
             </h2>
             <div className="h-px w-8 bg-white/50 group-hover:w-full transition-all duration-500" />
             <p className="text-[10px] text-gray-400 font-sans tracking-[0.2em] uppercase mt-2 text-center leading-relaxed">
               Universal multimedia viewer
             </p>
          </Link>

        </div>

      </div>
    </main>
  );
}
