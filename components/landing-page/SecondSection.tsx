import { pop } from "@/helpers/constants";
import Image from "next/image";
import pic2 from "../../public/blurface2.jpg";

interface Props {
  text: {
    topText: string;
    titleFirst: string;
    titleSecond: string;
    paragraph: string;
  };
}

const SecondSection = ({ text }: Props) => {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-8">
        <div className="flex w-full flex-col justify-center rounded-md lg:flex-row">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="600"
            className="flex w-full p-4"
          >
            <Image
              src={pic2}
              className="rounded-md border border-zinc-800 object-cover grayscale"
              alt="neosec"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="1000"
            className="flex w-full flex-col justify-center gap-8 px-4 py-8 sm:px-8 md:items-center md:px-24 lg:items-start lg:py-0"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
              {text.topText}
            </div>
            <div className="flex flex-col justify-center gap-2 text-2xl font-semibold tracking-tight sm:text-center sm:text-4xl lg:flex-col lg:text-start">
              <h1
                className={`whitespace-nowrap text-zinc-100 ${pop.className}`}
              >
                {text.titleFirst}
              </h1>
              <h2 className={`text-zinc-400 ${pop.className}`}>
                {text.titleSecond}
              </h2>
            </div>
            <p className="prose prose-base text-left leading-loose text-zinc-400 sm:prose-lg">
              {text.paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
