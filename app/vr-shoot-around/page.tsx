import Link from "next/link";
import Image from "next/image";
import WireframeBackground from "@/components/WireframeBackground";
import VideoPlayer from "@/components/VideoPlayer";

export default function VRShootAround() {
  return (
    <>
      <WireframeBackground />
      <a 
        href="https://x.com/BoninblueDesign" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed top-6 right-6 z-50 text-white/50 hover:text-white transition-colors duration-300"
        aria-label="Visit us on X"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <div className="min-h-screen px-8 pt-8 pb-4 md:px-16 md:pt-16 md:pb-8 max-w-5xl mx-auto flex flex-col gap-12 animate-in fade-in duration-700 relative z-10">
      <header className="flex justify-between items-center border-b border-white/20 pb-8">
        <h1 className="text-[1.5rem] md:text-[2.4rem] font-heading font-bold tracking-widest text-white">
          VR SHOOT AROUND
        </h1>
        <Link href="/" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
          [BACK TO HOME]
        </Link>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
            Realistic Basketball Simulator
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Experience the ultimate physics-based basketball simulation in VR. "VR SHOOT AROUND" is a simulator that provides fantastic physical calculations, immersive sounds, and a rich virtual court. You can practice shooting with realistic physics, play local video files on the court screen, and compete on global leaderboards. Don't worry if you aren't a sharpshooter—features like "Throwing Power Assist" and "G.O.A.T. Assist" allow anyone to sink long shots like an NBA player. Let's release your frustration!
          </p>
          
          <div className="flex flex-col gap-4 pt-4">
             <a 
              href="https://store.steampowered.com/app/671740/VR_SHOOT_AROUND__Realistic_basketball_simulator/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-panel p-4 flex items-center justify-between hover:border-white/50 text-white group"
            >
              <span>STEAM</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5 text-white opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a 
              href="https://www.meta.com/ja-jp/experiences/pcvr/vr-shoot-around-realistic-basketball-simulator/5148985741810509/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-panel p-4 flex items-center justify-between hover:border-white/50 text-white group"
            >
              <span>META STORE</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5 text-white opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-8 pb-0">
           <VideoPlayer 
             videoId="V7LWqLW2z4w"
             platform="youtube"
             poster="/movies/vrsa_cover_en.png"
           />

           <div className="bg-black/50 p-6 rounded-xl border border-white/10">
             <Link href="/vr-shoot-around/guide-en" className="hover:text-cyan-400 decoration-dotted underline underline-offset-4 text-sm text-gray-300">
               USER'S GUIDE (ENGLISH)
             </Link>
             <div className="mt-4">
              <Link href="/vr-shoot-around/guide-jp" className="hover:text-cyan-400 decoration-dotted underline underline-offset-4 text-sm text-gray-300">
                 ユーザーズガイド (日本語)
               </Link>
             </div>
           </div>
           
           <div className="bg-black/50 p-6 rounded-xl border border-white/10">
              <h3 className="text-lg text-white mb-4">Privacy Policy</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                "Collects USER_ID and USER_PROFILE for leaderboard functionality only. Data is not shared with third parties."
              </p>
              <div className="mt-4">
                <Link href="/vr-shoot-around/privacy-steam" className="text-xs text-gray-300 hover:text-cyan-400 decoration-dotted underline underline-offset-4 block mb-2">
                  VIEW FULL POLICY (STEAM)
                </Link>
                <Link href="/vr-shoot-around/privacy" className="text-xs text-gray-300 hover:text-cyan-400 decoration-dotted underline underline-offset-4">
                  VIEW FULL POLICY (META STORE)
                </Link>
              </div>
           </div>
        </div>
      </section>
      </div>
    </>
  );
}
