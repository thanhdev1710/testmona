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
      className={`flex justify-between mb-16 xl:gap-[100px] md:gap-[50px] gap-4 text-[#151515] ${
        isLeft ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-1/2">
        <div className="w-[80%]">
          <h3 className="font-bold text-[24px] mb-6 uppercase">{title}</h3>
          <ul className="list-disc space-y-3">
            {contentList.map((content, i) => (
              <li className="ml-8" key={content + i}>
                <p className="md:text-[16px] text-xs">{content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`relative w-1/2 rounded-lg overflow-hidden`}>
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
