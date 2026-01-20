"use client";

import Link from "next/link";
import WireframeBackground from "@/components/WireframeBackground";

export default function GuideEn() {
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
      <div className="min-h-screen px-8 pt-8 pb-4 md:px-16 md:pt-16 md:pb-8 max-w-4xl mx-auto flex flex-col gap-12 animate-in fade-in duration-700 relative z-10">
        <header className="flex justify-between items-center border-b border-white/20 pb-8">
          <h1 className="text-[1.5rem] md:text-[2.4rem] font-heading font-bold tracking-widest text-white">
            VR SHOOT AROUND
            <span className="block text-sm md:text-xl text-white mt-2 tracking-normal">USER'S GUIDE</span>
          </h1>
          <Link href="/vr-shoot-around" className="text-sm text-gray-500 hover:text-white transition-colors">
            [BACK TO PRODUCT]
          </Link>
        </header>

        <div className="space-y-16 pb-0">
          {/* BASIC OPERATION */}
          <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              BASIC OPERATION
            </h2>
            
            <div className="space-y-8">
              {/* HTC Vive */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10">
                <h3 className="text-lg text-white border-b border-white/10 pb-4 mb-6">HTC Vive</h3>
                <ul className="space-y-4 text-base text-gray-400">
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">Trigger</span>
                    <div>
                      <p>Click while using pointer</p>
                      <p>Grab a ball (Switchable on KeyConfig)</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">Grip</span>
                    <p>Receive a ball (Switchable on KeyConfig)</p>
                  </li>
                   <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">Menu Button</span>
                    <p>Open settings window</p>
                  </li>
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">Touchpad</span>
                    <div>
                      <p>Touch : Pointer</p>
                      <p>Press Up or Down : Move</p>
                      <p>Press Left or Right : Rotate</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Oculus */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10">
                <h3 className="text-lg text-white border-b border-white/10 pb-4 mb-6">Oculus Rift & Oculus Quest</h3>
                 <ul className="space-y-4 text-base text-gray-400">
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">Trigger</span>
                    <div>
                      <p>Click while using pointer</p>
                      <p>Grab a ball (Switchable on KeyConfig)</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">Grip</span>
                    <p>Receive a ball (Switchable on KeyConfig)</p>
                  </li>
                   <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">B or Y Button</span>
                    <p>Open settings window</p>
                  </li>
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">Thumbstick</span>
                    <div>
                      <p>Touch : Pointer</p>
                      <p>Tilt Up or Down : Move</p>
                      <p>Tilt Left or Right : Rotate</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Valve Index */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10">
                <h3 className="text-lg text-white border-b border-white/10 pb-4 mb-6">Valve Index</h3>
                 <ul className="space-y-4 text-base text-gray-400">
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">Trigger</span>
                    <div>
                      <p>Click while using pointer</p>
                      <p>Grab a ball (Switchable on KeyConfig)</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">Grip</span>
                    <p>Receive a ball (Switchable on KeyConfig)</p>
                  </li>
                   <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">B Button</span>
                    <p>Open settings window</p>
                  </li>
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">Thumbstick</span>
                    <div>
                      <p>Touch : Pointer</p>
                      <p>Tilt Up or Down : Move</p>
                      <p>Tilt Left or Right : Rotate</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              TIPS
            </h2>
            
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-8 text-sm text-gray-300">
              <div className="space-y-4">
                <h3 className="text-white text-base font-bold">Recommended settings</h3>
                <ul className="space-y-2 list-disc pl-4 text-gray-400">
                  <li><span className="text-white">[Vive Wand]</span> Analog button threshold : 0.5, Throwing power multiplier : 1.2</li>
                  <li><span className="text-white">[Oculus Touch]</span> Analog button threshold : 0.8, Throwing power multiplier : 1.2</li>
                  <li><span className="text-white">[Valve Index Controller]</span> Analog button threshold : 0.02, Throwing power multiplier : 1.0</li>
                </ul>
              </div>

               <div className="space-y-4">
                <h3 className="text-white text-base font-bold">About settings</h3>
                <p>The datas set in the &quot;Settings&quot; are saved in the following hierarchy.</p>
                <p>If you want to copy settings to another PC, please copy &quot;Settings.sav&quot; to the equivalent folder.</p>
                <div className="bg-black/30 p-4 rounded border border-white/5 break-all text-xs text-gray-500">
                  Program Files (x86) &gt; Steam &gt; steamapps &gt; common &gt; VR SHOOT AROUND &gt; VRShootAround_Data &gt; Settings.sav
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
