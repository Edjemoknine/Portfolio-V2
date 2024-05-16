import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

export const Work = (props: {
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
