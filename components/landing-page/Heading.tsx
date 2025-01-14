import { pop, svgBackground } from "@/helpers/constants";
import Link from "next/link";
import LoopingSlider from "../LoopingSlider";
import ClientHeading from "../services-page/ClientHeading";
import Navbar from "../shared/Navbar";

interface Props {
  text: {
    titleFirst: string;
    titleSecond: string;
    subtitle: string;
    paragraph: string;
    contactButton: string;
    button: string;
  };
  lang?: "est" | "eng";
}

const Heading = ({ lang = "est", text }: Props) => {
  return (
    <section className="relative h-screen bg-zinc-950 text-zinc-100">
      <div
        className="breathe absolute inset-0 z-0 bg-cover blur-sm"
        style={{
          backgroundImage: svgBackground,
        }}
      />
      <div className="flex h-screen flex-col">
        <Navbar lang={lang} />
        <div className="container relative z-10 mx-auto flex w-full flex-1 flex-col items-center gap-14 px-4 pt-32 [@media(max-height:768px)]:gap-8 [@media(max-height:768px)]:pt-16">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-col items-center text-center"
          >
            <ClientHeading
              firstTitle={text.titleFirst}
              secondTitle={text.titleSecond}
            />

            <h1
              className={`${pop.className} mt-2 text-xl font-semibold uppercase tracking-tight text-zinc-400 antialiased sm:text-3xl md:mt-4 md:whitespace-nowrap lg:text-5xl xl:text-6xl 2xl:text-7xl`}
            >
              {text.subtitle}
            </h1>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="prose prose-base max-w-none text-center text-base leading-loose tracking-wider text-zinc-400 lg:prose-lg"
          >
            {text.paragraph}
          </p>
          <div data-aos="fade-up" data-aos-delay="600" className="flex gap-4">
            <Link
              href={`/services${lang === "eng" ? "/en" : ""}`}
              className="rounded-md bg-sky-600 px-16 py-4 text-xs font-semibold uppercase text-zinc-300 duration-300 hover:bg-zinc-300 hover:text-black md:text-sm"
            >
              {text.button}
            </Link>
          </div>
          <LoopingSlider />
        </div>
      </div>
    </section>
  );
};

export default Heading;
