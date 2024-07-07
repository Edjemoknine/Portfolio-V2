import GitubIcon from "@/components/icons/GitubIcon";
import Sections from "@/components/Sections";
import Spacing from "@/components/Spacing";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Earth, Github } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  { name: "Techgear", github: "", demo: "", image: "/assets/tech.png" },
  { name: "TreFusion", github: "", demo: "", image: "/assets/fusion.png" },
  { name: "News Nexus", github: "", demo: "", image: "/assets/neux.png" },
  { name: "Cyborg", github: "", demo: "", image: "/assets/cyborg.png" },
];

const Projects = () => {
  return (
    <Sections className="">
      <Spacing size="md" />

      <Card className="w-full p-4 space-y-3">
        <p className="text-lg text-muted-foreground">Selected Projects</p>
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project) => (
            <Card
              className="w-full rounded-lg overflow-hidden"
              key={project.name}
            >
              <CardHeader className="p-0 mb-3">
                <Image
                  src={project.image}
                  width={1000}
                  height={1000}
                  alt={project.name}
                  className="w-full h-full object-contain"
                />
              </CardHeader>
              <CardContent>
                <h4>{project.name}</h4>
              </CardContent>
              <CardFooter className="space-x-3">
                <Link
                  target="_blank"
                  href={project.github}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "size-6 p-0"
                  )}
                >
                  <GitubIcon size={12} className="text-foreground" />
                </Link>
                <Link
                  target="_blank"
                  href={project.github}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "size-6 p-0"
                  )}
                >
                  <Earth size={12} className="text-foreground" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Card>
    </Sections>
  );
};

export default Projects;
