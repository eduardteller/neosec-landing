import { pop } from "@/helpers/constants";

const FirstSection = () => {
  return (
    <section className="bg-zinc-950">
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="600"
        className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-24 md:items-center md:px-8"
      >
        <div className="text-center text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
          Võimatust reaalsuseks{" "}
        </div>
        <div className="space-y-1 text-center sm:space-y-2">
          <h2
            className={`text-2xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl ${pop.className}`}
          >
            Täpsus tegudes
          </h2>
          <h2
            className={`whitespace-nowrap text-xl font-semibold tracking-tight text-zinc-400 sm:text-4xl md:text-5xl ${pop.className}`}
          >
            Võimsus globaalses ulatuses
          </h2>
        </div>
        <div className="prose prose-base max-w-4xl text-center leading-loose text-zinc-400 sm:prose-lg max-sm:px-4 sm:py-4">
          <p>
            {`NeoSec on ekspert kõrge panusega uurimistes, digitaalsetes ohuluureteenustes, jalajälgede kustutamises ja vara taastamises. Meie eliitspetsialistid ja tipptasemel tehnoloogia leiavad tõendid, mida teised ei näe.
            Kohandatud strateegiad, globaalne asjatundlikkus ja ulatuslik võrgustik tagavad teile kriitilised teadmised ja edu. Valige NeoSec – võimatu on meie standard!`}
          </p>
        </div>
        {/* <div className="flex flex-row gap-4 py-4">
          <div className="flex basis-1/2 items-center justify-center">
            <span className="group text-start text-9xl font-bold uppercase tracking-tight">
              <h1 className="text-zinc-400 duration-200 group-hover:text-zinc-100">
                NEO
              </h1>
              <h1 className="text-zinc-100/50">SEC</h1>
            </span>
          </div>
          <div className="flex basis-1/2">
            <p className="prose prose-lg flex max-w-4xl flex-col justify-center leading-loose text-zinc-100/80">
              {`NeoSec on ekspert kõrge panusega uurimistes, digitaalsetes ohuluureteenustes, jalajälgede kustutamises ja vara taastamises. Meie eliitspetsialistid ja tipptasemel tehnoloogia leiavad tõendid, mida teised ei näe. Kohandatud strateegiad, globaalne asjatundlikkus ja ulatuslik võrgustik tagavad teile kriitilised teadmised ja edu. Valige NeoSec – võimatu on meie standard!`}
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FirstSection;
