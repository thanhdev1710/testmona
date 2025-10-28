import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full -mt-22 h-svh relative">
      <Image
        alt="Hero"
        src="/images/hero.png"
        fill
        className="z-1 object-cover absolute"
      />
      <div className="absolute bottom-0 left-0 w-full h-[20%] from-black/80 to-transparent bg-linear-to-t z-2"></div>
      <div className="absolute bottom-0 z-3 pb-5 md:pl-30 pl-12 pr-3 w-full backdrop-blur-[1px]">
        <div>
          <Image
            alt="Logo Hero"
            src="/images/hero-logo.png"
            width={600}
            height={200}
            className="lg:scale-110"
          />

          <h2 className="font-bold text-[48px] text-white mt-4 uppercase">
            Mở ra giới hạn diễn hoạ kiến trúc
          </h2>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#A4CD39] rounded-full size-14 z-3 flex items-center justify-center">
        <Play className="text-[#353535]" fill="#353535" />
      </div>
    </section>
  );
}
