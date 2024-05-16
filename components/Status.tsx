import React from "react";
import Sections from "./Sections";
import { Card } from "./ui/card";
import { Code, Home, LucideIcon, Podcast, PowerIcon, Rss } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";

const Status = () => {
  return (
    <Sections className="w-full flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 space-y-1">
          <p className="text-sm text-muted-foreground">Selected Projects</p>
          <div className="flex flex-col gap-3">
            {SIDEPROJECTS.map((project) => (
              <Project
                key={project.title}
                logo={project.logo}
                url=""
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full space-y-4 h-full  ">
        <Card className="p-4 flex-1">
          <p className="text-sm text-muted-foreground">Work</p>
          <div className="flex flex-col gap-3">
            {WORKS.map((work) => (
              <Work
                key={work.role}
                role={work.role}
                img={work.img}
                url=""
                title={work.title}
                date={work.date}
                mission={work.mission}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">contact me</Card>
      </div>
    </Sections>
  );
};

export default Status;

const WORKS = [
  {
    img: "https://media.licdn.com/dms/image/D4E0BAQFBVjTMODudkQ/company-logo_100_100/0/1684225310834/movico_b_v__logo?e=1723680000&v=beta&t=zRNth76uOXmrvzKqm-3GZcUd_qEsCgvJwP5H-WgJ838",
    role: "Frontend Developer",
    title: "Framer",
    date: "2022 - 2023",
    mission: "Internship",
  },
  {
    img: "https://media.licdn.com/dms/image/C4D0BAQF4LkzIX5am5Q/company-logo_100_100/0/1638865980476?e=1723680000&v=beta&t=-QBrolHanvzjsHwzWal95dyGocAL35ba_BTXMNBbdfQ",
    role: "Web Developer",
    date: "2023 - 2024",
    title: "Open source Africa",
    mission: "Internship",
  },
  {
    img: "https://media.licdn.com/dms/image/C4E0BAQExT428Seh0Nw/company-logo_100_100/0/1645050163163?e=1723680000&v=beta&t=MN333t729LE10t0W6qrrSzLezAIVkUkWvFkjugqbdaM",
    role: "Software Engineer",
    date: "2024 - present",
    title: "CodeSoft",
    mission: "Internship",
  },
  {
    img: "https://media.licdn.com/dms/image/D560BAQHDmIfYA5sY7w/company-logo_200_200/0/1685777115831?e=1723680000&v=beta&t=lUt33075mTQGUoJFULO4aw6EOpg9gyD8pptuSY_F-2k",
    role: "FullStack Developer",
    date: "2024 - present",
    title: "Code",
    mission: "Internship",
  },
];

const Work = (props: {
  img: string;
  title: string;
  role: string;
  date: string;
  url: string;
  mission: string;
}) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-3 hover:bg-accent/50 p-1 rounded transition-colors"
    >
      {/* <span className="bg-accent text-accent-foreground p-3 rounded-sm"> */}
      <Image
        width={200}
        height={200}
        src={props.img}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-sm relative"
      />
      {/* </span> */}
      <div>
        <div className=" font-semibold">
          {props.title}{" "}
          <Badge className="text-[10px] hover:bg-sky-500/5 bg-sky-500/10 text-sky-500">
            {props.mission}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
const SIDEPROJECTS = [
  {
    logo: Home,
    title: "Github",
    description: "Lorem ipsum dolor sit amet, consectetur ading elit, ",
  },
  {
    logo: Code,
    title: "Github",
    description: "Lorem ipsum dolor sit amet, consectetur a elit,",
  },
  {
    logo: PowerIcon,
    title: "Github",
    description: "Lorem ipsum dolor sit amet, consectetur acelit, ",
  },
  {
    logo: Podcast,
    title: "Podcast",
    description: "Lorem ipsum dolor sit amet, consectetur elit,",
  },
  {
    logo: Rss,
    title: "Rss",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
  },
];

const Project = (props: {
  logo: LucideIcon;
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-3 hover:bg-accent/50 p-1 rounded transition-colors"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.logo />
      </span>
      <div>
        <div className="text-lg font-semibold">{props.title}</div>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
