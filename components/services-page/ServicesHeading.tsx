import { pop, servicesSVG2 } from "@/helpers/constants";
import {
  ArrowUpRight,
  Bitcoin,
  EarthLock,
  Fingerprint,
  Shield,
} from "lucide-react";
import Navbar from "../shared/Navbar";

interface Props {
  lang: "est" | "eng";
  heading: {
    topText: string;
    titleFirst: string;
    titleSecond: string;
    subtitle: string;
  };
  services: {
    title: string;
    link: string;
  }[];
  servicesButton: string;
}

const ServicesHeading = ({
  heading,
  services,
  servicesButton,
  lang,
}: Props) => {
  return (
    <section className="relative min-h-screen bg-zinc-950 text-zinc-100">
      <div
        className="breathe absolute inset-0 z-0 bg-contain blur-sm"
        style={{
          backgroundImage: servicesSVG2,
        }}
      />
      <Navbar lang={lang} />
      <div className="relative z-10 flex w-full flex-col items-center gap-14 px-4 py-8">
        <div className="text-center text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
          {heading.topText}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 md:flex-row">
          <span
            className={`text-4xl font-semibold tracking-tight text-zinc-100 md:whitespace-nowrap md:text-5xl ${pop.className}`}
          >
            {heading.titleFirst}
          </span>
          <span
            className={`text-4xl font-semibold tracking-tight text-zinc-400 md:text-5xl ${pop.className}`}
          >
            {heading.titleSecond}
          </span>
        </div>
        <p className="prose prose-lg max-w-3xl px-8 text-center leading-loose text-zinc-400 max-md:prose-base">
          {heading.subtitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:flex-row">
          <div className="group flex h-64 w-60 flex-col items-center gap-4 rounded-md border-2 border-zinc-700 bg-gradient-to-b from-zinc-950 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-sky-600 hover:shadow-2xl">
            <EarthLock
              size={36}
              className="text-zinc-500 duration-300 group-hover:text-sky-600"
            />

            <p className="text-center text-lg font-medium">
              {services[0].title}
            </p>
            <a
              className="flex items-center justify-center text-sm uppercase"
              href="#section1"
            >
              {servicesButton} <ArrowUpRight />
            </a>
          </div>
          <div className="group flex h-64 w-60 flex-col items-center gap-4 rounded-md border-2 border-zinc-700 bg-gradient-to-b from-zinc-950 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-sky-600 hover:shadow-2xl">
            <Shield
              size={36}
              className="text-zinc-500 duration-300 group-hover:text-sky-600"
            />
            <p className="text-center text-lg font-medium">
              {services[1].title}
            </p>
            <a
              className="flex items-center justify-center text-sm uppercase"
              href="#section2"
            >
              {servicesButton} <ArrowUpRight />
            </a>
          </div>
          <div className="group flex h-64 w-60 flex-col items-center gap-4 rounded-md border-2 border-zinc-700 bg-gradient-to-b from-zinc-950 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-sky-600 hover:shadow-2xl">
            <Fingerprint
              size={36}
              className="text-zinc-500 duration-300 group-hover:text-sky-600"
            />

            <p className="text-center text-lg font-medium">
              {services[2].title}
            </p>
            <a
              className="flex items-center justify-center text-sm uppercase"
              href="#section3"
            >
              {servicesButton} <ArrowUpRight />
            </a>
          </div>
          <div className="group flex h-64 w-60 flex-col items-center gap-4 rounded-md border-2 border-zinc-700 bg-gradient-to-b from-zinc-950 to-transparent p-8 antialiased duration-300 hover:translate-y-[-8px] hover:border-sky-600 hover:shadow-2xl">
            <Bitcoin
              size={36}
              className="text-zinc-500 duration-300 group-hover:text-sky-600"
            />

            <p className="text-center text-lg font-medium">
              {services[3].title}
            </p>
            <a
              className="flex items-center justify-center text-sm uppercase"
              href="#section4"
            >
              {servicesButton} <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeading;
