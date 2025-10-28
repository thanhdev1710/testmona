import Section from "@/layouts/Section";
import LeftRight from "./LeftRight";
import { leftRightList } from "@/global/base";

export default function SectionLeftRight({ title }: { title: string }) {
  return (
    <Section>
      <h2 className="font-bold xl:text-[48px] md:text-[36px] text-[24px] uppercase xl:w-[65%] w-full mb-10 text-[#151515]">
        {title}
      </h2>
      <div className="space-y-16">
        {leftRightList.map((item) => (
          <LeftRight
            key={item.title}
            title={item.title}
            img={item.img}
            contentList={item.contentList}
            format={item.format}
          />
        ))}
      </div>
    </Section>
  );
}
