import React from "react";
import Sections from "./Sections";
import { Button, buttonVariants } from "./ui/button";
import GitubIcon from "./icons/GitubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Sections className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">Mokenine Elhadj</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            target="_blank"
            href={"https://github.com/Edjemoknine"}
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GitubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            target="_blank"
            href={"https://twitter.com/Moknine8"}
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <TwitterIcon size={12} className="text-foreground" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/mokenineelhadj/"}
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedInIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Sections>
    </header>
  );
};

export default Header;
