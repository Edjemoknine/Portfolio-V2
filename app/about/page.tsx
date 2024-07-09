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
  console.log(stacks);
  return (
    <Sections className="">
      <Spacing size="md" />
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
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
        <div className="col-span-1">About</div>
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
        <div className="col-span-1">Skills</div>
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
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1">Geustbook</div>
        <div className="col-span-4 flex flex-wrap gap-4">
          <p>
            Welcome to my Guestbook! I’d love to hear your thoughts about my
            work or just say hello. Drop a message below!
          </p>
          <br />
          <br />
          <Card className="relative md:h-72 bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4     w-full rounded-xl   dark:border-neutral-600">
            <BackgroundBeams />
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-2xl">Share Your Feedback</h3>
              <div className="flex items-center gap-2">
                <Star fill="yellow" />
                <Star fill="yellow" />
                <Star fill="yellow" />
                <Star fill="yellow" />
                <Star fill="yellow" />
              </div>
            </div>
            <br />
            <p>
              Hi dude 👋 ,I'm glad to have you here. <br /> I'm excited to share
              my work with you. Your feedback is essential as I aim to enhance
              and progress in my career. If you have a moment, please log in and
              provide your thoughts on my projects and presentations. Your
              insights are crucial for my growth and refining my creative
              approach. Thank you for contributing to my journey!
            </p>
          </Card>
          <div className="flex justify-end w-full">
            <Button type="submit">Login</Button>
          </div>

          <Card></Card>
        </div>
      </div>
    </Sections>
  );
};

export default About;
