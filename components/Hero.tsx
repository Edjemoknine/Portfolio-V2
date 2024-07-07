import React, { ComponentPropsWithoutRef } from "react";
import Sections from "./Sections";
import ReactIcon from "./icons/ReactIcon";
import { cn } from "@/lib/utils";
import FigmaIcon from "./icons/FigmaIcon";
import Image from "next/image";
export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      {...props}
      className={cn(
        "bg-accent/30 border border-accent hover:bg-accent/50 duration-300 p-1 rounded-sm text-primary font-mono",
        className
      )}
    />
  );
};
const Hero = () => {
  return (
    <Sections className="flex max-md:flex-col justify-between items-start gap-4">
      <div className="flex-[3] space-y-1">
        <h2 className="font-caption text-5xl text-primary">Mokenine Elhadj</h2>
        <h3 className="text-3xl font-caption">Software developer </h3>
        <div className="leading-7">
          I like bring ideas to live using{" "}
          <Code className="inline-flex items-center gap-1">
            <ReactIcon size={16} className="inline" /> Frontend
          </Code>{" "}
          techStack. I am passionate about building and designing exceptional
          digital experiences excellent software that improves the lives of
          those around me by bring ideas to{" "}
          <Code className="inline-flex items-center gap-1">
            <FigmaIcon size={16} className="inline" /> live
          </Code>{" "}
          .
        </div>
      </div>
      <div className="flex-[2] m-auto">
        <Image
          width={200}
          height={200}
          src="https://mk-portfolio-psi.vercel.app/assets/mok-9SYK2rEW.jpg"
          alt="profile"
          className="md:w-64 h-auto  rounded-full max-w-xs"
        />
      </div>
    </Sections>
  );
};

export default Hero;
