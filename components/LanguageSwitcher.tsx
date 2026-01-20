"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  
  // Replace the lang segment in the path
  const targetUnactive = currentLang === 'en' ? 'jp' : 'en';
  const labelUnactive = currentLang === 'en' ? 'JP' : 'EN';
  
  // Construct new path: /vr-media-viewer/en/... -> /vr-media-viewer/jp/...
  const newPath = pathname.replace(`/${currentLang}`, `/${targetUnactive}`);

  return (
    <div className="flex gap-2 font-mono text-sm">
      <span className="text-cyan-400 font-bold">{currentLang.toUpperCase()}</span>
      <span className="text-gray-600">/</span>
      <Link href={newPath} className="text-gray-500 hover:text-cyan-400 transition-colors">
        {labelUnactive}
      </Link>
    </div>
  );
}
