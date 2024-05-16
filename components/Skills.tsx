import React from "react";
import Sections from "./Sections";
import { Badge } from "./ui/badge";
import NextJsIcon from "./icons/NextJsIcon";
import ReactIcon from "./icons/ReactIcon";
import { Code } from "./Hero";
import TailwindcssIcon from "./icons/Tailwindcss";
import ReduxIcon from "./icons/ReduxIcon";

const Skills = () => {
  return (
    <Sections className="flex flex-col gap-4 items-start">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I like work with...
      </h2>
      <div className="flex max-md:flex-col  gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <ReactIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className=" text-2xl font-semibold tracking-tight">React Js</h3>
          <p className="text-sm text-muted-foreground leading-7">
            My main library is <Code>React Js</Code> library. I also use{" "}
            <Code>Next.js</Code> as a backend and frontend framework.
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <TailwindcssIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className=" text-2xl font-semibold tracking-tight">
            Tailwindcss
          </h3>
          <p className="text-sm text-muted-foreground leading-7">
            I use <Code>Tailwindcss</Code> framework and <Code>Shadcn UI</Code>{" "}
            to create beautiful UI in seconds.
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <ReduxIcon
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className=" text-2xl font-semibold tracking-tight ">
            Redux toolkit
          </h3>
          <p className="text-sm text-muted-foreground leading-7">
            My main library is <Code>React Js</Code> library. I also use{" "}
            <Code>Next.js</Code> as a backend and frontend framework.
          </p>
        </div>
      </div>
    </Sections>
  );
};

export default Skills;
