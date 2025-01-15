import { pop } from "@/helpers/constants";

interface Props {
  text: {
    topText: string;
    titleFirst: string;
    titleSecond: string;
    paragraph: string;
  };
}

const FirstSection = ({ text }: Props) => {
  return (
    <section className="relative bg-zinc-950">
      <div className="absolute right-0 top-0 h-2 w-full bg-zinc-950" />
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="600"
        className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-24 md:items-center md:px-8"
      >
        <div className="text-center text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
          {text.topText}
        </div>
        <div className="space-y-1 text-center sm:space-y-2">
          <h2
            className={`text-2xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl ${pop.className}`}
          >
            {text.titleFirst}
          </h2>
          <h2
            className={`text-2xl font-semibold tracking-tight text-zinc-400 sm:text-4xl md:text-5xl ${pop.className}`}
          >
            {text.titleSecond}
          </h2>
        </div>
        <div className="prose prose-base max-w-4xl text-center leading-loose text-zinc-400 sm:prose-lg max-sm:px-4 sm:py-4">
          <p>{text.paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
