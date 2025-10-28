import Section from "@/layouts/Section";
import Image from "next/image";
import React from "react";

export default function SectionFooterBg() {
  return (
    <div className="relative xl:mt-[260px] lg:mt-[180px] mt-[120px]">
      <div className="relative w-full xl:h-[712px] h-[360px]">
        <Image
          alt="Footer Background"
          src="/images/footer.jpg"
          fill
          className="xl:object-fill object-cover w-full h-full z-2"
        />
        <div className="absolute top-0 left-0 z-3 w-full h-full bg-linear-to-b from-black/40 to-transparent"></div>
      </div>
      <div className="absolute 2xl:-top-[282px] xl:-top-[250px] lg:-top-[216px] md:-top-[125px] -top-[92px] z-4 w-full">
        <Section>
          <div>
            <h2 className="text-effect 2xl:text-[250px] xl:text-[200px] lg:text-[150px] md:text-[100px] text-[50px]">
              AFFILIATE
            </h2>
            <h3 className="font-bold xl:text-[48px] md:text-[36px] text-[24px] lg:w-[65%] w-full uppercase">
              Chính sách hoa hồng hấp dẫn cho người giới thiệu
            </h3>
          </div>
        </Section>
      </div>
    </div>
  );
}
