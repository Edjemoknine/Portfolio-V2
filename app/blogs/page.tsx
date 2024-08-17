import GeustCard from "@/components/GeustCard";
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
      <br /> newsletter
      <div className="flex w-full max-w-sm items-center space-x-2 relative  mt-4">
        <Input
          type="email"
          placeholder="Email"
          className="border border-primary"
        />
        <Button type="submit">Login</Button>
      </div>
      <MarqueeDemo />
      <GeustCard />
    </Sections>
  );
};

export default Blogs;
