"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[20rem] w-full rounded-md bg-background shadowxl relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Subscribe to my newsletter
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          A monthly newsletter where I share my learnings and links to anything
          I've found interesting. I don’t usually share this stuff anywhere else
          but in this newsletter.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="rounded-lg border py-2 border-neutral-600 outline-none focus:ring-0 px-4  focus:ring-teal-500  w-full relative z-10 mt-4  bg-background  placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
