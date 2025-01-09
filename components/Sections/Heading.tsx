import { pop, svgBackground } from "@/helpers/constants";
import Link from "next/link";
import LoopingSlider from "../LoopingSlider";

const Heading = () => {
  return (
    <section className="relative h-screen bg-zinc-950 text-zinc-100">
      <div
        className="breathe absolute inset-0 z-0 bg-cover"
        style={{
          backgroundImage: svgBackground,
        }}
      />
      {/* <div className="absolute inset-0 z-[1] h-full w-full bg-gradient-to-br from-white/5 to-transparent"></div> */}
      <div className="flex h-screen flex-col">
        <div className="container relative z-10 mx-auto flex items-center justify-between px-4 py-6">
          <div>
            <Link
              href={"/"}
              className="text-xl font-bold uppercase tracking-tight text-zinc-400 duration-300 hover:text-zinc-100 md:text-3xl"
            >
              <span>NEO</span>
              <span className="text-zinc-500">SEC</span>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-lg font-medium text-zinc-400 max-sm:hidden">
              <Link
                className="tracking-tight duration-300 hover:text-zinc-100"
                href={"/"}
              >
                ENG
              </Link>
              <span> | </span>
              <Link className="text-zinc-100" href={"/"}>
                EST
              </Link>
            </div>
            <a
              href="mailto:info@neosec.tech"
              className="rounded-md border border-zinc-300 bg-transparent px-8 py-4 text-xs font-bold uppercase text-zinc-300 duration-300 hover:bg-zinc-300 hover:text-zinc-950 md:text-sm"
            >
              KONTAKT
            </a>
          </div>
        </div>
        <div className="container relative z-10 mx-auto flex w-full flex-1 flex-col items-center gap-14 px-4 pt-32 [@media(max-height:768px)]:gap-8 [@media(max-height:768px)]:pt-16">
          <div className="flex flex-col items-center text-center">
            <h1
              className={`${pop.className} inline-block bg-gradient-to-r from-zinc-100 via-sky-400 to-zinc-100 bg-clip-text text-2xl font-semibold uppercase tracking-tight text-transparent antialiased sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl`}
            >
              <span className="block sm:hidden">
                Kindlusta Oma Tulevik: <br /> Alusta Täna
              </span>
              <span className="hidden sm:block">
                Kindlusta Oma Tulevik: Alusta Täna
              </span>
            </h1>

            <h1
              className={`${pop.className} mt-2 text-xl font-semibold uppercase tracking-tight text-zinc-400 antialiased sm:text-3xl md:mt-4 md:whitespace-nowrap lg:text-5xl xl:text-6xl 2xl:text-7xl`}
            >
              Purunematu küberturvalisus.
            </h1>
          </div>
          <p className="prose prose-base max-w-none text-center text-base leading-loose tracking-wider text-zinc-400 lg:prose-lg">
            Kaitseme teie digimaailma seal, kus teised ebaõnnestuvad—pakume
            turvalisust, mis toimib ka kõige keerulisemates tingimustes.{" "}
          </p>
          <div className="flex gap-4">
            <Link
              href="/services"
              className="rounded-md bg-sky-600 px-16 py-4 text-xs font-semibold uppercase text-zinc-300 duration-300 hover:bg-zinc-300 hover:text-black md:text-sm"
            >
              ALUSTA TÄNA
            </Link>
          </div>
          <LoopingSlider />
        </div>
      </div>
    </section>
  );
};

export default Heading;
