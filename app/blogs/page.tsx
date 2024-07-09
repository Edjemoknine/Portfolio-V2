import Sections from "@/components/Sections";
import Spacing from "@/components/Spacing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import React from "react";

const Blogs = () => {
  return (
    <Sections className="">
      <Spacing size="md" />
      Blogs
      <br /> newsletter
      <div className="flex w-full max-w-sm items-center space-x-2 relative  mt-4">
        <Input
          type="email"
          placeholder="Email"
          className="border border-primary"
        />
        <Button type="submit">Login</Button>
      </div>
    </Sections>
  );
};

export default Blogs;
