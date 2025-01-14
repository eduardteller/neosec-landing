import { pop } from "@/helpers/constants";
import Link from "next/link";

interface Props {
  text: {
    titleFirst: string;
    titleSecond: string;
    paragraph: string;
    contactButton: string;
  };
  lang?: "est" | "eng";
}

const FifthSection = ({ text, lang = "est" }: Props) => {
  return (
    <section className="bg-zinc-950">
      <section className="bg-gradient-to-br from-sky-950/80 to-zinc-950">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="600"
            className="flex flex-col items-center justify-center gap-4 py-16 md:gap-8"
          >
            <div className="flex flex-wrap justify-center gap-2 text-3xl sm:text-4xl md:justify-start md:gap-2 md:text-5xl">
              <span
                className={`whitespace-nowrap font-semibold tracking-tight text-zinc-100 ${pop.className}`}
              >
                {text.titleFirst}
              </span>
              <span
                className={`font-semibold tracking-tight text-zinc-400 ${pop.className}`}
              >
                {text.titleSecond}
              </span>
            </div>
            <p className="prose prose-base px-8 text-center text-zinc-400 md:prose-lg md:leading-loose">
              {text.paragraph}
            </p>

            <Link
              href={`/contact${lang === "eng" ? "/en" : ""}`}
              className="rounded-md bg-sky-600 px-16 py-4 text-sm font-bold uppercase text-zinc-300 duration-300 hover:bg-zinc-300 hover:text-zinc-950 md:text-lg"
            >
              {text.contactButton}
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FifthSection;
