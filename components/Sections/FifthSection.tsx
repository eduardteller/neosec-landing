import { pop } from "@/helpers/constants";

const FifthSection = () => {
  return (
    <section className="bg-zinc-950">
      <section className="bg-gradient-to-br from-sky-950/80 to-zinc-950">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-8">
          <div className="flex flex-col items-center justify-center gap-4 px-8 py-16 md:gap-8">
            <div className="flex flex-wrap justify-center gap-2 md:justify-start md:gap-2">
              <span
                className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-white md:text-5xl ${pop.className}`}
              >
                Avasta Ülim
              </span>
              <span
                className={`text-3xl font-semibold tracking-tight text-white/70 md:text-5xl ${pop.className}`}
              >
                Kaitse
              </span>
            </div>
            <p className="prose prose-base px-8 text-center text-white/70 md:prose-lg md:leading-loose">
              {`Kaitse oma kõige väärtuslikumaid varasid NeoSeci eliitluureteenustega. Võta meiega ühendust juba täna, et tagada ületamatu kaitse!`}
            </p>

            <a
              href="mailto:info@neosec.tech"
              className="rounded-md border border-white/40 bg-sky-600 px-16 py-4 text-sm font-bold uppercase text-white/70 duration-300 hover:bg-white hover:text-black md:text-lg"
            >
              KONTAKT
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FifthSection;
