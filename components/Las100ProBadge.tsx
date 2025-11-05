"use client";

import Image from "next/image";

type Las100ProBadgeProps = {
  size?: "default" | "small";
};

export default function Las100ProBadge({ size = "default" }: Las100ProBadgeProps) {
  const isSmall = size === "small";
  
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-3">
        <div className={`flex items-center gap-2 ${isSmall ? "text-[13.5px] text-black/80" : "text-[16px] text-black/90"}`}>
          <span>Avalados por</span>
        </div>
        <Image
          src="/img/las100pro.svg"
          alt="Las 100 Pro - Top 100 startups más prometedoras de 2025"
          width={120}
          height={40}
          className={isSmall ? "h-6 lg:h-10 w-auto" : "h-8 lg:h-14 w-auto"}
        />
      </div>
      <p className={`text-black/60 ${isSmall ? "text-[8px]" : "text-[10px]"}`}>
        Entre las 10 distinguidas de nuestra industria
      </p>
    </div>
  );
}

