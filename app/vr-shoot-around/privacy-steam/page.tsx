"use client";

import Link from "next/link";
import WireframeBackground from "@/components/WireframeBackground";

export default function PrivacyPolicySteam() {
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
            <span className="block text-sm md:text-xl text-white mt-2 tracking-normal">PRIVACY POLICY (STEAM)</span>
          </h1>
          <Link href="/vr-shoot-around" className="text-sm text-gray-500 hover:text-white transition-colors">
            [BACK TO PRODUCT]
          </Link>
        </header>

        <div className="space-y-16 pb-0">
          <section className="space-y-8">
            <div className="flex justify-between items-baseline border-l-4 border-cyan-400 pl-4">
               <h2 className="text-xl font-bold text-white">
                Privacy Policy
              </h2>
              <span className="text-sm text-gray-500 font-mono">Last updated: 2026/01/09</span>
            </div>
           
            <div className="space-y-12 text-sm text-gray-300 leading-relaxed">
              
              {/* Collection and Use of Information */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-4">
                <h3 className="text-lg text-white border-b border-white/10 pb-2 mb-4">Collection and Use of Information</h3>
                <p>
                  This app collects specific user data through the Steam Platform features to provide leaderboard functionality. Specifically, we collect and process the following data:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li><strong className="text-white">USER ID</strong>: To uniquely identify the user for score recording.</li>
                </ul>
                <p>
                  This data is used solely for the purpose of identifying users and displaying scores on the in-game Leaderboards. It is not shared with third parties or used for any other purposes.
                </p>
              </div>

              {/* Data Retention and Security */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-4">
                <h3 className="text-lg text-white border-b border-white/10 pb-2 mb-4">Data Retention and Security</h3>
                <p>
                  The collected data is processed securely and is only retained as long as necessary to maintain the leaderboard entries. We do not store this data on external servers for marketing or analysis purposes.
                </p>
              </div>

              {/* Changes to this Privacy Policy */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-4">
                <h3 className="text-lg text-white border-b border-white/10 pb-2 mb-4">Changes to this Privacy Policy</h3>
                <p>
                  This privacy policy is subject to change due to changes in application specifications or platform policies.
                </p>
              </div>

              {/* Contact Us */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-4">
                <h3 className="text-lg text-white border-b border-white/10 pb-2 mb-4">Contact Us</h3>
                <p>
                  If you have any questions about this privacy policy or wish to request data deletion, please contact us at:
                </p>
                <a href="mailto:boninbluedesign@gmail.com" className="text-white hover:text-cyan-400 transition-colors decoration-dotted underline underline-offset-4">
                  Email: boninbluedesign@gmail.com
                </a>
              </div>

            </div>
          </section>
        </div>
      </div>
    </>
  );
}
