"use client";

import Link from "next/link";
import WireframeBackground from "@/components/WireframeBackground";

export default function GuideJp() {
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
            <span className="block text-sm md:text-xl text-white mt-2 tracking-normal">ユーザーズガイド（日本語）</span>
          </h1>
          <Link href="/vr-shoot-around" className="text-sm text-gray-500 hover:text-white transition-colors">
            [BACK TO PRODUCT]
          </Link>
        </header>

        <div className="space-y-16 pb-0">
          {/* BASIC OPERATION */}
          <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              基本操作
            </h2>
            
            <div className="space-y-8">
              {/* HTC Vive */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10">
                <h3 className="text-lg text-white border-b border-white/10 pb-4 mb-6">HTC Vive</h3>
                <ul className="space-y-4 text-base text-gray-400">
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">トリガー</span>
                    <div>
                      <p>タッチ中の操作</p>
                      <p>ボールを掴む (キーコンフィグで切替可)</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">グリップ</span>
                    <p>ボールを受け取る (キーコンフィグで切替可)</p>
                  </li>
                   <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">メニューボタン</span>
                    <p>設定ウィンドウを開く</p>
                  </li>
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">タッチパッド</span>
                    <div>
                      <p>タッチ : ポインター</p>
                      <p>上下に押す : 移動</p>
                      <p>左右に押す : 回転</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Oculus */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10">
                <h3 className="text-lg text-white border-b border-white/10 pb-4 mb-6">Oculus Rift & Oculus Quest</h3>
                 <ul className="space-y-4 text-base text-gray-400">
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">トリガー</span>
                    <div>
                      <p>ポインター使用時のクリック</p>
                      <p>ボールを掴む (キーコンフィグで切替可)</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">グリップ</span>
                    <p>ボールを受け取る (キーコンフィグで切替可)</p>
                  </li>
                   <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">BまたはYボタン</span>
                    <p>設定ウィンドウを開く</p>
                  </li>
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">サムスティック</span>
                    <div>
                      <p>タッチ : ポインター</p>
                      <p>上下に倒す : 移動</p>
                      <p>左右に倒す : 回転</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Valve Index */}
              <div className="bg-black/50 p-8 rounded-xl border border-white/10">
                <h3 className="text-lg text-white border-b border-white/10 pb-4 mb-6">Valve Index</h3>
                 <ul className="space-y-4 text-base text-gray-400">
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">トリガー</span>
                    <div>
                      <p>ポインター使用時のクリック</p>
                      <p>ボールを掴む (キーコンフィグで切替可)</p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">グリップ</span>
                    <p>ボールを受け取る (キーコンフィグで切替可)</p>
                  </li>
                   <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">Bボタン</span>
                    <p>設定ウィンドウを開く</p>
                  </li>
                  <li className="grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <span className="text-white text-xs uppercase tracking-widest">サムスティック</span>
                    <div>
                      <p>タッチ : ポインター</p>
                      <p>上下に倒す : 移動</p>
                      <p>左右に倒す : 回転</p>
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
                <h3 className="text-white text-base font-bold">推奨設定</h3>
                <ul className="space-y-2 list-disc pl-4 text-gray-400">
                  <li><span className="text-white">[Vive Wand]</span> Analog button threshold : 0.5, Throwing power multiplier : 1.2</li>
                  <li><span className="text-white">[Oculus Touch]</span> Analog button threshold : 0.8, Throwing power multiplier : 1.2</li>
                  <li><span className="text-white">[Valve Index Controller]</span> Analog button threshold : 0.02, Throwing power multiplier : 1.0</li>
                </ul>
              </div>

               <div className="space-y-4">
                <h3 className="text-white text-base font-bold">設定について</h3>
                <p>&quot;Settings&quot;で設定されたデータは以下の階層に保存されます。</p>
                <p>別のPCに設定をコピーしたい場合は、&quot;Settings.sav&quot;を同等のフォルダにコピーしてください。</p>
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
