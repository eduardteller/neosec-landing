import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceTypesComponent = ({ title, description, Icon }: Props) => {
  return (
    <span className="group flex h-32 w-full flex-row items-center gap-4 rounded-md border border-white/20 p-4 duration-300 hover:translate-x-[8px] hover:border-sky-600">
      <Icon
        size={96}
        className="text-white/50 duration-300 group-hover:text-sky-600"
      />
      <span className="flex h-full w-0 grow flex-col pt-2 text-white">
        <h3 className="h-fit text-xl font-semibold uppercase text-white">
          {title}
        </h3>
        <p className="prose prose-base line-clamp-2 max-w-none overflow-hidden text-ellipsis text-white/70">
          {description}
        </p>
      </span>
    </span>
  );
};

export default ServiceTypesComponent;
