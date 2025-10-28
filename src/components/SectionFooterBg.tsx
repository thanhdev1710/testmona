import Section from "@/layouts/Section";
import Image from "next/image";
import React from "react";

export default function SectionFooterBg() {
  return (
    <div className="relative mt-[clamp(40px,18vw,300px)]">
      <div className="relative w-full md:h-[712px] h-[360px]">
        <Image
          alt="Footer Background"
          src="/images/footer.jpg"
          fill
          className="xl:object-fill object-cover w-full h-full z-2"
        />
        <div className="absolute top-0 left-0 z-3 w-full h-full bg-linear-to-b from-black/40 to-transparent"></div>
      </div>
      <div className="absolute -top-[315px] z-4 w-full">
        <Section>
          <div>
            <h2 className="text-effect">AFFILIATE</h2>
            <h3 className="font-bold xl:text-[48px] text-[36px] xl:w-[65%] w-full uppercase">
              Chính sách hoa hồng hấp dẫn cho người giới thiệu
            </h3>
          </div>
        </Section>
      </div>
    </div>
  );
}
