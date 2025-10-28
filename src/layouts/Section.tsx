import React, { ReactNode } from "react";

export default function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={
        "relative overflow-hidden xl:px-[164px] lg:px-[82px] md:px-9 px-3 lg:pt-[120px] pt-[60px] " +
        className
      }
    >
      {children}
    </section>
  );
}
