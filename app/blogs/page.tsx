import { BackgroundBeamsDemo } from "@/components/BeamBg";
import GeustCard from "@/components/GeustCard";
import LinkHover from "@/components/LinkHover";
import { MagicCardDemo } from "@/components/MagiCard";
import { MagicCard } from "@/components/magicui/magic-card";
import { MarqueeDemo } from "@/components/magicui/MarqueScrolling";
import Sections from "@/components/Sections";
import Spacing from "@/components/Spacing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import React from "react";

const Blogs = () => {
  return (
    <Sections className="">
      <Spacing size="md" />
      <h2 className=" pb-2 text-3xl text-primary font-semibold tracking-tight first:mt-0">
        Blogs
      </h2>
      <p className="mb-6">Just a quick glimpse.</p>
      <div className="pb-6">
        <LinkHover
          href="#"
          Img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="About"
          subtitle="this section it's about me"
        />
        <LinkHover
          href="#"
          Img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="About"
          subtitle="this section it's about me"
        />
        <LinkHover
          href="#"
          Img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="About"
          subtitle="this section it's about me"
        />
        <LinkHover
          href="#"
          Img="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          title="About"
          subtitle="this section it's about me"
        />
      </div>

      <BackgroundBeamsDemo />
      {/* <div className=" w-full my-10 h-[1.5px] bg-foreground/[.3]" /> */}
      {/* <MagicCardDemo>
        <div>Magic</div>
      </MagicCardDemo> */}
      {/* <div className="flex w-full max-w-sm items-center space-x-2 relative  mt-4">
        <Input
          type="email"
          placeholder="Email"
          className="border border-primary"
        />
        <Button type="submit">Login</Button>
      </div> */}
      {/* <GeustCard />
      <MarqueeDemo /> */}
    </Sections>
  );
};

export default Blogs;
