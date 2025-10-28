import { ArrowUp, Facebook, Youtube, Music } from "lucide-react";
import Image from "next/image";
import Section from "./Section";

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white relative overflow-hidden">
      <Section className="pt-16 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-20">
          <div className="flex justify-center lg:justify-start shrink-0">
            <Image
              alt="Logo"
              src="/images/logo.png"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col flex-1 lg:pl-16">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center lg:text-left">
              THÔNG TIN
            </h2>

            <div className="text-sm text-gray-300 text-center lg:text-left mb-10 lg:mb-12 flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-1">
              <span>Chương trình học</span> /<span> Đặc quyền</span> /
              <span className="text-[#a3cd3b] font-semibold">
                NGUYÊN BOC là ai?
              </span>
              /<span> Cộng đồng học viên</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-center sm:text-left">
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p className="text-gray-300">contact@boc.academy</p>
              </div>
              <div>
                <h3 className="font-bold mb-1">Hotline</h3>
                <p className="text-gray-300">123 456 7890</p>
              </div>
              <div>
                <h3 className="font-bold mb-1">Địa chỉ</h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center space-y-4">
            <a
              href="#"
              className="bg-[#a3cd3b] w-10 h-10 rounded-full flex items-center justify-center text-[#333] hover:bg-[#bde860] transition"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="bg-[#a3cd3b] w-10 h-10 rounded-full flex items-center justify-center text-[#333] hover:bg-[#bde860] transition"
            >
              <Music className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="bg-[#a3cd3b] w-10 h-10 rounded-full flex items-center justify-center text-[#333] hover:bg-[#bde860] transition"
            >
              <Youtube className="w-5 h-5" />
            </a>

            <div className="w-px h-16 bg-[#a3cd3b]" />

            <a
              href="#top"
              className="bg-[#a3cd3b] w-10 h-10 rounded-full flex items-center justify-center text-[#333] hover:bg-[#bde860] transition"
            >
              <ArrowUp className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-10 gap-6 lg:hidden">
          <a
            href="#"
            className="bg-[#a3cd3b] w-10 h-10 rounded-full flex items-center justify-center text-[#333] hover:bg-[#bde860] transition"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="bg-[#a3cd3b] w-10 h-10 rounded-full flex items-center justify-center text-[#333] hover:bg-[#bde860] transition"
          >
            <Music className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="bg-[#a3cd3b] w-10 h-10 rounded-full flex items-center justify-center text-[#333] hover:bg-[#bde860] transition"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="#top"
            className="bg-[#a3cd3b] w-10 h-10 rounded-full flex items-center justify-center text-[#333] hover:bg-[#bde860] transition"
          >
            <ArrowUp className="w-5 h-5" />
          </a>
        </div>
      </Section>
    </footer>
  );
}
