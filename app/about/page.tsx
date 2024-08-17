import { stacks } from "@/components/icon";
import RotateCard from "@/components/RotateCard";
import Sections from "@/components/Sections";
import Spacing from "@/components/Spacing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BackgroundBeams } from "@/lib/AnimeBack";
import { Star } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <Sections className="">
      <Spacing size="md" />
      <h2 className=" pb-2 text-3xl text-primary font-semibold tracking-tight first:mt-0">
        About me
      </h2>
      <p className="mb-6">Just a quick glimpse.</p>
      <div className="flex items-center pl-8 my-20 ">
        <RotateCard
          rotate={"-rotate-12"}
          src="https://mk-portfolio-psi.vercel.app/assets/mok-9SYK2rEW.jpg"
        />
        <RotateCard
          rotate={"rotate-12"}
          src="https://mk-portfolio-psi.vercel.app/assets/mok-9SYK2rEW.jpg"
        />
        <RotateCard
          rotate={"-rotate-6"}
          src="https://mk-portfolio-psi.vercel.app/assets/mok-9SYK2rEW.jpg"
        />
        <RotateCard
          rotate={"rotate-6"}
          src="https://mk-portfolio-psi.vercel.app/assets/mok-9SYK2rEW.jpg"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1 text-primary font-semibold">About</div>
        <div className="col-span-4">
          Hello there, I’m Mk 👋 I’m a software engineer with a passion for
          creating user-friendly and efficient applications. My main programming
          languages include JavaScript and TypeScript. I love working with
          React.js and Next.js, and I also have experience with other front-end
          technologies such as Svelte.js.
          <br />
          <br />I have a deep passion for SaaS and tech startups, driven by the
          endless possibilities for innovation and transformation in these
          fields. I am particularly fascinated by how SaaS solutions can
          streamline operations, boost productivity, and provide scalable
          solutions to complex problems.
          <br />
          <br />I am eager to connect with like-minded individuals who share
          this passion and are excited to collaborate on innovative projects,
          exchange ideas, and drive impactful change together.
        </div>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1 text-primary font-semibold">Skills</div>
        <div className="col-span-4 flex flex-wrap gap-4">
          {stacks.map((stack, index) => (
            <Card
              // style={{ width: "200px" }}
              key={index}
              className={`p-3 bg-accent/10 group flex-col w-36  flex items-center gap-4 hover:bg-accent/30 transition-colors `}
            >
              <stack.icon size={30} />
              <p className="text-xs"> {stack.name}</p>
            </Card>
          ))}
        </div>
      </div>
      <br />
      <br />
    </Sections>
  );
};

export default About;
