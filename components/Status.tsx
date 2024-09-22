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
import ContactCard from "./ContactCard";
import Project from "./Project";
import { Work } from "./Work";

const Status = () => {
  return (
    <Sections className="w-full flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 space-y-1">
          <p className="text-lg text-muted-foreground">Selected Projects</p>
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
          <p className="text-lg text-muted-foreground">Work</p>
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
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            url="https://twitter.com/Moknine8"
            name="@Moknine8 "
            image="https://mk-portfolio-psi.vercel.app/assets/mok-9SYK2rEW.jpg"
            mediumImg="https://imgs.search.brave.com/TDgu_cz9I26MyeLNkxtVfTIfcKI-oJn5pn01FkecRq8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdGV1cnMtbGli/cmUvYXBwbGljYXRp/b24tdHdpdHRlci1u/b3V2ZWF1LWxvZ28t/eC1mb25kLW5vaXJf/MTAxNy00NTQyNS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"
            description="1200"
          />
          <ContactCard
            url="https://www.linkedin.com/in/mokenineelhadj/"
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

const WORKS = [
  {
    img: "https://media.licdn.com/dms/image/v2/C4E0BAQEV0ZE0epI1fg/company-logo_200_200/company-logo_200_200/0/1632737175469?e=1735171200&v=beta&t=rGKnluccMY0a8hfEnjY3P4jijiZZD8RuFh_hkJ7wlSU",
    role: "Frontend Developer",
    title: "Deeplyfe.inc",
    date: "2024 - present",
    mission: "Remote",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQF4LkzIX5am5Q/company-logo_200_200/company-logo_200_200/0/1638865980476?e=1735171200&v=beta&t=Z4ryju_rxnGvS5KHDdVPcTXFqlIB1Ek7COVpzpJKmxk",
    role: "Web Developer",
    date: "2023 - 2024",
    title: "MarkoDown",
    mission: "Volonture",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/C4E0BAQExT428Seh0Nw/company-logo_200_200/company-logo_200_200/0/1645050163163?e=1735171200&v=beta&t=fghmIQgbax0pjvu4c4811_DbkdsFB9LKS6QRf5TDc80",
    role: "Software Engineer",
    date: "2024 - present",
    title: "All in Open source",
    mission: "Volonture",
  },
  {
    img: "https://mk-portfolio-psi.vercel.app/assets/teal_logo-CxRSjuZu.png",
    role: "FullStack Developer",
    date: "2024 - present",
    title: "Freelancer",
    mission: "Free",
  },
];

const SIDEPROJECTS = [
  {
    logo: Home,
    title: "Movico",
    description: "Pltaform stream tha latest movies and Tv shows.",
  },
  {
    logo: Code,
    title: "Wearox",
    description: "Ecommerce Store sells the trend clothes and shoes .",
  },
  {
    logo: PowerIcon,
    title: "Cv Builder",
    description: "Sass platform serve creating profissional resume .",
  },
  {
    logo: Podcast,
    title: "Burger King",
    description: "Resturant web application buy and make reservation online .",
  },
  {
    logo: Code,
    title: "Latest",
    description: "Blog display tha latest news and articles in the world .",
  },
  {
    logo: Rss,
    title: "Cryptox",
    description:
      "Cryptocorrencies platform that show deals and the market in the crypto world .",
  },
  {
    logo: Podcast,
    title: "Cyborg",
    description:
      "Gmaes platform that dispaly the latest games and thier news .",
  },
];
