import { pop } from "@/helpers/constants";
import Image, { StaticImageData } from "next/image";
import Accordion from "../shared/Accordion";

interface Props {
  text: {
    titleFirst: string;
    titleSecond: string;
    items: {
      firstText: string;
      secondText: string;
    }[];
  };
  id: string;
  image: {
    data: StaticImageData;
    alt: string;
  };
  reverse?: boolean;
}

const SectionComponent = ({ text, id, image, reverse }: Props) => {
  const orderImage = reverse
    ? "md:order-2 h-fit w-full rounded-md border border-zinc-200 p-8 sm:h-[456px] sm:w-[456px]"
    : "h-fit w-full rounded-md border border-zinc-200 p-8 sm:h-[456px] sm:w-[456px]";
  const orderText = reverse ? "md:order-1 flex-1" : "flex-1";
  return (
    <div id={id} className="mx-auto max-w-6xl py-24">
      <div className="flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:items-start md:px-8">
        <div className={orderImage}>
          <Image
            src={image.data}
            alt={image.alt}
            className="rounded-md object-cover grayscale"
          />
        </div>
        <div className={orderText}>
          <div className="mb-4 flex w-full flex-wrap justify-center gap-2 max-sm:gap-1 md:justify-start">
            <span
              className={`text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl ${pop.className} antialiased`}
            >
              {text.titleFirst}
            </span>
            <span
              className={`text-2xl font-semibold tracking-tight text-zinc-400 md:text-3xl ${pop.className} antialiased`}
            >
              {text.titleSecond}
            </span>
          </div>
          <Accordion items={text.items} />
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
