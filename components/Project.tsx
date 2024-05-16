import { LucideIcon } from "lucide-react";
import Link from "next/link";

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

export default Project;
