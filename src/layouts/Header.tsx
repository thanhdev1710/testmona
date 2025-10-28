import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Header({ navList }: { navList: string[] }) {
  return (
    <header className="sticky top-0 left-0 shadow-lg w-full text-[#3A3A3A] font-bold z-50">
      <div className="flex items-center justify-between px-8 h-20 bg-white">
        <div className="flex gap-4 items-center">
          <Menu className="text-[#A4CD39]" />
          <Image
            alt="Logo"
            src="/images/logo-group.png"
            width={80}
            height={80}
            className="size-20"
          ></Image>
          <nav className="max-lg:hidden">
            <ul className="flex gap-2">
              {navList.map((item) => (
                <li key={item}>
                  <button
                    className={`h-12 px-4 py-2 ${
                      item === "Chương trình học"
                        ? "bg-[#A4CD39] rounded-full"
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <button className="h-12 px-4 py-2 bg-[#A4CD39] rounded-full uppercase">
            Học miễn phí
          </button>
        </div>
      </div>
    </header>
  );
}
