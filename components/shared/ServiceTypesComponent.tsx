import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceTypesComponent = ({ title, description, Icon }: Props) => {
  return (
    <span className="group flex h-32 w-full flex-row items-center gap-4 rounded-md border-2 border-zinc-700 p-4 duration-300 hover:translate-y-[-8px] hover:border-sky-600">
      <Icon className="h-16 w-16 shrink-0 text-zinc-400 duration-300 group-hover:text-sky-600 md:h-24 md:w-24" />
      <span className="flex h-full w-0 grow flex-col pt-2 text-zinc-100">
        <h3 className="overflow-hidden text-ellipsis text-lg font-semibold uppercase text-zinc-100 md:text-xl">
          {title}
        </h3>
        <p className="prose prose-base line-clamp-2 max-w-none overflow-hidden text-ellipsis text-zinc-400">
          {description}
        </p>
      </span>
    </span>
  );
};

export default ServiceTypesComponent;
