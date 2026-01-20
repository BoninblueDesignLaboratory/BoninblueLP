"use client";

import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
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
            VR MEDIA VIEWER
            <span className="block text-sm md:text-xl text-white mt-2 tracking-normal">USER&apos;S GUIDE</span>
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
                   videoId="WzFEkAVsBOM"
                   platform="youtube"
                   start={8}
                   poster="https://img.youtube.com/vi/WzFEkAVsBOM/maxresdefault.jpg"
                 />
               </div>
               <div className="flex-1">
                 <VideoPlayer 
                   videoId="l53NzLCxwTY"
                   platform="youtube"
                   poster="https://img.youtube.com/vi/l53NzLCxwTY/maxresdefault.jpg"
                 />
               </div>
             </div>
          </section>

          {/* OpenXR Activation */}
          <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              Please make sure to activate the OpenXR runtime before use
            </h2>
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
              <p>
                This application uses OpenXR to operate VR devices. Before use, please make sure to activate the OpenXR Runtime within your device management application, such as SteamVR (HTC VIVE, Valve Index, Pico, etc.), Meta Quest Link (Oculus Quest, Meta Quest), or OpenXR Tools for Windows Mixed Reality (WindowsMR). Examples of how to activate the OpenXR Runtime are provided below for the three applications mentioned above. For other devices, please refer to the device&apos;s manual, where you should find instructions related to OpenXR, and follow the guidance provided there.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-bold mb-1">SteamVR</h3>
                  <p className="text-gray-400 pl-4 border-l border-white/10">
                    [SteamVR] &gt; [Click upper left] &gt; [Settings] &gt; [OpenXR] &gt; [SET STEAMVR AS OPENXR RUNTIME]
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Meta Quest Link</h3>
                  <p className="text-gray-400 pl-4 border-l border-white/10">
                    [Meta Quest Link] &gt; [Settings] &gt; [General] &gt; [OpenXR Runtime] &gt; [Set as active]
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">WindowsMR</h3>
                  <p className="text-gray-400 pl-4 border-l border-white/10">
                    [Launch &quot;OpenXR Developer Tools for Windows Mixed Reality&quot; from the official site] &gt; [Mixed Reality] &gt; [Installation status] &gt; [Set as active runtime]
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BASIC OPERATION */}
           <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              BASIC OPERATION
            </h2>
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-8 text-sm text-gray-300 leading-relaxed">
              
              <div>
                <h3 className="text-white font-bold text-base mb-2">Pointer ON / OFF</h3>
                <p className="mb-2">Trackpad（or Thumbstick）center press.</p>
                <p className="text-gray-400">
                  While the pointer is displayed, the gaze pointer is enabled at the same time. The gaze pointer (blue dot) is a reference point that determines the direction for the pulling action described later.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-2">Button click</h3>
                <p className="mb-2">Place the pointer on the button and press the Trigger.</p>
                <p className="text-gray-400">
                  You can also grab the file browser and media screen by pressing the Pointer + Trigger where it is not a button.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-2">Pulling (Pulling action)</h3>
                <p className="text-gray-400">
                  Place the pointer on the file browser or media screen. You can then pull those objects by pressing the Grip and moving the controller back and forth. The direction of the gaze pointer is the reference when pulling.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-2">Sliding (Sliding action)</h3>
                <p className="text-gray-400">
                  Place the pointer on the file browser or media screen. And pressing the Grip + Trigger, you can move those objects up, down, left and right.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-2">Aligning</h3>
                <p className="text-gray-400">
                  By pressing the Menu button (VIVE Wand), A or X (Other), you can align the displayed file browser and media screen in front of you.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-base mb-2">Scrolling</h3>
                <p className="text-gray-400">
                  Use the trackpad (or stick) to scroll through the file list and setting screen.
                </p>
              </div>

            </div>
          </section>

           {/* FILE BROWSER */}
           <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              FILE BROWSER
            </h2>
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
              <p>The file browser is the window that appears on the right side when you start the application.</p>

              <div>
                <h3 className="text-white font-bold mb-1">Home</h3>
                <p className="text-gray-400">
                  The home displays 3 links from shortcuts, favorites, and history, which is convenient for quick access.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Shortcuts</h3>
                <p className="text-gray-400">
                  The shortcuts are pre-registered with folders used mainly by Windows OS. If you are using them for the first time, please search for the target file here. Editing such as changing the display order and displaying on the home can be performed.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Favorites</h3>
                <p className="text-gray-400">
                  For favorites, you can register a folder by clicking the star mark displayed in the upper left of the folder display. Editing such as changing the display order, displaying to home, and deleting can be performed.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">History</h3>
                <p className="text-gray-400">
                  In the history, the folder displayed in the past is automatically registered, so it is convenient when you want to access the folder you opened before. You can also remove it.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Settings</h3>
                <p className="text-gray-400">
                  In the settings, you can make detailed settings for using the application.<br/>
                  “Headset monitor resolution” is an item that adjusts the sharpness of the field of view, so it is recommended to set it about 1.2~1.4. (If it is too high, the frame rate may be reduced)<br/>
                  “Background light effect” and “Background particle effect” do not directly affect the use of the application, so please turn them off if the PC specifications are not enough.<br/>
                  The gaze pointer (blue dot) is the reference point that determines the direction of the pulling action. You can make the pulling action more intuitive by adjusting the eye pointer to your preferred position. When the "Display gaze pointer" is turned off, the blue dot disappears, but it continues to exist as a reference point.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Changing the display type of file list</h3>
                <p className="text-gray-400">
                  You can switch the display type of file list between detailed (file size and the date of the last update are displayed) and thumbnail (a reduced image is generated).
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Sort type</h3>
                <p className="text-gray-400">
                  You can switch the sort type by number, name, size, or update date time.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Include folder shortcuts in file list</h3>
                <p className="text-gray-400">
                  When enabled, Windows folder shortcuts will be included in the file list.
                </p>
              </div>
            </div>
          </section>

          {/* MEDIA SCREEN */}
            <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              MEDIA SCREEN
            </h2>
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-6 text-sm text-gray-300 leading-relaxed">
              <p>
                The media screen is the window that appears when you click an image, sound, video, or other file on the file browser. The button group displayed below is the control panel.
              </p>

              <div>
                <h3 className="text-white font-bold mb-1">Hide control panel</h3>
                <p className="text-gray-400">
                  You can hide the control panel. If you want to redisplay, press the center of the Trackpad (or Thumbstick) and the control panel will be redisplayed at the same time when the pointer is redisplayed.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Curved screen (Vertical and horizontal)</h3>
                <p className="text-gray-400">
                  Media screen can be curved by changing the value of the “Curved screen”.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">90 °rotation</h3>
                <p className="text-gray-400">
                  The media screen can be rotated in 90 °increments.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Aspect ratio</h3>
                <p className="text-gray-400">
                  You can change the screen aspect ratio (width : height ratio).
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Pulling (Pulling action)</h3>
                <p className="text-gray-400">
                  You can pull the media screen by moving the controller back and forth.<br/>
                  The direction of the gaze pointer is the reference when pulling.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Resize</h3>
                <p className="text-gray-400">
                  Drag the resize button and move the pointer to the left to reduce the media screen.<br/>
                  Move the pointer to the right to enlarge the media screen.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">Sliding (Sliding action)</h3>
                <p className="text-gray-400">Can move up, down, left and right with respect to the media screen.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Swapping of left and right views</h3>
                <p className="text-gray-400">You can swap the field of view of the left and right eyes.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Parallax adjustment</h3>
                <p className="text-gray-400">You can adjust the distance of the image displayed on the left and right eyes.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Duplicate screen</h3>
                <p className="text-gray-400">You can duplicate screens up to 10 screens.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Close screen</h3>
                <p className="text-gray-400">You can close the duplicated screen.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Next file, Previous file</h3>
                <p className="text-gray-400">Go to the next (previous) file. If you want to match the display order to the file browser, first change the display order in the file browser, then click on the desired file, the display order on the media screen will be update. You can also move between files by focusing the gaze pointer on each button on both sides of the 2D screen.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Stereoscopic settings</h3>
                <p className="text-gray-400">By switching this mode according to the shape of the media (side-by-side or top-and-bottom), stereoscopic display is possible.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Screen settings</h3>
                <p className="text-gray-400">Switch this mode according to the media shape (2D, 180 degree, or 360 degree medias).</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Projection</h3>
                <p className="text-gray-400">You can switch between projections (equirectangular or fisheye) when using a 180 degree screen. (360 degree screen are only compatible with equirectangular)</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Slide show</h3>
                <p className="text-gray-400">Loop the files in the same layer at the specified time (sec).<br/>Setting it to 0 (sec) disables the slide show.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Slide show (Shuffle)</h3>
                <p className="text-gray-400">Randomize the order of files in the same directory.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Moire reduction (only when image file is displayed, except MPO and GIF)</h3>
                <p className="text-gray-400">When screen tones used in comics are displayed in VR, moire (flickering) may occur.<br/>However, you can reduce moire by enabling "Moire reduction".</p>
              </div>
              
               <div>
                <h3 className="text-white font-bold mb-1">Play/Stop animated images (GIF/WEBP)</h3>
                <p className="text-gray-400">You can play/stop the animation while displaying the animation image file.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Playback speed (only while displaying movie)</h3>
                <p className="text-gray-400">You can change the movie playback speed between x0.1 and x3.0.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Frame skip (only while displaying movie)</h3>
                <p className="text-gray-400">You can advance or rewind the movie frame by frame.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">10sec skip (only while displaying movie)</h3>
                <p className="text-gray-400">You can advance or rewind the movie in 10 second increments.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Loop (only while displaying movie)</h3>
                <p className="text-gray-400">You can switch between looping the same file, looping within a folder, and not looping.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Range specification loop (only while displaying movie)</h3>
                <p className="text-gray-400">By specifying the start position and end position, loop playback within that range. In addition, the minimum time of the loop range is 1 second. (Depending on the specifications of your PC and the bit rate of the video, it may not loop smoothly)</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Enable subtitle (only while displaying movie)</h3>
                <p className="text-gray-400">To apply a subtitle file (.srt) to the currently displayed video file, click the subtitle file (.srt) on the file browser. Click the “Enable subtitle file” button to show / hide subtitles.</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">Change video API (only while displaying movie)</h3>
                <p className="text-gray-400 text-sm mb-4">If a particular movie file doesn't play, try changing the video API.</p>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li><strong className="text-white">MediaFoundation：</strong> A low-load video API that comes standard with Windows 10.</li>
                   <li><strong className="text-white">DirectShow：</strong> MediaFoundation's predecessor video API (3D sound is not supported),<br/>DirectShow supports third-party decoders such as LAV Filters (requires separate installation)</li>
                  <li className="list-none ml-0">LAV Filters : <a href="https://github.com/Nevcairiel/LAVFilters/releases" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 decoration-dotted underline underline-offset-4 break-all">https://github.com/Nevcairiel/LAVFilters/releases</a></li>
                   <li><strong className="text-white">LibVLC：</strong> Extremely flexible video API using VLC library<br />Due to the relatively high-load, the frame rate may decrease depending on the environment.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-1">3D Sound (only when displaying video with MediaFoundation, and 2D screen)</h3>
                <p className="text-gray-400">the audio is play from the direction of the screen<br/>(the audio will be muted for a few seconds at the start of play)</p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-1">AI Tools</h3>
                <p className="text-gray-400 mb-4">This is an experimental image processing feature using AI inference (limited to 2D images). AI inference requires significant memory and computational power. It primarily attempts to process using the GPU, but if the GPU is not supported, it will fallback to CPU processing, which is expected to take a considerable amount of time. If you wish to use the AI tools, please turn ON "Enable AI tool" in "Settings".</p>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li><strong className="text-white">Depth Inference：</strong> AI infers the scene depth from the original image and generates a side-by-side stereoscopic image based on this data. It primarily attempts to process using the GPU, but if you are using an unsupported GPU, it will process using the CPU, which may result in significant processing time.</li>
                  <li><strong className="text-white">Upscaler：</strong> Increases the resolution of small images (recommended within 512x512) using AI. This model is designed specifically for upscaling small images (4x). If you convert an image that already has a high resolution, the quality may degrade and processing will take a considerable amount of time. It primarily attempts to process using the GPU, but if you are using an unsupported GPU, it will process using the CPU, which may result in significant processing time. Text distortion within images is a known specification of the AI model.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* SUPPORTED MEDIA FORMATS */}
           <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              SUPPORTED MEDIA FORMATS
            </h2>
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-4 text-sm text-gray-300 leading-relaxed">
               <ul className="space-y-2">
                <li><strong className="text-white">【 Image 】</strong> JPG, PNG, BMP, GIF (*1), WEBP (*1), MPO (*2), VRJPG (*3)</li>
                <li><strong className="text-white">【 Movie (*4) 】</strong> MP4, MOV, AVI, MKV, WEBM, ASF, WMV, M4V, TS, M2TS, MTS, VOB, 3GP, OGV, DIVX</li>
                <li><strong className="text-white">【 Sound 】</strong> MP3, WAV, AAC, FLAC, AC3, WMA, M4A, OGG, AIFF, OPUS</li>
                <li><strong className="text-white">【 Subtitle 】</strong> SRT (Only when using MediaFoundation and DirectShow)</li>
                <li><strong className="text-white">【 Stereoscopic 】</strong> Side-by-side, Top-and-bottom (Equirectangular)</li>
              </ul>
              <div className="text-xs text-gray-500 mt-4 border-t border-white/10 pt-2 space-y-1">
                <p>*1 : Supports animation</p>
                <p>*2 : Stereoscopic photo format</p>
                <p>*3 : Google VR180 format</p>
                <p>*4 : Even if the extension of the video file format is the same, there are many cases where it can be played or cannot be played depending on the conversion method. We are paying close attention to the latest video playback technology so that we can play as many videos as possible, but there are unsupported files such as new formats born in real time and videos with very large file sizes. I would appreciate your understanding. In addition, the subtitle data stored in the file is not supported. Please use the SRT file to display the subtitles.</p>
              </div>
            </div>
          </section>
          
           {/* Useful Tips */}
           <section className="space-y-8">
            <h2 className="text-xl font-bold text-white border-l-4 border-cyan-400 pl-4">
              Useful tips to know
            </h2>
            <div className="bg-black/50 p-8 rounded-xl border border-white/10 space-y-4 text-sm text-gray-300 leading-relaxed">
              <h3 className="text-white font-bold mb-2">When you want to access a network drive (NAS) connected to the network</h3>
              <p>
                A network drive (NAS) is an external storage device (HDD etc.) that is directly connected to the router. It is very convenient because you can access and save images and videos from multiple PCs at the same time. If you want to access a network drive from VR MEDIA VIEWER, perform "Map Network Drive" and it will be displayed in "Shortcuts &gt; Drive". The method of assigning network drives may vary depending on the OS used and the manufacturer of the device, so please read the instruction manual or refer to the following reference site.
              </p>
              <div className="mt-2">
                <p className="text-gray-400 mb-1">Map network drive (Microsoft official website):</p>
                <a href="https://support.microsoft.com/en-us/help/4026635/windows-map-a-network-drive" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 decoration-dotted underline underline-offset-4 break-all">
                  https://support.microsoft.com/en-us/help/4026635/windows-map-a-network-drive
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
