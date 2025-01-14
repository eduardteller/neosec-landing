import { pop } from "@/helpers/constants";
import {
  ArrowUpRight,
  Bitcoin,
  EarthLock,
  Fingerprint,
  Shield,
} from "lucide-react";
import Link from "next/link";

interface Props {
  text: {
    topText: string;
    titleFirst: string;
    titleSecond: string;
    paragraph: string;
    servicesButton: string;
    services: {
      title: string;
      link: string;
    }[];
  };
}

const ThirdSection = ({ text }: Props) => {
  const baseCSS =
    "group flex h-64 w-60 flex-col items-center gap-4 rounded-md border-2 border-zinc-700 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-sky-600 ";

  const iconCSS = "text-zinc-400 duration-300 group-hover:text-sky-600";
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-7xl py-24">
        <div className="flex w-full flex-row items-center gap-4 px-8 max-lg:flex-col max-lg:gap-16 lg:justify-evenly">
          <div
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="1000"
            className="max-w-lg space-y-8"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-sky-600 max-lg:text-center sm:text-sm">
              {text.topText}
            </div>
            <div className="space-y-1 text-start sm:space-y-2">
              <h1
                className={`whitespace-nowrap text-xl font-semibold tracking-tight text-zinc-100 sm:text-4xl ${pop.className}`}
              >
                {text.titleFirst}
              </h1>
              <h2
                className={`text-xl font-semibold tracking-tight text-zinc-400 sm:text-4xl ${pop.className}`}
              >
                {text.titleSecond}
              </h2>
            </div>
            <p className="prose prose-base text-zinc-400 sm:prose-lg">
              {text.paragraph}
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="600"
            className="flex flex-row gap-4 text-zinc-100 max-md:gap-6 max-sm:flex-col"
          >
            <div className="flex flex-col gap-4">
              <div className={baseCSS}>
                <EarthLock size={36} className={iconCSS} />
                <p className="text-center text-lg font-medium">
                  {text.services[0].title}
                </p>
                <Link
                  className="flex items-center justify-center text-sm uppercase"
                  href={text.services[0].link}
                >
                  {text.servicesButton} <ArrowUpRight />
                </Link>
              </div>
              <div className={baseCSS}>
                <Shield size={36} className={iconCSS} />
                <p className="text-center text-lg font-medium">
                  {text.services[1].title}
                </p>
                <Link
                  className="flex items-center justify-center text-sm uppercase"
                  href={text.services[1].link}
                >
                  {text.servicesButton} <ArrowUpRight />
                </Link>
              </div>
            </div>
            <div className="flex translate-y-[-8px] flex-col gap-4">
              <div className={baseCSS}>
                <Fingerprint size={36} className={iconCSS} />
                <p className="text-center text-lg font-medium">
                  {text.services[2].title}
                </p>
                <Link
                  className="flex items-center justify-center text-sm uppercase"
                  href={text.services[2].link}
                >
                  {text.servicesButton} <ArrowUpRight />
                </Link>
              </div>
              <div className={baseCSS}>
                <Bitcoin size={36} className={iconCSS} />
                <p className="text-center text-lg font-medium">
                  {text.services[3].title}
                </p>
                <Link
                  className="flex items-center justify-center text-sm uppercase"
                  href={text.services[3].link}
                >
                  {text.servicesButton} <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
