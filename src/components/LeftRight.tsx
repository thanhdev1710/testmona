import { Play } from "lucide-react";
import Image from "next/image";

export default function LeftRight({
  format,
  title,
  img,
  contentList,
}: {
  format: "imgLeft" | "imgRight";
  title: string;
  img: string;
  contentList: string[];
}) {
  const isLeft = format === "imgLeft";
  return (
    <div
      className={`flex justify-between xl:gap-[100px] md:gap-[50px] gap-4 text-[#151515] ${
        isLeft ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"
      }`}
    >
      <div className="md:w-1/2 w-full">
        <div className="md:w-[80%] w-full">
          <h3 className="font-bold md:text-[24px] text-[18px] mb-6 uppercase">
            {title}
          </h3>
          <ul className="list-disc space-y-3">
            {contentList.map((content, i) => (
              <li className="ml-8" key={content + i}>
                <p className="md:text-[16px] text-[14px]">{content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`relative md:w-1/2 w-full rounded-lg overflow-hidden`}>
        <Image
          alt={title}
          src={img}
          width={800}
          height={600}
          className="aspect-4/3 h-full w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#A4CD39] rounded-full size-14 z-3 flex items-center justify-center">
          <Play className="text-[#353535]" fill="#353535" />
        </div>
      </div>
    </div>
  );
}
