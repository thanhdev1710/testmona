import Section from "@/layouts/Section";
import Image from "next/image";

export default function SectionGrid({ title }: { title: string }) {
  return (
    <Section>
      <h2 className="font-bold xl:text-[48px] md:text-[36px] text-[24px] text-center mb-12 text-[#151515]">
        {title}
      </h2>
      <div className="grid grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-3 xl:gap-6 gap-3">
        <div className="md:col-span-2 xl:col-span-3 xl:row-span-2 xl:h-[600px] md:h-[400px] h-[200px] relative rounded-lg overflow-hidden">
          <Image
            alt="tq1"
            src="/images/tq1.jpg"
            fill
            className="absolute object-cover w-full h-full"
          />
        </div>
        <div className="xl:row-span-2 relative rounded-lg overflow-hidden">
          <Image
            alt="tq2"
            src="/images/tq2.jpg"
            fill
            className="absolute object-cover w-full h-full"
          />
        </div>
        <div className="xl:col-span-2 relative rounded-lg overflow-hidden">
          <Image
            alt="tq3"
            src="/images/tq3.jpg"
            fill
            className="absolute object-cover w-full h-full"
          />
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <Image
            alt="tq4"
            src="/images/tq4.jpg"
            fill
            className="absolute object-cover w-full h-full"
          />
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <Image
            alt="tq5"
            src="/images/tq5.jpg"
            fill
            className="absolute object-cover w-full h-full"
          />
        </div>
      </div>
    </Section>
  );
}
