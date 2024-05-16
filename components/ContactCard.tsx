import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";
import Link from "next/link";

const ContactCard = ({
  image,
  mediumImg,
  name,
  description,
  url,
}: {
  image: string;
  mediumImg: string;
  name: string;
  description: string;
  url: string;
}) => {
  return (
    <Link href={url}>
      <Card className="p-3 bg-accent/10 group flex-1 flex items-center gap-4 hover:bg-accent/30 transition-colors">
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
    </Link>
  );
};

export default ContactCard;
