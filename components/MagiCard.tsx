"use client";
import { useTheme } from "next-themes";

import { MagicCard } from "@/components/magicui/magic-card";
import { ReactNode } from "react";

export function MagicCardDemo({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  return (
    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center  justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#374151"}
      >
        {children}
      </MagicCard>
    </div>
  );
}
