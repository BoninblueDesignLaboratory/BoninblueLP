"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  videoId: string;
  poster: string;
  platform?: "drive" | "youtube";
  start?: number;
}

export default function VideoPlayer({ videoId, poster, platform = "drive", start = 0 }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    const src = platform === "youtube"
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&start=${start}`
      : `https://drive.google.com/file/d/${videoId}/preview`;

    return (
      <div className="relative w-full aspect-video rounded-xl border border-white/10 bg-black/50 overflow-hidden">
        <iframe
          src={src}
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          allow={platform === "youtube" ? "autoplay; encrypted-media" : "autoplay"}
        ></iframe>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full aspect-video rounded-xl border border-white/10 bg-black/50 overflow-hidden cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      <Image
        src={poster}
        alt="Video thumbnail"
        fill
        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-black/50 border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
