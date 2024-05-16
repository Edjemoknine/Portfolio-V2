import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

const Sections = (props: PropsWithChildren<{ className: string }>) => {
  return (
    <div className={cn("max-w-4xl px-4 mx-auto", props.className)}>
      {props.children}
    </div>
  );
};

export default Sections;
