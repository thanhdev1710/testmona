import Hero from "@/components/Hero";
import SectionFooterBg from "@/components/SectionFooterBg";
import SectionGrid from "@/components/SectionGrid";
import SectionLeftRight from "@/components/SectionLeftRight";
import SectionSlide from "@/components/SectionSlide";
import { slideList } from "@/global/base";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <SectionSlide
        description="Sau khóa học, bạn sẽ có thể tự tin sử dụng Chaos Vantage như một
            phần không thể thiếu trong quy trình diễn họa!"
        title="Bạn học được gì từ khóa học?"
        slideList={slideList}
      />
      <SectionLeftRight
        title="Các phần mềm và plugin
được học thêm trong khoá"
      />
      <SectionGrid title="Thành quả của học viên" />
      <SectionFooterBg />
    </div>
  );
}
