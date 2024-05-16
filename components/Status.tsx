import React from "react";
import Sections from "./Sections";
import { Card } from "./ui/card";
import {
  ArrowUpRight,
  Code,
  Home,
  LucideIcon,
  Podcast,
  PowerIcon,
  Rss,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";

const Status = () => {
  return (
    <Sections className="w-full flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 space-y-1">
          <p className="text-sm text-muted-foreground">Selected Projects</p>
          <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-4">
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
        <Card className="p-4 flex-1 space-y-2">
          <p className="text-sm text-muted-foreground">Contact me</p>
          <ContactCard
            name="@Moknine8 "
            image="https://mk-portfolio-psi.vercel.app/assets/mok-9SYK2rEW.jpg"
            mediumImg="https://imgs.search.brave.com/TDgu_cz9I26MyeLNkxtVfTIfcKI-oJn5pn01FkecRq8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdGV1cnMtbGli/cmUvYXBwbGljYXRp/b24tdHdpdHRlci1u/b3V2ZWF1LWxvZ28t/eC1mb25kLW5vaXJf/MTAxNy00NTQyNS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"
            description="1200"
          />
          <ContactCard
            name="Mokine Elhadj "
            image="https://mk-portfolio-psi.vercel.app/assets/mok-9SYK2rEW.jpg"
            mediumImg="https://imgs.search.brave.com/0onedxgdJWLsAOrzVTbco23TxXLuDJGb_uBUL74bc7k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
            description="400"
          />
        </Card>
      </div>
    </Sections>
  );
};

export default Status;

const ContactCard = ({
  image,
  mediumImg,
  name,
  description,
}: {
  image: string;
  mediumImg: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 group flex items-center gap-4 hover:bg-accent/30 transition-colors">
      <div className="relative">
        <img
          src={image}
          alt="iamge"
          className="h-10 w-10 rounded-full object-contain"
        />
        <img
          src={mediumImg}
          alt="mediumImage"
          className="h-4 w-4 object-contain absolute -bottom-2 -right-2 rounded"
        />
      </div>
      <div className="mr-auto ">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <ArrowUpRight
        size={16}
        className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform mr-4"
      />
    </Card>
  );
};

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
        <p className="text-xs text-muted-foreground">{props.role}</p>
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
