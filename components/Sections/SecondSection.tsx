import { pop } from "@/helpers/constants";
import Image from "next/image";
import pic2 from "../../public/blurface2.jpg";

const SecondSection = () => {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 lg:px-8">
        <div className="flex w-full flex-col justify-center rounded-md lg:flex-row">
          <div className="flex w-full p-4">
            <Image
              src={pic2}
              className="rounded-md border border-zinc-800 object-cover grayscale"
              alt="neosec"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8 px-8 py-8 md:px-24 lg:items-start lg:py-0">
            <div className="mx-auto text-sm font-bold uppercase tracking-widest text-sky-600 lg:mx-0">
              Kuldstandardi kehtestamine{" "}
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-center lg:flex-col lg:text-left">
              <h1
                className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-4xl ${pop.className}`}
              >
                Tõestatud Asjatundlikkus
              </h1>
              <h2
                className={`text-3xl font-semibold tracking-tight text-white/70 md:text-4xl lg:text-4xl ${pop.className}`}
              >
                Milles Võid Kindel Olla
              </h2>
            </div>
            <p className="prose prose-lg text-left leading-loose text-white/70">
              {`NeoSec on küberturbe esirinnas, arendades väsimatult oma meetodeid, et edestada tekkivaid ohte. Meie pühendumus uuendustegevusele tagab, et teie organisatsioon püsib kaitstuna tänapäevaseima tehnoloogiaga.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
