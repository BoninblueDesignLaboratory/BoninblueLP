"use client";

import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
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
            VR MEDIA VIEWER
            <span className="block text-sm md:text-xl text-white mt-2 tracking-normal">ユーザーズガイド</span>
          </h1>
          <Link href="/vr-media-viewer" className="text-sm text-gray-500 hover:text-white transition-colors">
            [BACK TO PRODUCT]
          </Link>
        </header>

        <div className="space-y-16 pb-0">
          
          {/* Introduction */}
          <section className="space-y-4">


             <div className="flex flex-col md:flex-row gap-4 mt-8">
               <div className="flex-1">
                 <VideoPlayer 
                   videoId="2DKIW9M4hcs"
                   platform="youtube"
                   start={8}
                   poster="https://img.youtube.com/vi/2DKIW9M4hcs/maxresdefault.jpg"
                 />
               </div>
               <div className="flex-1">
                 <VideoPlayer 
                   videoId="2Eh_y-kMOEc"
                   platform="youtube"
                   poster="https://img.youtube.com/vi/2Eh_y-kMOEc/maxresdefault.jpg"
                 />
               </div>
             </div>
          </section>

          {/* OpenXR Activation */}
          <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              ご使用の前には必ず OpenXR ランタイムをアクティブにしてください
            </h2>
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
              <p>
                当アプリケーションは VR デバイスを動作させるために OpenXR を使用しております。ご使用の前には必ず SteamVR（HTC VIVE, Valve Index, Pico など）や Meta Quest Link（Oculus Quest, Meta Quest）、OpenXR Tools for Windows Mixed Reality（WindowsMR）といったデバイス管理アプリケーション内において「OpenXR ランタイムをアクティブにする」操作をおこなってください。上記三種のデバイス管理アプリケーションでのアクティブ方法の例を下記に挙げますが、それ以外のデバイスの場合はデバイスの説明書に OpenXR に関する記述があると思いますので、それぞれの説明に従ってください。
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-bold mb-1">SteamVR</h3>
                  <p className="text-gray-400 pl-4 border-l border-white/10">
                    ［SteamVR］&gt;［左上をクリック］&gt;［設定］&gt;［OpenXR］&gt;［STEAMVR を OPENXR ランタイムとして設定］
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Meta Quest Link</h3>
                  <p className="text-gray-400 pl-4 border-l border-white/10">
                    ［Meta Quest Link］&gt;［設定］&gt;［一般］&gt;［OpenXR ランタイム］&gt;［デフォルトにする］
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">WindowsMR</h3>
                  <p className="text-gray-400 pl-4 border-l border-white/10">
                    ［公式サイトから OpenXR Developer Tools for Windows Mixed Reality をインストール］&gt;［Mixed Reality］&gt;［インストールの状態］&gt;［アクティブなランタイムとして設定］
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BASIC OPERATION */}
           <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              基本操作
            </h2>
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-8 text-sm text-gray-300 leading-relaxed">
              
              <div>
                <h3 className="text-white font-bold text-base mb-2">ポインターを表示／非表示</h3>
                <p className="mb-2">トラックパッド（もしくはスティック）の中央を押し込み。</p>
                <p className="text-gray-400">
                  ポインターが表示中は視線ポインター（※）も同時に有効になります。<br/>
                  ※視線ポインター（青い点）は後述の引き寄せアクションの際の方向を決める基準点となります。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-2">ボタンをクリックする</h3>
                <p className="mb-2">ポインターをボタンに合わせてトリガーを押し込み。</p>
                <p className="text-gray-400">
                  ボタンではない場所でポインター＋トリガーを押し込むことでファイルブラウザやメディアスクリーンを掴むこともできます。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-2">引き寄せ（引き寄せアクション）</h3>
                <p className="text-gray-400">
                  ポインターをファイルブラウザやメディアスクリーンに合わせグリップを押し込み、コントローラーを前後に動かすことで引き寄せることができます。また、引き寄せる際の方向は視線ポインターの方向が基準となります。（視線に向かって引き寄せる、という感覚です）
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-2">平面移動（平面移動アクション）</h3>
                <p className="text-gray-400">
                  ポインターをファイルブラウザやメディアスクリーンに合わせグリップ＋トリガーを押し込むことで、ファイルブラウザやメディアスクリーンに対して上下左右に移動させることができます。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-2">ウィンドウの整列</h3>
                <p className="text-gray-400">
                  メニューボタン（VIVE Wand）、AもしくはX（その他のコントローラー）を押すことで表示中のファイルブラウザやメディアスクリーンを目の前に整列させることができます。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-2">リストのスクロール</h3>
                <p className="text-gray-400">
                  ファイルリストや設定画面のスクロールはトラックパッド（もしくはスティック）でおこないます。
                </p>
              </div>

            </div>
          </section>

           {/* FILE BROWSER */}
           <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              ファイルブラウザ
            </h2>
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
              <p>アプリケーションを起動し、向かって右側に現れるウィンドウがファイルブラウザです。</p>

              <div>
                <h3 className="text-white font-bold mb-1">ホーム</h3>
                <p className="text-gray-400">
                  ホーム画面ではショートカット、お気に入り、履歴の中から3件のリンクが表示されますのでクイックアクセスに便利です。ショートカット、お気に入りの画面では表示する3件をご自身で選択することもできます。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">ショートカット</h3>
                <p className="text-gray-400">
                  ショートカットにはWindowsOSで主に使われるフォルダがあらかじめ登録されていますので、初めてお使いになる場合はこちらから目的のファイルをお探しください。表示順の変更、ホームへの表示といった編集もおこなえます。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">お気に入り</h3>
                <p className="text-gray-400">
                  お気に入りにはフォルダ表示中に左上に表示される星マークをクリックすることでフォルダを登録することができます。表示順の変更、ホームへの表示、削除といった編集もおこなえます。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">履歴</h3>
                <p className="text-gray-400">
                  履歴には過去に表示されたフォルダが自動的に登録されていきますので、以前に開いたフォルダに再度アクセスしたい場合に便利です。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">設定</h3>
                <p className="text-gray-400">
                  設定ではアプリケーションを使用する上での細かい設定をおこなうことができます。<br/>
                  ヘッドセットモニター解像度は視界の鮮明さを調整する項目ですので1.2~1.4程度に設定することをお勧めします。（あまり高くしすぎますとコマ落ちの原因となります）<br/>
                  背景の光のエフェクト、ならびに背景のパーティクルはアプリケーションをお使いいただく上で直接影響のあるものではございませんので、もしPCのスペックが足りない場合はOFFにしていただいても問題ございません。<br/>
                  視線ポインター（ポインターを出している際に現れる青い点）は引き寄せアクションの際の方向を決める基準点となります。ご自分でお好みの位置に視線ポインターを調整していただくことで、引き寄せアクションをより直感的におこなうことができます。なお、表示をOFFにしても青い点が非表示になるだけで、基準点としては存在し続けます。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">ファイル一覧の表示方法の変更（詳細表示、サムネイル表示）</h3>
                <p className="text-gray-400">
                  ファイル一覧の表示方法を詳細表示（ファイルサイズ、最終更新日時が表示されます）とサムネイル表示（縮小画像が生成されます）とで切り替えることができます。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">表示順の変更</h3>
                <p className="text-gray-400">
                  ファイル一覧の表示順を連番順、名前順、サイズ順、更新日時順で切り替えることができます。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">ファイルリストにフォルダのショートカットを含める</h3>
                <p className="text-gray-400">
                  有効にすることでWindowsフォルダショートカットがファイルリストに含まれるようになります。
                </p>
              </div>
            </div>
          </section>

          {/* MEDIA SCREEN */}
            <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              メディアスクリーン
            </h2>
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
              <p>
                ファイルブラウザ上で画像、サウンド、動画などのファイルをクリックすると表示されるウィンドウがメディアスクリーンです。その下に表示されているボタングループはコントロールパネルです。
              </p>

              <div>
                <h3 className="text-white font-bold mb-1">コントロールパネルを閉じる</h3>
                <p className="text-gray-400">
                  コントロールパネルを非表示にすることができます。非表示中にもう一度表示させたい場合は、トラックパッド（もしくはスティック）の中央部分を押し込み、ポインターが再表示されるタイミングでコントロールパネルも同時に再表示されます。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">スクリーンカーブ（縦横）</h3>
                <p className="text-gray-400">
                  スクリーンカーブの値を変更することでメディアスクリーンを湾曲させることができます。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">アスペクト比</h3>
                <p className="text-gray-400">
                  スクリーンのアスペクト比（縦横の比率）を変更することができます。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">９０°回転</h3>
                <p className="text-gray-400">
                  メディアスクリーンを９０°単位で回転させることができます。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">引き寄せ（引き寄せアクション）</h3>
                <p className="text-gray-400">
                  コントローラーを前後に動かすことでメディアスクリーンを引き寄せることができます。また、引き寄せる際の方向は視線ポインターの方向が基準となります。
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">拡大縮小</h3>
                <p className="text-gray-400">
                   拡大縮小ボタンをドラッグし、向かって左側にポインターをずらすとメディアスクリーンの縮小、向かって右側にポインターをずらすとメディアスクリーンを拡大させることができます。
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">平面移動（平面移動アクション）</h3>
                <p className="text-gray-400">メディアスクリーンに対して上下左右に移動させることができます。</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">左右視野反転</h3>
                <p className="text-gray-400">立体視表示の際の左右の目に表示される視野を反転させます。</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">視差調整</h3>
                <p className="text-gray-400">立体視表示の際の左右の目に表示される画像の距離を調整できます。</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">スクリーンの複製</h3>
                <p className="text-gray-400">最大10スクリーンまでスクリーンを複製することができます。</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">スクリーンを閉じる</h3>
                <p className="text-gray-400">複製したスクリーンを閉じることができます。</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">次のファイルへ、前のファイルへ</h3>
                <p className="text-gray-400">次のファイル（前のファイル）に進みます。表示順をファイルブラウザに合わせたい場合は、先にファイルブラウザで表示順を変更し、その後に目的のファイルをクリックすることでメディアスクリーンでの表示順が更新されます。2Dスクリーンの両サイドにある各ボタンに視線ポインターを合わせることでもファイル間の移動が可能です。</p>
              </div>
              
               <div>
                <h3 className="text-white font-bold mb-1">立体視表示設定</h3>
                <p className="text-gray-400">左右に並んでいる立体視画像／動画を開いた場合はサイドバイサイドに、上下に並んでいる立体視画像／動画を開いた場合はトップアンドボトムに切り替えていただくことで立体視表示されます。</p>
              </div>
              
               <div>
                <h3 className="text-white font-bold mb-1">スクリーン設定</h3>
                <p className="text-gray-400">2Dの画像／動画ファイルを開いた場合は2Dスクリーン、180°や360°での表示を前提としたファイルを開いた場合はそれぞれのスクリーンに切り替えてください。</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">投影法</h3>
                <p className="text-gray-400">180°スクリーンを使用中に投影法（エクイレクタングラー状、もしくはフィッシュアイ状）を切り替えることができます。（360°スクリーンはエクイレクタングラー状にのみ対応しています）</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">スライドショー</h3>
                <p className="text-gray-400">同じ階層のファイルを指定時間（秒）でループ表示させます。0秒に設定することでスライドショーが無効になります。</p>
              </div>
              
               <div>
                <h3 className="text-white font-bold mb-1">シャッフル</h3>
                <p className="text-gray-400">同じ階層のファイルの順序をランダム化します。</p>
              </div>
              
               <div>
                <h3 className="text-white font-bold mb-1">モアレの軽減（MPO、GIFを除く画像ファイル表示中のみ）</h3>
                <p className="text-gray-400">漫画などで頻繁に使われるスクリーントーンをVR内で表示した場合、モアレ（ちらつき）が発生することがありますが、「モアレの軽減」を有効にすることでモアレを軽減できます。</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">アニメーション画像（GIF/WEBP）を再生/停止する</h3>
                <p className="text-gray-400">アニメーション画像ファイルを表示中、アニメーションを再生/停止することができます。</p>
              </div>
              
               <div>
                <h3 className="text-white font-bold mb-1">再生速度（動画を表示中のみ）</h3>
                <p className="text-gray-400">動画の再生速度を0.1倍～3.0倍の間で変更できます。</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">コマ送り（動画を表示中のみ）</h3>
                <p className="text-gray-400">動画をフレーム単位で進めたり戻したりできます。</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">10秒スキップ（動画を表示中のみ）</h3>
                <p className="text-gray-400">動画を10秒単位で進めたり巻き戻したりできます。</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">ループ（動画を表示中のみ）</h3>
                <p className="text-gray-400">同じファイルをループ、フォルダ内でループ、ループしない、を切り替えることができます。</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">範囲指定ループ（動画を表示中のみ）</h3>
                <p className="text-gray-400">開始位置と終了位置を指定することでその範囲内をループ再生します。なお、ループ範囲の最低時間は1秒となっております。（お使いのパソコンのスペックや動画のビットレートなどの関係によりスムースにループしない場合もございます）</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">字幕ファイルを有効にする（動画を表示中のみ）</h3>
                <p className="text-gray-400">表示中の動画ファイルに字幕ファイル（.srt）を適用させたい場合は、ファイルブラウザ上で字幕ファイル（.srt）をクリックしてください。字幕の表示／非表示を切り替えるには「字幕ファイルを有効にする」ボタンをクリックしてください。</p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">ビデオAPIを変更する（動画を表示中のみ）</h3>
                <p className="text-gray-400 mb-4">特定の動画が再生されない場合、ビデオAPIの変更を試してみてください。</p>
                <ul className="list-disc pl-5 text-gray-400 space-y-1">
                  <li><strong className="text-white">MediaFoundation：</strong> Windows10に標準搭載されている低負荷なビデオAPI</li>
                  <li><strong className="text-white">DirectShow：</strong> MediaFoundationの前身となるビデオAPI（立体音響には対応していません）<br />LAV Filtersなどのサードパーティデコーダーに対応しています（要別途インストール）</li>
                  <li className="list-none ml-0">LAV Filters : <a href="https://github.com/Nevcairiel/LAVFilters/releases" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 decoration-dotted underline underline-offset-4 break-all">https://github.com/Nevcairiel/LAVFilters/releases</a></li>
                  <li><strong className="text-white">LibVLC：</strong> VLCライブラリを用いた非常に柔軟なビデオAPI<br />比較的高負荷のため環境によってはフレームレートが低下する場合があります。</li>
                </ul>
              </div>
              
              <div>
                 <h3 className="text-white font-bold mb-1">立体音響（2Dスクリーン、ビデオAPI：MediaFoundationで動画を表示中のみ）</h3>
                <p className="text-gray-400">動画を再生中、スクリーンの方向から音声が流れます。（再生開始時、数秒間音声のミュート時間が発生する場合があります）</p>
              </div>
             
              <div>
                 <h3 className="text-white font-bold mb-1">AIツール</h3>
                <p className="text-gray-400 mb-4">実験機能としてAIの推論による画像処理機能（2D画像限定）です。AI推論は多くのメモリと計算を必要とし、基本GPUでの処理を試みますが、もしGPUが対応していない場合はCPUでの処理となり、画像処理にかなりの時間がかかることが予想されます。もしAIツールを利用したい場合は「設定」の「AIツールを有効にする」をONにしてください。</p>
		<ul className="list-disc pl-5 text-gray-400 space-y-1">
                  <li><strong className="text-white">深度推論：</strong> AIで元画像のシーンの深度を推論し、その推論データを元に左右の視差を反映させたサイドバイサイドの画像を生成します。基本的にGPUでの処理を試みますが、もし対応していないGPUをお使いの場合はCPUでの処理となり、かなりの処理時間が発生する場合がございます。</li>
                  <li><strong className="text-white">アップスケーラー：</strong> AIで解像度の小さな画像（512x512以内推奨）の高解像度化をおこないます。あくまで小さな画像を高解像度化（x4倍）するモデルですので、元々大きな解像度を変換した場合は画像が劣化する上にかなりの処理時間がかかります。基本的にGPUでの処理を試みますが、もし対応していないGPUをお使いの場合はCPUでの処理となり、かなりの処理時間が発生する場合がございます。画像内の文字が崩れてしまうのはAIモデルの仕様です。</li>
                  </ul>
              </div>
              
            </div>
          </section>

          {/* SUPPORTED MEDIA FORMATS */}
           <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              メディアフォーマットの対応
            </h2>
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-4 text-sm text-gray-300 leading-relaxed">
               <ul className="space-y-2">
                <li><strong className="text-white">【 画像 】</strong> JPG、PNG、BMP、GIF（※1）、WEBP（※1）、MPO（※2）、VRJPG (※3)</li>
                <li><strong className="text-white">【 動画（※4） 】</strong> MP4, MOV, AVI, MKV, WEBM, ASF, WMV, M4V, TS, M2TS, MTS, VOB, 3GP, OGV, DIVX</li>
                <li><strong className="text-white">【 音声 】</strong> MP3, WAV, AAC, FLAC, AC3, WMA, M4A, OGG, AIFF, OPUS</li>
                <li><strong className="text-white">【 字幕 】</strong> SRT（MediaFoundation、DirectShow使用時のみ）</li>
                <li><strong className="text-white">【 立体視 】</strong> サイドバイサイドもしくはトップアンドボトム（エクイレクタングラー状）</li>
              </ul>
              <div className="text-xs text-gray-500 mt-4 border-t border-white/10 pt-2 space-y-1">
                <p>※1：アニメーション対応</p>
                <p>※2：立体視写真フォーマット</p>
                <p>※3：Google VR180 フォーマット</p>
                <p>※4：動画ファイルのフォーマットは拡張子が同じでも変換方法の違いによって再生できたり再生できなかったりすることが多々あります。できる限り多くの動画を再生できるよう、最新の動画再生技術に注視しておりますが、リアルタイムで誕生する新しいフォーマットやとてもファイルサイズの大きな動画など、サポートしきれていないファイルは存在しますので何卒ご了承いただければ幸いです。なお、ファイル内に格納された字幕データには対応しておりません。字幕を表示させるにはSRTファイルをご利用ください。</p>
              </div>
            </div>
          </section>
          
           {/* Useful Tips */}
           <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              知っておくと便利なヒント
            </h2>
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-4 text-sm text-gray-300 leading-relaxed">
              <h3 className="text-white font-bold mb-2">ネットワークに接続されたネットワークドライブ（NAS）にアクセスしたい</h3>
              <p>
                ネットワークドライブ（NAS）はルーターに直接接続するタイプの外部記憶装置（HDD等）で、複数のPCから同時に画像や動画にアクセスしたり保存をしたりできるためとても便利です。VR MEDIA VIEWERからネットワークドライブにアクセスしたい場合は「ネットワークドライブの割り当て」を行うことで「ショートカット＞ドライブ」に表示されるようになります。ネットワークドライブの割り当ての方法は使用OSや機器のメーカーによって異なる場合がございますので、取扱説明書をお読みになるか下記の参考サイトをご参照ください。
              </p>
              <div className="mt-2">
                <p className="text-gray-400 mb-1">ネットワークドライブの割り当て（Microsoft公式サイト）：</p>
                <a href="https://support.microsoft.com/ja-jp/help/4026635/windows-map-a-network-drive" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 decoration-dotted underline underline-offset-4 break-all">
                  https://support.microsoft.com/ja-jp/help/4026635/windows-map-a-network-drive
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
