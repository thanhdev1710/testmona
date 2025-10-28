"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "@/layouts/Section";

export default function SectionSlide({
  title,
  description,
  slideList,
}: {
  title: string;
  description: string;
  slideList: {
    title: string;
    img: string;
  }[];
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Section>
      {/* Header */}
      <div className="flex justify-between text-[#151515]">
        <div className="xl:w-[65%] w-full">
          <h2 className="xl:text-[48px] text-[36px] font-bold uppercase mb-3">
            {title}
          </h2>
          <p className="text-[18px] w-[85%]">{description}</p>
        </div>
      </div>

      {/* Swiper + Nút */}
      <div className="relative pt-10">
        {/* Nút điều hướng */}
        <button
          ref={prevRef}
          className="absolute right-12 md:-top-10 -top-6 z-10 size-10 rounded-full bg-[#e9e9e9] flex items-center justify-center hover:bg-[#cfcfcf] transition"
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>

        <button
          ref={nextRef}
          className="absolute right-0 md:-top-10 -top-6 z-10 size-10 rounded-full bg-[#b7e135] flex items-center justify-center hover:bg-[#9fc12d] transition"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          style={{ overflow: "visible" }}
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          className="overflow-visible"
        >
          {slideList.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="w-full aspect-4/5 relative rounded-2xl shadow overflow-hidden">
                <Image
                  alt={item.title}
                  src={item.img}
                  fill
                  className="object-cover"
                />
                <p className="absolute bottom-6 left-6 text-[20px] z-10 text-white uppercase font-bold drop-shadow-md">
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}
