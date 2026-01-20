import type { Metadata } from "next";
import Link from "next/link";
import { Outfit, JetBrains_Mono, Noto_Sans_JP, Inter, Rajdhani } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boninblue Design Laboratory",
  description: "Exploring the Logic of Beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${rajdhani.variable} ${inter.variable} ${jetbrainsMono.variable} ${notoSansJP.variable} antialiased flex flex-col min-h-screen`}
      >
        {children}
        <footer className="w-full py-6 text-center text-xs text-white/30 font-tech tracking-widest uppercase flex flex-col gap-4 relative z-50">
          <nav className="flex justify-center gap-6 text-white/50">
            <Link href="/" className="hover:text-white transition-colors duration-300">HOME</Link>
            <Link href="/vr-shoot-around" className="hover:text-white transition-colors duration-300">VR SHOOT AROUND</Link>
            <Link href="/vr-media-viewer" className="hover:text-white transition-colors duration-300">VR MEDIA VIEWER</Link>
          </nav>
          <p>Copyright(c) Boninblue Design Laboratory all rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
