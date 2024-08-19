import Sections from "@/components/Sections";
import Spacing from "@/components/Spacing";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Earth, Github } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    name: "Techgear",
    demo: "https://techgear-mu.vercel.app/",
    image: "/assets/tech.png",
  },
  {
    name: "EcoWear",
    demo: "https://eco-wear.vercel.app/",
    image: "/assets/ecowear.png",
  },
  {
    name: "Burger King",
    demo: "https://burger-king-restaurant-app.vercel.app/",
    image: "/assets/Burger.png",
  },
  { name: "TreFusion", demo: "", image: "/assets/fusion.png" },
  { name: "News Nexus", demo: "", image: "/assets/neux.png" },
  {
    name: "Cv Builder",
    demo: "https://cv-builder-fawn.vercel.app/",
    image: "/assets/Cvbuilder.png",
  },
  {
    name: "Portfolio V1",
    demo: "https://mk-portfolio-psi.vercel.app/",
    image: "/assets/portfolio.png",
  },
];

const Projects = () => {
  return (
    <Sections className="">
      <Spacing size="md" />

      {/* <Card className="w-full p-4 space-y-3"> */}
      <h2 className=" pb-2 text-3xl text-primary font-semibold tracking-tight first:mt-0">
        Projects
      </h2>
      <p className="mb-10">
        I create applications and tools to be profitable and help people with my
        skills.
      </p>
      {/* <p className="text-lg text-muted-foreground">Selected Projects</p> */}
      <div className="grid grid-cols-1 gap-10 list  ">
        {projects.map((project) => (
          <div key={project.name} className="item grid md:grid-cols-5 gap-6">
            <Card className="w-full rounded-lg overflow-hidden md:col-span-2">
              <Link target="_blank" href={project.demo}>
                <div className=" h-full mb-3 ">
                  <Image
                    src={project.image}
                    width={1000}
                    height={1000}
                    alt={project.name}
                    className="w-full h-full object-fill"
                  />
                </div>
              </Link>
            </Card>

            <div className="md:col-span-3 pt-1">
              <h3 className=" text-primary font-semibold mb-2">
                {project.name} . 2023
              </h3>
              <p className=" text-base ">
                This is a Real-estate platform tat connects the buyer and the
                seller, Let you seek properties that are either for sale or
                rent.
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* </Card> */}
    </Sections>
  );
};

export default Projects;
