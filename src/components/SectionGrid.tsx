import Section from "@/layouts/Section";
import Image from "next/image";

export default function SectionGrid({ title }: { title: string }) {
  return (
    <Section>
      <h2 className="font-bold xl:text-[48px] text-[36px] text-center mb-12 text-[#151515]">
        {title}
      </h2>
      <div className="grid grid-cols-4 grid-rows-3 gap-6">
        <div className="col-span-3 row-span-2 h-[600px] relative rounded-lg overflow-hidden">
          <Image
            alt="tq1"
            src="/images/tq1.jpg"
            fill
            className="absolute object-cover w-full h-full"
          />
        </div>
        <div className="row-span-2 relative rounded-lg overflow-hidden">
          <Image
            alt="tq2"
            src="/images/tq2.jpg"
            fill
            className="absolute object-cover w-full h-full"
          />
        </div>
        <div className="col-span-2 relative rounded-lg overflow-hidden">
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
