"use client";

import Link from "next/link";
import WireframeBackground from "@/components/WireframeBackground";

export default function PrivacyPolicy() {
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
            VR MEDIA VIEWER
            <span className="block text-sm md:text-xl text-white mt-2 tracking-normal">PRIVACY POLICY</span>
          </h1>
          <Link href="/vr-media-viewer" className="text-sm text-gray-500 hover:text-white transition-colors">
            [BACK TO PRODUCT]
          </Link>
        </header>

        <div className="space-y-16 pb-0">
          <section className="space-y-8">
            <div className="flex justify-between items-baseline border-l-4 border-cyan-400 pl-4">
               <h2 className="text-xl font-bold text-white">
                Privacy Policy
              </h2>
              <span className="text-sm text-gray-500 font-mono">Last updated: 2023/03/01</span>
            </div>
           
            <div className="space-y-12 text-sm text-gray-300 leading-relaxed">
              
              {/* Information collection and use */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-4">
                <h3 className="text-lg text-white border-b border-white/10 pb-2 mb-4">Information collection and use</h3>
                <p>
                  This application <strong>does not collect</strong> any personal information.
                  There is no function to leak information to the outside.
                </p>
              </div>

               {/* Security */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-4">
                <h3 className="text-lg text-white border-b border-white/10 pb-2 mb-4">Security</h3>
                <p>
                  Currently, the application lacks functions to collect personal information, ensuring safe use. Users will be notified in advance if such functions are added.
                </p>
              </div>


              {/* Changes to this Privacy Policy */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-4">
                <h3 className="text-lg text-white border-b border-white/10 pb-2 mb-4">Changes to this Privacy Policy</h3>
                <p>
                  This privacy policy is subject to change without notice to comply with laws and regulations.
                </p>
              </div>

              {/* Contact Us */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-4">
                <h3 className="text-lg text-white border-b border-white/10 pb-2 mb-4">Contact Us</h3>
                <p>
                  If you have any questions about this privacy policy, please contact us at:
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
