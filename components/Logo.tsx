import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative w-full h-auto">
      <Image
        src="/images/BoninblueLogo.png"
        alt="Boninblue Design Laboratory"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
        priority
      />
    </div>
  );
}
