import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const RotateCard = ({ src, rotate }: { src: string; rotate: string }) => {
  return (
    <div className={cn("h-64 w-52 group -ml-3 [perspective:1000px] ", rotate)}>
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
        <div className="absolute inset-0">
          <Image
            src={src}
            alt=""
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-card-foreground px-12 text-center text-slate-50 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h1>Hellow </h1>
        </div>
      </div>
    </div>
  );
};

export default RotateCard;
