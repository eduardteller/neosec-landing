import { pop } from "@/helpers/constants";

const ThirdSection = () => {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-7xl py-24">
        <div className="flex w-full flex-col items-center justify-center gap-12 px-4 md:px-8">
          <div className="space-y-8">
            <div className="space-y-2 text-start">
              <h1
                className={`whitespace-nowrap text-3xl font-semibold tracking-tight text-white sm:text-4xl ${pop.className}`}
              >
                Mitmekesised Tööstusharud
              </h1>
              <h2
                className={`text-3xl font-semibold tracking-tight text-white/70 sm:text-4xl ${pop.className}`}
              >
                Kohandatud Lahendused
              </h2>
            </div>
            <p className="prose prose-base text-white/70">
              {`NeoSec pakub tipptasemel luurelahendusi, mis annavad käegakatsutavaid tulemusi juriidikas, rahanduses, valitsuses, tervishoius, energias, tehnoloogias ja jaekaubanduses. Oleme teie usaldusväärne partner edu saavutamisel ja konkurentsieelise tagamisel. `}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
