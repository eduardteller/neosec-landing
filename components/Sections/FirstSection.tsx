import { pop } from "@/helpers/constants";

const FirstSection = () => {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-24 md:items-center md:px-8">
        <div className="text-sm font-bold uppercase tracking-widest text-sky-600">
          Võimatust reaalsuseks{" "}
        </div>
        <div className="space-y-2 text-center">
          <h2
            className={`text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl ${pop.className}`}
          >
            Täpsus tegudes
          </h2>
          <h2
            className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-white/70 sm:text-4xl md:text-5xl ${pop.className}`}
          >
            Võimsus globaalses ulatuses
          </h2>
        </div>
        <div className="flex flex-row gap-4 py-4">
          <div className="flex basis-1/2 items-center justify-center">
            <span className="group text-start text-9xl font-bold uppercase tracking-tight">
              <h1 className="text-white/70 duration-200 group-hover:text-white">
                NEO
              </h1>
              <h1 className="text-white/50">SEC</h1>
            </span>
          </div>
          <div className="flex basis-1/2">
            <p className="prose prose-lg flex max-w-4xl flex-col justify-center leading-loose text-white/80">
              {`NeoSec on ekspert kõrge panusega uurimistes, digitaalsetes ohuluureteenustes, jalajälgede kustutamises ja vara taastamises. Meie eliitspetsialistid ja tipptasemel tehnoloogia leiavad tõendid, mida teised ei näe. Kohandatud strateegiad, globaalne asjatundlikkus ja ulatuslik võrgustik tagavad teile kriitilised teadmised ja edu. Valige NeoSec – võimatu on meie standard!`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
